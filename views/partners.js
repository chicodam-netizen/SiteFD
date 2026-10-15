import { icon } from "../icons.js";
import { partners } from "../data.js";

export function renderPartners(container) {
  container.innerHTML = `
    <div class="page-body">
      <div class="page-header">
        <div class="page-header-dots"></div>
        <div class="page-header-inner">
          <span class="eyebrow">PARCERIAS ESTRATÉGICAS</span>
          <h1>Parcerias Estratégicas</h1>
          <p>Empresas parceiras que ampliam nossa capacidade de entrega e geram ainda mais valor para os nossos clientes.</p>
        </div>
      </div>

      <div class="page-wrap">
        <div class="grid grid-3 partner-grid">
          ${partners.map((p) => `
            <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="partner-card">
              <img src="${p.logo}" alt="${p.name}" />
              <h3>${p.name}</h3>
              <p>${p.description}</p>
              <span class="partner-link">Visitar site ${icon("arrow-right")}</span>
            </a>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}
