import { brandDNA } from '../config/brand-dna.js';

const DEFAULT_BADGES = [
  { label: 'GAF Master Elite' },
  { label: 'Owens Corning Platinum' },
  { label: 'BBB A+' },
  { label: 'Fully Licensed' },
  { label: '$1M Insured' },
];

export default function TrustBadgeStrip() {
  const license = brandDNA.company.licenseNumber;
  const badges = DEFAULT_BADGES;

  return (
    <section className="bg-primary-dark text-white py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="font-heading uppercase text-center text-sm tracking-widest text-silver mb-6">
          The credentials that qualify us to fight your claim
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {badges.map((b, i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-center">
              <div className="w-14 h-14 rounded-full border-2 border-accent flex items-center justify-center bg-primary">
                <span className="font-heading text-accent text-xl">{(b.label || '?').charAt(0)}</span>
              </div>
              <span className="font-body text-sm uppercase tracking-wide text-silver">
                {b.label}
              </span>
            </div>
          ))}
        </div>
        {license && (
          <p className="mt-6 font-body text-center text-xs text-silver/70">
            State License #{license}
          </p>
        )}
      </div>
    </section>
  );
}
