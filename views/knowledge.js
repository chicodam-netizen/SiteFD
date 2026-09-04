import { articles, kbCategories, levelColors, ufList } from "../data.js";
import { icon } from "../icons.js";

let state = {
  hasAccess: false,
  submitted: false,
  search: "",
  category: "Todos",
  openArticle: null,
  form: { name: "", email: "", city: "", uf: "" },
  errors: {},
};

function filteredArticles() {
  const q = state.search.toLowerCase();
  return articles.filter((a) => {
    const matchCat = state.category === "Todos" || a.category === state.category;
    const matchSearch =
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });
}

function renderMarkdown(content) {
  return content
    .split("\n")
    .map((line) => {
      if (line.startsWith("## ")) return `<h2>${line.replace("## ", "")}</h2>`;
      if (line.startsWith("### ")) return `<h3>${line.replace("### ", "")}</h3>`;
      if (line.startsWith("- **")) {
        const parts = line.replace("- **", "").split("**:");
        return `<div class="bullet"><span class="dot">▸</span><span><strong>${parts[0]}</strong>:${parts[1] || ""}</span></div>`;
      }
      if (/^\d+\./.test(line)) {
        const idx = line.split(".")[0];
        const rest = line.split(". ").slice(1).join(". ");
        return `<div class="num"><span class="idx">${idx}.</span><span>${rest}</span></div>`;
      }
      if (line.startsWith("- ")) return `<div class="bullet"><span class="dot">•</span><span>${line.replace("- ", "")}</span></div>`;
      return line ? `<p>${line}</p>` : "<br/>";
    })
    .join("");
}

function articleCard(article) {
  const open = state.openArticle === article.id;
  return `
    <div class="article-card ${open ? "open" : ""}" data-id="${article.id}">
      <div class="article-top">
        <div style="flex:1;min-width:0;">
          <div class="article-tags-row">
            ${article.featured ? `<span class="tag-featured">${icon("star")} Destaque</span>` : ""}
            <span class="tag-category">${article.category}</span>
            <span class="tag-level" style="color:${levelColors[article.level]}">● ${article.level}</span>
          </div>
          <h3>${article.title}</h3>
          <p class="summary">${article.summary}</p>
          <div class="article-meta">
            <span>${icon("user")} ${article.author}</span>
            <span>${icon("clock")} ${article.readTime}</span>
            <span>${icon("file-text")} ${article.date}</span>
          </div>
          <div class="article-tags">
            ${article.tags.map((t) => `<span>${icon("tag")} ${t}</span>`).join("")}
          </div>
        </div>
        <div class="article-chevron">${icon("chevron-right")}</div>
      </div>
      <div class="article-body">
        ${renderMarkdown(article.content)}
        <div class="article-footer">
          <button type="button">${icon("download")} Baixar PDF</button>
          <span>• Última atualização: ${article.date}</span>
        </div>
      </div>
    </div>
  `;
}

