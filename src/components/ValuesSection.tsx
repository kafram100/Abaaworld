const values = [
  { name: "Excellence", native: "Ihsan", body: "The discipline of doing things beautifully, every time." },
  { name: "Trust", native: "Amanah", body: "Every responsibility is a trust to be honored." },
  { name: "Stewardship", body: "Resources, systems, and people held with care." },
  { name: "Compassion", body: "Leadership that begins with dignity for the person in front of you." },
  { name: "Service", body: "Authority measured by who is lifted, not who is impressed." },
  { name: "Discipline", body: "Repeatable practice as the foundation of mastery." },
  { name: "Gratitude", body: "A grounded posture toward the work and the people in it." },
  { name: "Ethical Leadership", body: "Doing what is right when no one is measuring." },
];

export default function ValuesSection() {
  return (
    <section className="py-28 md:py-36 bg-ivory">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="section-label mb-6">Values</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy leading-tight">
            Values that shape my leadership.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {values.map((v, i) => (
            <div key={v.name} className="border-t border-stone pt-5">
              <p className="section-label mb-3">0{i + 1}</p>
              <h3 className="font-serif text-2xl text-navy mb-1">
                {v.name}
                {v.native && (
                  <span className="font-serif italic text-gold-deep text-lg ml-2">({v.native})</span>
                )}
              </h3>
              <p className="font-sans text-sm font-light text-charcoal/70 leading-relaxed mt-3">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
