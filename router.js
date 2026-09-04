// ==========================================================================
// FD Labs — Hash-based client-side router
// ==========================================================================

import { renderHome } from "./views/home.js";
import { renderGallery } from "./views/gallery.js";
import { renderKnowledge } from "./views/knowledge.js";
import { renderMarketing } from "./views/marketing.js";
import { renderArthur } from "./views/arthur.js";
import { renderContact } from "./views/contact.js";
import { renderNotFound } from "./views/notfound.js";

const routes = {
  "/": { render: renderHome, label: "Início" },
  "/galeria": { render: renderGallery, label: "Galeria" },
  "/base-de-conhecimento": { render: renderKnowledge, label: "Base de Conhecimento" },
  "/marketing": { render: renderMarketing, label: "Marketing" },
  "/arthur": { render: renderArthur, label: "Arthur" },
  "/contato": { render: renderContact, label: "Contato" },
};

function currentPath() {
  const hash = window.location.hash.replace(/^#/, "");
  return hash === "" ? "/" : hash;
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setActiveNav(path) {
  document.querySelectorAll(".nav-link[data-path]").forEach((link) => {
    link.classList.toggle("active", link.dataset.path === path);
  });
}

function closeMobileMenu() {
  const menu = document.getElementById("nav-mobile");
  if (menu) menu.classList.remove("open");
}

export function initRouter() {
  const app = document.getElementById("app");

  const render = () => {
    const path = currentPath();
    const route = routes[path];

    setActiveNav(path);
    closeMobileMenu();

    if (!route) {
      renderNotFound(app);
    } else {
      route.render(app);
    }

    refreshIcons();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("hashchange", render);
  render();
}
