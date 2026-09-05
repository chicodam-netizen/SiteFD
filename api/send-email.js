const nodemailer = require("nodemailer");

const MAIL_TO = process.env.MAIL_TO || "contato@fdconsultoria.tech";
const DRAFT_TO = process.env.DRAFT_TO || "francisco@fdconsultoria.tech";
const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";
const LOGO_URL = process.env.EMAIL_LOGO_URL || "https://fdconsultoria.tech/assets/logo-header.png";

const AI_SYSTEM_PROMPT = `Você é a assistente virtual da FD Consultoria, uma empresa brasileira especializada em Governança de Dados, adequação à LGPD, Arquitetura Medallion/Lakehouse, Cloud Computing, Desenvolvimento de Software potencializado por IA, Business Intelligence e Segurança da Informação.

Sua tarefa é ler a mensagem de um lead recebida pelo formulário de contato do site e redigir um RASCUNHO de e-mail de resposta para esse lead, que será revisado por um humano da FD Consultoria antes de ser enviado.

Diretrizes:
- Tom cordial, profissional e consultivo, em português do Brasil.
- Cumprimente a pessoa pelo primeiro nome.
- Demonstre que você entendeu a dor/dúvida específica relatada na mensagem (não seja genérico).
- Explique com um pouco mais de profundidade o tema levantado pela pessoa (o que é, por que costuma ser um desafio) antes de conectar com a FD Consultoria.
- Detalhe de forma clara e específica como a FD Consultoria pode ajudar com esse problema, indicando a abordagem/serviço relevante, sem exagerar em jargão técnico.
- Pode ser um pouco mais longo e explicativo do que uma resposta padrão, desde que continue direto ao ponto e sem enrolação.
- Convide para agendar uma conversa/consultoria.
- Não invente preços, prazos ou garantias específicas.
- Assine como "Equipe FD Consultoria".
- Responda APENAS com o corpo do e-mail em texto simples, sem assunto, sem markdown e sem comentários extras. Separe os parágrafos com uma linha em branco entre eles.`;

function buildAiUserPrompt(body) {
  const { name, company, city, uf, service, message } = body;
  return [
    `Nome do lead: ${name}`,
    `Empresa: ${company || "não informado"}`,
    `Cidade/UF: ${city || "-"}${uf ? `/${uf}` : ""}`,
    `Serviço de interesse selecionado no formulário: ${service || "não selecionado"}`,
    "",
    "Mensagem enviada pelo lead:",
    message,
  ].join("\n");
}

async function generateAiDraft(body) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: ANTHROPIC_MODEL,
        max_tokens: 1400,
        system: AI_SYSTEM_PROMPT,
        messages: [{ role: "user", content: buildAiUserPrompt(body) }],
      }),
    });

    if (!response.ok) {
      console.error("Anthropic API error:", response.status, await response.text());
      return null;
    }

    const data = await response.json();
    const text = (data.content || [])
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n")
      .trim();

    return text || null;
  } catch (err) {
    console.error("Anthropic API request failed:", err);
    return null;
  }
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

function textToHtmlParagraphs(text) {
  return text
    .split(/\n{2,}/)
    .map((p) => `<p style="margin:0 0 16px;color:#d1d5db;font-size:15px;line-height:1.7;">${escapeHtml(p).replace(/\n/g, "<br/>")}</p>`)
    .join("");
}

