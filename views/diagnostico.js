import { icon } from "../icons.js";
import { grcPillars, grcQuestionIds, gerarDiagnosticoGrc } from "../grc-data.js";
import { lgpdPillars, lgpdQuestionIds, gerarDiagnosticoLgpd } from "../lgpd-data.js";

const DIAGNOSTICOS = {
  grc: {
    key: "grc",
    hubIcon: "scale",
    hubTitle: "GRC — Governança, Riscos e Compliance",
    hubDesc: "15 perguntas baseadas nas normas ISO 9001, ISO 31000 e ISO 37301. Descubra o nível de maturidade GRC da sua empresa em poucos minutos.",
    introBadge: "GRC",
    introText: [
      `<strong>GRC</strong> (Governança, Riscos e Compliance) é um modelo integrado de gestão. Este diagnóstico avalia os três pilares com base nas normas <strong>ISO 9001</strong> (Governança), <strong>ISO 31000</strong> (Riscos) e <strong>ISO 37301</strong> (Compliance).`,
    ],
    pillars: grcPillars,
    questionIds: grcQuestionIds,
    gerarDiagnostico: gerarDiagnosticoGrc,
    diagTipo: "GRC",
    diagNomeCompleto: "Governança, Riscos e Compliance",
  },
  lgpd: {
    key: "lgpd",
    hubIcon: "lock",
    hubTitle: "LGPD — Lei Geral de Proteção de Dados",
    hubDesc: "17 perguntas sobre governança, operações, DPO e gestão de riscos. Descubra o nível de maturidade da sua empresa na adequação à LGPD.",
    introBadge: "LGPD",
    introText: [
      `A <strong>LGPD</strong> (Lei 13.709/2018) regula o tratamento de dados pessoais no Brasil. Este diagnóstico avalia quatro pilares: <strong>Governança em Privacidade</strong>, <strong>Operações e Processos</strong>, <strong>DPO (Encarregado)</strong> e <strong>Gestão de Riscos</strong>.`,
    ],
    pillars: lgpdPillars,
    questionIds: lgpdQuestionIds,
    gerarDiagnostico: gerarDiagnosticoLgpd,
    diagTipo: "LGPD",
    diagNomeCompleto: "Lei Geral de Proteção de Dados",
  },
};

function defaultRespostas(questionIds) {
  return Object.fromEntries(questionIds.map((id) => [id, "Não"]));
}

let state = {};

function resetState() {
  state = {
    view: "hub", // hub | intro | quiz | results
    diagKey: null,
    respostas: {},
    diagnostico: null,
    showLeadForm: false,
    leadForm: { empresa: "", nome: "", email: "", cargo: "" },
    leadErrors: {},
    leadLoading: false,
    leadSent: false,
    leadSendError: false,
  };
}

