import { useState } from 'react';
import { brandDNA } from '../config/brand-dna.js';

export default function FinalCta() {
  const phone = brandDNA.contact.phone;
  const telLink = brandDNA.contact.phoneTelLink;
  const [step, setStep] = useState(1);
  const [insured, setInsured] = useState(null);

  return (
    <section id="final-cta" className="bg-primary text-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
        <p className="font-heading uppercase text-sm tracking-widest text-accent mb-3">
          Ready to move
        </p>
        <h2 className="font-heading uppercase text-3xl md:text-5xl leading-tight">
          Get a Free Storm-Damage Inspection
        </h2>
        <p className="mt-4 font-body text-lg text-silver max-w-2xl mx-auto">
          No pressure. No obligation. You pick the time. We handle the insurance.
        </p>

        <div className="mt-10 bg-white text-primary p-6 md:p-10 max-w-2xl mx-auto text-left shadow-2xl">
          {step === 1 && (
            <div>
              <p className="font-heading uppercase text-lg tracking-wide">
                Step 1 of 2 &middot; Do you have homeowners insurance?
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => { setInsured(true); setStep(2); }}
                  className="py-4 bg-accent text-white font-heading uppercase tracking-wider hover:bg-accent-dark transition-colors"
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => { setInsured(false); setStep(2); }}
                  className="py-4 border-2 border-primary text-primary font-heading uppercase tracking-wider hover:bg-primary hover:text-white transition-colors"
                >
                  No / Not Sure
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); }}>
              <p className="font-heading uppercase text-lg tracking-wide">
                Step 2 of 2 &middot; Where should we send your inspection report?
              </p>
              {insured === false && (
                <p className="font-body text-sm text-neutral-dim">
                  No insurance? No problem. We&apos;ll still give you a free inspection and a written quote.
                </p>
              )}
              <div>
                <label htmlFor="name" className="block font-body text-sm uppercase tracking-wider">Full name</label>
                <input id="name" name="name" required className="mt-1 w-full px-4 py-3 border-2 border-silver focus:border-accent outline-none" />
              </div>
              <div>
                <label htmlFor="phone" className="block font-body text-sm uppercase tracking-wider">Phone</label>
                <input id="phone" name="phone" type="tel" required className="mt-1 w-full px-4 py-3 border-2 border-silver focus:border-accent outline-none" />
              </div>
              <div>
                <label htmlFor="zip" className="block font-body text-sm uppercase tracking-wider">ZIP</label>
                <input id="zip" name="zip" required className="mt-1 w-full px-4 py-3 border-2 border-silver focus:border-accent outline-none" />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-accent text-white font-heading uppercase tracking-wider hover:bg-accent-dark transition-colors"
              >
                Book My Inspection
              </button>
            </form>
          )}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 text-silver font-body">
          <span>Or call us directly:</span>
          <a href={telLink} className="font-heading text-2xl text-white hover:text-accent transition-colors tracking-wide">
            {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
