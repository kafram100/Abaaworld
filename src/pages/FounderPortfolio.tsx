import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  LayoutGrid, Building2, HeartPulse, GraduationCap, Cpu, Sparkles,
} from "lucide-react";

const metrics = [
  { v: "20+", k: "Years of Leadership" },
  { v: "Multi-domain", k: "Healthcare Experience" },
  { v: "Cross-sector", k: "Systems Building" },
  { v: "6+", k: "Books & Reflections" },
  { v: "Global", k: "Enterprise Innovation" },
];

const impactAreas = [
  { icon: LayoutGrid, title: "Systems Architecture", body: "Designing scalable systems across sectors." },
  { icon: Building2, title: "Enterprise Building", body: "Building ecosystems, not isolated projects." },
  { icon: HeartPulse, title: "Healthcare & Compliance", body: "Care, operations, structured execution." },
  { icon: GraduationCap, title: "Education & Human Development", body: "Learning systems that translate into outcomes." },
  { icon: Cpu, title: "Ethical Technology", body: "Practical innovation that serves people." },
  { icon: Sparkles, title: "Human Flourishing", body: "Identity, growth, reflection, restoration." },
];

const timeline = [
  { era: "1997 — 2000", t: "Teenage Operations Leadership", b: "Coordinating workforce, procurement, and execution in Lagos." },
  { era: "Service & Operations", t: "Concierge & Stakeholder Systems", b: "Customer experience, coordination, and operational discipline." },
  { era: "Healthcare", t: "Frontline Care & Patient Systems", b: "Clinical practice grounded in compassion and precision." },
  { era: "Clinical Research", t: "Research & Compliance", b: "Risk, ethics, and structured execution at scale." },
  { era: "Business Analysis", t: "Analysis & Product Systems", b: "Translating insight into measurable systems." },
  { era: "Product Systems", t: "Product & Project Leadership", b: "Designing repeatable systems across organizations." },
  { era: "Today", t: "Founder Ecosystems", b: "Scalable systems across healthcare, logistics, education, and human development." },
];

const certs = [
  { group: "Healthcare", items: ["Registered care practice", "Patient experience standards", "Clinical operations"] },
  { group: "Clinical Research", items: ["GCP / research ethics", "Protocol & data management", "Regulatory compliance"] },
  { group: "Business Analysis", items: ["Requirements engineering", "Process design", "Stakeholder analysis"] },
  { group: "Leadership", items: ["Executive leadership", "Founder strategy", "Organizational design"] },
  { group: "Product / Project", items: ["Agile delivery", "Product strategy", "Project governance"] },
  { group: "Operations", items: ["Operational excellence", "Supply & logistics", "Service systems"] },
];

export default function FounderPortfolio() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <Seo title={"Founder Portfolio · ABAA"} description={"A portfolio of ABAA's founder work across healthcare, education, logistics, ethical technology, and enterprise infrastructure."} canonical="/portfolio" />

      {/* Hero + metrics */}
      <section className="pt-40 pb-20 bg-navy text-ivory">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="section-label mb-6">Founder Portfolio</p>
          <h1 className="font-serif text-5xl md:text-7xl text-ivory leading-[1.02] mb-8">The architecture of the work.</h1>
          <div className="gold-rule-long mb-8" />
          <p className="font-serif text-xl md:text-2xl italic text-ivory/80 leading-snug max-w-2xl mb-16">
            Building systems across industries, communities, and human potential.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-ivory/10 border border-ivory/10">
            {metrics.map((m) => (
              <div key={m.k} className="bg-navy p-6 md:p-8">
                <p className="font-serif text-3xl md:text-4xl text-gold mb-2">{m.v}</p>
                <p className="font-sans text-[0.7rem] tracking-[0.18em] uppercase text-ivory/55">{m.k}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact areas */}
      <section className="py-28 md:py-32 bg-ivory">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="section-label mb-6">Areas of Impact</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">Six domains. One operating principle.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/40 border border-stone/40">
            {impactAreas.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-ivory p-10">
                <Icon className="text-gold mb-5" size={26} strokeWidth={1.25} />
                <h3 className="font-serif text-2xl text-navy mb-3 leading-tight">{title}</h3>
                <p className="font-sans text-sm font-light text-charcoal/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 md:py-32 bg-ivory-warm">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="section-label mb-6">Career Journey</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-16">A trajectory built on systems.</h2>
          <ol className="relative">
            {timeline.map((c, _i) => (
              <li key={c.t} className="relative pl-10 pb-10 last:pb-0 border-l border-stone">
                <span className="absolute -left-[6px] top-1 w-3 h-3 rounded-full bg-gold" />
                <p className="section-label mb-2">{c.era}</p>
                <h3 className="font-serif text-2xl text-navy mb-2">{c.t}</h3>
                <p className="font-sans text-sm font-light text-charcoal/70 leading-relaxed max-w-xl">{c.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-28 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="section-label mb-6">Certifications & Practice</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-12">A foundation of credentialed practice.</h2>
          <Accordion type="single" collapsible className="border-t border-stone">
            {certs.map((c) => (
              <AccordionItem key={c.group} value={c.group} className="border-b border-stone">
                <AccordionTrigger className="font-serif text-xl md:text-2xl text-navy py-6 hover:text-gold hover:no-underline">
                  {c.group}
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans text-sm text-charcoal/75">
                    {c.items.map((i) => (
                      <li key={i} className="border-l border-gold/50 pl-4 font-light">{i}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Thought leadership */}
      <section className="py-28 md:py-32 bg-navy text-ivory">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="section-label mb-6 text-gold">Thought Leadership</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">Writing, speaking, and frameworks.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-ivory/10 border border-ivory/10">
            {[
              { k: "Books", to: "/books" },
              { k: "Speaking", to: "/speaking" },
              { k: "Reflections", to: "/reflections" },
              { k: "Media", to: "/media" },
              { k: "Frameworks", to: "/abaa-world" },
            ].map((c) => (
              <Link key={c.k} to={c.to} className="bg-navy p-8 hover:bg-navy-deep transition-colors group">
                <p className="font-serif text-2xl text-ivory group-hover:text-gold transition-colors">{c.k}</p>
                <p className="section-label text-ivory/40 mt-3">Explore →</p>
              </Link>
            ))}
          </div>

          <div className="mt-20 flex flex-wrap gap-4 justify-center">
            <Link to="/speaking" className="bg-gold text-navy px-8 py-4 text-[0.7rem] font-sans font-medium tracking-[0.05em] uppercase hover:bg-ivory transition-colors rounded-full">Invite ABAA to Speak</Link>
            <Link to="/contact" className="border border-ivory/40 text-ivory px-8 py-4 text-[0.7rem] font-sans font-medium tracking-[0.05em] uppercase hover:border-gold hover:text-gold transition-colors rounded-full">Partner With ABAA</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
