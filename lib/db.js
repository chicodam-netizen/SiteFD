// Pool pg singleton, reaproveitado entre invocações da função serverless
// (evita abrir uma conexão nova a cada requisição em instâncias "quentes").
const { Pool } = require("pg");

let pool;

function getPool() {
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return pool;
}

module.exports = { getPool };
