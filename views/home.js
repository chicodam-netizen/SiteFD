import { services, stats, whyUs, homeImages } from "../data.js";
import { icon } from "../icons.js";

export function renderHome(container) {
  container.innerHTML = `
    <section class="hero">
      <div class="hero-bg">
        <img src="${homeImages.hero}" alt="FD Consultoria" />
        <div class="hero-overlay home"></div>
      </div>
      <div class="hero-content center">
        <div class="hero-inner">
          <span class="pill">CONSULTORIA EM TI</span>
          <h1>Soluções Tecnológicas para <span style="color:var(--blue)">Transformar</span> seu Negócio</h1>
          <p class="lead">A FD Consultoria oferece serviços especializados em TI para empresas que buscam inovação, segurança e eficiência operacional.</p>
          <div class="hero-actions">
            <a href="#/contato" class="btn btn-green">Solicitar Consultoria ${icon("arrow-right")}</a>
            <a href="#/base-de-conhecimento" class="btn btn-outline-blue">Base de Conhecimento</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-1">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">NOSSOS SERVIÇOS</span>
          <h2 class="section-title">Soluções Completas em TI</h2>
          <p class="section-subtitle mx-auto">Oferecemos um portfólio abrangente de serviços para atender todas as necessidades tecnológicas da sua empresa.</p>
        </div>
        <div class="grid grid-3">
          ${services.map((s) => `
            <div class="card card-pad service-card">
              <div class="icon-badge">${icon(s.icon)}</div>
              <h3>${s.title}</h3>
              <p>${s.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section bg-2">
      <div class="feature-grid">
        <div>
          <span class="eyebrow">POR QUE ESCOLHER A FD?</span>
          <h2 class="section-title">Excelência em cada projeto entregue</h2>
          <p style="color:var(--gray-400);line-height:1.7;margin-bottom:24px;">Com mais de 20 anos de mercado, a FD Consultoria conquistou a confiança de centenas de empresas em todo o Brasil, entregando soluções tecnológicas que realmente fazem diferença.</p>
          <ul class="why-list">
            ${whyUs.map((item) => `<li>${icon("check-circle-2")}${item}</li>`).join("")}
          </ul>
          <a href="#/contato" class="btn btn-green">Fale com um Especialista ${icon("arrow-right")}</a>
        </div>
        <div class="feature-media">
          <img src="${homeImages.meeting}" alt="Equipe FD Consultoria" />
          <div class="feature-badge">
            <div class="big">20+</div>
            <div class="small">Anos transformando empresas com tecnologia</div>
          </div>
        </div>
      </div>
      <div class="stats-bar">
        ${stats.map((s) => `
          <div class="stat">
            ${icon(s.icon)}
            <div class="value">${s.value}</div>
            <div class="label">${s.label}</div>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="cta-banner">
      <div class="cta-banner-inner">
        <h2>Pronto para transformar a TI da sua empresa?</h2>
        <p>Entre em contato agora e receba uma consultoria gratuita com nossos especialistas.</p>
        <div class="cta-actions">
          <a href="#/contato" class="btn btn-green">Solicitar Consultoria Gratuita</a>
          <a href="#/galeria" class="btn btn-outline-white">Ver Nossos Projetos</a>
        </div>
      </div>
    </section>
  `;
}
