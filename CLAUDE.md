# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/informational website for CEAD (Centre for Environment and Agricultural Development), an NGO. React 19 + Vite SPA, styled with Tailwind CSS, client-side routing via React Router, animation via Framer Motion.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — run oxlint (config in `.oxlintrc.json`)
- `npm run optimize:images` — re-encode `src/assets/images/` as progressive JPEGs (one-off; only needed after adding new photographs)

There is no test suite configured in this repo.

## Architecture

**Design system first.** Before writing new UI, use what already exists:

- **Tokens** live in `tailwind.config.js`: colours (`forest` primary, `soil` warm neutral for text, `cream`/`canvas`/`surface` grounds, `line`, plus `gold`/`leaf`/`terracotta` accents used sparingly), a fluid `fontSize` scale named by role (`display`, `h1`–`h4`, `lead`, `body`, `small`, `caption`, `eyebrow`, `stat`), section rhythm (`py-section`, `py-section-sm`, `px-gutter`), a radius scale, and restrained shadows. There is one easing curve: `ease-smooth`.
- **Component classes** live in `@layer components` in `src/index.css`: `.container-page`, `.btn-primary` / `.btn-secondary` / `.btn-accent` / `.btn-on-dark`, `.link-arrow`, `.link-underline`, `.eyebrow`, `.section-heading`, `.card-base` / `.card-interactive`, `.field-label` / `.field-input` / `.field-error`, `.prose-cead`.
- **Primitives** live in `src/components/ui/`: `Section` (tone + rhythm + container), `SectionHeader` (eyebrow/title/lead), `Button` (renders `Link`, `a` or `button` from the same props), `Reveal` / `RevealGroup` / `RevealItem` (scroll reveals), `Stat` (count-up figure), `ProgramCard`, `Modal` (focus-trapped dialog), `PageHeader`, `Breadcrumb`, `Logo`, `RouteFallback`.

Prefer these over ad hoc utility strings. New colours, spacing values or shadows should be added to the token set rather than hardcoded.

**Motion.** All animation variants live in `src/lib/motion.js` (`fadeUp`, `fadeIn`, `imageReveal`, `popover`, `drawer`, `stagger`, …) and share one easing curve. Reduced motion is honoured in two places: `respectMotion(variant, reduced)` collapses a variant to a plain fade for Framer Motion, and a `prefers-reduced-motion` block at the bottom of `src/index.css` neutralises CSS transitions. Use `Reveal`/`RevealGroup` for scroll-triggered content rather than reaching for `useInView` directly — `react-intersection-observer` is now only used inside `Stat`.

**Section components double as both homepage sections and standalone pages.** Components like `AboutSection`, `FocusAreas`, `ConsultancyCentre`, `OurProducts`, `Partnerships`, `Gallery`, `MediaSection`, `ContactUs`, `DirectorMessage`, `AdvisoryCommittee`, `BoardTrustees`, `StaffDetails` live in `src/components/` and are self-contained. Pages in `src/pages/` compose `PageHeader` + the section component. **When editing content or behaviour of a section, edit the shared component in `src/components/` — don't duplicate logic into the page file.** Some sections take a prop to adapt: `ConsultancyCentre` accepts `compact` to show a curated subset on the homepage.

**Homepage** (`src/pages/HomePage.jsx`) is a deliberate narrative: Hero → Introduction (+impact figures) → Focus Areas → Consultancy → Products → Gallery → Partnerships → Media, with the closing call to action in the footer. Governance sections (director's message, trustees, advisory committee, staff) are reached from the About menu and are **not** repeated on the homepage.

**Routing**: all routes are in `src/App.jsx`, nested under a single `Layout` route (`src/components/Layout.jsx` = `Navbar` + animated `<main id="main">` + `Footer`). Every route except the homepage is `React.lazy`-loaded behind a `Suspense` boundary using `RouteFallback`. There is a catch-all `*` route rendering `NotFoundPage`. `ScrollToTop` is mounted outside `Routes` and resets scroll on navigation, or scrolls to the anchor when the destination has a hash (`Section` adds `scroll-mt-28` for any section with an `id`, so the sticky header does not cover it).

**Navigation structure lives in `Navbar.jsx`** as a `navLinks` array. Seven top-level items, several with dropdown `children`. Every entry resolves to a real route — including `/join-us` and `/financial-reports`, which have dedicated pages. If you add a nav entry, add the route too.

**Data**: larger content sets are extracted to `src/data/` (`focusAreas.js`, `trainingCourses.js`). Smaller sets stay as module-level constants at the top of their component.

**Downloadable documents**: `AnnualReport.jsx` and `MediaSection.jsx` map metadata to files under `public/reports/`. When adding a report, add both the file and the array entry — filenames must match exactly (spaces and parentheses in `public/reports/` filenames are literal, not URL-encoded, in the `fileUrl` strings).

**Assets**: photographs live under `src/assets/images/` as optimised `.jpg` and are imported directly into components. `src/assets/cead-mark.png` is the CEAD crest with transparency, cropped from the official banner `src/assets/cead-logo.png` — never redraw, recolour or stretch either. `documents/` and `extracted_media/` at the repo root are source Word/PDF annual reports and their extracted images, not used by the running app.

## Content integrity

This is a real NGO's site. **Never invent statistics, awards, partnerships, testimonials, staff, contact details or achievements.** If content for a section is missing, design around what exists (or state honestly that a document is available on request, as `FinancialReportsPage` does) rather than filling the gap with plausible-looking detail.

Known items carried over from earlier work that have **not** been verified against CEAD source material, and should be confirmed with the client before being treated as fact: the `staffMembers` array in `StaffDetails.jsx`.

The `trustees` array in `BoardTrustees.jsx` reflects client-supplied executive committee data (received 2026-09-01). The section is labelled "Executive Committee" in the UI (heading, nav, footer, page title) to match the members' actual designations (President, Secretary, Treasurer, Executive Member), though the route path, component/file name and internal `id`s still say `board-trustees`/`BoardTrustees` for continuity. PAN numbers and personal phone numbers from the client's source data were deliberately excluded from the public site; only name, qualification, designation, occupation and address are shown.
