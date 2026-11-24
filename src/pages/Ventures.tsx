import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Building2, HeartPulse, GraduationCap, Cpu, Truck, Sparkles, Users,
} from "lucide-react";

const builds = [
  { icon: Building2, title: "Enterprise Infrastructure", body: "Systems for operational excellence and sustainable organizations." },
  { icon: HeartPulse, title: "Healthcare & Human Wellbeing", body: "Human-centered systems for care, access, and compliance." },
  { icon: GraduationCap, title: "Education & Skills Systems", body: "Learning ecosystems that translate knowledge into outcomes." },
  { icon: Cpu, title: "Ethical Technology", body: "Practical, human-centered innovation that serves people." },
  { icon: Truck, title: "Logistics & Opportunity Systems", body: "Infrastructure simplifying movement, commerce, access." },
  { icon: Sparkles, title: "Faith-Inspired Human Development", body: "Reflection, identity, gratitude, values-based leadership." },
  { icon: Users, title: "Community & Social Impact", body: "Initiatives strengthening belonging and empowerment." },
];

const phases = [
  { k: "Problem", body: "Listen, observe, diagnose the fragmentation." },
  { k: "Structure", body: "Map the architecture beneath the symptom." },
  { k: "Systems", body: "Design repeatable, measurable, scalable design." },
  { k: "Execution", body: "Disciplined delivery with operational rigor." },
  { k: "Measurable Impact", body: "Outcomes accountable to people and time." },
];

export default function Ventures() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <Seo title={"Ventures · ABAA"} description={"ABAA's ventures - building systems that strengthen industries, unlock opportunity, and improve lives."} canonical="/ventures" />

      <section className="pt-40 pb-24 bg-navy text-ivory">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="section-label mb-6">Ventures</p>
          <h1 className="font-serif text-5xl md:text-7xl text-ivory leading-[1.02] mb-8">
            Building systems that create meaningful change.
          </h1>
          <div className="gold-rule-long mb-8" />
          <p className="font-serif text-xl md:text-2xl italic text-ivory/80 leading-snug max-w-2xl">
            Practical systems designed to strengthen industries, unlock opportunity, and improve lives.
          </p>
        </div>
      </section>

      {/* What I Build */}
      <section className="py-28 md:py-32 bg-ivory">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="section-label mb-6">What I Build</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">Seven domains. One architecture.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/40 border border-stone/40">
            {builds.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-ivory p-10">
                <Icon className="text-gold mb-5" size={26} strokeWidth={1.25} />
                <h3 className="font-serif text-2xl text-navy mb-3 leading-tight">{title}</h3>
                <p className="font-sans text-sm font-light text-charcoal/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Think */}
      <section className="py-28 md:py-32 bg-ivory-warm">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="section-label mb-6">How I Think</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-12">
            I build ecosystems, not isolated solutions.
          </h2>

          {/* Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="font-serif text-lg text-charcoal/80 leading-relaxed space-y-5">
              <p>Most organizations chase outputs. Ecosystems are designed for compounding outcomes.</p>
              <p>ABAA approaches every venture as an interconnected system, where logistics strengthens healthcare, where education feeds enterprise, where ethics is the architecture, not the afterthought.</p>
              <p className="italic text-gold-deep">Fragmented systems → scalable ecosystems.</p>
            </div>
            <div className="relative aspect-square border border-stone bg-ivory p-8">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="20" fill="hsl(var(--gold))" />
                <text x="100" y="104" textAnchor="middle" fill="hsl(var(--navy))" fontFamily="serif" fontSize="7.5" fontWeight="600">ABAA</text>
                {[
                  { deg: 0,   label: "Healthcare" },
                  { deg: 60,  label: "Education" },
                  { deg: 120, label: "Logistics" },
                  { deg: 180, label: "Ethics" },
                  { deg: 240, label: "Faith" },
                  { deg: 300, label: "Enterprise" },
                ].map(({ deg, label }) => {
                  const r = 68;
                  const x = 100 + r * Math.cos((deg * Math.PI) / 180);
                  const y = 100 + r * Math.sin((deg * Math.PI) / 180);
                  const lx = 100 + (r + 18) * Math.cos((deg * Math.PI) / 180);
                  const ly = 100 + (r + 18) * Math.sin((deg * Math.PI) / 180);
                  return (
                    <g key={deg}>
                      <line x1="100" y1="100" x2={x} y2={y} stroke="hsl(var(--gold))" strokeOpacity="0.35" strokeWidth="0.6" />
                      <circle cx={x} cy={y} r="10" fill="none" stroke="hsl(var(--navy))" strokeWidth="0.8" />
                      <text x={lx} y={ly + 2} textAnchor="middle" fill="hsl(var(--charcoal))" fontFamily="sans-serif" fontSize="6" opacity="0.7">{label}</text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Philosophy */}
      <section className="py-28 md:py-32 bg-navy text-ivory">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="section-label mb-6 text-gold">Operating Philosophy</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">From problem to measurable impact.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-ivory/10 border border-ivory/10">
            {phases.map((p, i) => (
              <div key={p.k} className="bg-navy p-8 flex flex-col">
                <p className="font-serif text-3xl text-gold mb-4">{String(i + 1).padStart(2, '0')}</p>
                <p className="font-serif text-xl text-ivory mb-3">{p.k}</p>
                <p className="font-sans text-xs font-light text-ivory/55 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/contact" className="bg-gold text-navy px-9 py-4 text-xs font-sans font-semibold tracking-[0.08em] uppercase hover:bg-ivory transition-colors rounded-lg">
              Collaborate With ABAA
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
