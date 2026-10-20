// Aplica os arquivos SQL de db/ em ordem. Só roda contra localhost — nunca
// contra um banco de produção, mesmo que alguém aponte DATABASE_URL errado.
const fs = require("fs");
const path = require("path");
const { Client } = require("pg");

const databaseUrl = process.env.DATABASE_URL || "";

if (!/localhost|127\.0\.0\.1/.test(databaseUrl)) {
  console.error("ABORTADO: DATABASE_URL não aponta para localhost. A migração só roda contra o banco de teste local.");
  process.exit(1);
}

async function main() {
  const client = new Client({ connectionString: databaseUrl });
  await client.connect();

  const dir = path.join(__dirname, "..", "db");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".sql")).sort();

  for (const file of files) {
    console.log(`Aplicando ${file}...`);
    const sql = fs.readFileSync(path.join(dir, file), "utf8");
    await client.query(sql);
  }

  console.log("Migração concluída.");
  await client.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
