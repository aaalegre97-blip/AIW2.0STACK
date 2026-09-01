import { brandDNA } from '../config/brand-dna.js';

export default function HeaderBar() {
  const phone = brandDNA.contact.phone;
  const telLink = brandDNA.contact.phoneTelLink;
  const companyName = brandDNA.company.name;

  return (
    <header className="sticky top-0 z-40 w-full bg-primary text-white border-b-2 border-accent">
      <div className="mx-auto max-w-7xl px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        <a href="/" className="font-heading text-xl md:text-2xl uppercase tracking-wide">
          {companyName}
        </a>
        <nav className="hidden md:flex items-center gap-8 font-body text-sm uppercase tracking-wider">
          <a href="/" className="hover:text-accent transition-colors">Home</a>
          <a href="/services" className="hover:text-accent transition-colors">Services</a>
          <a href="/about" className="hover:text-accent transition-colors">About</a>
          <a href="/contact" className="hover:text-accent transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href={telLink}
            className="hidden sm:inline font-heading text-lg md:text-2xl tracking-wide hover:text-accent transition-colors"
          >
            {phone}
          </a>
          <a
            href="#final-cta"
            className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-accent text-white font-heading text-sm md:text-base uppercase tracking-wider hover:bg-accent-dark transition-colors"
          >
            Schedule Now
          </a>
        </div>
      </div>
    </header>
  );
}
