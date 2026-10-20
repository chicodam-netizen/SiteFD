const { getPool } = require("../lib/db");

function checkAuth(req, res) {
  const expected = process.env.AGENDA_ADMIN_PASSWORD;
  if (!expected) {
    res.status(500).json({ ok: false, error: "admin_not_configured" });
    return false;
  }
  const provided = req.headers["x-admin-password"];
  if (provided !== expected) {
    res.status(401).json({ ok: false, error: "unauthorized" });
    return false;
  }
  return true;
}

async function handleGet(req, res) {
  const pool = getPool();
  const { rows } = await pool.query(
    `SELECT id, starts_at, ends_at, empresa, contato_nome, contato_email,
            contato_telefone, responsavel, diag_tipo, status, created_at
     FROM agendamentos
     ORDER BY starts_at DESC
     LIMIT 200`
  );
  res.status(200).json({ ok: true, agendamentos: rows });
}

async function handlePatch(req, res) {
  let body = req.body;
  if (!body || typeof body !== "object") {
    try {
      body = JSON.parse(req.body || "{}");
    } catch {
      res.status(400).json({ ok: false, error: "invalid_body" });
      return;
    }
  }

  const { id } = body;
  if (!id) {
    res.status(400).json({ ok: false, error: "missing_id" });
    return;
  }

  const pool = getPool();

  if (typeof body.responsavel === "string") {
    await pool.query(
      `UPDATE agendamentos SET responsavel = $1, updated_at = now() WHERE id = $2`,
      [body.responsavel.trim() || null, id]
    );
  }

  if (body.status === "cancelado") {
    await pool.query(
      `UPDATE agendamentos SET status = 'cancelado', updated_at = now() WHERE id = $1`,
      [id]
    );
  }

  res.status(200).json({ ok: true });
}

module.exports = async (req, res) => {
  try {
    if (!checkAuth(req, res)) return;

    if (req.method === "GET") {
      await handleGet(req, res);
      return;
    }
    if (req.method === "PATCH") {
      await handlePatch(req, res);
      return;
    }
    res.status(405).json({ ok: false, error: "method_not_allowed" });
  } catch (err) {
    console.error("agenda-admin error:", err);
    res.status(500).json({ ok: false, error: "internal_error" });
  }
};
