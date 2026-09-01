import { brandDNA } from '../config/brand-dna.js';

export default function HeroStormRestoration() {
  const hero = brandDNA.pages?.home?.hero || {};
  const city = brandDNA.address.city;
  const phone = brandDNA.contact.phone;
  const telLink = brandDNA.contact.phoneTelLink;

  const headline = hero.headline || 'ROOF DAMAGED IN THE STORM? WE HANDLE YOUR INSURANCE CLAIM.';
  const subhead = hero.subhead || `Free storm-damage inspection in ${city}. You pay only your deductible.`;
  const primaryCtaLabel = hero.primaryCtaLabel || 'Get My Free Inspection';
  const primaryCtaHref = hero.primaryCtaHref || '#final-cta';
  const secondaryCtaLabel = hero.secondaryCtaLabel || 'Text a photo';
  const secondaryCtaHref = hero.secondaryCtaHref || `sms:${telLink.replace('tel:', '')}`;

  return (
    <section className="relative bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-32 lg:py-40">
        <div className="max-w-4xl">
          <h1 className="font-heading uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
            {headline}
          </h1>
          <p className="mt-6 font-body text-lg md:text-xl text-silver max-w-2xl">
            {subhead}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={primaryCtaHref}
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-heading text-lg uppercase tracking-wider hover:bg-accent-dark transition-colors"
            >
              {primaryCtaLabel}
            </a>
            <a
              href={secondaryCtaHref}
              className="inline-flex items-center gap-2 font-body text-white/90 hover:text-accent-light transition-colors underline underline-offset-4"
            >
              {secondaryCtaLabel} &rarr;
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-silver font-body">
            <span className="text-accent">★ ★ ★ ★ ★</span>
            <span>4.9 average · 847 Google reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
