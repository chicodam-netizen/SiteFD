import { mediaItems, galleryCategories } from "../data.js";
import { icon } from "../icons.js";

let state = { type: "all", category: "Todos", lightboxIndex: -1 };

function filtered() {
  return mediaItems.filter((item) => {
    const typeMatch = state.type === "all" || item.type === state.type;
    const catMatch = state.category === "Todos" || item.category === state.category;
    return typeMatch && catMatch;
  });
}

function mediaCard(item) {
  return `
    <div class="media-card" data-id="${item.id}">
      <div class="media-thumb">
        <img src="${item.thumb}" alt="${item.title}" />
        <div class="media-overlay">${icon(item.type === "video" ? "play" : "zoom-in")}</div>
        <span class="media-badge type ${item.type}">${icon(item.type === "video" ? "video" : "image")} ${item.type === "video" ? "Vídeo" : "Foto"}</span>
        <span class="media-badge cat">${item.category}</span>
      </div>
      <div class="media-info">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </div>
  `;
}

function lightboxMarkup(list) {
  const item = list[state.lightboxIndex];
  if (!item) return "";
  const media = item.type === "image"
    ? `<img src="${item.src}" alt="${item.title}" />`
    : `<div class="lightbox-video"><iframe src="${item.videoUrl}" title="${item.title}" allowfullscreen allow="autoplay"></iframe></div>`;

  return `
    <div class="lightbox" id="lightbox">
      <button class="lightbox-close" id="lb-close">${icon("x")}</button>
      ${list.length > 1 ? `
        <button class="lightbox-nav prev" id="lb-prev">${icon("chevron-left")}</button>
        <button class="lightbox-nav next" id="lb-next">${icon("chevron-right")}</button>
      ` : ""}
      <div class="lightbox-body" id="lb-body">
        ${media}
        <div class="lightbox-caption">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <span class="badge">${item.category}</span>
        </div>
      </div>
    </div>
  `;
}

export function renderGallery(container) {
  state = { type: "all", category: "Todos", lightboxIndex: -1 };

  const draw = () => {
    const list = filtered();

    container.innerHTML = `
      <div class="page-body">
        <div class="page-header">
          <div class="page-header-dots"></div>
          <div class="page-header-inner">
            <span class="eyebrow">MÍDIA</span>
            <h1>Galeria de Projetos</h1>
            <p>Conheça nossos projetos e conteúdos educativos em imagens e vídeos</p>
          </div>
        </div>

        <div class="page-wrap">
          <div class="cat-filter">
            ${galleryCategories.map((c) => `<button data-cat="${c}" class="${state.category === c ? "active" : ""}">${c}</button>`).join("")}
          </div>

          <div class="media-grid" id="media-grid">
            ${list.map(mediaCard).join("")}
          </div>

          ${list.length === 0 ? `
            <div class="empty-state">
              ${icon("image")}
              <p>Nenhum item encontrado com os filtros selecionados.</p>
            </div>
          ` : ""}
        </div>
      </div>
      <div id="lightbox-root">${lightboxMarkup(list)}</div>
    `;

    if (window.lucide) window.lucide.createIcons();
    wire(list);
  };

  const wire = (list) => {
    container.querySelectorAll("[data-type]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.type = btn.dataset.type;
        draw();
      });
    });

    container.querySelectorAll("[data-cat]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.category = btn.dataset.cat;
        draw();
      });
    });

    container.querySelectorAll(".media-card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = Number(card.dataset.id);
        state.lightboxIndex = list.findIndex((i) => i.id === id);
        draw();
      });
    });

    const lb = container.querySelector("#lightbox");
    if (lb) {
      lb.addEventListener("click", (e) => {
        if (e.target === lb) {
          state.lightboxIndex = -1;
          draw();
        }
      });
      const closeBtn = container.querySelector("#lb-close");
      if (closeBtn) closeBtn.addEventListener("click", () => { state.lightboxIndex = -1; draw(); });
      const prevBtn = container.querySelector("#lb-prev");
      const nextBtn = container.querySelector("#lb-next");
      if (prevBtn) prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        state.lightboxIndex = (state.lightboxIndex - 1 + list.length) % list.length;
        draw();
      });
      if (nextBtn) nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        state.lightboxIndex = (state.lightboxIndex + 1) % list.length;
        draw();
      });
      const body = container.querySelector("#lb-body");
      if (body) body.addEventListener("click", (e) => e.stopPropagation());
    }
  };

  draw();
}
