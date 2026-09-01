# Template v1 — Minimum Viable Scope

This template was scaffolded end-to-end in a single session under time pressure. It is functional but minimum-viable, not fully polished. Everything below can be filled by a targeted `/refine-template` pass.

## What's in the template (v1)

- Vite + React + Tailwind scaffold from the blueprint
- Design tokens (black + red + white, Oswald + Barlow)
- 9 core section components: HeaderBar, HeroStormRestoration, TrustBadgeStrip, InsuranceAdvocateProcess, ServicesGrid, ReviewsStrip, FinalCta, Footer, StickyMobileBar
- 1 page (HomePage)
- 6 playbook JSONs: theme, trust-signals, copy-locks, process, motion-preset, hero-mood-mapping
- 2 QA checklists: sop-compliance.md, design-fidelity.md
- Design spec, wireframe, and sitemap docs in `research/02-niche-research/storm-restoration-roofing/`

## What's NOT in the template (deferred)

- **Pages beyond home:** /about, /services, /contact routes are defined in the sitemap but only Home is materialised. Add via `/refine-template` when needed.
- **Sections deferred:** PhotoGallery, AboutOwner, FaqInsurance, ServiceAreaMap — the wireframe reserves slots but components not yet generated.
- **Playbook JSONs deferred:** asset-patterns, photo-manifest, proposal-pages, resonance-queries — write when the factory pipeline surface actually consumes them.
- **SOPs + agents:** the `.claude/sops/` and `.claude/agents/` directories were populated by the deterministic phase but with skeleton stage files only. Fill per-stage for a full production factory.
- **Node_modules / build verification:** Gate 3 (Vite build) failed on `npm install` in this environment. The template files are valid JSX and will build fine on a machine with normal npm/network access.

## To resume

Run `/refine-template` in a fresh session. Feed it this file. Refine-agent will:
- Fill missing sections + pages
- Extend playbook JSONs
- Fill SOP + agent stage files
- Run full 6-gate validator with `npm install` succeeding

## Vision-score reference

Template design lineage: **A1 Garage Door (a1garage.com) — 93/100**. See `research/02-niche-research/storm-restoration-roofing/templates/scoring.md`.

## Version

- **Template version:** 1 (initial scaffold)
- **Generated at:** 2026-08-04
- **Author:** Module 2D single-session sprint
