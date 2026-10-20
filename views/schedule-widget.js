// Widget de agendamento de reunião, compartilhado entre o Diagnóstico
// (assunto fixo: GRC/LGPD/ISO 9001) e a Home (assunto livre, digitado pelo
// cliente). Segue o mesmo padrão de state/markup/wire dos demais views.
import { icon } from "../icons.js";

export function createScheduleState() {
  return {
    showScheduleForm: false,
    scheduleForm: { empresa: "", nome: "", email: "", telefone: "", assunto: "", data: "", horario: "" },
    scheduleErrors: {},
    scheduleLoading: false,
    scheduleSent: false,
    scheduleSendError: false,
    slotsLoading: false,
    availableSlots: [],
    slotsError: false,
  };
}

function minDateStr() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

function slotsMarkup(state) {
  if (!state.scheduleForm.data) {
    return `<p class="diag-question-help">Selecione uma data acima para ver os horários disponíveis.</p>`;
  }
  if (state.slotsLoading) {
    return `<p class="diag-question-help"><span class="spinner"></span> Carregando horários...</p>`;
  }
  if (state.slotsError) {
    return `<p class="error-text">Não foi possível carregar os horários. Tente outra data.</p>`;
  }
  if (state.availableSlots.length === 0) {
    return `<p class="diag-question-help">Não há horários comerciais nessa data (atendemos de segunda a sexta). Escolha outro dia.</p>`;
  }
  return `
    <div class="slot-grid">
      ${state.availableSlots.map((s) => `
        <button type="button" class="slot-btn ${!s.disponivel ? "taken" : ""} ${state.scheduleForm.horario === s.inicio ? "selected" : ""}" data-time="${s.inicio}" ${!s.disponivel ? "disabled" : ""}>${s.inicio}</button>
      `).join("")}
    </div>
  `;
}

/**
 * opts:
 * - formId, dateInputId: ids únicos (duas instâncias nunca coexistem na
 *   mesma página hoje, mas isso evita qualquer colisão futura)
 * - subjectMode: "input" (campo "Assunto" livre) | "fixed" (assunto já
 *   definido pelo contexto, ex. o diagnóstico realizado — não mostra campo)
 * - title, description: textos do cabeçalho do card
 * - successTitle, successText: textos da tela de sucesso
 */
export function scheduleFormMarkup(state, opts) {
  if (state.scheduleSent) {
    return `
      <div class="success-box">
        <div class="success-icon">${icon("calendar-check")}</div>
        <h3>${opts.successTitle || "Reunião agendada!"}</h3>
        <p>${opts.successText || "Confirmamos seu agendamento. Você vai receber um e-mail de confirmação com os detalhes, e nossa equipe entrará em contato em breve."}</p>
      </div>
    `;
  }
  const f = state.scheduleForm;
  const e = state.scheduleErrors;
  return `
    <div class="diag-cta-box">
      <h3>${opts.title || "Agendar Reunião"}</h3>
      <p>${opts.description || "Escolha o melhor dia e horário — vamos confirmar a reunião com um de nossos especialistas."}</p>
      <form id="${opts.formId}">
        <div class="form-field ${e.empresa ? "error" : ""}">
          <label>${icon("building-2")} Nome da Empresa <span class="required">*</span></label>
          <input type="text" name="empresa" placeholder="Nome da sua empresa" value="${f.empresa}" />
          ${e.empresa ? `<p class="error-text">${e.empresa}</p>` : ""}
        </div>
        <div class="form-grid-2">
          <div class="form-field ${e.nome ? "error" : ""}">
            <label>${icon("user")} Nome <span class="required">*</span></label>
            <input type="text" name="nome" placeholder="Seu nome" value="${f.nome}" />
            ${e.nome ? `<p class="error-text">${e.nome}</p>` : ""}
          </div>
          <div class="form-field ${e.email ? "error" : ""}">
            <label>${icon("mail")} E-mail <span class="required">*</span></label>
            <input type="email" name="email" placeholder="seu@email.com" value="${f.email}" />
            ${e.email ? `<p class="error-text">${e.email}</p>` : ""}
          </div>
        </div>
        <div class="form-field ${e.telefone ? "error" : ""}">
          <label>${icon("phone")} Telefone <span class="required">*</span></label>
          <input type="tel" name="telefone" placeholder="(31) 9 9999-9999" value="${f.telefone}" />
          ${e.telefone ? `<p class="error-text">${e.telefone}</p>` : ""}
        </div>
        ${opts.subjectMode === "input" ? `
          <div class="form-field ${e.assunto ? "error" : ""}">
            <label>${icon("message-square")} Assunto <span class="required">*</span></label>
            <input type="text" name="assunto" placeholder="Sobre o que você quer conversar?" value="${f.assunto}" />
            ${e.assunto ? `<p class="error-text">${e.assunto}</p>` : ""}
          </div>
        ` : ""}
        <div class="form-field ${e.data ? "error" : ""}">
          <label>${icon("calendar")} Data <span class="required">*</span></label>
          <input type="text" name="data" id="${opts.dateInputId}" placeholder="Selecione uma data" value="${f.data}" readonly />
          ${e.data ? `<p class="error-text">${e.data}</p>` : ""}
        </div>
        <div class="form-field ${e.horario ? "error" : ""}">
          <label>${icon("clock")} Horário (seg-sex, 9h-18h) <span class="required">*</span></label>
          ${slotsMarkup(state)}
          ${e.horario ? `<p class="error-text">${e.horario}</p>` : ""}
        </div>
        <input type="text" name="website" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0;" aria-hidden="true" />
        ${state.scheduleSendError ? `<p class="error-text" style="margin-bottom:12px;">Não conseguimos agendar agora. Tente novamente em instantes.</p>` : ""}
        <button type="submit" class="btn btn-green btn-block" ${state.scheduleLoading ? "disabled" : ""}>
          ${state.scheduleLoading ? `<span class="spinner"></span> Agendando...` : `${icon("calendar-check")} Confirmar Agendamento`}
        </button>
      </form>
    </div>
  `;
}

