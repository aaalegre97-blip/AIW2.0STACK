import { brandDNA } from '../config/brand-dna.js';

const DEFAULT_REVIEWS = [
  { name: 'Sarah M.', city: 'Dallas', text: 'The insurance only approved a repair but the team worked their magic and got my roof fully replaced. Deductible only.', stars: 5 },
  { name: 'James R.', city: 'Frisco', text: 'Free inspection. Honest guys. They actually told me my roof was fine and left. Called them back a year later after the hail storm.', stars: 5 },
  { name: 'Linda T.', city: 'Plano', text: 'From storm damage to new roof in 12 days. Full communication throughout. Every step was explained.', stars: 5 },
  { name: 'Michael D.', city: 'Arlington', text: 'The whole insurance process was smooth. Their project manager handled everything. I just answered questions when asked.', stars: 5 },
];

export default function ReviewsStrip() {
  const reviews = brandDNA.reviews?.length ? brandDNA.reviews : DEFAULT_REVIEWS;

  return (
    <section id="reviews" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-accent text-2xl">★ ★ ★ ★ ★</span>
            <span className="font-body text-primary text-lg">4.9 · 847 Google Reviews</span>
          </div>
          <h2 className="font-heading uppercase text-3xl md:text-5xl text-primary leading-tight">
            Homeowners Talk. We Listen.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-surface-alt p-6 border-t-2 border-accent">
              <div className="text-accent text-lg mb-3">
                {'★'.repeat(r.stars || 5)}
              </div>
              <p className="font-body text-neutral-dim italic leading-relaxed">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="mt-4 font-heading uppercase text-sm text-primary tracking-wider">
                {r.name} &middot; {r.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
