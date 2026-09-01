# Website Factory — Structure Overview

**Auto-generated:** 2026-08-04 by `/load-factory-structure`
**Source of truth:** `website-factory/` in this stack

## What the factory does

A deterministic per-client pipeline that builds and deploys niche-specific websites. Each client run goes through 13 gated stages (intake → research → SEO → assets → strategy → copy → brand DNA → hero image → build → QA → deploy → delivery → proposal). The active niche's template + playbook + QA checklists live at `templates/{niche-slug}/`; the factory is niche-agnostic scaffolding around those niche assets.

## Active niche

**storm-restoration-roofing** — template v1 at `website-factory/templates/storm-restoration-roofing/`, registered in `config/template-routes.json`.

## Pipeline stages (13)

| Stage | Name | Output location |
|---|---|---|
| 1 | Intake | `clients/[Client Name]/Pipeline Data/intake/intake-form.json` |
| 2 | Research | `clients/[Client Name]/Pipeline Data/research/` |
| 3 | SEO planning | `clients/[Client Name]/Pipeline Data/seo/` |
| 4 | Asset harvest | `clients/[Client Name]/[Client Name] Assets/` |
| 5 | Strategy | `clients/[Client Name]/Pipeline Data/strategy/` |
| 6 | Copywriting | `clients/[Client Name]/Pipeline Data/copy/` |
| 7 | Brand DNA | `clients/[Client Name]/Pipeline Data/brand/brand-dna.json` (APPROVAL GATE if confidence < 0.70) |
| 7.5 | Brand resonance | `clients/[Client Name]/Pipeline Data/brand-resonance/` (optional) |
| 9 | Hero image | `clients/[Client Name]/Pipeline Data/hero-image/` (before Stage 10.1) |
| 10.1 | Build | `clients/[Client Name]/[Client Name] Website/dist/` |
| 10.2 | Personalise | SEO injection, schema markup, sitemap.xml |
| 10.3 | Uplift | niche-specific polish |
| 10.4a-d | QA gates | design fidelity, SOP QA, build fidelity, perf (LCP < 3s) |
| 11 | Deploy | Vercel deploy config |
| 12 | Delivery | client-facing handoff |
| 13 | Proposal | `clients/[Client Name]/[Client Name] Proposal/` |

## Required intake fields (Stage 1)

Only **4 fields required** to kick off a client run:

1. `businessName` — used as-is for client folder name
2. `websiteUrl` — auto-prepends `https://` if missing; must be reachable
3. `phone` — normalized to digits + `+`
4. `email` — must contain `@`, lowercased

All other data (address, license, service area, hours, etc.) is enriched by later stages from the client's Google Business Profile, website capture, and Alan's follow-up questions.

## Canonical brand-dna shape

`references/brand-dna.shape.js` — 32-key data contract. Every component in every niche template reads canonical paths from this shape. Per-client values fill in via Stage 7 (brand-dna-agent). The shape covers:

- `meta` (title, description)
- `company` (name, shortName, tagline, url, licenseNumber, description, serviceRegion)
- `contact` (phone, phoneTelLink, email, googleMapsUrl, mapsEmbedUrl)
- `address` (street, city, state, zip, full, lat, lng)
- `hours` (weekday, saturday, sunday, display, emergencyBadge)
- `openingHours` (open, close, tz — for programmatic "open now" detection)
- `identity`, `palette`, `typography`, `motif`, `pages`, `copy`, `assets`, `services`, `reviews`

## Niche playbook schemas (11)

Per-niche playbook lives at `templates/{niche-slug}/niche-playbook/`. Schemas defined at `website-factory/references/niche-playbook/schemas/`:

- `asset-patterns.schema.json` — what image/asset types the niche needs
- `copy-locks.schema.json` — voice, banned phrases, locked lines
- `hero-mood-mapping.schema.json` — hero image composition rules
- `motion-preset.schema.json` — animation timing + easing
- `photo-manifest.schema.json` — required client photos + placeholders
- `process.schema.json` — the niche's "how it works" steps
- `proposal-pages.schema.json` — proposal document sections
- `resonance-queries.schema.json` — brand-resonance research queries
- `theme.schema.json` — palette + typography + shape
- `trust-signals.schema.json` — trust badges + insurance carrier logos
- `vocabulary.schema.json` — niche-specific vocabulary and phrasing

Status for storm-restoration-roofing: 6 of 11 populated in v1 (theme, trust-signals, copy-locks, process, motion-preset, hero-mood-mapping). Remaining 5 deferred to `/refine-template`.

## SOPs (universal — apply to every niche)

At `.claude/sops/`:
- `00-master-blueprint.md`, `01-intake.sop.md` → `06-copywriting.sop.md`, `08-hero-image.sop.md`, `10a-design-fidelity.sop.md`, `10b-personalize.sop.md`, `10b-sop-qa.sop.md`, `10c-uplift.sop.md`, `11-deploy.sop.md`, `12-delivery.sop.md`, `13-motion-system.sop.md`, `14-proposal.sop.md`, `14-seo-uplifts.sop.md`, `15-copy-resonance.sop.md`

Niche-specific overrides come from the playbook's `sop-overrides/` directory.

## Agents (19)

At `.claude/agents/`: intake, research, seo-audit, asset-scraper, strategy, copy-deck, brand-resonance, hero-image, build, build-fidelity, perf, personalize, uplift, delivery, deploy, proposal, brand-dna-agent, design-fidelity-qa-agent, sop-qa-agent.

## QA gates (Stage 10.4)

- **10.4a Design fidelity** — SSIM comparison vs niche template's reference render (WARN gate)
- **10.4b SOP QA** — universal SOP layer + per-niche checklist
- **10.4c Build fidelity** — DOM diff vs niche template's reference build
- **10.4d Performance** — Lighthouse LCP < 3s desktop AND mobile (HARD gate)

Per-niche checklists at `templates/{niche-slug}/.claude/checklists/sop-compliance.md` and `design-fidelity.md`. Storm-restoration versions were written in v1.

## Deploy target

Vercel (via CLI). Reads `websites-factory/.env.local` for `VERCEL_TOKEN` if set, otherwise uses the logged-in Vercel CLI session from `/setup`.

## Handoff format for Module 5

The Module 5 brief (`/generate-wf-brief`) produces `research/output/website-factory-brief.md` structured to fill the 4 required intake fields plus enrichment hints derived from the niche research. The brief is a paste-into-Stage-1-intake artifact.
