import { brandDNA } from '../config/brand-dna.js';

export default function StickyMobileBar() {
  const telLink = brandDNA.contact.phoneTelLink;
  const smsLink = `sms:${telLink.replace('tel:', '')}`;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-primary border-t-2 border-accent">
      <div className="grid grid-cols-3">
        <a
          href={telLink}
          className="flex flex-col items-center justify-center py-3 text-white hover:bg-primary-slate transition-colors"
        >
          <span className="text-accent text-xl">&#9742;</span>
          <span className="font-heading uppercase text-xs tracking-wider">Call</span>
        </a>
        <a
          href={smsLink}
          className="flex flex-col items-center justify-center py-3 text-white hover:bg-primary-slate transition-colors border-l border-r border-primary-slate"
        >
          <span className="text-accent text-xl">&#9993;</span>
          <span className="font-heading uppercase text-xs tracking-wider">Text</span>
        </a>
        <a
          href="#final-cta"
          className="flex flex-col items-center justify-center py-3 bg-accent text-white hover:bg-accent-dark transition-colors"
        >
          <span className="text-xl">&#128197;</span>
          <span className="font-heading uppercase text-xs tracking-wider">Book</span>
        </a>
      </div>
    </div>
  );
}
