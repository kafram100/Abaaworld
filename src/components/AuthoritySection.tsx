const facets = [
  { label: "Enterprise Builder", body: "Creates systems, not projects." },
  { label: "Thought Leader", body: "Writes, reflects, speaks, builds ideas." },
  { label: "Practitioner", body: "Healthcare. Operations. Logistics. Execution." },
  { label: "Ethical Leader", body: "Trust. Stewardship. Values. Service." },
  { label: "Builder of Human Potential", body: "Education, mentorship, faith-inspired growth." },
];

export default function AuthoritySection() {
  return (
    <section className="py-24 md:py-32 bg-ivory-warm">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-6">Global Authority</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">
            A founder whose authority is built across five dimensions.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-stone/40 border border-stone/40">
          {facets.map((f) => (
            <div key={f.label} className="bg-ivory p-8 min-h-[200px] flex flex-col justify-between">
              <p className="section-label text-gold mb-4">0{facets.indexOf(f) + 1}</p>
              <div>
                <h3 className="font-serif text-2xl text-navy mb-3 leading-tight">{f.label}</h3>
                <p className="font-sans text-sm font-light text-charcoal/65 leading-relaxed">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
