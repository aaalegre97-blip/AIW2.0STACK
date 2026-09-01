# Website Factory Brief

**Generated:** 2026-08-04 by `/generate-wf-brief` · **Updated:** 2026-08-04 with first live client
**Niche focus for this build:** water-storm-mitigation (Vegas targeted)
**Underlying factory template:** storm-restoration-roofing v1, with mitigation overrides applied at Stages 6-7 (see "Template reuse plan for mitigation" section below)
**Client status:** ✅ FIRST LIVE CLIENT LANDED — Independent Restoration Services of Las Vegas (via warm rep intro).

---

## Stage 1 intake (4 required fields — hand these to `/run-factory`)

| Field | Value |
|---|---|
| businessName | `Independent Restoration Services of Las Vegas` |
| websiteUrl | `[TO-CAPTURE-AT-KICKOFF]` (new domain, not yet purchased — see "Domain decision" below) |
| phone | `[TO-CAPTURE-AT-KICKOFF]` (Vegas branch phone; national HQ is (615) 205-5523 which is not this branch) |
| email | `[TO-CAPTURE-AT-KICKOFF]` (Vegas contact — the rep is the intro, but the decision-maker's email is what goes here) |

Stage 1 auto-normalizes phone to digits+`+`, lowercases email, auto-prepends `https://` to the URL, and verifies the URL reaches a 2xx or 3xx response.

## Client override for this build

- **Deliverable:** fresh Vegas-targeted mitigation website. NOT a landing page on the parent `irs-247.com` national site. Standalone domain.
- **Parent company context:** Independent Restoration Services is a 30+ location national franchise, founded 2014, national HQ. The Vegas branch is the client. Their national site targets multi-location dispatch; the Vegas site targets Vegas homeowners with a monsoon/AC-condensate/burst-pipe crisis.
- **Warm channel:** Alan has a rep contact who introduced him. Not cold.
- **Reference offer pack:** `research/03-offer-pack-mitigation-vegas.md` (mitigation-Vegas variant of the primary offer).

## Domain decision (kickoff call task)

Client needs a domain. Suggest to them at kickoff:
- `irsvegas.com` — clean, brand-carrying, franchise-flexible
- `restorevegas.com` — SEO-strong on "restore" root
- `restorationvegas.com` — full keyword, longer
- `247restorevegas.com` — emergency-first, memorable
- `waterdamagelasvegas.com` — direct-match keyword, weakest brand

Recommend `irsvegas.com` (brand + memorability). Confirm at kickoff and register before Stage 4 (asset harvest) so all trust bar links resolve.

## Niche context (applies to every storm-restoration client — do not vary)

**Niche slug:** `storm-restoration-roofing`
**Target end customer:** homeowner with hail or storm damage, an insurance policy, and either a pending or denied claim. Insurance-driven purchase, $12k-$25k ticket, deductible-only economics.
**Preferred client archetype (Alan's Section 6 filter):** old-school tradesman owner, 45-60, blue-collar, gruff on the phone, handshake-close style. Small-to-mid roofer (3-15 employees, $500k-$3M revenue).

## Offer positioning (from `research/03-offer-pack.md`)

- **Public one-liner:** "I build high-converting websites and Meta ad funnels for storm-restoration roofers."
- **Full positioning:** "I help storm-restoration roofers win the trust of homeowners staring at hail damage and a denied or lowballed insurance claim, so they choose that roofer over the four other storm chasers already knocking their door."
- **Sales stage:** Stage 2 → 3. First 3 clients get free upfront design; $1,000 on approval; $3,800 across 60 days.
- **Speed guarantee:** homepage design mockup in 5 business days, live build in 21 days.

## Template design lineage

- **Reference site:** A1 Garage Door (a1garage.com) — scored 93/100 on the 8-category conversion rubric
- **Palette:** primary black (#0a0a0a), accent red (#d22630), surface white
- **Typography:** Oswald (heading, industrial condensed), Barlow (body)
- **Motion:** energetic preset (50ms stagger, 400ms duration)
- **Shape motif:** sharp corners

## Sections included in v1 template (populated components)

1. HeaderBar (sticky, phone in header, "Schedule Now" CTA)
2. HeroStormRestoration (bold ALL CAPS H1, red primary CTA)
3. TrustBadgeStrip (5 badges: GAF Master Elite, Owens Corning Platinum, BBB A+, Fully Licensed, $1M Insured)
4. InsuranceAdvocateProcess (3 steps: Free Inspection → We Fight the Claim → Full Roof, Deductible Only)
5. ServicesGrid (Storm Damage Inspection, Insurance Claim Help, Full Roof Replacement, Emergency Tarping)
6. ReviewsStrip (Google star aggregate + 4 review cards)
7. FinalCta (multi-step form: insurance Y/N → contact)
8. Footer (NAP + license + services + company)
9. StickyMobileBar (Call | Text | Book — mobile-only bottom bar)

**Deferred to `/refine-template`:** PhotoGallery, AboutOwner, FaqInsurance, ServiceAreaMap.

## Copy locks (from `niche-playbook/copy-locks.json`)

- **Voice:** tradesperson-native. Direct. Short sentences. Service-first.
- **Case rule:** UPPERCASE for section headers, sentence case for body.
- **Locked phrases:** "We handle your insurance claim. You pay only your deductible." · "Free storm-damage inspection. No pressure. No obligation." · "If your roof doesn't need replacing, we'll tell you and go home."
- **Banned phrases:** leverage, synergize, robust, seamless, cutting-edge, game-changer, world-class, innovative, solutions provider, best in class, second to none
- **Banned punctuation:** em-dashes (—)
- **CTA verbs allowed:** Schedule, Book, Get, Call, Text, Start, See, Meet
- **CTA verbs banned:** Learn more, Explore, Discover, Find out more

## Trust priorities (from `niche-playbook/trust-signals.json`)

Lead with in this order:
1. Manufacturer certifications (GAF Master Elite, Owens Corning Platinum, CertainTeed SELECT)
2. State license number (displayed with actual numeric value)
3. BBB A+
4. Google reviews aggregate
5. Insurance carrier logos ("we work with all major carriers")

Anti-patterns to avoid on every client build:
- Stock photos of "happy homeowners"
- Family-owned since {year} without a founder photo
- Generic "insurance experts" without naming carriers
- Testimonials with last-name-only signatures
- Pop-ups on first load

## Enrichment stages (auto-populated from client's live data)

Stages 2-7 fill these fields from the client's Google Business Profile, website, and follow-up questions:

| Field | Source stage | Where it lands in brand-dna |
|---|---|---|
| `company.tagline` | Stage 6 (copy-deck) | `brand-dna.json.company.tagline` |
| `company.description` | Stage 6 (copy-deck) | `brand-dna.json.company.description` |
| `company.licenseNumber` | Stage 1 (intake follow-up) | `brand-dna.json.company.licenseNumber` |
| `company.serviceRegion` | Stage 5 (strategy) | `brand-dna.json.company.serviceRegion` |
| `contact.googleMapsUrl` | Stage 2 (research) | `brand-dna.json.contact.googleMapsUrl` |
| `address.*` (street, city, state, zip) | Stage 1 (intake follow-up) or GBP scrape | `brand-dna.json.address.*` |
| `hours.*` | Stage 1 or GBP scrape | `brand-dna.json.hours.*` |
| `reviews[]` | Stage 2 (research — mine 6-10 top reviews from GBP) | `brand-dna.json.reviews[]` |
| `photos[]` | Stage 4 (asset-scraper) | `Client Assets/` folder |

## First client landed (was: prospect list)

**Client:** Independent Restoration Services of Las Vegas — landed via warm rep intro.

The original prospect list (5 Dallas-market storm-restoration roofers) in `research/03-offer-pack.md` still stands for the second roofing client. This first client is mitigation-Vegas because the warm channel opened faster than the cold outbound. Roofing DMs stay in-flight from the primary offer pack.

## Alignment between offer, template, and pipeline

- The offer promises a **homepage mockup in 5 business days** — Stage 6 (copy) + Stage 10.1 (build) must finish in that window.
- The offer promises **live build in 21 days** — full 13-stage run is timeboxed to 21 days from deposit.
- The offer's **retainer add-ons** ($1,500/mo for Meta ads, $3,000/mo full system) are outside the factory pipeline and are handled by Alan directly.
- The offer's **speed rule** (SMS + email within 1 minute of a new lead, phone in 5) becomes the **copy talking point** on the client's homepage — not a factory pipeline behavior.

## Template reuse plan for mitigation (per the mitigation-Vegas offer pack)

The `storm-restoration-roofing` template v1 is the only built template in the factory. Rather than build a full second template, we apply 3 overrides during the client run:

1. **Palette swap (Stage 7 brand-dna):** red accent (#d22630) → blue accent (#1e73be). Blue reads as trustworthy/insurance-professional; red reads as damage/urgency (right for roofing, wrong for mitigation).
2. **Copy swap (Stage 6 copywriting):**
   - Hero: "Water damage in Las Vegas? 60-minute response, 24/7." (replaces "Roof damaged in the storm")
   - Services grid: Water Extraction / Mold Remediation / Sewage Cleanup / Fire+Smoke (replaces roofing services)
   - Trust badge #1: IICRC (WRT + ASD + AMRT) — replaces GAF Master Elite
   - Insurance-advocate step 2: "24/7 emergency dispatch + we bill your carrier directly" (replaces public-adjuster reversal language)
3. **Hero image (Stage 9):** crew responding to a water event with drying equipment on-site OR a Vegas neighborhood after a monsoon burst — NOT "finished roof drone shot" from the roofing default.

The 3 changes are applied per-client via `copy-locks.json` overrides and `brand-dna.json` palette values. No factory rebuild required.

## Post-first-client action: build the proper mitigation template

After this client's site is live and Alan captures learnings via `/factory-feedback`, run `/build-niche-template` for slug `water-storm-mitigation` so the second mitigation client goes cleaner. That template will inherit the customizations that worked here.

## Missing but not blocking

These fields are unknown until Alan lands his first client, but the brief is complete without them:
- Full name of the owner (for `AboutOwner` component and email signatures)
- Photo of the owner (for `AboutOwner` component and testimonials)
- Founding year (for "since {year}" trust line)
- Specific manufacturer certifications the roofer actually holds (GAF Master Elite? Owens Corning Platinum? SELECT ShingleMaster? — auto-lookup possible via Stage 2 research)
- The roofer's own state license number (Alan asks in first call after DM reply)
- Preferred hero image style: drone shot of finished roof vs crew action shot (Stage 8 asks)

## Validation

- [x] Every required Stage 1 field either filled or marked `[TO-CAPTURE-AT-KICKOFF]` (with source noted)
- [x] Niche slug matches active niche in `stack-state.json` and `template-routes.json`
- [x] Template lineage (A1 Garage Door 93/100) documented
- [x] Mitigation overrides for palette + copy + hero image documented
- [x] Copy locks and trust priorities pulled from the actual `niche-playbook/*.json` files
- [x] Offer positioning matches `research/03-offer-pack-mitigation-vegas.md`
- [x] Enrichment stages mapped to canonical brand-dna paths
- [x] Domain decision options ready for kickoff
- [x] Post-first-client action (build proper mitigation template) noted

## Kickoff call checklist (Alan runs this before `/run-factory`)

Once the client is on a call, capture in this order:
1. Confirmed business name for the Vegas branch (may differ from what I put above)
2. Preferred domain (`irsvegas.com` recommended)
3. Vegas branch phone number
4. Primary contact email
5. IICRC certifications the crew actually holds (WRT? ASD? AMRT? all three?)
6. Insurance carriers they actually work with (starting list from national site: State Farm, Progressive, Liberty Mutual, Nationwide, Farmers, Geico, USAA, MetLife, The Hartford — confirm which Vegas honors)
7. Owner name + owner photo (for AboutOwner section — deferred in v1 template but include for future refine)
8. Vegas service radius (miles / ZIPs served)
9. 24/7 answering setup — do they have one? If not, this is an add-on Alan sells
10. Homeowner story to feature — one specific "crew was out within an hour" testimonial with permission to use publicly

Once fields 1-4 are captured, run `/run-factory` and the pipeline takes over.
