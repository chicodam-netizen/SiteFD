const nodemailer = require("nodemailer");
const { getPool } = require("../lib/db");
const {
  BUSINESS_HOURS,
  listDaySlots,
  isBusinessDay,
  slotToUtcDate,
  utcDateToLocalParts,
  isValidSlotInstant,
} = require("../lib/agenda-time");

const MAIL_TO = process.env.MAIL_TO || "contato@fdconsultoria.tech";
const LOGO_URL = process.env.EMAIL_LOGO_URL || "https://fdconsultoria.tech/assets/logo-header.png";

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

function formatSlotLabel(utcDate) {
  // Exibição amigável em pt-BR, fuso America/Sao_Paulo.
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(utcDate);
}

async function handleGet(req, res) {
  const date = typeof req.query?.date === "string" ? req.query.date : "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    res.status(400).json({ ok: false, error: "invalid_date" });
    return;
  }

  const allSlots = isBusinessDay(date) ? listDaySlots() : [];

  let taken = new Set();
  if (allSlots.length > 0) {
    const pool = getPool();
    const dayStart = slotToUtcDate(date, "00:00");
    const dayEnd = slotToUtcDate(date, "23:59");
    const { rows } = await pool.query(
      `SELECT starts_at FROM agendamentos
       WHERE status = 'agendado' AND starts_at BETWEEN $1 AND $2`,
      [dayStart, dayEnd]
    );
    taken = new Set(rows.map((r) => utcDateToLocalParts(new Date(r.starts_at)).timeStr));
  }

  res.status(200).json({
    ok: true,
    date,
    timezone: "America/Sao_Paulo",
    businessHours: BUSINESS_HOURS,
    slots: allSlots.map((inicio) => ({ inicio, disponivel: !taken.has(inicio) })),
  });
}

async function handlePost(req, res) {
  let body = req.body;
  if (!body || typeof body !== "object") {
    try {
      body = JSON.parse(req.body || "{}");
    } catch {
      res.status(400).json({ ok: false, error: "invalid_body" });
      return;
    }
  }

  // Honeypot: bots tendem a preencher todos os campos; usuários reais nunca veem este.
  if (body.website) {
    res.status(200).json({ ok: true });
    return;
  }

  const { empresa, nome, email, telefone, inicio, diagTipo } = body;
  if (!empresa || !nome || !email || !telefone || !inicio) {
    res.status(400).json({ ok: false, error: "missing_fields" });
    return;
  }

  const startsAt = new Date(inicio);
  if (!isValidSlotInstant(startsAt)) {
    res.status(400).json({ ok: false, error: "invalid_slot" });
    return;
  }
  const endsAt = new Date(startsAt.getTime() + BUSINESS_HOURS.slotMinutes * 60 * 1000);

  const pool = getPool();
  let row;
  try {
    const { rows } = await pool.query(
      `INSERT INTO agendamentos
         (starts_at, ends_at, empresa, contato_nome, contato_email, contato_telefone, diag_tipo)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, starts_at, ends_at`,
      [startsAt, endsAt, empresa, nome, email, telefone, diagTipo || null]
    );
    row = rows[0];
  } catch (err) {
    if (err.code === "23505") {
      res.status(409).json({ ok: false, error: "slot_taken" });
      return;
    }
    console.error("agenda insert error:", err);
    res.status(500).json({ ok: false, error: "booking_failed" });
    return;
  }

  let emailSent = false;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT) || 587,
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

      const label = formatSlotLabel(startsAt);

      await transporter.sendMail({
        from: `"Site FD Consultoria" <${SMTP_USER}>`,
        to: MAIL_TO,
        replyTo: email,
        subject: `[Site FD] Reunião agendada — ${empresa}`,
        text: [
          `Novo agendamento de reunião pelo site.`,
          "",
          `Empresa: ${empresa}`,
          `Contato: ${nome}`,
          `E-mail: ${email}`,
          `Telefone: ${telefone}`,
          `Diagnóstico: ${diagTipo || "não informado"}`,
          `Horário: ${label}`,
          `Responsável: a definir`,
        ].join("\n"),
      });

      await transporter.sendMail({
        from: `"FD Consultoria" <${SMTP_USER}>`,
        to: email,
        replyTo: MAIL_TO,
        subject: `Reunião confirmada — ${label}`,
        html: `
          <div style="background:#060d1a;padding:32px 16px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
              <tr>
                <td style="background:#0c1a2e;padding:24px 32px;border-radius:12px 12px 0 0;text-align:center;">
                  <img src="${LOGO_URL}" alt="FD Consultoria" height="40" style="height:40px;width:auto;" />
                </td>
              </tr>
              <tr>
                <td style="background:#122040;padding:32px;color:#d1d5db;font-size:15px;line-height:1.7;">
                  <p style="margin:0 0 16px;">Olá, ${escapeHtml(nome.split(" ")[0])}!</p>
                  <p style="margin:0 0 16px;">Sua reunião com a FD Consultoria foi agendada com sucesso:</p>
                  <div style="background:#0e1f38;border-radius:8px;padding:18px 20px;margin:0 0 20px;">
                    <p style="margin:0;color:#00c896;font-size:18px;font-weight:700;">${escapeHtml(label)}</p>
                  </div>
                  <p style="margin:0;">Em breve um de nossos especialistas confirmará os detalhes com você. Se precisar reagendar, basta responder este e-mail.</p>
                </td>
              </tr>
              <tr>
                <td style="background:#080f1c;padding:20px 32px;border-radius:0 0 12px 12px;text-align:center;">
                  <p style="margin:0;color:#6b7280;font-size:11px;">FD Consultoria · Rua Aspásia, 431 · Belo Horizonte - MG</p>
                </td>
              </tr>
            </table>
          </div>`,
        text: `Sua reunião com a FD Consultoria foi agendada para ${label}. Em breve confirmaremos os detalhes.`,
      });

      emailSent = true;
    } catch (err) {
      console.error("agenda email error:", err);
    }
  }

  res.status(200).json({
    ok: true,
    id: row.id,
    inicio: row.starts_at,
    fim: row.ends_at,
    emailSent,
  });
}

module.exports = async (req, res) => {
  try {
    if (req.method === "GET") {
      await handleGet(req, res);
      return;
    }
    if (req.method === "POST") {
      await handlePost(req, res);
      return;
    }
    res.status(405).json({ ok: false, error: "method_not_allowed" });
  } catch (err) {
    console.error("agenda error:", err);
    res.status(500).json({ ok: false, error: "internal_error" });
  }
};
