import { Link } from "react-router-dom";
import abaaGold from "@/assets/abaa-gold.jpeg";

const chapters = [
  {
    no: "01",
    era: "1997 · 2000 · Lagos",
    title: "Early Operations Leadership",
    body: "ABAA's systems journey began early through operational leadership in family run enterprises in Lagos. She coordinated workforce activities within a high volume restaurant ecosystem serving more than 300 students daily, supporting procurement, staffing continuity, service readiness, and day to day execution. She also helped coordinate operations and procurement for a second business, strengthening an early instinct for structure, accountability, and systems thinking.",
  },
  {
    no: "02",
    era: "Service & Operations",
    title: "Execution & Human Systems",
    body: "Through concierge services, customer experience, and stakeholder coordination, ABAA refined her understanding of people systems, trust, execution, and structured service delivery.",
  },
  {
    no: "03",
    era: "Healthcare & Clinical Discipline",
    title: "Precision, Care & Compliance",
    body: "Healthcare and clinical environments deepened ABAA's understanding of structured execution, patient centered care, compliance, documentation, and risk awareness.",
  },
  {
    no: "04",
    era: "Enterprise Systems",
    title: "Building Systems That Scale",
    body: "Business analysis, operations, ecosystem thinking, and enterprise systems strengthened a founder philosophy rooted in structure, measurable outcomes, and sustainable growth.",
  },
  {
    no: "05",
    era: "Founder Ecosystems",
    title: "Building At Scale",
    body: "Scalable infrastructures across logistics, education, healthcare, governance, and ethical technology, anchored in faith aligned leadership and global development.",
  },
];

export default function FounderJourneySection() {
  return (
    <section className="py-28 md:py-36 bg-navy text-ivory overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          <div className="lg:col-span-5">
            <p className="section-label mb-6">The Journey</p>
            <h2 className="font-serif text-5xl md:text-6xl text-ivory leading-[1.05] mb-8">
              From early responsibility to global ecosystems.
            </h2>
            <div className="gold-rule-long mb-8" />
            <p className="font-sans text-base font-light text-ivory/65 leading-relaxed mb-8">
              A lifetime of execution, from teenage operational leadership in Lagos to enterprise building across healthcare, logistics, education, and ecosystem design.
            </p>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={abaaGold} alt="Portrait of Arafat Bukola Adam Abdullahi Al Ilory (ABAA), founder, systems architect, author and healthcare professional" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative">
            {chapters.map((c, _i) => (
                <li key={c.no} className="relative pl-10 pb-12 last:pb-0 border-l border-ivory/15">
                  <span className="absolute -left-[6px] top-1 w-3 h-3 rounded-full bg-gold" />
                  <p className="font-sans text-[0.7rem] tracking-[0.05em] uppercase text-gold mb-2">
                    Chapter {c.no} · {c.era}
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl text-ivory mb-3 leading-tight">
                    {c.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base font-light text-ivory/65 leading-relaxed max-w-xl">
                    {c.body}
                  </p>
                </li>
              ))}
            </ol>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 border border-ivory/40 text-ivory px-8 py-4 text-xs font-sans font-semibold tracking-[0.08em] uppercase hover:border-gold hover:text-gold transition-all duration-300 rounded-lg"
            >
              Read the Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
