import { icon } from "../icons.js";

const STORAGE_KEY = "fd_agenda_admin_pw";

let state = {};

function resetState() {
  state = {
    password: sessionStorage.getItem(STORAGE_KEY) || "",
    authed: false,
    authError: false,
    loading: false,
    agendamentos: [],
    loadError: false,
    savingId: null,
  };
}

function formatDateTime(iso) {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

export function renderAgendaAdmin(container) {
  resetState();

  const draw = () => {
    container.innerHTML = `
      <div class="page-body">
        <div class="page-header">
          <div class="page-header-dots"></div>
          <div class="page-header-inner">
            <span class="eyebrow">ÁREA RESTRITA</span>
            <h1>Agenda de Reuniões</h1>
            <p>Gestão interna dos agendamentos feitos pelos diagnósticos do site.</p>
          </div>
        </div>
        <div class="page-wrap">
          ${!state.authed ? loginMarkup() : listMarkup()}
        </div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    wire();
  };

  const loginMarkup = () => `
    <div class="diag-cta-box" style="max-width:420px;margin:0 auto;">
      <h3>Entrar</h3>
      <p>Informe a senha de administração para ver os agendamentos.</p>
      <form id="admin-login-form">
        <div class="form-field">
          <label>${icon("lock")} Senha</label>
          <input type="password" name="password" placeholder="Senha" value="${state.password}" />
        </div>
        ${state.authError ? `<p class="error-text" style="margin-bottom:12px;">Senha incorreta.</p>` : ""}
        <button type="submit" class="btn btn-green btn-block" ${state.loading ? "disabled" : ""}>
          ${state.loading ? `<span class="spinner"></span> Entrando...` : `${icon("log-in")} Entrar`}
        </button>
      </form>
    </div>
  `;

  const listMarkup = () => {
    if (state.loading) {
      return `<p class="diag-question-help"><span class="spinner"></span> Carregando agendamentos...</p>`;
    }
    if (state.loadError) {
      return `<p class="error-text">Não foi possível carregar os agendamentos.</p>`;
    }
    if (state.agendamentos.length === 0) {
      return `<p class="diag-question-help">Nenhum agendamento encontrado.</p>`;
    }
    return `
      <div class="admin-table-wrap">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Quando</th>
              <th>Empresa</th>
              <th>Contato</th>
              <th>Diagnóstico</th>
              <th>Responsável</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${state.agendamentos.map((a) => `
              <tr class="${a.status === "cancelado" ? "is-cancelled" : ""}" data-id="${a.id}">
                <td>${formatDateTime(a.starts_at)}</td>
                <td>${a.empresa}</td>
                <td>
                  <div>${a.contato_nome}</div>
                  <div class="admin-sub">${a.contato_email} · ${a.contato_telefone}</div>
                </td>
                <td>${a.diag_tipo || "—"}</td>
                <td>
                  <div class="admin-responsavel-row">
                    <input type="text" class="responsavel-input" data-id="${a.id}" value="${a.responsavel || ""}" placeholder="Nome do responsável" />
                    <button type="button" class="btn btn-outline-gray btn-sm save-responsavel-btn" data-id="${a.id}" ${state.savingId === a.id ? "disabled" : ""}>
                      ${state.savingId === a.id ? `<span class="spinner"></span>` : "Salvar"}
                    </button>
                  </div>
                </td>
                <td>${a.status}</td>
                <td>
                  ${a.status === "agendado" ? `<button type="button" class="btn btn-outline-gray btn-sm cancel-btn" data-id="${a.id}">Cancelar</button>` : ""}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  };

  async function loadAgendamentos() {
    state.loading = true;
    state.loadError = false;
    draw();
    try {
      const res = await fetch("/api/agenda-admin", {
        headers: { "x-admin-password": state.password },
      });
      if (res.status === 401) {
        state.authed = false;
        state.authError = true;
        state.loading = false;
        sessionStorage.removeItem(STORAGE_KEY);
        draw();
        return;
      }
      if (!res.ok) throw new Error("load_failed");
      const json = await res.json();
      state.agendamentos = json.agendamentos || [];
      state.loading = false;
      draw();
    } catch {
      state.loading = false;
      state.loadError = true;
      draw();
    }
  }

  const wire = () => {
    const loginForm = container.querySelector("#admin-login-form");
    if (loginForm) {
      // Mantém state.password em dia a cada tecla: se uma resposta assíncrona
      // de uma tentativa anterior redesenhar a tela enquanto o usuário já
      // está redigitando, o redraw não deve apagar o que foi digitado.
      const passwordInput = loginForm.querySelector('input[name="password"]');
      if (passwordInput) {
        passwordInput.addEventListener("input", () => {
          state.password = passwordInput.value;
        });
      }

      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(loginForm);
        state.password = data.get("password") || "";
        state.authError = false;
        state.loading = true;
        draw();

        fetch("/api/agenda-admin", { headers: { "x-admin-password": state.password } })
          .then((res) => {
            if (res.status === 401) {
              state.authed = false;
              state.authError = true;
              state.loading = false;
              draw();
              return null;
            }
            if (!res.ok) throw new Error("load_failed");
            return res.json();
          })
          .then((json) => {
            if (!json) return;
            state.authed = true;
            state.loading = false;
            state.agendamentos = json.agendamentos || [];
            sessionStorage.setItem(STORAGE_KEY, state.password);
            draw();
          })
          .catch(() => {
            state.loading = false;
            state.loadError = true;
            draw();
          });
      });
    }

    container.querySelectorAll(".save-responsavel-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const input = container.querySelector(`.responsavel-input[data-id="${id}"]`);
        state.savingId = id;
        draw();

        fetch("/api/agenda-admin", {
          method: "PATCH",
          headers: { "Content-Type": "application/json", "x-admin-password": state.password },
          body: JSON.stringify({ id, responsavel: input.value }),
        })
          .then(() => loadAgendamentos())
          .catch(() => {
            state.savingId = null;
            draw();
          });
      });
    });

    container.querySelectorAll(".cancel-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!window.confirm("Cancelar este agendamento? O horário voltará a ficar disponível.")) return;
        const id = btn.dataset.id;
        fetch("/api/agenda-admin", {
          method: "PATCH",
          headers: { "Content-Type": "application/json", "x-admin-password": state.password },
          body: JSON.stringify({ id, status: "cancelado" }),
        }).then(() => loadAgendamentos());
      });
    });
  };

  if (state.password) {
    state.authed = true;
    loadAgendamentos();
  } else {
    draw();
  }
}
