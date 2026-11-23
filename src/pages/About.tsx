import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import abaaGold from "@/assets/abaa-gold.jpeg";
import abaaGreen from "@/assets/abaa-green.jpeg";
import {
  Network, Heart, Sparkles, ShieldCheck, Lightbulb, Compass,
} from "lucide-react";

const leadershipShapes = [
  { icon: Network, title: "Systems Thinking", body: "Translating fragmented operations into scalable architecture." },
  { icon: Heart, title: "Human-Centered Leadership", body: "Every system designed around the people it serves." },
  { icon: Sparkles, title: "Faith-Inspired Stewardship", body: "Responsibility held as a trust, not a transaction." },
  { icon: ShieldCheck, title: "Operational Excellence", body: "Disciplined execution as a baseline, not a milestone." },
  { icon: Lightbulb, title: "Ethical Innovation", body: "Practical technology that strengthens human systems." },
  { icon: Compass, title: "Structured Execution", body: "Repeatable practice as the foundation of mastery." },
];

const values = [
  { name: "Excellence", native: "Ihsan", body: "Doing things beautifully, every time." },
  { name: "Trust", native: "Amanah", body: "Every responsibility honored as a trust." },
  { name: "Stewardship", body: "Resources, systems, people, held with care." },
  { name: "Compassion", body: "Leadership begins with dignity for others." },
  { name: "Service", body: "Authority measured by who is lifted." },
  { name: "Gratitude", body: "A grounded posture toward the work." },
  { name: "Ethical Leadership", body: "Doing right when no one is measuring." },
  { name: "Discipline", body: "Repeatable practice as foundation of mastery." },
];

const missionPillars = [
  "Education Access",
  "Healthcare Enablement",
  "Ethical Technology",
  "Human Flourishing",
  "Women & Youth Development",
  "Enterprise Systems",
  "Logistics & Opportunity",
  "Global Collaboration",
];

