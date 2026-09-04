import { ufList, contactServiceOptions, contactInfo } from "../data.js";
import { icon } from "../icons.js";

let form = { name: "", email: "", phone: "", company: "", city: "", uf: "", service: "", message: "" };
let errors = {};
let submitted = false;
let loading = false;
let sendError = false;
let ticket = "";

function resetState() {
  form = { name: "", email: "", phone: "", company: "", city: "", uf: "", service: "", message: "" };
  errors = {};
  submitted = false;
  loading = false;
  sendError = false;
  ticket = "";
}

export function renderContact(container) {
  resetState();

  const draw = () => {
    container.innerHTML = `
      <div class="page-body">
        <div class="page-header">
          <div class="page-header-dots"></div>
          <div class="page-header-inner">
            <span class="eyebrow">FALE CONOSCO</span>
            <h1>Entre em Contato</h1>
            <p>Nossos especialistas estão prontos para ajudar sua empresa a crescer com tecnologia</p>
          </div>
        </div>

        <div class="page-wrap">
          <div class="contact-layout">
            <div class="contact-info">
              <div>
                <h2>Informações de Contato</h2>
                <p>Atendemos empresas de todos os portes em todo o Brasil. Entre em contato e agende uma consultoria gratuita.</p>
              </div>
              ${contactInfo.map((c) => `
                <div class="contact-card">
                  <div class="icon-badge">${icon(c.icon)}</div>
                  <div>
                    <p class="title">${c.title}</p>
                    ${c.lines.map((l) => `<p class="line">${l}</p>`).join("")}
                  </div>
                </div>
              `).join("")}
              <div class="map-placeholder">
                <div>
                  ${icon("map-pin")}
                  <p>Belo Horizonte, MG</p>
                  <p>Rua Aspásia, 431</p>
                </div>
              </div>
            </div>

            <div>
              ${submitted ? successMarkup() : formMarkup()}
            </div>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
    wire();
  };

  const formMarkup = () => `
    <div class="contact-form-box">
      <div class="contact-form-head">
        <div class="icon-badge">${icon("message-square")}</div>
        <div>
          <h2>Solicite uma Consultoria</h2>
          <p>Responderemos em até 4 horas úteis</p>
        </div>
      </div>
      <form id="contact-form">
        <div class="form-grid-2">
          <div class="form-field ${errors.name ? "error" : ""}">
            <label>${icon("user")} Nome Completo <span class="required">*</span></label>
            <input type="text" name="name" placeholder="Seu nome" value="${form.name}" />
            ${errors.name ? `<p class="error-text">${errors.name}</p>` : ""}
          </div>
          <div class="form-field ${errors.email ? "error" : ""}">
            <label>${icon("mail")} E-mail <span class="required">*</span></label>
            <input type="email" name="email" placeholder="seu@email.com" value="${form.email}" />
            ${errors.email ? `<p class="error-text">${errors.email}</p>` : ""}
          </div>
          <div class="form-field">
            <label>${icon("phone")} Telefone</label>
            <input type="tel" name="phone" placeholder="(31) 9 9168-4589" value="${form.phone}" />
          </div>
          <div class="form-field">
            <label>${icon("building-2")} Empresa</label>
            <input type="text" name="company" placeholder="Nome da empresa" value="${form.company}" />
          </div>
          <div class="form-field ${errors.city ? "error" : ""}">
            <label>${icon("map-pin")} Cidade <span class="required">*</span></label>
            <input type="text" name="city" placeholder="Sua cidade" value="${form.city}" />
            ${errors.city ? `<p class="error-text">${errors.city}</p>` : ""}
          </div>
          <div class="form-field ${errors.uf ? "error" : ""}">
            <label>Estado (UF) <span class="required">*</span></label>
            <select name="uf">
              <option value="">Selecione o estado</option>
              ${ufList.map((uf) => `<option value="${uf}" ${form.uf === uf ? "selected" : ""}>${uf}</option>`).join("")}
            </select>
            ${errors.uf ? `<p class="error-text">${errors.uf}</p>` : ""}
          </div>
        </div>

        <div class="form-field">
          <label>Serviço de Interesse</label>
          <select name="service">
            <option value="">Selecione um serviço</option>
            ${contactServiceOptions.map((s) => `<option value="${s}" ${form.service === s ? "selected" : ""}>${s}</option>`).join("")}
          </select>
        </div>

        <div class="form-field ${errors.message ? "error" : ""}">
          <label>Mensagem <span class="required">*</span></label>
          <textarea name="message" rows="4" placeholder="Descreva sua necessidade ou dúvida...">${form.message}</textarea>
          ${errors.message ? `<p class="error-text">${errors.message}</p>` : ""}
        </div>

        <input type="text" name="website" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0;" aria-hidden="true" />

        ${sendError ? `<p class="error-text" style="margin-bottom:12px;">Não conseguimos enviar sua mensagem agora. Tente novamente em instantes ou fale pelo WhatsApp/telefone acima.</p>` : ""}

        <button type="submit" class="btn btn-green btn-block" ${loading ? "disabled" : ""}>
          ${loading ? `<span class="spinner"></span> Enviando...` : `${icon("send")} Enviar Mensagem`}
        </button>
      </form>
    </div>
  `;

  const successMarkup = () => `
    <div class="success-box contact-success">
      <div class="success-icon">${icon("check-circle-2")}</div>
      <h3 style="font-size:1.5rem;">Mensagem Enviada!</h3>
      <p style="max-width:420px;">Obrigado, <strong style="color:var(--green)">${form.name.split(" ")[0]}</strong>! Recebemos seu contato e nossa equipe entrará em contato em até 24 horas úteis.</p>
      <div class="ticket-grid">
        <div><p>Protocolo</p><p class="mono">#${ticket}</p></div>
        <div><p>Prazo</p><p>Até 24h úteis</p></div>
      </div>
      <button type="button" class="btn btn-outline-green" id="contact-reset" style="margin-top:24px;">Enviar outra mensagem</button>
    </div>
  `;

  const wire = () => {
    const cform = container.querySelector("#contact-form");
    if (cform) {
      cform.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(cform);
        form = {
          name: data.get("name") || "",
          email: data.get("email") || "",
          phone: data.get("phone") || "",
          company: data.get("company") || "",
          city: data.get("city") || "",
          uf: data.get("uf") || "",
          service: data.get("service") || "",
          message: data.get("message") || "",
        };
        const errs = {};
        if (!form.name.trim()) errs.name = "Obrigatório";
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "E-mail inválido";
        if (!form.city.trim()) errs.city = "Obrigatório";
        if (!form.uf) errs.uf = "Obrigatório";
        if (!form.message.trim()) errs.message = "Descreva sua necessidade";
        errors = errs;
        sendError = false;

        if (Object.keys(errs).length === 0) {
          loading = true;
          draw();

          const honeypot = data.get("website") || "";
          fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ type: "contact", ...form, website: honeypot }),
          })
            .then((res) => {
              if (!res.ok) throw new Error("send_failed");
              loading = false;
              submitted = true;
              ticket = "FD" + (Math.floor(Math.random() * 90000) + 10000);
              draw();
            })
            .catch(() => {
              loading = false;
              sendError = true;
              draw();
            });
        } else {
          draw();
        }
      });
    }

    const resetBtn = container.querySelector("#contact-reset");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        resetState();
        draw();
      });
    }
  };

  draw();
}
