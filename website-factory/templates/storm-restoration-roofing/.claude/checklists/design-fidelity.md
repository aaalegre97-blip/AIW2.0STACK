# Design Fidelity Checklist — Storm-Restoration Roofing

Verify every client build against the canonical design DNA.

## Palette

- [ ] Primary is black (#0a0a0a) or near-black
- [ ] Accent is red (#d22630 family) — used only for CTAs and highlight elements
- [ ] Surface is white (#ffffff)
- [ ] Neutrals from the slate scale
- [ ] No unauthorized colors introduced (only tokens from theme.json)

## Typography

- [ ] Headings use Oswald (or client-brand equivalent condensed display font)
- [ ] Body uses Barlow
- [ ] Section headers are UPPERCASE with tight letter-spacing
- [ ] Hero H1 is 5xl-7xl on desktop, 4xl-5xl on mobile
- [ ] No more than 2 font families in use total

## Layout

- [ ] Container max-width 1200px (max-w-7xl)
- [ ] Section vertical padding py-16 desktop / py-10 mobile
- [ ] Cards have border-l-4 or border-t-2 in accent color
- [ ] Sharp corners on cards (radius 0-4px)
- [ ] Buttons have 4px radius

## Section presence (home page)

- [ ] HeaderBar (sticky, black bg, phone in header)
- [ ] HeroStormRestoration (bold H1, red primary CTA, secondary "text a photo")
- [ ] TrustBadgeStrip (5 badges, license number below)
- [ ] InsuranceAdvocateProcess (3-step visual with numbered cards)
- [ ] ServicesGrid (4-card grid, red left border)
- [ ] ReviewsStrip (4 review cards + aggregate rating at top)
- [ ] FinalCta (multi-step form: insurance Y/N then contact)
- [ ] Footer (NAP + license)
- [ ] StickyMobileBar (mobile only)

## Motion

- [ ] Reveals on scroll use fade + 12px translate-up
- [ ] Motion respects prefers-reduced-motion
- [ ] Hero is static (no auto-play video)
- [ ] Button hover transitions under 200ms

## Mobile-specific

- [ ] StickyMobileBar visible at all times on mobile
- [ ] Header phone number tap target 44x44 minimum
- [ ] Hero CTAs stack vertically on mobile
- [ ] Multi-step form step 1 fits above the fold on mobile
