# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/informational website for CEAD (Centre for Environment and Agricultural Development), an NGO. React 19 + Vite SPA, styled with Tailwind CSS, client-side routing via React Router.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — run oxlint (config in `.oxlintrc.json`)

There is no test suite configured in this repo.

## Architecture

**Section components double as both homepage sections and standalone pages.** Components like `AboutSection`, `DirectorMessage`, `AdvisoryCommittee`, `ConsultancyCentre`, `OurProducts`, `Partnerships`, `Gallery`, `MediaSection`, `ContactUs` live in `src/components/` and are self-contained (own copy, own images, own scroll-reveal animation). `HomePage` (`src/pages/HomePage.jsx`) renders all of them in sequence as one long scrolling page. Each also has a dedicated route/page in `src/pages/` (e.g. `AboutPage` renders just `AboutSection`) for direct-link navigation from the navbar dropdowns. **When editing content or behavior of a section, edit the shared component in `src/components/` — don't duplicate logic into the page file.** `PageWrapper` is a passthrough wrapper used by these standalone pages.

**Routing**: all routes are defined in `src/App.jsx` and nested under a single `Layout` route (`src/components/Layout.jsx`), which renders `Navbar` + `<Outlet />` + `Footer`. `ScrollToTop` is mounted once outside `Routes` and resets scroll position on every route change.

**Navigation structure lives in `Navbar.jsx`** as a `navLinks` data array with dropdown `children`. Note several nav entries are aspirational: `Financial Reports` and `Join Us` (and some dropdown children like News Letter, Videos, Press Releases) link to routes/anchors that don't have dedicated pages yet and fall back to existing pages like `/media` — check `App.jsx` for what's actually routed before assuming a nav link resolves to a real page.

**Scroll-reveal animation pattern**: most section components use `react-intersection-observer`'s `useInView` to toggle opacity/translate classes once elements enter the viewport (see `AnnualReport.jsx` for a representative example: `inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'` with a staggered `transitionDelay`). Reuse this pattern for new scroll-animated content rather than introducing a new animation approach. Global keyframe-based alternatives (`animate-fade-up`, `animate-fade-in`, `.animate-on-scroll`) are also defined in `src/index.css` / `tailwind.config.js`.

**Downloadable documents**: `AnnualReport.jsx` hardcodes a `reports` / `specialReports` array mapping metadata to files under `public/reports/`. When adding a new report, add both the file to `public/reports/` and an entry to the array — filenames must match exactly (spaces and parentheses in `public/reports/` filenames are literal, not URL-encoded, in the `fileUrl` strings).

**Design tokens**: custom color palette (`forest`, `soil`, `cream`, `gold`, `leaf`, `terracotta`), fonts (`font-display` = Playfair Display, `font-body` = Inter), shadows (`shadow-card`, `shadow-card-hover`, `shadow-nav`), and the `bg-grain-texture` noise background are all defined in `tailwind.config.js`. Reusable component classes (`.btn-primary`, `.btn-secondary`, `.section-heading`, `.card-base`, `.leaf-divider`, etc.) are defined in `@layer components` in `src/index.css` — prefer these over ad hoc utility strings for new UI in the same style.

**Assets**: images live under `src/assets/` (imported directly into components) and are separate from `documents/` and `extracted_media/` at the repo root, which are source Word/PDF annual reports and their extracted images — not used by the running app. The files actually served to users are in `public/reports/`.