/**
 * opts:
 * - formId, dateInputId: mesmos ids usados em scheduleFormMarkup
 * - subjectMode: "input" | "fixed"
 * - getDiagTipo: () => string — assunto enviado ao backend (campo diagTipo
 *   da API, que já aceita qualquer texto livre)
 */
export function wireScheduleForm(container, state, draw, opts) {
  const fields = opts.subjectMode === "input"
    ? ["empresa", "nome", "email", "telefone", "assunto"]
    : ["empresa", "nome", "email", "telefone"];

  // A seleção de data dispara um draw() (para mostrar a grade de horários),
  // que re-renderiza o form inteiro a partir de state.scheduleForm — por
  // isso os outros campos precisam atualizar o state a cada digitação, não
  // só no submit, senão o que já foi digitado some ao escolher a data.
  fields.forEach((field) => {
    const input = container.querySelector(`#${opts.formId} input[name="${field}"]`);
    if (input) {
      input.addEventListener("input", () => {
        state.scheduleForm[field] = input.value;
      });
    }
  });

  const loadSlotsForDate = (data) => {
    state.scheduleForm.data = data;
    state.scheduleForm.horario = "";
    state.slotsError = false;
    state.availableSlots = [];

    if (!data) {
      draw();
      return;
    }

    state.slotsLoading = true;
    draw();

    fetch(`/api/agenda?date=${encodeURIComponent(data)}`)
      .then((res) => {
        if (!res.ok) throw new Error("slots_failed");
        return res.json();
      })
      .then((json) => {
        state.slotsLoading = false;
        state.availableSlots = json.slots || [];
        draw();
      })
      .catch(() => {
        state.slotsLoading = false;
        state.slotsError = true;
        draw();
      });
  };

  const dateInput = container.querySelector(`#${opts.dateInputId}`);
  if (dateInput && window.flatpickr) {
    window.flatpickr(dateInput, {
      dateFormat: "Y-m-d",
      altInput: true,
      altInputClass: "schedule-date-display",
      altFormat: "d/m/Y",
      locale: (window.flatpickr.l10ns && window.flatpickr.l10ns.pt) || "default",
      minDate: minDateStr(),
      disable: [(date) => date.getDay() === 0 || date.getDay() === 6], // sem fins de semana
      disableMobile: true,
      onChange: (_dates, dateStr) => loadSlotsForDate(dateStr),
    });
  }

  container.querySelectorAll(`#${opts.formId} .slot-btn:not(.taken)`).forEach((btn) => {
    btn.addEventListener("click", () => {
      state.scheduleForm.horario = btn.dataset.time;
      draw();
    });
  });

  const form = container.querySelector(`#${opts.formId}`);
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      state.scheduleForm = {
        ...state.scheduleForm,
        empresa: data.get("empresa") || "",
        nome: data.get("nome") || "",
        email: data.get("email") || "",
        telefone: data.get("telefone") || "",
        assunto: data.get("assunto") || state.scheduleForm.assunto,
        data: data.get("data") || state.scheduleForm.data,
      };

      const errs = {};
      if (!state.scheduleForm.empresa.trim()) errs.empresa = "Obrigatório";
      if (!state.scheduleForm.nome.trim()) errs.nome = "Obrigatório";
      if (!state.scheduleForm.email.trim() || !/\S+@\S+\.\S+/.test(state.scheduleForm.email)) errs.email = "E-mail inválido";
      if (!state.scheduleForm.telefone.trim()) errs.telefone = "Obrigatório";
      if (opts.subjectMode === "input" && !state.scheduleForm.assunto.trim()) errs.assunto = "Obrigatório";
      if (!state.scheduleForm.data) errs.data = "Selecione uma data";
      if (!state.scheduleForm.horario) errs.horario = "Selecione um horário";

      state.scheduleErrors = errs;
      state.scheduleSendError = false;

      if (Object.keys(errs).length > 0) {
        draw();
        return;
      }

      state.scheduleLoading = true;
      draw();

      const honeypot = data.get("website") || "";
      const inicio = `${state.scheduleForm.data}T${state.scheduleForm.horario}:00-03:00`;
      const diagTipo = opts.subjectMode === "input" ? state.scheduleForm.assunto : opts.getDiagTipo();

      fetch("/api/agenda", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          empresa: state.scheduleForm.empresa,
          nome: state.scheduleForm.nome,
          email: state.scheduleForm.email,
          telefone: state.scheduleForm.telefone,
          inicio,
          diagTipo,
          website: honeypot,
        }),
      })
        .then(async (res) => {
          const json = await res.json().catch(() => ({}));
          if (!res.ok || !json.ok) throw new Error(json.error || "schedule_failed");
          state.scheduleLoading = false;
          state.scheduleSent = true;
          draw();
        })
        .catch((err) => {
          state.scheduleLoading = false;
          if (err.message === "slot_taken") {
            state.scheduleErrors = { horario: "Esse horário acabou de ser reservado. Escolha outro." };
            state.scheduleForm.horario = "";
            // Recarrega os horários do dia para refletir a disponibilidade atual.
            fetch(`/api/agenda?date=${encodeURIComponent(state.scheduleForm.data)}`)
              .then((res) => res.json())
              .then((json) => {
                state.availableSlots = json.slots || [];
                draw();
              })
              .catch(() => draw());
          } else {
            state.scheduleSendError = true;
            draw();
          }
        });
    });
  }
}
