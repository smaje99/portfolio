# Portfolio Repo Guide

This repository contains two coordinated parts:

1. An Astro-based bilingual portfolio site.
2. A LaTeX-based resume/CV workflow that publishes PDFs into the site.

Use this file as the operating guide for future edits, maintenance, and handoff work.

## Project Context

The goal of the project is to present a professional portfolio in Spanish and English while also exposing downloadable CV PDFs from the same repository.

The site is the public-facing product. The LaTeX documents are the source of truth for the CV downloads that live under `public/docs/`.

The planning system for the project is split across two documents:

- `docs/portfolio-roadmap.md` is the strategic roadmap, progress evaluation, and current-state diagnosis.
- `docs/portfolio-backlog.md` is the operational backlog, organized by phases and sprints with actionable requirements.

Use this file as the operating guide for future edits, maintenance, and handoff work.

## Repository Layout

Important paths:

- `src/pages/` - Astro routes for the site.
- `src/components/` - shared UI and page sections.
- `src/content/` - content collections, including experience entries.
- `src/data/` - structured site data such as projects and credentials.
- `src/i18n/` - locale copy and localization helpers.
- `src/styles/` - global styles.
- `public/` - static assets served as-is.
- `public/docs/` - published CV PDFs.
- `docs/resume/` - LaTeX CV sources.
- `Makefile` - CV build, publish, and cleanup automation.

## Astro App

### Tech Stack

- Astro 6
- React integration for interactive pieces
- Tailwind CSS via Vite
- TypeScript with strict Astro config
- Biome for linting and formatting

### Locale Setup

The app is configured for two locales:

- `es`
- `en`

The default locale is Spanish, and the default route is not prefixed.

That means:

- Spanish pages live at the base routes.
- English pages use the locale-aware routes defined in the app.

### Main Scripts

Defined in `package.json`:

- `pnpm dev` or `pnpm start` - run the Astro dev server.
- `pnpm build` - run `astro check` and then build the site.
- `pnpm preview` - preview the production build locally.
- `pnpm astro` - access the Astro CLI directly.
- `pnpm lint` - run Biome checks.
- `pnpm format` - run Biome write mode.

### How the Site Is Organized

- `src/pages/` defines the routes.
- `src/components/` contains reusable presentation pieces such as the hero, cards, headers, and page layouts.
- `src/content/experiences/` stores content collection entries for experience history.
- `src/data/` contains structured project and credential data used by the UI.
- `src/i18n/site.ts` and related helpers centralize translated copy and locale-specific behavior.

### Editing Guidance for Astro

For website changes:

- Update route files in `src/pages/` when the page structure changes.
- Update shared UI in `src/components/` when the same pattern is reused across pages.
- Update content collections in `src/content/` when the change is editorial or data-driven.
- Update `src/data/` when changing project listings, credentials, or other structured content.
- Update `src/i18n/` when changing localized copy or locale behavior.

Avoid casual edits to:

- `astro.config.mjs`
- `tsconfig.json`
- `src/content.config.ts`

Only change those files when you are intentionally changing app-level behavior.

## LaTeX CV Workflow

### Source Files

The CV source lives in:

- `docs/resume/curriculum-vitae.es.tex`
- `docs/resume/curriculum-vitae.en.tex`

These files are the editable source documents.

### Published PDFs

The site exposes the CVs from:

- `public/docs/curriculum-vitae-sergio-maje.es.pdf`
- `public/docs/curriculum-vitae-sergio-maje.en.pdf`
- `public/docs/curriculum-vitae-sergio-maje.pdf`

The default resume link in the portfolio points at the published PDFs, not at the LaTeX source.

### Build Flow

The `Makefile` centralizes the CV pipeline:

- `make build` - compile both LaTeX files into `docs/resume/.build/`.
- `make publish` - copy the compiled PDFs into `public/docs/`.
- `make cv` or `make all` - build and publish both CVs.
- `make clean` - remove LaTeX build artifacts from `docs/resume/.build/`.
- `make clean-public` - remove the published PDFs from `public/docs/`.

The build uses `latexmk` and expects a working TeX toolchain in the environment.

### CV Editing Guidance

For resume changes:

- Edit the `.tex` sources in `docs/resume/`.
- Rebuild with `make cv` to refresh the PDFs.
- Do not edit the PDFs directly.
- Do not manually copy PDFs unless you are debugging the pipeline.

## Working Conventions

### What to Change for Each Kind of Request

- Website layout, routing, or components: edit Astro files under `src/`.
- Copy or translated text: edit the relevant locale files and page content.
- Project data: edit `src/data/`.
- CV content or formatting: edit the LaTeX sources under `docs/resume/`.
- CV publication and cleanup: use the `Makefile`.
- Strategy and state tracking: edit `docs/portfolio-roadmap.md`.
- Execution planning and requirement breakdown: edit `docs/portfolio-backlog.md`.

### How To Use The Planning Docs

- Use the roadmap when you need to understand the project vision, current status, OKRs, or phase-level evaluation.
- Use the backlog when you need to know what to build next, how the work is grouped by sprint, and whether an item is `Manual`, `Codex con supervisión`, or `Mixto`.
- If a change affects both strategy and execution, update the backlog first, then update the roadmap only if the strategic framing or status changes materially.
- Do not duplicate the same detailed task list in both documents unless a short cross-reference is enough.

### What Not to Touch Casually

- Build and config files unless the task requires them.
- Generated PDFs under `public/docs/` unless the CV pipeline changed.
- Temporary LaTeX build outputs under `docs/resume/.build/`.
- The roadmap and backlog structure unless the requested change is explicitly about planning or requirements.

### Validation Before Handoff

For Astro changes:

- Run `pnpm build`.
- Run `pnpm lint` if you changed code, components, or styles.
- Verify the affected routes in the browser.

For LaTeX changes:

- Run `make cv`.
- Confirm the PDFs were updated in `public/docs/`.
- Check the output visually if the change affects layout or pagination.

For planning/documentation changes:

- Ensure the roadmap and backlog do not contradict each other.
- Verify that every backlog item maps to a phase, sprint, and roadmap objective or gap.
- Verify that the backlog uses the execution labels consistently.
- Check that any new operational guidance in `AGENTS.md` matches the current repo structure and commands.

## Troubleshooting Notes

### Astro

- If a page fails type-checking, run `pnpm build` and inspect the Astro or TypeScript error.
- If imports fail, verify the `@/*` path alias in `tsconfig.json`.
- If a locale route looks wrong, check `astro.config.mjs` and the localized page helpers.

### LaTeX

- If `make cv` fails, first check that `latexmk` is installed and available on `PATH`.
- If the PDF builds but the public file does not update, inspect the copy step in the `Makefile`.
- If the output looks stale, run `make clean` and then `make cv` again.

### Planning Docs

- If the roadmap says a feature or artifact is missing but the backlog already includes it, treat the backlog as the implementation guide and the roadmap as the status source.
- If the backlog and roadmap drift apart, update the backlog first and then refresh the roadmap status or phase assessment.
- If a new requirement needs to be split into manual and technical work, keep the split visible in the backlog item instead of hiding it in prose.

## Minimal Handoff Rule

When in doubt, keep the two pipelines separated:

- Astro changes should stay in the web app source tree.
- CV changes should stay in the LaTeX sources and be published through the `Makefile`.
- Strategic framing should stay in the roadmap.
- Actionable execution should stay in the backlog.