export function renderDiagnostico(container) {
  resetState();

  const draw = () => {
    container.innerHTML = `
      <div class="page-body">
        <div class="page-header">
          <div class="page-header-dots"></div>
          <div class="page-header-inner">
            <span class="eyebrow">DIAGNÓSTICO GRATUITO</span>
            <h1>Faça o Diagnóstico Gratuito da sua Empresa</h1>
            <p>Responda a um questionário rápido e descubra, na hora, o nível de maturidade da sua empresa</p>
          </div>
        </div>
        <div class="page-wrap">
          ${state.view === "hub" ? hubMarkup() : ""}
          ${state.view === "intro" ? introMarkup() : ""}
          ${state.view === "quiz" ? quizMarkup() : ""}
          ${state.view === "results" ? resultsMarkup() : ""}
        </div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    wire();
  };

  const hubMarkup = () => `
    <div class="diag-grid">
      ${Object.values(DIAGNOSTICOS).map((cfg) => `
        <div class="diag-card" data-diag="${cfg.key}">
          <div class="icon-badge">${icon(cfg.hubIcon)}</div>
          <h3>${cfg.hubTitle}</h3>
          <p>${cfg.hubDesc}</p>
          <span class="diag-cta">Iniciar diagnóstico ${icon("arrow-right")}</span>
        </div>
      `).join("")}
      <div class="diag-card disabled">
        <div class="icon-badge">${icon("lock")}</div>
        <h3>Maturidade em Cloud</h3>
        <p>Diagnóstico de maturidade para migração e operação em nuvem.</p>
        <span class="diag-cta muted">Em breve</span>
      </div>
    </div>
  `;

  const introMarkup = () => {
    const cfg = DIAGNOSTICOS[state.diagKey];
    return `
      <div class="diag-intro">
        <div class="icon-badge lg">${icon(cfg.hubIcon)}</div>
        <h2>Diagnóstico ${cfg.diagTipo}</h2>
        ${cfg.introText.map((p) => `<p>${p}</p>`).join("")}
        <p>São ${cfg.questionIds.length} perguntas, divididas em ${cfg.pillars.length} blocos. Para cada uma, responda com base na realidade atual da sua empresa: <strong>Não</strong>, <strong>Parcialmente</strong> ou <strong>Sim</strong>.</p>
        <div class="diag-intro-actions">
          <button type="button" class="btn btn-green" id="diag-start">Iniciar Diagnóstico ${icon("arrow-right")}</button>
          <button type="button" class="btn btn-outline-gray" id="diag-back-hub">Voltar</button>
        </div>
      </div>
    `;
  };

  const quizMarkup = () => {
    const cfg = DIAGNOSTICOS[state.diagKey];
    return `
      <form id="diag-quiz-form">
        ${cfg.pillars.map((pilar, pIndex) => `
          <div class="diag-pillar-block">
            <div class="diag-pillar-head">
              <div class="icon-badge">${icon(pilar.icon)}</div>
              <div>
                <h3>${pilar.title} <span class="diag-norm">${pilar.norm}</span></h3>
                <p>${pilar.intro}</p>
              </div>
            </div>
            ${pilar.questions.map((q, i) => `
              <div class="diag-question">
                <p class="diag-question-label">${pIndex + 1}.${i + 1} ${q.label}</p>
                <p class="diag-question-help">${q.help}</p>
                <div class="diag-radio-row">
                  ${["Não", "Parcialmente", "Sim"].map((opt) => `
                    <label class="diag-radio ${state.respostas[q.id] === opt ? "checked" : ""}">
                      <input type="radio" name="${q.id}" value="${opt}" ${state.respostas[q.id] === opt ? "checked" : ""} />
                      ${opt}
                    </label>
                  `).join("")}
                </div>
                <p class="diag-question-clause">${q.clause}</p>
              </div>
            `).join("")}
          </div>
        `).join("")}
        <div class="diag-intro-actions">
          <button type="submit" class="btn btn-green btn-block">${icon("search")} Gerar Diagnóstico ${cfg.diagTipo}</button>
        </div>
      </form>
    `;
  };

  const resultsMarkup = () => {
    const cfg = DIAGNOSTICOS[state.diagKey];
    const d = state.diagnostico;

    return `
      <div class="diag-results">
        <div class="diag-score-banner" style="--maturity-color:${d.maturidade.cor}">
          <div class="diag-score-value">${d.pontuacaoGeral.toFixed(1)}%</div>
          <div>
            <p class="diag-score-label">Nível de Maturidade ${cfg.diagTipo}</p>
            <h2 style="color:${d.maturidade.cor}">${d.maturidade.titulo}</h2>
            <p class="diag-score-desc">${d.maturidade.descricao}</p>
          </div>
        </div>

        <div class="diag-bars">
          ${cfg.pillars.map((p) => `
            <div class="diag-bar-row">
              <div class="diag-bar-label"><span>${p.title}</span><span>${d.pontuacoes[p.key].toFixed(1)}%</span></div>
              <div class="diag-bar-track"><div class="diag-bar-fill" style="width:${d.pontuacoes[p.key]}%"></div></div>
            </div>
          `).join("")}
        </div>

        <div class="diag-counts">
          <div><span class="dot sim"></span> Atendidos (Sim): <strong>${d.totalSim}</strong></div>
          <div><span class="dot parcial"></span> Parciais: <strong>${d.totalParcial}</strong></div>
          <div><span class="dot nao"></span> Não atendidos: <strong>${d.totalNao}</strong></div>
        </div>

        <h3 class="diag-section-title">Detalhamento por Pilar</h3>
        ${cfg.pillars.map((p) => `
          <div class="diag-pillar-detail">
            <h4>${p.title} <span class="diag-norm">${p.norm}</span></h4>
            ${p.questions.map((q) => {
              const resp = state.respostas[q.id];
              const statusIcon = resp === "Sim" ? "check-circle-2" : resp === "Parcialmente" ? "alert-triangle" : "x-circle";
              const statusClass = resp === "Sim" ? "ok" : resp === "Parcialmente" ? "warn" : "bad";
              return `
                <div class="diag-detail-row ${statusClass}">
                  ${icon(statusIcon)}
                  <div>
                    <p class="diag-detail-label">${q.label} — <strong>${resp}</strong></p>
                    ${resp !== "Sim" ? `<p class="diag-detail-hint">Necessário: ${q.hint}</p>` : ""}
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        `).join("")}

        <h3 class="diag-section-title">Análise de Integração entre Pilares</h3>
        <div class="diag-integration">
          ${Object.entries(d.integracao).map(([par, nivel]) => `
            <div class="diag-integration-row">
              <span>${par}</span>
              <span class="status-pill ${nivel === "Alta" ? "sim" : nivel === "Média" ? "parcial" : "off"}">${nivel}</span>
            </div>
          `).join("")}
        </div>
        <p class="diag-integration-note">
          ${d.integracaoBaixa
            ? "A baixa integração entre pilares indica que as áreas avaliadas operam de forma isolada, gerando retrabalho, inconsistências e visão fragmentada dos riscos organizacionais."
            : "A organização demonstra boa integração entre os pilares avaliados, permitindo visão holística dos riscos e maior eficiência na tomada de decisão."}
        </p>

        ${d.riscosIdentificados.length ? `
          <h3 class="diag-section-title">Principais Riscos Identificados</h3>
          <ul class="diag-risks">
            ${d.riscosIdentificados.map((r) => `<li>${icon("alert-triangle")} ${r}</li>`).join("")}
          </ul>
        ` : `
          <h3 class="diag-section-title">Principais Riscos Identificados</h3>
          <p class="diag-integration-note">Nenhum risco crítico identificado. A organização demonstra maturidade no programa de ${cfg.diagTipo}.</p>
        `}

        ${!state.showLeadForm ? `
          <div class="diag-cta-box">
            <h3>Quer entender como implementar a ${cfg.diagTipo} na sua empresa?</h3>
            <p>Fale com nossos especialistas e receba orientação sobre os próximos passos.</p>
            <button type="button" class="btn btn-green" id="diag-want-more">${icon("send")} Quero Saber Mais</button>
          </div>
        ` : leadFormMarkup()}
      </div>
    `;
  };

  const leadFormMarkup = () => {
    if (state.leadSent) {
      return `
        <div class="success-box">
          <div class="success-icon">${icon("check-circle-2")}</div>
          <h3>Solicitação enviada!</h3>
          <p>Recebemos seus dados. Enviamos um resumo do seu diagnóstico para o e-mail informado, e nossa equipe vai entrar em contato em breve para conversar sobre os próximos passos.</p>
        </div>
      `;
    }
    const f = state.leadForm;
    const e = state.leadErrors;
    return `
      <div class="diag-cta-box">
        <h3>Quero Saber Mais</h3>
        <p>Preencha seus dados — vamos enviar um resumo do diagnóstico para o seu e-mail e combinar uma conversa com nossos especialistas.</p>
        <form id="diag-lead-form">
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
          <div class="form-field ${e.cargo ? "error" : ""}">
            <label>${icon("briefcase")} Cargo <span class="required">*</span></label>
            <input type="text" name="cargo" placeholder="Seu cargo na empresa" value="${f.cargo}" />
            ${e.cargo ? `<p class="error-text">${e.cargo}</p>` : ""}
          </div>
          <input type="text" name="website" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0;" aria-hidden="true" />
          ${state.leadSendError ? `<p class="error-text" style="margin-bottom:12px;">Não conseguimos enviar agora. Tente novamente em instantes.</p>` : ""}
          <button type="submit" class="btn btn-green btn-block" ${state.leadLoading ? "disabled" : ""}>
            ${state.leadLoading ? `<span class="spinner"></span> Enviando...` : `${icon("send")} Enviar`}
          </button>
        </form>
      </div>
    `;
  };

  const wire = () => {
    container.querySelectorAll("[data-diag]").forEach((card) => {
      card.addEventListener("click", () => {
        state.diagKey = card.dataset.diag;
        state.respostas = defaultRespostas(DIAGNOSTICOS[state.diagKey].questionIds);
        state.view = "intro";
        draw();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    const startBtn = container.querySelector("#diag-start");
    if (startBtn) {
      startBtn.addEventListener("click", () => {
        state.view = "quiz";
        draw();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    const backBtn = container.querySelector("#diag-back-hub");
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        state.view = "hub";
        draw();
      });
    }

    container.querySelectorAll(".diag-radio input").forEach((input) => {
      input.addEventListener("change", () => {
        state.respostas[input.name] = input.value;
        draw();
      });
    });

    const quizForm = container.querySelector("#diag-quiz-form");
    if (quizForm) {
      quizForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const cfg = DIAGNOSTICOS[state.diagKey];
        state.diagnostico = cfg.gerarDiagnostico(state.respostas);
        state.view = "results";
        draw();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    const wantMoreBtn = container.querySelector("#diag-want-more");
    if (wantMoreBtn) {
      wantMoreBtn.addEventListener("click", () => {
        state.showLeadForm = true;
        draw();
      });
    }

    const leadForm = container.querySelector("#diag-lead-form");
    if (leadForm) {
      leadForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(leadForm);
        state.leadForm = {
          empresa: data.get("empresa") || "",
          nome: data.get("nome") || "",
          email: data.get("email") || "",
          cargo: data.get("cargo") || "",
        };

        const errs = {};
        if (!state.leadForm.empresa.trim()) errs.empresa = "Obrigatório";
        if (!state.leadForm.nome.trim()) errs.nome = "Obrigatório";
        if (!state.leadForm.email.trim() || !/\S+@\S+\.\S+/.test(state.leadForm.email)) errs.email = "E-mail inválido";
        if (!state.leadForm.cargo.trim()) errs.cargo = "Obrigatório";

        state.leadErrors = errs;
        state.leadSendError = false;

        if (Object.keys(errs).length > 0) {
          draw();
          return;
        }

        state.leadLoading = true;
        draw();

        const honeypot = data.get("website") || "";
        const d = state.diagnostico;
        const cfg = DIAGNOSTICOS[state.diagKey];

        fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "diag-lead",
            diagTipo: cfg.diagTipo,
            diagNomeCompleto: cfg.diagNomeCompleto,
            ...state.leadForm,
            diagnostico: {
              pontuacaoGeral: d.pontuacaoGeral.toFixed(1),
              nivel: d.maturidade.titulo,
              nivelDescricao: d.maturidade.descricao,
              integracao: d.integracao,
              riscosIdentificados: d.riscosIdentificados,
            },
            website: honeypot,
          }),
        })
          .then((res) => {
            if (!res.ok) throw new Error("send_failed");
            state.leadLoading = false;
            state.leadSent = true;
            draw();
          })
          .catch(() => {
            state.leadLoading = false;
            state.leadSendError = true;
            draw();
          });
      });
    }
  };

  draw();
}