function buildDraftMessage(body, draftText) {
  const { name, email, phone, company, city, uf, service, message } = body;

  const text = [
    "--- RASCUNHO GERADO POR IA (revise e envie para o lead) ---",
    "",
    draftText,
    "",
    "--- FIM DO RASCUNHO ---",
    "",
    "Dados do formulário:",
    `Nome: ${name}`,
    `E-mail: ${email}`,
    `Telefone: ${phone || "-"}`,
    `Empresa: ${company || "-"}`,
    `Cidade/UF: ${city} - ${uf}`,
    `Serviço de interesse: ${service || "-"}`,
    "",
    "Mensagem original:",
    message,
  ].join("\n");

  const formRow = (label, value) => `
    <tr>
      <td style="padding:4px 12px 4px 0;color:#6b7280;font-size:12px;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:4px 0;color:#9ca3af;font-size:12px;">${escapeHtml(value)}</td>
    </tr>`;

  const html = `
    <div style="background:#060d1a;padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
        <tr>
          <td style="background:#0c1a2e;padding:24px 32px;border-radius:12px 12px 0 0;text-align:center;">
            <img src="${LOGO_URL}" alt="FD Consultoria" height="40" style="height:40px;width:auto;" />
            <p style="margin:12px 0 0;color:#4a9eff;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Rascunho de resposta gerado por IA · revise antes de enviar</p>
          </td>
        </tr>
        <tr>
          <td style="background:#122040;padding:32px;">
            <p style="margin:0 0 20px;color:#00c896;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Rascunho para ${escapeHtml(name)}</p>
            ${textToHtmlParagraphs(draftText)}
          </td>
        </tr>
        <tr>
          <td style="background:#0e1f38;padding:24px 32px;">
            <p style="margin:0 0 12px;color:#9ca3af;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Dados do formulário (uso interno)</p>
            <table role="presentation" cellpadding="0" cellspacing="0">
              ${formRow("Nome", name)}
              ${formRow("E-mail", email)}
              ${formRow("Telefone", phone || "-")}
              ${formRow("Empresa", company || "-")}
              ${formRow("Cidade/UF", `${city} - ${uf}`)}
              ${formRow("Serviço", service || "-")}
            </table>
            <p style="margin:16px 0 0;color:#9ca3af;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Mensagem original</p>
            <p style="margin:8px 0 0;color:#9ca3af;font-size:13px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</p>
          </td>
        </tr>
        <tr>
          <td style="background:#080f1c;padding:20px 32px;border-radius:0 0 12px 12px;text-align:center;">
            <p style="margin:0;color:#6b7280;font-size:11px;">FD Consultoria · Rua Aspásia, 431 · Belo Horizonte - MG</p>
          </td>
        </tr>
      </table>
    </div>`;

  return {
    subject: `[Rascunho IA] Resposta para ${name}`,
    text,
    html,
    replyTo: email,
  };
}

function buildMessage(body) {
  const { type } = body;

  if (type === "contact") {
    const { name, email, phone, company, city, uf, service, message } = body;
    if (!name || !email || !city || !uf || !message) return null;
    return {
      subject: `[Site FD] Novo contato de ${name}`,
      text: [
        `Nome: ${name}`,
        `E-mail: ${email}`,
        `Telefone: ${phone || "-"}`,
        `Empresa: ${company || "-"}`,
        `Cidade/UF: ${city} - ${uf}`,
        `Serviço de interesse: ${service || "-"}`,
        "",
        "Mensagem:",
        message,
      ].join("\n"),
      replyTo: email,
    };
  }

  if (type === "knowledge") {
    const { name, email, city, uf } = body;
    if (!name || !email || !city || !uf) return null;
    return {
      subject: `[Site FD] Novo cadastro na Base de Conhecimento`,
      text: [
        `Nome: ${name}`,
        `E-mail: ${email}`,
        `Cidade/UF: ${city} - ${uf}`,
      ].join("\n"),
      replyTo: email,
    };
  }

  if (type === "arthur") {
    const { name, company, services, message } = body;
    if (!name || !message) return null;
    return {
      subject: `[Site FD] Novo pedido de orçamento (Marketing/Arthur) de ${name}`,
      text: [
        `Nome: ${name}`,
        `Empresa: ${company || "-"}`,
        `Serviços selecionados: ${services || "-"}`,
        "",
        "Mensagem:",
        message,
      ].join("\n"),
    };
  }

  return null;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "method_not_allowed" });
    return;
  }

  let body = req.body;
  if (!body || typeof body !== "object") {
    try {
      body = JSON.parse(req.body || "{}");
    } catch {
      res.status(400).json({ ok: false, error: "invalid_body" });
      return;
    }
  }

  // Honeypot: bots tend to fill every field, real users never see/fill this one.
  if (body.website) {
    res.status(200).json({ ok: true });
    return;
  }

  const msg = buildMessage(body);
  if (!msg) {
    res.status(400).json({ ok: false, error: "missing_fields" });
    return;
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    res.status(500).json({ ok: false, error: "smtp_not_configured" });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Site FD Consultoria" <${SMTP_USER}>`,
      to: MAIL_TO,
      replyTo: msg.replyTo,
      subject: msg.subject,
      text: msg.text,
    });

    // Best-effort: an AI-drafted reply for human review, on top of the notification above.
    // A failure here must never block the notification the team already got.
    if (body.type === "contact") {
      try {
        const draftText = await generateAiDraft(body);
        if (draftText) {
          const draftMsg = buildDraftMessage(body, draftText);
          await transporter.sendMail({
            from: `"Site FD Consultoria" <${SMTP_USER}>`,
            to: DRAFT_TO,
            replyTo: draftMsg.replyTo,
            subject: draftMsg.subject,
            text: draftMsg.text,
            html: draftMsg.html,
          });
        }
      } catch (err) {
        console.error("ai draft email error:", err);
      }
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("send-email error:", err);
    res.status(502).json({ ok: false, error: "send_failed" });
  }
};
