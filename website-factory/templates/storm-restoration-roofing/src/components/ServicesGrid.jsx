import { brandDNA } from '../config/brand-dna.js';

const DEFAULT_SERVICES = [
  {
    title: 'Storm Damage Inspection',
    body: 'Same-day inspection. Drone plus attic plus moisture readings. Full report for your adjuster.',
    ctaLabel: 'Book Inspection',
  },
  {
    title: 'Insurance Claim Help',
    body: 'We work with your carrier and, when needed, bring in a certified public adjuster.',
    ctaLabel: 'Start My Claim',
  },
  {
    title: 'Full Roof Replacement',
    body: 'GAF Master Elite installation. Manufacturer warranty backed. Cleanup guaranteed.',
    ctaLabel: 'Get a Quote',
  },
  {
    title: 'Emergency Tarping',
    body: '24-hour emergency response. Prevent water damage before the insurance adjuster arrives.',
    ctaLabel: 'Call Now',
  },
];

export default function ServicesGrid() {
  const services = brandDNA.services?.length ? brandDNA.services : DEFAULT_SERVICES;

  return (
    <section id="services" className="bg-surface-alt py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="font-heading uppercase text-sm tracking-widest text-accent mb-3">
            What we do
          </p>
          <h2 className="font-heading uppercase text-3xl md:text-5xl text-primary leading-tight">
            Storm-Restoration Roofing Services
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-6 md:p-8 flex flex-col shadow-md hover:shadow-xl transition-shadow border-l-4 border-accent">
              <h3 className="font-heading uppercase text-lg md:text-xl text-primary tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 font-body text-neutral-dim leading-relaxed flex-grow">
                {s.body}
              </p>
              <a
                href="#final-cta"
                className="mt-6 inline-flex items-center font-heading uppercase text-sm tracking-wider text-accent hover:text-accent-dark transition-colors"
              >
                {s.ctaLabel} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
