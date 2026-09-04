import { arthurServices, arthurPricing, arthurPortfolio } from "../data.js";
import { icon } from "../icons.js";

let selectedServices = [];
let formData = { name: "", company: "", message: "" };

export function renderArthur(container) {
  selectedServices = [];
  formData = { name: "", company: "", message: "" };

  const draw = () => {
    container.innerHTML = `
      <section class="hero" style="min-height:560px;">
        <div class="hero-overlay arthur" style="position:absolute;"></div>
        <div class="arthur-hero-grid">
          <div>
            <div class="arthur-id">
              <img src="assets/arthur-logo.png" alt="Arthur Damásio" />
              <div>
                <h1>Arthur Damásio Starling</h1>
                <p class="role">Designer &amp; Estrategista de Marketing</p>
              </div>
            </div>
            <p class="tagline">Designer Gráfico | Edição de Vídeo | Identidade Visual | Animação e Motion Graphics | Produção Audiovisual | Criação Publicitária | Adobe Suite | Comunicação Estratégica</p>
          </div>
          <div class="arthur-photo-wrap">
            <div class="frame"><img src="assets/arthur-photo.png" alt="Arthur Damásio Starling" /></div>
          </div>
        </div>
      </section>

      <section class="section bg-1">
        <div class="container" style="max-width:840px;">
          <span class="eyebrow purple">SOBRE</span>
          <h2 class="section-title">Estratégia, criatividade e execução em sinergia</h2>
          <p style="color:var(--gray-400);line-height:1.7;margin-bottom:24px;">Atuo como designer e editor de vídeo desde 2014. Comecei como ilustrador freelancer e, ao longo dos anos, consolidei uma trajetória sólida no design gráfico, audiovisual e criação de identidade visual. Em 2024, conquistei uma vaga de estágio em design gráfico na Band Minas, onde atuei por 1 ano. Lá, fui responsável por grande parte das demandas visuais da emissora e da rádio BandNews FM BH, incluindo a criação de peças para redes sociais, identidade visual de programas, materiais institucionais e de eventos. Tenho facilidade de comunicação, repertório cultural amplo e uma sólida base técnica em softwares de design e edição. Busco constantemente aprender, me desafiar e entregar soluções visuais que unam estratégia, estética e impacto.</p>
          <div class="social-btns">
            <p class="lead-text">Também mantenho como projetos pessoais um instagram artístico e um canal no YouTube:</p>
            <a class="btn btn-purple" href="https://www.youtube.com/@pitoresco6892" target="_blank" rel="noopener noreferrer">${icon("youtube")} Canal no YouTube</a>
            <a class="btn btn-purple" href="https://www.instagram.com/d.pitoresco/" target="_blank" rel="noopener noreferrer">${icon("instagram")} Instagram Artístico</a>
          </div>
        </div>
      </section>

      <section class="section bg-2">
        <div class="container">
          <div class="section-head">
            <span class="eyebrow purple">SERVIÇOS</span>
            <h2 class="section-title">Selecione os serviços de interesse</h2>
            <p style="color:var(--gray-400);font-size:0.9rem;">Clique nos cards para selecionar</p>
          </div>
          <div class="grid grid-4" id="arthur-services">
            ${arthurServices.map((s) => `
              <div class="card card-pad service-card purple-theme ${selectedServices.includes(s.id) ? "selected" : ""}" data-id="${s.id}">
                <div class="service-card-top">
                  <div class="icon-badge purple">${icon(s.icon)}</div>
                  ${selectedServices.includes(s.id) ? `<span class="check">${icon("check-circle-2")}</span>` : ""}
                </div>
                <h3 style="font-size:0.95rem;">${s.title}</h3>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="section bg-1">
        <div class="container">
          <div class="section-head">
            <span class="eyebrow purple">INVESTIMENTO</span>
            <h2 class="section-title">Tabela de preços</h2>
          </div>
          <div class="grid grid-3">
            ${arthurPricing.map((p) => `
              <div class="card card-pad price-card">
                <h3>${p.title}</h3>
                <p class="price">${p.price}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="section bg-2">
        <div class="container">
          <div class="section-head">
            <span class="eyebrow purple">PORTFÓLIO</span>
            <h2 class="section-title">Projetos realizados</h2>
          </div>
          <div class="grid grid-3">
            ${arthurPortfolio.map((p) => `
              <div class="card portfolio-card">
                <div class="portfolio-media"><img src="${p.image}" alt="${p.title}" /></div>
                <div class="portfolio-body">
                  <h3>${p.title}</h3>
                  <p>${p.description}</p>
                  <div class="portfolio-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
                  <a class="portfolio-link purple" href="https://www.behance.net/arthurstarling1" target="_blank" rel="noopener noreferrer">Ver no Behance ${icon("external-link")}</a>
                </div>
              </div>
            `).join("")}
          </div>
          <div class="text-center" style="margin-top:16px;">
            <a class="btn btn-purple" href="https://www.behance.net/arthurstarling1" target="_blank" rel="noopener noreferrer">Ver portfólio completo no Behance ${icon("external-link")}</a>
          </div>
        </div>
      </section>

      <section class="section bg-1">
        <div class="container" style="max-width:840px;">
          <div class="section-head">
            <span class="eyebrow purple">CONTATO</span>
            <h2 class="section-title">Vamos conversar sobre seu projeto</h2>
          </div>
          <div class="card card-pad" style="padding:32px;">
            <form id="arthur-form">
              <div class="form-field">
                <label>Nome</label>
                <input type="text" name="name" placeholder="Seu nome completo" value="${formData.name}" />
              </div>
              <div class="form-field">
                <label>Empresa</label>
                <input type="text" name="company" placeholder="Nome da sua empresa" value="${formData.company}" />
              </div>
              <div class="form-field">
                <label>Serviços Selecionados</label>
                <div class="selected-services-box" id="selected-services-box">
                  ${selectedServices.length > 0
                    ? arthurServices.filter((s) => selectedServices.includes(s.id)).map((s) => s.title).join(", ")
                    : "Nenhum serviço selecionado"}
                </div>
              </div>
              <div class="form-field">
                <label>Mensagem</label>
                <textarea name="message" rows="5" placeholder="Conte mais sobre seu projeto...">${formData.message}</textarea>
              </div>
              <div class="dual-actions">
                <button type="button" class="btn btn-purple">${icon("mail")} Falar com Arthur</button>
                <button type="button" class="btn btn-green">${icon("users")} Falar com a equipe FD</button>
              </div>
              <div class="center-pt">
                <a class="btn btn-whatsapp" href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">${icon("message-circle")} Chamar no WhatsApp</a>
              </div>
            </form>
          </div>
        </div>
      </section>
    `;

    if (window.lucide) window.lucide.createIcons();
    wire();
  };

  const wire = () => {
    container.querySelectorAll("#arthur-services .service-card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.dataset.id;
        selectedServices = selectedServices.includes(id)
          ? selectedServices.filter((s) => s !== id)
          : [...selectedServices, id];

        const nameInput = container.querySelector('[name="name"]');
        const companyInput = container.querySelector('[name="company"]');
        const messageInput = container.querySelector('[name="message"]');
        if (nameInput) formData.name = nameInput.value;
        if (companyInput) formData.company = companyInput.value;
        if (messageInput) formData.message = messageInput.value;

        draw();
      });
    });

    const form = container.querySelector("#arthur-form");
    if (form) {
      form.addEventListener("input", (e) => {
        const name = e.target.name;
        if (name) formData[name] = e.target.value;
      });
    }
  };

  draw();
}
