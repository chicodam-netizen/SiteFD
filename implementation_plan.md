# Implementation Plan - Recreating FD Labs Website

Recreate the website [FD Labs](https://fd-labs.figma.site/) inside the workspace `d:\FD_CONSULTORIA\DESENVOLVIMENTO\SiteFD` using pure HTML, Vanilla CSS, and modern Vanilla JavaScript. The design will preserve the premium dark aesthetics, layouts, and dynamic functionalities extracted from the Figma components.

## User Review Required

> [!IMPORTANT]
> **Aesthetics & Stack Choice**
> We are using HTML5, modern Vanilla CSS (with CSS variables, grid, flexbox, and keyframes), and Vanilla JS (with ES modules). This avoids heavy framework dependencies, ensures near-instant loading, and meets the core workspace guidelines.
> The site will run directly in the browser or via a simple static server (e.g. `npx serve` or live server).

> [!TIP]
> **Authentication & Local Database**
> We will implement client-side routing and a fully functional authentication provider (persisted in `localStorage`) to lock/unlock premium articles in the **Base de Conhecimento**, matching the original React app behavior.

## Proposed Changes

We will create a structured single-page application structure using a client-side router in JavaScript, rendering templates dynamically to allow smooth transitions without page reloads.

### Assets & Images
We will generate premium placeholder images using the AI image generator to represent:
- Logo (`assets/logo.png`)
- Hero background (`assets/hero_bg.png`)
- Team cover (`assets/team_cover.png`)
- Arthur Starling Profile (`assets/arthur_profile.png`)
- Portfolio projects (`assets/project_cafe.png`, `assets/project_souband.png`, `assets/project_bandnews.png`, `assets/project_jbm.png`)

---

### Core Structure

#### [NEW] [index.html](file:///d:/FD_CONSULTORIA/DESENVOLVIMENTO/SiteFD/index.html)
Main entry point containing the shell layout:
- Header navigation (logo, navigation links, and dynamic Auth/Profile actions).
- Main viewport container where pages are rendered.
- Auth Modal (Login/Register tabs, show/hide state).
- Footer section with CNPJ, contact info, and navigation links.
- Lucide Icons (loaded via CDN) and Outfit font (Google Fonts).

#### [NEW] [style.css](file:///d:/FD_CONSULTORIA/DESENVOLVIMENTO/SiteFD/style.css)
The global design system containing color variables, typography, utilities, and layouts:
- Colors: BG Slate (`#060d1a`), Card BG (`#0e1f38`), Accent Green (`#00c896`), Accent Blue (`#4a9eff`), Purple (`#8b5cf6`), Gold (`#F5C800`).
- Modern typography rules (Outfit).
- Layout utilities (Grids, Flexbox).
- Dynamic animations: micro-hover translation transitions, glowing card borders, modal fade-ins, and skeleton loaders.

#### [NEW] [data.js](file:///d:/FD_CONSULTORIA/DESENVOLVIMENTO/SiteFD/data.js)
Stores the structured static data arrays parsed from the Figma source:
- `services` (for Home Page)
- `marketingServices` (for Marketing/Arthur Page)
- `articles` (for Base de Conhecimento, including markdown content)
- `portfolioProjects` (for Arthur's Portfolio)
- `ufStates` (Brazilian States list)

#### [NEW] [auth.js](file:///d:/FD_CONSULTORIA/DESENVOLVIMENTO/SiteFD/auth.js)
Manages registration, login, session state, and local storage integration to check user roles (Free vs Pro) and lock premium articles.

#### [NEW] [router.js](file:///d:/FD_CONSULTORIA/DESENVOLVIMENTO/SiteFD/router.js)
Lightweight hash-based or history-based routing registry that renders the appropriate page view:
- `/` -> Home
- `/base-de-conhecimento` -> Base de Conhecimento
- `/marketing` -> Marketing Services
- `/arthur` -> Arthur Starling Portfolio
- `/contato` -> Contact Form
- `/perfil` -> Profile Management
- `*` -> 404 Page

---

### Page Views

#### [NEW] [views/home.js](file:///d:/FD_CONSULTORIA/DESENVOLVIMENTO/SiteFD/views/home.js)
Renders the Hero banner, the 6-service grid, and the "Por que escolher a FD" layout with points.

#### [NEW] [views/knowledge.js](file:///d:/FD_CONSULTORIA/DESENVOLVIMENTO/SiteFD/views/knowledge.js)
Renders the Knowledge Base page:
- Form to sign up for free access (if user is unregistered).
- Article search and categories filter tabs.
- Interactive list with level/read-time tags. Clicking an article expands it with markdown rendering.
- Premium lock indicator for Pro articles.

#### [NEW] [views/marketing.js](file:///d:/FD_CONSULTORIA/DESENVOLVIMENTO/SiteFD/views/marketing.js)
Renders the Marketing services grid and the Pricing Table for design, social media, and video assets.

#### [NEW] [views/arthur.js](file:///d:/FD_CONSULTORIA/DESENVOLVIMENTO/SiteFD/views/arthur.js)
Renders Arthur Starling's profile, the interactive services checklist form (which autofills the request message), his Behance project gallery, and double-action request triggers.

#### [NEW] [views/contact.js](file:///d:/FD_CONSULTORIA/DESENVOLVIMENTO/SiteFD/views/contact.js)
Renders the contact info details and the inquiry form with validation, city/UF select fields, and a success screen showing a ticket reference.

#### [NEW] [views/profile.js](file:///d:/FD_CONSULTORIA/DESENVOLVIMENTO/SiteFD/views/profile.js)
Renders the user profile page: edit name, membership status, usage metrics, and logout button.

## Verification Plan

### Automated Tests
- Since it is a static web application, we will validate the HTML using a standard linter or runtime checks.
- We will run the local development server (e.g. `npx serve .` or `python -m http.server`) to ensure routing and client interactions function error-free.

### Manual Verification
- Verify navigation and URL updates work seamlessly without page reloads.
- Verify forms display errors on invalid inputs and process correctly on submit.
- Test user registration/login flow and verify that premium articles are locked to "free" users but unlocked after upgrading/subscribing.
- Test responsiveness across mobile and desktop widths.
