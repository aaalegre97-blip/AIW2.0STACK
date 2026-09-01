# Storm-Restoration Roofing — Template Design Spec

**Version:** 1.0 · Generated 2026-08-04 · Winner reference: A1 Garage Door (a1garage.com, 93/100)

## Design intent

A high-conversion, tradesperson-native lead-gen site for storm-restoration roofing companies. Every design decision serves one goal: getting a homeowner with damaged roof to schedule a free inspection within 60 seconds of landing.

**Not this:** corporate brand-first design, editorial photography, subtle color palettes, thoughtful whitespace.
**This:** bold ALL CAPS section headers, black + red + white palette, phone number always visible, "Schedule Now" CTAs everywhere, service-first content, no soft asks.

## Design tokens (canonical)

- **Palette:** Black primary (#0a0a0a), red accent (#d22630), white surface. Neutrals via slate scale.
- **Typography:** Oswald (heading, industrial condensed) + Barlow (body, geometric sans). Both Google Fonts.
- **Motion:** Energetic preset (stagger 50ms, duration 400ms). Sharp cuts, no lingering fades.
- **Shape:** Sharp corners. No rounded-full pills except phone/text buttons.
- **Theme mode:** Light (white surfaces, black text, red CTAs).

## Voice + tone

- **Register:** Tradesperson-native. Direct, plain-English, service-first.
- **Sentences:** Short. Punchy. One idea each.
- **All-caps sections:** Section headers in `Oswald` uppercase for maximum scannability.
- **CTAs:** Action verbs only. "SCHEDULE NOW", "GET MY FREE INSPECTION", "CALL {phone}". Never "Learn more".
- **Insurance advocacy language:** Standard phrases — "We handle the claim on your behalf", "You pay only your deductible", "We fight your insurance denial".
- **Copy locks:** No em-dashes. No AI-vocab (leverage, synergize, robust, seamless, cutting-edge, game-changer).

## Trust signals to lead with (from research file 05-trust-signals.md)

1. Manufacturer certifications: **GAF Master Elite**, **Owens Corning Platinum**, **CertainTeed SELECT**
2. State license number (displayed with numeric value, not just "Licensed" badge)
3. BBB A+ / Google reviews aggregate ("4.9 ★ · 847 reviews")
4. Insurance carrier logos ("Allstate · State Farm · Farmers · USAA · we work with all")
5. Photo/video testimonials with insurance-battle mentions

## CRO patterns to implement (from research file 04-cro-patterns.md)

- Hero: massive phone number in header (click-to-call). Hero H1 in Oswald 3xl-5xl uppercase. Primary CTA button in red. Trust badge strip below hero.
- Section order: Hero → Insurance-advocate process → Services grid → Trust bar → Reviews strip → Photo gallery → About → FAQ → Service area → Final CTA form.
- Forms: Multi-step. Step 1: "Do you have insurance?" (Y/N filter). Step 2: name/phone/ZIP.
- Sticky mobile bottom bar: Call | Text | Book — three tap targets, always visible.
- Exit-intent (desktop only): "Get an emergency inspection within 4 hours" popup.

## Divergence from universal converting wireframe

- Trust badges above the fold (before services). Storm-restoration industry has a scammy reputation; certs must neutralize fear before the offer lands.
- Phone-first CTA on mobile, form-first on desktop. Mitigation is a call business.
- Insurance-advocate section between hero and services (roofing-specific, not in the universal template).

## Sections list (drives Phase 6 component generation)

Every section below becomes one .jsx component in `src/components/`. Each imports `brandDNA` from `../config/brand-dna.js`. Each honors `prefers-reduced-motion`.

1. **HeaderBar.jsx** — logo + phone (click-to-call) + primary CTA + hamburger on mobile
2. **HeroStormRestoration.jsx** — bold ALL CAPS H1, subhead about insurance advocacy, primary CTA button, secondary "Text a photo" CTA, hero image (drone shot of finished roof)
3. **TrustBadgeStrip.jsx** — GAF Master Elite / Owens Corning Platinum / BBB A+ / State License #{n} / $1M Insured — 4-6 badges in a horizontal strip
4. **InsuranceAdvocateProcess.jsx** — 3-step visual: "1. Free Inspection → 2. We fight your claim → 3. Full roof, deductible only"
5. **ServicesGrid.jsx** — 4-card grid: Storm Damage Inspection · Insurance Claim Help · Full Roof Replacement · Emergency Tarping
6. **ReviewsStrip.jsx** — 4-6 Google review snippets with 5-star display and reviewer name/city
7. **PhotoGallery.jsx** — before/after storm damage → finished roof. Drone photography preferred.
8. **AboutOwner.jsx** — founder photo, short story, local roots, license number displayed
9. **FaqInsurance.jsx** — 5-7 accordion FAQs: "Will you handle my insurance?", "What if my claim is denied?", "How long does it take?", "What's my out-of-pocket cost?", "What certifications do you have?"
10. **ServiceAreaMap.jsx** — cities served + service radius, ideally embedded Google Maps
11. **FinalCta.jsx** — big red CTA block: form (multi-step) + phone + text option
12. **StickyMobileBar.jsx** — persistent mobile-only bottom bar: Call · Text · Book
13. **Footer.jsx** — NAP (name, address, phone), quick links, license info

## Copy locks (paste-ready per-section defaults)

- **Hero headline:** "ROOF DAMAGED IN THE STORM? WE HANDLE YOUR INSURANCE CLAIM. YOU PAY ONLY YOUR DEDUCTIBLE."
- **Hero subhead:** "Free storm-damage inspection in 24 hours. GAF Master Elite roofers with public-adjuster relationships."
- **Trust bar tagline:** "The credentials that qualify us to fight your claim."
- **Insurance advocate step 1:** "FREE INSPECTION — We climb the roof with drone + moisture readings and write the damage report your insurance can't ignore."
- **Insurance advocate step 2:** "WE FIGHT YOUR CLAIM — Our public adjuster partners reverse denials and negotiate full replacements. You do nothing."
- **Insurance advocate step 3:** "FULL ROOF, DEDUCTIBLE ONLY — Insurance pays the contract. Your only out-of-pocket is your policy deductible."
- **Services card 1:** "STORM DAMAGE INSPECTION" · "Same-day inspection. Drone + attic + moisture. Full report for your adjuster."
- **Services card 2:** "INSURANCE CLAIM HELP" · "We work with your carrier and, when needed, bring in a certified public adjuster."
- **Services card 3:** "FULL ROOF REPLACEMENT" · "GAF Master Elite installation. Manufacturer warranty backed. Cleanup guaranteed."
- **Services card 4:** "EMERGENCY TARPING" · "24-hour emergency response. Prevent water damage before the insurance adjuster arrives."
- **Final CTA:** "GET A FREE STORM DAMAGE INSPECTION. NO PRESSURE. NO OBLIGATION. YOU PICK THE TIME."
