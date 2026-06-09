import { Building2, GraduationCap, HeartPulse, Truck, Cpu, Sparkles, Users } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "Enterprise Infrastructure",
    body: "Systems for operational excellence, execution, growth, and sustainable organizations.",
  },
  {
    icon: GraduationCap,
    title: "Education & Skills Systems",
    body: "Learning ecosystems that connect knowledge to measurable outcomes.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Human Wellbeing",
    body: "Systems supporting care, access, compliance, wellness, and human-centered service.",
  },
  {
    icon: Truck,
    title: "Logistics & Trade Enablement",
    body: "Infrastructure that simplifies movement, commerce, and access.",
  },
  {
    icon: Cpu,
    title: "Ethical Technology",
    body: "Practical, human-centered innovation that improves systems.",
  },
  {
    icon: Sparkles,
    title: "Faith-Inspired Human Development",
    body: "Reflection, gratitude, identity, values-based leadership, and spiritual growth.",
  },
  {
    icon: Users,
    title: "Community & Social Impact",
    body: "Initiatives strengthening belonging, empowerment, and human flourishing.",
  },
];

export default function WhatIBuildSection() {
  return (
    <section className="py-28 md:py-36 bg-ivory">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <p className="section-label mb-6">What I Build</p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-navy leading-[1.05] mb-8">
            Scalable systems that improve lives, unlock opportunity, and strengthen industries.
          </h2>
          <div className="gold-rule-long" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/40 border border-stone/40">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-ivory p-10 hover:bg-ivory-warm transition-colors duration-500 group"
            >
              <Icon className="text-gold mb-6" size={28} strokeWidth={1.25} />
              <h3 className="font-serif text-2xl md:text-3xl text-navy mb-4 leading-tight">
                {title}
              </h3>
              <p className="font-sans text-sm font-light text-charcoal/70 leading-relaxed">
                {body}
              </p>
            </div>
          ))}
          {/* Filler block for symmetry */}
          <div className="hidden lg:flex bg-navy p-10 flex-col justify-between">
            <p className="section-label text-gold">Founder Philosophy</p>
            <p className="font-serif text-2xl italic text-ivory/90 leading-snug">
              "Sustainable transformation requires systems, stewardship, and service."
            </p>
            <p className="font-sans text-[0.7rem] tracking-[0.05em] uppercase text-ivory/40">— ABAA</p>
          </div>
          <div className="hidden md:block lg:hidden bg-navy p-10">
            <p className="section-label text-gold mb-6">Founder Philosophy</p>
            <p className="font-serif text-2xl italic text-ivory/90 leading-snug">
              "Sustainable transformation requires systems, stewardship, and service."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