export function renderKnowledge(container) {
  state = {
    hasAccess: false,
    submitted: false,
    search: "",
    category: "Todos",
    openArticle: null,
    form: { name: "", email: "", city: "", uf: "" },
    errors: {},
  };

  const draw = () => {
    const featured = articles.filter((a) => a.featured);

    container.innerHTML = `
      <div class="page-body">
        <div class="page-header">
          <div class="page-header-dots"></div>
          <div class="page-header-inner">
            <span class="eyebrow">CONHECIMENTO</span>
            <h1>Base de Conhecimento</h1>
            <p>Artigos técnicos, guias e melhores práticas em Tecnologia da Informação</p>
          </div>
        </div>

        ${state.hasAccess ? contentMarkup() : gateMarkup(featured)}
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
    wire(featured);
  };

  const gateMarkup = (featured) => `
    <div class="kb-gate">
      ${state.submitted ? `
        <div class="success-box">
          <div class="success-icon">${icon("check-circle-2")}</div>
          <h2>Acesso Liberado!</h2>
          <p>Bem-vindo, <strong style="color:var(--green)">${state.form.name.split(" ")[0]}</strong>! Carregando sua base de conhecimento...</p>
          <div class="pulse-dots"><span></span><span></span><span></span></div>
        </div>
      ` : `
        <div class="card card-pad" style="padding:32px;">
          <div class="text-center" style="margin-bottom:24px;">
            <div class="kb-gate-icon">${icon("lock")}</div>
            <h2 style="color:#fff;font-size:1.4rem;font-weight:700;margin-bottom:8px;">Acesse a Base de Conhecimento</h2>
            <p style="color:var(--gray-400);font-size:0.9rem;">Preencha seus dados para acessar gratuitamente nossos artigos técnicos e guias especializados.</p>
          </div>
          <form id="kb-form">
            <div class="form-field ${state.errors.name ? "error" : ""}">
              <label>Nome Completo <span class="required">*</span></label>
              <input type="text" name="name" placeholder="Seu nome completo" value="${state.form.name}" />
              ${state.errors.name ? `<p class="error-text">${state.errors.name}</p>` : ""}
            </div>
            <div class="form-field ${state.errors.email ? "error" : ""}">
              <label>E-mail <span class="required">*</span></label>
              <input type="email" name="email" placeholder="seu@email.com" value="${state.form.email}" />
              ${state.errors.email ? `<p class="error-text">${state.errors.email}</p>` : ""}
            </div>
            <div class="form-grid-2">
              <div class="form-field ${state.errors.city ? "error" : ""}">
                <label>Cidade <span class="required">*</span></label>
                <input type="text" name="city" placeholder="Sua cidade" value="${state.form.city}" />
                ${state.errors.city ? `<p class="error-text">${state.errors.city}</p>` : ""}
              </div>
              <div class="form-field ${state.errors.uf ? "error" : ""}">
                <label>UF <span class="required">*</span></label>
                <select name="uf">
                  <option value="">UF</option>
                  ${ufList.map((uf) => `<option value="${uf}" ${state.form.uf === uf ? "selected" : ""}>${uf}</option>`).join("")}
                </select>
                ${state.errors.uf ? `<p class="error-text">${state.errors.uf}</p>` : ""}
              </div>
            </div>
            <button type="submit" class="btn btn-green btn-block">${icon("unlock")} Acessar Base de Conhecimento</button>
            <p class="form-hint">Seus dados são utilizados apenas para personalizar seu acesso. Não fazemos spam.</p>
          </form>
        </div>
      `}

      <div class="kb-preview">
        <h3>Conteúdo disponível após o cadastro:</h3>
        ${featured.map((a) => `
          <div class="kb-preview-item">
            ${icon("lock")}
            <div style="flex:1;min-width:0;">
              <p>${a.title}</p>
              <div class="meta">
                <span style="color:${levelColors[a.level]}">${a.level}</span>
                <span style="color:var(--gray-600)">• ${a.readTime} de leitura</span>
              </div>
            </div>
          </div>
        `).join("")}
        <div class="kb-preview-more">+ ${articles.length - featured.length} artigos adicionais</div>
      </div>
    </div>
  `;

  const contentMarkup = () => {
    const list = filteredArticles();
    return `
      <div class="page-wrap">
        <div class="welcome-banner">
          ${icon("check-circle-2")}
          <span>Bem-vindo, <strong>${state.form.name.split(" ")[0]}</strong>! Você tem acesso a todos os ${articles.length} artigos.</span>
        </div>

        <div class="search-box">
          ${icon("search")}
          <input type="text" id="kb-search" placeholder="Pesquisar artigos, tópicos ou tecnologias..." value="${state.search}" />
        </div>

        <div class="cat-pills">
          ${kbCategories.map((c) => `<button data-cat="${c.label}" class="${state.category === c.label ? "active" : ""}">${icon(c.icon)} ${c.label}</button>`).join("")}
        </div>

        <div class="kb-layout">
          <div>
            <p class="result-count">${list.length} artigo${list.length !== 1 ? "s" : ""} encontrado${list.length !== 1 ? "s" : ""}</p>
            ${list.map(articleCard).join("")}
            ${list.length === 0 ? `<div class="empty-state">${icon("book-open")}<p>Nenhum artigo encontrado.</p></div>` : ""}
          </div>

          <div>
            <div class="sidebar-box">
              <h3>Base de Conhecimento</h3>
              <div class="sidebar-stat-row"><span>Total de Artigos</span><span>${articles.length}</span></div>
              <div class="sidebar-stat-row"><span>Categorias</span><span>${kbCategories.length - 1}</span></div>
              <div class="sidebar-stat-row"><span>Artigos em Destaque</span><span>${articles.filter((a) => a.featured).length}</span></div>
            </div>

            <div class="sidebar-box">
              <h3>Tags Populares</h3>
              <div class="tag-cloud">
                ${[...new Set(articles.flatMap((a) => a.tags))].slice(0, 12).map((tag) => `<button data-tag="${tag}">${tag}</button>`).join("")}
              </div>
            </div>

            <div class="sidebar-cta">
              ${icon("book-open")}
              <h3>Precisa de consultoria?</h3>
              <p>Nossa equipe pode ajudar sua empresa a implementar essas soluções.</p>
              <a href="#/contato">Fale Conosco</a>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  const wire = (featured) => {
    const form = container.querySelector("#kb-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(form);
        state.form = {
          name: data.get("name") || "",
          email: data.get("email") || "",
          city: data.get("city") || "",
          uf: data.get("uf") || "",
        };
        const errs = {};
        if (!state.form.name.trim()) errs.name = "Nome é obrigatório";
        if (!state.form.email.trim() || !/\S+@\S+\.\S+/.test(state.form.email)) errs.email = "E-mail inválido";
        if (!state.form.city.trim()) errs.city = "Cidade é obrigatória";
        if (!state.form.uf) errs.uf = "UF é obrigatória";
        state.errors = errs;

        if (Object.keys(errs).length === 0) {
          state.submitted = true;
          draw();
          setTimeout(() => {
            state.hasAccess = true;
            draw();
          }, 1200);
        } else {
          draw();
        }
      });
      return;
    }

    const searchInput = container.querySelector("#kb-search");
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        state.search = searchInput.value;
        draw();
        const el = container.querySelector("#kb-search");
        if (el) {
          el.focus();
          el.setSelectionRange(el.value.length, el.value.length);
        }
      });
    }

    container.querySelectorAll("[data-cat]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.category = btn.dataset.cat;
        draw();
      });
    });

    container.querySelectorAll("[data-tag]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.search = btn.dataset.tag;
        draw();
      });
    });

    container.querySelectorAll(".article-card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = Number(card.dataset.id);
        state.openArticle = state.openArticle === id ? null : id;
        draw();
      });
    });
  };

  draw();
}
