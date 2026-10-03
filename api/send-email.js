const nodemailer = require("nodemailer");

const MAIL_TO = process.env.MAIL_TO || "contato@fdconsultoria.tech";
const DRAFT_TO = process.env.DRAFT_TO || "francisco@fdconsultoria.tech";
const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";
const LOGO_URL = process.env.EMAIL_LOGO_URL || "https://fdconsultoria.tech/assets/logo-header.png";

const AI_SYSTEM_PROMPT = `Você é a assistente virtual da FD Consultoria, uma empresa brasileira especializada em Governança de Dados, adequação à LGPD, Arquitetura Medallion/Lakehouse, Cloud Computing, Desenvolvimento de Software potencializado por IA, Business Intelligence e Segurança da Informação.

Sua tarefa é ler a mensagem de um lead recebida pelo formulário de contato do site e redigir a resposta que será enviada AUTOMATICAMENTE e DIRETAMENTE a esse lead por e-mail, sem revisão humana antes do envio. Por isso, seja especialmente cauteloso: erros de tom, factuais ou promessas indevidas chegam direto ao cliente.

Diretrizes:
- Tom cordial, profissional e consultivo, em português do Brasil.
- Cumprimente a pessoa pelo primeiro nome.
- Demonstre que você entendeu a dor/dúvida específica relatada na mensagem (não seja genérico).
- Relacione a dúvida a como os serviços da FD Consultoria podem ajudar, sem exagerar em jargão técnico.
- Seja objetivo: um e-mail curto e direto, sem parágrafos redundantes.
- Convide para agendar uma conversa/consultoria.
- Nunca invente preços, prazos, garantias ou fatos que não estejam na mensagem do lead.
- Se a mensagem for ambígua, incompleta ou fora do escopo dos serviços da FD, não tente adivinhar: responda de forma cordial e genérica, pedindo mais detalhes ou oferecendo agendar uma conversa para entender melhor a necessidade.
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
        max_tokens: 800,
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

function buildClientReplyMessage(body, draftText) {
  const html = `
    <div style="background:#060d1a;padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
        <tr>
          <td style="background:#0c1a2e;padding:24px 32px;border-radius:12px 12px 0 0;text-align:center;">
            <img src="${LOGO_URL}" alt="FD Consultoria" height="40" style="height:40px;width:auto;" />
          </td>
        </tr>
        <tr>
          <td style="background:#122040;padding:32px;">
            ${textToHtmlParagraphs(draftText)}
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
    subject: `Re: Sua mensagem para a FD Consultoria`,
    text: draftText,
    html,
    to: body.email,
    replyTo: MAIL_TO,
  };
}

