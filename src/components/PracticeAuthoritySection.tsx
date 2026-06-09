import { Stethoscope, FlaskConical, Network, LineChart, Compass, HeartHandshake } from "lucide-react";

const items = [
  { icon: Stethoscope, title: "Healthcare Experience", body: "Frontline care, patient systems, and clinical discipline." },
  { icon: FlaskConical, title: "Clinical Research & Compliance", body: "Rigor, ethics, and structured execution at scale." },
  { icon: Network, title: "Systems Thinking", body: "Designing fragmented operations into scalable architecture." },
  { icon: LineChart, title: "Business Analysis & Product Thinking", body: "Translating insight into measurable systems." },
  { icon: Compass, title: "Operational Leadership", body: "Disciplined execution across people and process." },
  { icon: HeartHandshake, title: "Human-Centered Service", body: "Care, dignity, and excellence as a baseline." },
];

export default function PracticeAuthoritySection() {
  return (
    <section className="py-28 md:py-36 bg-ivory-warm">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <p className="section-label mb-6">Built Through Practice</p>
          <h2 className="font-serif text-5xl md:text-6xl text-navy leading-[1.05] mb-6">
            Authority earned through the work itself.
          </h2>
          <div className="gold-rule-long mb-8" />
          <p className="font-sans text-base font-light text-charcoal/70 leading-relaxed max-w-2xl">
            Grounded in healthcare, operations, systems, and structured execution, every framework written from inside the practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/40 border border-stone/40">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-ivory p-10 hover:bg-ivory-warm transition-colors duration-500">
              <Icon className="text-gold mb-6" size={26} strokeWidth={1.25} />
              <h3 className="font-serif text-2xl text-navy mb-3 leading-tight">{title}</h3>
              <p className="font-sans text-sm font-light text-charcoal/70 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
