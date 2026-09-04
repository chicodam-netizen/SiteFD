const nodemailer = require("nodemailer");

const MAIL_TO = process.env.MAIL_TO || "contato@fdconsultoria.tech";
const DRAFT_TO = process.env.DRAFT_TO || "francisco@fdconsultoria.tech";
const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";

const AI_SYSTEM_PROMPT = `Você é a assistente virtual da FD Consultoria, uma empresa brasileira especializada em Governança de Dados, adequação à LGPD, Arquitetura Medallion/Lakehouse, Cloud Computing, Business Intelligence, Infraestrutura de Redes e Segurança da Informação.

Sua tarefa é ler a mensagem de um lead recebida pelo formulário de contato do site e redigir um RASCUNHO de e-mail de resposta para esse lead, que será revisado por um humano da FD Consultoria antes de ser enviado.

Diretrizes:
- Tom cordial, profissional e consultivo, em português do Brasil.
- Cumprimente a pessoa pelo primeiro nome.
- Demonstre que você entendeu a dor/dúvida específica relatada na mensagem (não seja genérico).
- Relacione a dúvida a como os serviços da FD Consultoria podem ajudar, sem exagerar em jargão técnico.
- Convide para agendar uma conversa/consultoria.
- Não invente preços, prazos ou garantias específicas.
- Assine como "Equipe FD Consultoria".
- Responda APENAS com o corpo do e-mail em texto simples (sem assunto, sem markdown, sem comentários extras).`;

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

function buildDraftMessage(body, draftText) {
  const { name, email, phone, company, city, uf, service, message } = body;
  return {
    subject: `[Rascunho IA] Resposta para ${name}`,
    text: [
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
    ].join("\n"),
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
