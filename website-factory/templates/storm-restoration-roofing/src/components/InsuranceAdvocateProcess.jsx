const DEFAULT_STEPS = [
  {
    number: '1',
    title: 'Free Inspection',
    body: 'We climb the roof with drone plus moisture meter and write the damage report your insurance can\'t ignore.',
  },
  {
    number: '2',
    title: 'We Fight Your Claim',
    body: 'Our public adjuster partners reverse denials and negotiate full replacements. You do nothing.',
  },
  {
    number: '3',
    title: 'Full Roof, Deductible Only',
    body: 'Insurance pays the contract. Your only out-of-pocket is your policy deductible.',
  },
];

export default function InsuranceAdvocateProcess() {
  const steps = DEFAULT_STEPS;

  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="font-heading uppercase text-sm tracking-widest text-accent mb-3">
            How it works
          </p>
          <h2 className="font-heading uppercase text-3xl md:text-5xl text-primary leading-tight">
            You Focus on Your Home. We Fight the Insurance Company.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative bg-white border-t-4 border-accent p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="font-heading text-6xl md:text-7xl text-silver leading-none">
                {s.number}
              </div>
              <h3 className="mt-2 font-heading uppercase text-xl md:text-2xl text-primary tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 font-body text-neutral-dim leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
