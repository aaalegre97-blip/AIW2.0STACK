# Storm-Restoration Roofing — Starter Design Template (Sub-task 8)

**Purpose:** Provide Module 2D (`/build-niche-template`) with a curated shortlist of best-of-niche websites to capture via Apify, score via Claude Vision, and use as the design DNA for the niche-specific Vite + React template inside the factory.

## Target website shortlist (10 candidates for capture + scoring)

Module 2D will visit each of these, capture desktop and mobile screenshots, extract DOM structure, and score them on the CRO/trust patterns identified in `04-cro-patterns.md` and `05-trust-signals.md`. The top 1-2 winners become the visual/structural reference for the factory template.

### National / well-known storm-restoration roofer sites

1. **Erie Home** — https://eriehome.com (national, metal roofing but storm-restoration-adjacent; strong lead-gen design)
2. **DaBella** — https://dabella.us (national storm-restoration roofer/exterior; well-branded)
3. **Long Roofing** — https://longroofing.com (Mid-Atlantic storm-restoration; long-tenured brand)
4. **Roof It Right / Kanga Roof** — assorted regional players with polished sites

### Dallas-market storm-restoration references (from the review corpus)

5. **Berkshire Roofing** — mentioned repeatedly in Dallas reviews (verify URL)
6. **Ready Roofing and Solar** — dallas market presence (verify URL)
7. **Shepherd Roofing and Renovations** — Dallas market
8. **ARS (All Roofing Solutions)** — mentioned by name in tornado-recovery review
9. **Empire Roofing & Solar** — Dallas market
10. **Southern Select Roofing** — Dallas market

## What Module 2D should extract and score

For each captured site, score on:

**Hero patterns (weight: high)**
- Above-fold phone number prominence (score 1-5)
- Trust badge stack visible above fold (Y/N + which badges)
- Hero image style (drone-finished-roof / crew-in-action / neither)
- Primary CTA type (phone / form / instant quote)

**Trust stack (weight: high)**
- Manufacturer certifications displayed (GAF Master Elite, Owens Corning Platinum, CertainTeed) — Y/N
- BBB rating + accreditation displayed — Y/N
- Google reviews aggregate + count visible — Y/N
- Insurance carrier logos or "we work with" language — Y/N
- License number displayed with actual number — Y/N

**Section order (weight: medium)**
- Position of trust bar (immediately below hero = best)
- Position of insurance-advocate section
- Position of photo gallery / before-after
- Presence of storm-event-triggered content (recent storm mentions)

**Copy language (weight: medium)**
- Speaks the insurance-advocate playbook (deductible-only, public adjuster, denial-reversal) — Y/N
- Uses honest-not-pushy tone — Y/N
- Emergency-response commitment with a time number — Y/N

**Mobile UX (weight: high)**
- Sticky phone/text/book bottom bar — Y/N
- Click-to-call functional and prominent — Y/N
- Hero copy readable without zoom — Y/N
- Form fields ≤4 above fold — Y/N

## Scoring rubric (total /50)

- Hero patterns: 15 pts
- Trust stack: 15 pts
- Section order: 10 pts
- Copy language: 5 pts
- Mobile UX: 5 pts

The 1-2 sites scoring 40+ become the visual + structural reference. Module 2D then generates the factory's niche template based on those winners.

## Recommended stack for the template (input to Module 2D)

Based on this research, the factory's storm-restoration-roofing template should be built with:

- **Framework:** Vite + React + TypeScript + Tailwind (aligned with factory defaults)
- **Sections included by default:**
  1. Hero (drone image + phone-first + trust badge strip)
  2. 3-step "how it works" (insurance-advocate process)
  3. Services grid (Roof replacement, Roof repair, Storm inspection, Insurance claim help)
  4. Trust stack (manufacturer certs + BBB + Google reviews + insurance carriers)
  5. Photo gallery (before/after storm damage)
  6. About / owner story
  7. Reviews strip (Google widget or manual pull)
  8. FAQ (insurance-focused questions)
  9. Service area (cities served + map)
  10. Final CTA (form + phone + text)

- **Component library:**
  - Sticky mobile bottom bar (phone/text/book)
  - Persistent header phone number
  - Multi-step lead form (Step 1: insurance Y/N, Step 2: contact)
  - Instant-inspection request module
  - Storm-event alert banner (dynamic based on recent weather)

- **Copy defaults (paste-ready swipes for the factory):**
  1. Hero: "Roof damaged in the {storm event}? We handle your insurance claim. You pay just your deductible."
  2. About: "{City}'s honest roofer. If your roof doesn't need replacing, we tell you."
  3. Trust bar: "GAF Master Elite · BBB A+ · IICRC · {state} License #____ · $1M Insured"
  4. FAQ intro: "Everything you want to ask your roofer but might not know how to phrase."
  5. Final CTA: "Get a free storm damage inspection. No pressure. No obligation. No robocalls."

## Handoff note to Module 2D

Module 2D uses the `template-capture-and-build` skill. When Alan runs `/build-niche-template`, that skill will:
1. Visit the 10 sites above via Apify Website Content Crawler + screenshot actor
2. Score each via Claude Vision using the rubric here
3. Pick 1-2 winners
4. Scaffold a Vite + React template at `website-factory/templates/storm-restoration-roofing/`
5. Register the niche in `website-factory/config/template-routes.json`
6. Set `m2d.templateBuilt = true`

Expected Apify cost for Module 2D: $3-$5. Expected wall clock: 45-90 minutes.

## Freshness note

The Dallas-market sites (items 5-10) are pulled from the mined Google Maps review corpus and their URLs need verification before Module 2D captures them. The national sites (items 1-4) are stable brands. Module 2D should validate URLs before starting the capture phase.