export default function About() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <Seo title={"About · ABAA"} description={"About Arafat Bukola Adam Abdullahi Al Ilory — founder, systems architect, author, and faith-inspired global voice."} canonical="/about" />

      {/* Hero */}
      <section className="pt-40 pb-24 bg-navy text-ivory">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="section-label mb-6">About ABAA</p>
            <h1 className="font-serif text-5xl md:text-7xl text-ivory leading-[1.02] mb-8 text-balance">Meet ABAA.</h1>
            <div className="gold-rule-long mb-8" />
            <p className="font-serif text-xl md:text-2xl italic text-ivory/90 leading-snug max-w-2xl mb-6 text-balance">
              From clinical environments to scalable enterprise: A lifelong practice of stewardship.
            </p>
            <p className="font-sans text-base font-light text-ivory/80 leading-relaxed max-w-2xl mb-10">
              Arafat Bukola Adam Abdullahi Al Ilory (ABAA) is a founder, systems strategist, healthcare professional, author, enterprise builder, and faith-inspired global voice building scalable ecosystems across logistics, healthcare, education, ethical technology, governance, and human development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio" className="bg-gold text-navy px-8 py-4 text-xs font-sans font-semibold tracking-[0.08em] uppercase hover:bg-ivory hover:shadow-lg transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy">Explore Founder Portfolio</Link>
              <Link to="/reflections" className="border border-ivory/60 text-ivory px-8 py-4 text-xs font-sans font-medium tracking-[0.08em] uppercase hover:border-gold hover:text-gold hover:bg-ivory/5 transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy">Read Reflections</Link>
            </div>
          </div>
          <div className="lg:col-span-5 aspect-[4/5] overflow-hidden">
            <img src={abaaGold} alt="Portrait of Arafat Bukola Adam Abdullahi Al Ilory (ABAA), founder, systems architect, author and healthcare professional" className="w-full h-full object-cover" width="800" height="1000" />
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-28 md:py-36 bg-ivory">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="section-label mb-6">The Story</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-12">
            A life built through systems, service & stewardship.
          </h2>

          {[
            {
              era: "Early Foundations · Lagos, Nigeria",
              title: "Operational Leadership Begins",
              body: "ABAA's journey into systems leadership began early through hands-on operational responsibility across family-run enterprises in Lagos. As a teenager, she coordinated workforce operations within a high-volume restaurant ecosystem serving more than 300 students daily, overseeing execution continuity, procurement coordination, staffing workflows, and service readiness. Early systems leadership, not auxiliary help.",
            },
            {
              era: "Service & Operations",
              title: "Execution and People Systems",
              body: "Concierge systems, execution, coordination, stakeholder relationships, and human-centered service, translating interaction into repeatable operational design.",
            },
            {
              era: "Healthcare & Compliance",
              title: "Clinical Discipline",
              body: "Healthcare systems, clinical research, patient care, risk awareness, compliance mindset, and structured execution, a foundation built on precision and stewardship.",
            },
            {
              era: "Enterprise Systems & Ecosystem Building",
              title: "Building at Scale",
              body: "Business analysis, product systems, technology, operations, and global ecosystem building, orchestrating organizations as living systems.",
            },
          ].map((c, i) => (
            <div key={c.title} className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-t border-stone first:border-t-0">
              <div className="md:col-span-3">
                <p className="font-serif text-3xl text-gold">{String(i + 1).padStart(2, '0')}</p>
                <p className="section-label mt-2">{c.era}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-serif text-2xl md:text-3xl text-navy mb-3 leading-tight">{c.title}</h3>
                <p className="font-sans text-base font-light text-charcoal/75 leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What shapes leadership */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="section-label mb-6">Leadership Lens</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">What shapes my leadership.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/40 border border-stone/40">
            {leadershipShapes.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-ivory p-10">
                <Icon className="text-gold mb-5" size={24} strokeWidth={1.25} />
                <h3 className="font-serif text-2xl text-navy mb-3">{title}</h3>
                <p className="font-sans text-sm font-light text-charcoal/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 md:py-36 bg-ivory">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="section-label mb-6">Values</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">Values that shape my leadership.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {values.map((v, i) => (
              <div key={v.name} className="border-t border-stone pt-5">
                <p className="section-label mb-3">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-serif text-2xl text-navy">
                  {v.name}{v.native && <span className="italic text-gold-deep text-lg ml-2">({v.native})</span>}
                </h3>
                <p className="font-sans text-sm font-light text-charcoal/70 leading-relaxed mt-3">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Vision */}
      <section className="py-28 md:py-36 bg-emerald text-ivory">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 aspect-square overflow-hidden">
            <img src={abaaGreen} alt="Arafat Bukola Adam Abdullahi Al Ilory (ABAA, Bukky) in a moment of reflection" className="w-full h-full object-cover" loading="lazy" width="800" height="800" />
          </div>
          <div className="lg:col-span-7">
            <p className="section-label mb-6 text-gold">Global Vision</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight mb-8">
              Building systems for human flourishing.
            </h2>
            <p className="font-sans text-base font-light text-ivory/75 leading-relaxed mb-10 max-w-xl">
              ABAA believes sustainable transformation requires systems, stewardship, ethics, and practical execution.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {missionPillars.map((p) => (
                <p key={p} className="font-serif text-lg text-ivory/85 border-l border-gold/50 pl-4">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 md:py-36 bg-navy text-ivory text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="section-label mb-6">Work With ABAA</p>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-tight mb-10">
            Building meaningful systems that matter.
          </h2>
          <div className="gold-rule-long mx-auto mb-10" />
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-gold text-navy px-8 py-4 text-[0.7rem] font-sans font-medium tracking-[0.05em] uppercase hover:bg-ivory transition-colors rounded-full">Partner With ABAA</Link>
            <Link to="/reflections" className="border border-ivory/40 text-ivory px-8 py-4 text-[0.7rem] font-sans font-medium tracking-[0.05em] uppercase hover:border-gold hover:text-gold transition-colors rounded-full">Read Reflections</Link>
            <Link to="/portfolio" className="text-gold border-b border-gold/40 pb-1 px-2 py-3 text-[0.7rem] font-sans font-medium tracking-[0.05em] uppercase">Founder Portfolio</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
