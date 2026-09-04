import { marketingServices, marketingPortfolio } from "../data.js";
import { icon } from "../icons.js";

export function renderMarketing(container) {
  container.innerHTML = `
    <section class="hero" style="min-height:480px;">
      <div class="hero-overlay marketing"></div>
      <div class="hero-content center">
        <div class="hero-inner">
          <span class="pill">MARKETING FD</span>
          <h1>Marketing estratégico orientado por dados e design</h1>
          <p class="lead">Na FD, o marketing é conduzido por Arthur Damásio Starling, designer e estrategista focado em performance, branding e automação com IA.</p>
        </div>
      </div>
    </section>

    <section class="section bg-1">
      <div class="container text-center" style="max-width:840px;">
        <span class="eyebrow">SOBRE O MARKETING NA FD</span>
        <h2 class="section-title">Estratégia, design e tecnologia em um só lugar</h2>
        <p style="color:var(--gray-400);line-height:1.7;">O marketing na FD é conduzido por Arthur Damásio Starling, profissional especializado em unir design estratégico, automação com inteligência artificial e performance orientada a resultados. Com experiência em branding, campanhas digitais e gestão de identidade visual, Arthur cria soluções escaláveis e eficientes que transformam a comunicação da sua marca.</p>
      </div>
    </section>

    <section class="section bg-2">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">SERVIÇOS</span>
          <h2 class="section-title">Soluções completas de marketing e design</h2>
        </div>
        <div class="grid grid-4">
          ${marketingServices.map((s) => `
            <div class="card card-pad service-card">
              <div class="icon-badge blue">${icon(s.icon)}</div>
              <h3 style="font-size:0.95rem;">${s.title}</h3>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section bg-1">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">PORTFÓLIO</span>
          <h2 class="section-title">Projetos em destaque</h2>
        </div>
        <div class="grid grid-2">
          ${marketingPortfolio.map((p) => `
            <div class="card portfolio-card">
              <div class="portfolio-media"><img src="${p.image}" alt="${p.title}" /></div>
              <div class="portfolio-body">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <a class="portfolio-link blue" href="https://www.behance.net/arthurstarling1" target="_blank" rel="noopener noreferrer">Ver projeto completo ${icon("external-link")}</a>
              </div>
            </div>
          `).join("")}
        </div>
        <div class="text-center" style="margin-top:16px;">
          <a class="btn btn-green" href="https://www.behance.net/arthurstarling1" target="_blank" rel="noopener noreferrer">Ver portfólio completo no Behance ${icon("external-link")}</a>
        </div>
      </div>
    </section>

    <section class="cta-banner">
      <div class="cta-banner-inner">
        <h2>Conheça o profissional por trás do marketing da FD</h2>
        <p>Saiba mais sobre Arthur Damásio Starling, suas especialidades, portfólio completo e formas de contato.</p>
        <div class="cta-actions">
          <a href="#/arthur" class="btn btn-green">Saiba mais sobre o profissional ${icon("arrow-right")}</a>
        </div>
      </div>
    </section>
  `;
}
