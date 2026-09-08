// ==========================================================================
// FD Labs — Cookie/privacy notice
//
// The site currently sets no non-essential cookies (no analytics, ads, or
// chat trackers). This module just records that the visitor has seen the
// notice. The stored shape already separates categories so that if
// analytics/marketing scripts are added later, their loaders can check
// getConsent().analytics / .marketing before running, without changing
// this file's public API.
// ==========================================================================

const STORAGE_KEY = "fd_cookie_consent";

export function getConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function acknowledgeConsent() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        essential: true,
        analytics: false,
        marketing: false,
        acknowledgedAt: new Date().toISOString(),
        version: 1,
      })
    );
  } catch {
    // Storage unavailable (private mode, blocked cookies, etc.) — the
    // banner will simply reappear on the next visit, which is safe.
  }
}

function resetConsent() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
  showBanner();
}

function showBanner() {
  if (document.querySelector(".cookie-banner")) return;

  const banner = document.createElement("div");
  banner.className = "cookie-banner";
  banner.innerHTML = `
    <div class="cookie-banner-inner">
      <p>
        Usamos apenas cookies e armazenamento técnicos essenciais ao funcionamento do site.
        Não utilizamos cookies de rastreamento ou publicidade. Saiba mais na
        <a href="#/privacidade">Política de Privacidade e Cookies</a>.
      </p>
      <button type="button" class="btn btn-green" id="cookie-ack-btn">Entendi</button>
    </div>
  `;
  document.body.appendChild(banner);

  banner.querySelector("#cookie-ack-btn").addEventListener("click", () => {
    acknowledgeConsent();
    banner.remove();
  });
}

export function initCookieBanner() {
  if (!getConsent()) showBanner();

  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-cookie-preferences]")) {
      e.preventDefault();
      resetConsent();
    }
  });
}
