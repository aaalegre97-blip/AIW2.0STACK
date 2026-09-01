# Storm-Restoration Roofing — Wireframe

**Version:** 1.0 · Generated 2026-08-04

## Home page (/) — section order

```
[HeaderBar] logo | nav | phone-number | primary-CTA
─────────────────────────────────────────────────────────
[HeroStormRestoration]
    background: dark charcoal photo (drone shot of finished roof)
    H1 (Oswald 4xl-5xl uppercase, white): "ROOF DAMAGED IN THE STORM?"
    Subhead: "We handle your insurance claim. You pay only your deductible."
    Primary CTA (red button): "GET MY FREE INSPECTION"
    Secondary CTA (text link): "Text a photo →"
─────────────────────────────────────────────────────────
[TrustBadgeStrip]
    GAF Master Elite · Owens Corning Platinum · BBB A+ · License #____ · $1M Insured
─────────────────────────────────────────────────────────
[InsuranceAdvocateProcess]
    (3-column, icons + numbered)
    1. FREE INSPECTION → 2. WE FIGHT YOUR CLAIM → 3. FULL ROOF, DEDUCTIBLE ONLY
─────────────────────────────────────────────────────────
[ServicesGrid]
    4-card grid:
    - STORM DAMAGE INSPECTION
    - INSURANCE CLAIM HELP
    - FULL ROOF REPLACEMENT
    - EMERGENCY TARPING
─────────────────────────────────────────────────────────
[ReviewsStrip]
    5-star Google review aggregate at top ("4.9 ★ from ___ reviews")
    4-6 review cards with reviewer name + first initial + city
─────────────────────────────────────────────────────────
[PhotoGallery]
    Before/After grid: storm damage → finished roof
    (Drone photography preferred)
─────────────────────────────────────────────────────────
[AboutOwner]
    Owner photo (left) | Bio + story + local-roots (right)
    License number + years in business displayed
─────────────────────────────────────────────────────────
[FaqInsurance]
    Accordion: 5-7 insurance-focused FAQs
─────────────────────────────────────────────────────────
[ServiceAreaMap]
    Cities served list + embedded Google Maps of service radius
─────────────────────────────────────────────────────────
[FinalCta]
    Big red block:
    "GET A FREE STORM DAMAGE INSPECTION"
    Multi-step form (Step 1: insurance Y/N | Step 2: name/phone/ZIP)
    Phone + Text CTAs alongside
─────────────────────────────────────────────────────────
[Footer]
    NAP, license, service areas, hours, quick links
─────────────────────────────────────────────────────────
[StickyMobileBar] (mobile only, position: fixed bottom)
    [Call] [Text] [Book]
```

## About page (/about)

- HeaderBar
- AboutOwner (expanded — full story, team photos)
- TrustBadgeStrip
- ReviewsStrip
- FinalCta
- Footer

## Services page (/services)

- HeaderBar
- HeroServicesPage (compact hero — "Our Services" H1)
- ServicesGrid (expanded — each service is a card that links to a detail sub-page)
- InsuranceAdvocateProcess
- ReviewsStrip
- FinalCta
- Footer

## Hero image treatment

- Primary hero image: aerial drone shot of a finished roof, evening light, dramatic angle
- Fallback: crew-on-roof action shot
- Never: crumbling/damaged roof (that's the fear, don't lead)
- Overlay: subtle dark gradient (25% black at bottom) for text legibility

## Mobile UX layer

- StickyMobileBar always visible at bottom of viewport
- All headings scale down (5xl → 3xl on mobile)
- Phone number in header becomes an icon-only tap target
- Multi-step form starts collapsed on mobile — hero CTA opens step 1
- No hamburger overlay for phone: even collapsed, phone stays visible in header

## Grid + spacing

- Container max-width: 1200px on desktop
- Section vertical spacing: py-16 desktop / py-10 mobile
- Card border-radius: 8px (sharp but not aggressive)
- Button border-radius: 4px (near-sharp for trades feel)
- Font sizes:
    - Hero H1: text-5xl md:text-6xl lg:text-7xl (Oswald)
    - Section H2: text-3xl md:text-4xl (Oswald uppercase)
    - Body: text-base md:text-lg (Barlow)

## Motion

- Section reveals: fade-in + 12px translate-up on scroll (respect prefers-reduced-motion)
- Button hover: 100ms color darken on accent, subtle scale-95 on active
- Hero: no auto-play video, static image (performance + storm-restoration audience prefers stable imagery to flashy motion)