function buildGrcRequesterMessage(body) {
  const { nome, empresa, email, diagnostico } = body;
  const primeiroNome = (nome || "").split(" ")[0];
  const d = diagnostico || {};
  const integracao = d.integracao || {};
  const riscos = Array.isArray(d.riscosIdentificados) ? d.riscosIdentificados : [];

  const introText = [
    `Olá, ${primeiroNome}, tudo bem?`,
    `Obrigado por realizar o diagnóstico GRC (Governança, Riscos e Compliance) da FD Consultoria para a ${empresa}. Preparamos abaixo um resumo com os principais pontos da sua avaliação.`,
  ].join("\n\n");

  const convite = [
    `Esses resultados merecem uma conversa mais aprofundada com nossos especialistas, para entendermos o cenário completo da ${empresa} e definirmos juntos os próximos passos para elevar a maturidade do seu programa de GRC.`,
    `Vamos agendar uma conversa sem compromisso? É só responder este e-mail com o melhor dia e horário para você — ficaremos muito felizes em conversar e ajudar a ${empresa} a evoluir nessa jornada.`,
  ].join("\n\n");

  const integracaoRows = Object.entries(integracao)
    .map(([par, nivel]) => `
      <tr>
        <td style="padding:6px 12px 6px 0;color:#9ca3af;font-size:13px;">${escapeHtml(par)}</td>
        <td style="padding:6px 0;color:#e5e7eb;font-size:13px;font-weight:600;">${escapeHtml(nivel)}</td>
      </tr>`)
    .join("");

  const riscosHtml = riscos.length
    ? `<ul style="margin:0;padding-left:20px;color:#d1d5db;font-size:14px;line-height:1.7;">${riscos.map((r) => `<li style="margin-bottom:6px;">${escapeHtml(r)}</li>`).join("")}</ul>`
    : `<p style="margin:0;color:#d1d5db;font-size:14px;line-height:1.7;">Nenhum risco crítico identificado. A organização demonstra maturidade no programa GRC.</p>`;

  const riscosText = riscos.length
    ? riscos.map((r) => `- ${r}`).join("\n")
    : "Nenhum risco crítico identificado. A organização demonstra maturidade no programa GRC.";

  const text = [
    introText,
    "",
    `NÍVEL DE MATURIDADE GRC: ${d.pontuacaoGeral}% — ${d.nivel}`,
    d.nivelDescricao || "",
    "",
    "ANÁLISE DE INTEGRAÇÃO ENTRE PILARES",
    Object.entries(integracao).map(([par, nivel]) => `- ${par}: ${nivel}`).join("\n"),
    "",
    "PRINCIPAIS RISCOS IDENTIFICADOS",
    riscosText,
    "",
    convite,
    "",
    "Atenciosamente,",
    "Equipe FD Consultoria",
  ].filter((line) => line !== "").join("\n");

  const html = `
    <div style="background:#060d1a;padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
        <tr>
          <td style="background:#0c1a2e;padding:24px 32px;border-radius:12px 12px 0 0;text-align:center;">
            <img src="${LOGO_URL}" alt="FD Consultoria" height="40" style="height:40px;width:auto;" />
          </td>
        </tr>
        <tr>
          <td style="background:#122040;padding:32px;">
            ${textToHtmlParagraphs(introText)}

            <div style="background:#0e1f38;border-radius:8px;padding:18px 20px;margin:4px 0 20px;">
              <p style="margin:0 0 4px;color:#9ca3af;font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;">Nível de Maturidade GRC</p>
              <p style="margin:0 0 6px;color:#00c896;font-size:22px;font-weight:800;">${escapeHtml(String(d.pontuacaoGeral ?? ""))}% — ${escapeHtml(d.nivel || "")}</p>
              <p style="margin:0;color:#d1d5db;font-size:13px;line-height:1.6;">${escapeHtml(d.nivelDescricao || "")}</p>
            </div>

            <p style="margin:0 0 10px;color:#ffffff;font-size:15px;font-weight:700;">Análise de Integração entre Pilares</p>
            <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
              ${integracaoRows}
            </table>

            <p style="margin:0 0 10px;color:#ffffff;font-size:15px;font-weight:700;">Principais Riscos Identificados</p>
            <div style="margin:0 0 24px;">
              ${riscosHtml}
            </div>

            <div style="background:rgba(0,200,150,0.1);border:1px solid rgba(0,200,150,0.35);border-radius:8px;padding:18px 20px;">
              ${textToHtmlParagraphs(convite)}
            </div>

            <p style="margin:20px 0 0;color:#d1d5db;font-size:15px;line-height:1.7;">Atenciosamente,<br/>Equipe FD Consultoria</p>
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
    subject: `Seu Diagnóstico GRC — Vamos conversar?`,
    text,
    html,
    to: email,
    replyTo: MAIL_TO,
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

  if (type === "grc-lead") {
    const { empresa, nome, email, cargo, diagnostico } = body;
    if (!empresa || !nome || !email || !cargo) return null;
    return {
      subject: `[Site FD] Interesse em Implementação de GRC — ${empresa}`,
      text: [
        "Realizei o diagnóstico GRC no site e desejo maiores informações sobre a implementação da GRC em minha empresa.",
        "",
        `Empresa: ${empresa}`,
        `Nome: ${nome}`,
        `E-mail: ${email}`,
        `Cargo: ${cargo}`,
        diagnostico ? `Resultado do diagnóstico: ${diagnostico.pontuacaoGeral}% — ${diagnostico.nivel}` : "",
      ].filter(Boolean).join("\n"),
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

    // Best-effort: an AI-generated reply sent straight to the lead, bcc'd to the
    // team for quality monitoring. A failure here must never block the internal
    // notification above — the team still has that to follow up manually.
    if (body.type === "contact") {
      try {
        const draftText = await generateAiDraft(body);
        if (draftText) {
          const replyMsg = buildClientReplyMessage(body, draftText);
          const info = await transporter.sendMail({
            from: `"FD Consultoria" <${SMTP_USER}>`,
            to: replyMsg.to,
            bcc: DRAFT_TO,
            replyTo: replyMsg.replyTo,
            subject: replyMsg.subject,
            text: replyMsg.text,
            html: replyMsg.html,
          });
          // sendMail resolves (no throw) even when the destination SMTP server
          // accepts the message for one recipient and rejects it for another
          // (e.g. a receiving server silently dropping a low-reputation sender)
          // — log that explicitly so it's visible in Vercel logs.
          if (info.rejected && info.rejected.length > 0) {
            console.error("ai reply email rejected for:", info.rejected, info.response);
          }
        }
      } catch (err) {
        console.error("ai reply email error:", err);
      }
    }

    // Best-effort: a summary of the GRC diagnostic (maturity level, pillar
    // integration, top risks) sent straight to the person who requested it,
    // inviting them to a conversation. A failure here must never block the
    // internal notification above — the team still has that to follow up.
    if (body.type === "grc-lead") {
      try {
        const requesterMsg = buildGrcRequesterMessage(body);
        const info = await transporter.sendMail({
          from: `"FD Consultoria" <${SMTP_USER}>`,
          to: requesterMsg.to,
          replyTo: requesterMsg.replyTo,
          subject: requesterMsg.subject,
          text: requesterMsg.text,
          html: requesterMsg.html,
        });
        if (info.rejected && info.rejected.length > 0) {
          console.error("grc requester email rejected for:", info.rejected, info.response);
        }
      } catch (err) {
        console.error("grc requester email error:", err);
      }
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("send-email error:", err);
    res.status(502).json({ ok: false, error: "send_failed" });
  }
};
