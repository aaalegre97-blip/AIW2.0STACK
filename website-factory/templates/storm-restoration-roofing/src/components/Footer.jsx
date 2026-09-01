import { brandDNA } from '../config/brand-dna.js';

export default function Footer() {
  const co = brandDNA.company;
  const addr = brandDNA.address;
  const contact = brandDNA.contact;

  return (
    <footer className="bg-primary-dark text-silver py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-4 gap-8">
        <div>
          <p className="font-heading uppercase text-white text-xl tracking-wide">
            {co.name}
          </p>
          <p className="mt-3 font-body text-sm leading-relaxed">
            {co.description}
          </p>
        </div>
        <div>
          <p className="font-heading uppercase text-white text-sm tracking-wider mb-3">
            Contact
          </p>
          <a href={contact.phoneTelLink} className="block font-body hover:text-accent transition-colors">
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="block font-body hover:text-accent transition-colors">
            {contact.email}
          </a>
          <p className="mt-3 font-body text-sm">
            {addr.full}
          </p>
        </div>
        <div>
          <p className="font-heading uppercase text-white text-sm tracking-wider mb-3">
            Services
          </p>
          <a href="/services" className="block font-body hover:text-accent transition-colors">Storm Damage Inspection</a>
          <a href="/services" className="block font-body hover:text-accent transition-colors">Insurance Claim Help</a>
          <a href="/services" className="block font-body hover:text-accent transition-colors">Full Roof Replacement</a>
          <a href="/services" className="block font-body hover:text-accent transition-colors">Emergency Tarping</a>
        </div>
        <div>
          <p className="font-heading uppercase text-white text-sm tracking-wider mb-3">
            Company
          </p>
          <a href="/about" className="block font-body hover:text-accent transition-colors">About</a>
          <a href="/contact" className="block font-body hover:text-accent transition-colors">Contact</a>
          {co.licenseNumber && (
            <p className="mt-3 font-body text-xs opacity-70">
              License #{co.licenseNumber}
            </p>
          )}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 mt-10 pt-6 border-t border-primary-slate">
        <p className="font-body text-xs opacity-60">
          &copy; {new Date().getFullYear()} {co.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
