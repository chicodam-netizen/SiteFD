import { icon } from "../icons.js";

export function renderNotFound(container) {
  container.innerHTML = `
    <div class="notfound">
      <div class="code">404</div>
      <h1>Página não encontrada</h1>
      <p>A página que você está procurando não existe ou foi movida.</p>
      <div class="notfound-actions">
        <a href="#/" class="btn btn-red">${icon("home")} Ir para o Início</a>
        <button type="button" class="btn btn-outline-gray" id="nf-back">${icon("arrow-left")} Voltar</button>
      </div>
    </div>
  `;

  const backBtn = container.querySelector("#nf-back");
  if (backBtn) backBtn.addEventListener("click", () => window.history.back());
}
