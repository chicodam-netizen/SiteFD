// Regras de horário comercial do agendamento. Fuso fixo America/Sao_Paulo
// (-03:00) — o Brasil não tem mais horário de verão desde 2019, então um
// offset fixo é suficiente e evita depender de uma biblioteca de datas.
const TZ_OFFSET = "-03:00";
const BUSINESS_HOURS = { start: "09:00", end: "18:00", slotMinutes: 60 };

function pad2(n) {
  return String(n).padStart(2, "0");
}

/** Lista os horários "HH:MM" oferecidos num dia (sem checar disponibilidade). */
function listDaySlots() {
  const [startH] = BUSINESS_HOURS.start.split(":").map(Number);
  const [endH] = BUSINESS_HOURS.end.split(":").map(Number);
  const slots = [];
  for (let h = startH; h < endH; h += BUSINESS_HOURS.slotMinutes / 60) {
    slots.push(`${pad2(h)}:00`);
  }
  return slots;
}

/** true se YYYY-MM-DD cai em dia útil (segunda a sexta), calculado em UTC
 * puro (sem new Date local) para não depender do fuso da máquina. */
function isBusinessDay(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dow = new Date(Date.UTC(y, m - 1, d)).getUTCDay(); // 0=domingo .. 6=sábado
  return dow >= 1 && dow <= 5;
}

/** Converte YYYY-MM-DD + HH:MM (hora local de São Paulo) num instante UTC. */
function slotToUtcDate(dateStr, timeStr) {
  return new Date(`${dateStr}T${timeStr}:00${TZ_OFFSET}`);
}

/** Converte um instante UTC de volta para { dateStr, timeStr } em São Paulo,
 * usando o offset fixo (equivalente a subtrair 3h do UTC). */
function utcDateToLocalParts(utcDate) {
  const local = new Date(utcDate.getTime() - 3 * 60 * 60 * 1000);
  const dateStr = `${local.getUTCFullYear()}-${pad2(local.getUTCMonth() + 1)}-${pad2(local.getUTCDate())}`;
  const timeStr = `${pad2(local.getUTCHours())}:${pad2(local.getUTCMinutes())}`;
  return { dateStr, timeStr };
}

/** Valida que um instante UTC corresponde a um horário de início de slot
 * dentro da grade comercial, em dia útil, e no futuro. */
function isValidSlotInstant(utcDate) {
  if (Number.isNaN(utcDate.getTime())) return false;
  if (utcDate.getTime() <= Date.now()) return false;

  const { dateStr, timeStr } = utcDateToLocalParts(utcDate);
  if (!isBusinessDay(dateStr)) return false;
  return listDaySlots().includes(timeStr);
}

module.exports = {
  BUSINESS_HOURS,
  TZ_OFFSET,
  listDaySlots,
  isBusinessDay,
  slotToUtcDate,
  utcDateToLocalParts,
  isValidSlotInstant,
};
