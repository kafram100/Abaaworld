const pillars = [
  "Economic Empowerment",
  "Education Access",
  "Healthcare Enablement",
  "Ethical Technology",
  "Faith & Identity Restoration",
  "Women & Youth Development",
  "Logistics & Trade Infrastructure",
  "Global Collaboration",
];

export default function GlobalImpactSection() {
  return (
    <section className="py-28 md:py-36 bg-emerald text-ivory relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--gold)) 1px, transparent 1px)",
          backgroundSize: "100% 96px",
        }}
      />
      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <p className="section-label mb-6">Global Impact & Mission</p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory leading-[1.05] mb-8">
            Building systems for human flourishing.
          </h2>
          <div className="gold-rule-long mb-8" />
          <p className="font-sans text-base md:text-lg font-light text-ivory/75 leading-relaxed max-w-2xl">
            Scalable systems designed to improve lives, strengthen institutions, and unlock opportunity, across borders and disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-10">
          {pillars.map((p, i) => (
            <div key={p} className="border-t border-gold/40 pt-5">
              <p className="font-serif text-xs tracking-[0.05em] text-gold mb-3">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-ivory leading-tight">{p}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
