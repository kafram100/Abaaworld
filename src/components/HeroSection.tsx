import { Link } from "react-router-dom";
import abaaConservatory from "@/assets/abaa-conservatory.jpeg";

const trustDomains = [
  "Healthcare",
  "Systems Thinking",
  "Enterprise Building",
  "Education",
  "Operations",
  "Human Development",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Cinematic portrait */}
      <div className="absolute inset-0">
        <img
          src={abaaConservatory}
          alt="Arafat Bukola Adam Abdullahi Al Ilory, Founder · Systems Architect"
          className="w-full h-full object-cover object-center"
          width="1920"
          height="1080"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-navy/45" />
      </div>

      {/* Subtle geometric texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, hsl(var(--gold)) 0 1px, transparent 1px), radial-gradient(circle at 70% 80%, hsl(var(--gold)) 0 1px, transparent 1px)",
          backgroundSize: "44px 44px, 64px 64px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 pt-36 pb-28">
        <div className="max-w-3xl">
          <p className="section-label animate-fade-in-delay-1 mb-8 text-gold">
            ABAA · Arafat Bukola Adam Abdullahi Al Ilory
          </p>

          <h1 className="display-serif text-[2.75rem] sm:text-[4rem] md:text-[5.25rem] lg:text-[6.25rem] text-ivory animate-fade-in-delay-1 mb-8 text-balance">
            Building Systems That Move Industries, Communities & Human Potential Forward.
          </h1>

          <div className="flex items-center gap-3 mb-8 animate-fade-in-delay-2">
            <div className="gold-rule-long" />
            <p className="font-sans text-[0.7rem] tracking-[0.05em] uppercase text-ivory/85">
              Founder · Systems Architect · Enterprise Builder · Author · Faith-Inspired Voice
            </p>
          </div>

          <p className="font-serif text-xl md:text-2xl italic text-ivory/90 leading-snug max-w-2xl animate-fade-in-delay-2 mb-5">
            Founder of scalable systems across healthcare, logistics, education, enterprise infrastructure, ethical technology, and human flourishing.
          </p>

          <p className="font-sans text-sm md:text-base font-light text-ivory/80 leading-relaxed max-w-xl animate-fade-in-delay-3 mb-12">
            Building ecosystems that transform ideas into practical, measurable, and sustainable outcomes.
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-in-delay-3 mb-14">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 text-xs font-sans font-semibold tracking-[0.08em] uppercase hover:bg-ivory hover:shadow-lg transition-all duration-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Explore Founder Portfolio
            </Link>
            <Link
              to="/ventures"
              className="inline-flex items-center gap-2 border border-ivory/60 text-ivory px-8 py-4 text-xs font-sans font-medium tracking-[0.08em] uppercase hover:border-gold hover:text-gold hover:bg-ivory/5 transition-all duration-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              View Ventures
            </Link>
            <Link
              to="/reflections"
              className="inline-flex items-center gap-1.5 text-gold border-b border-gold/60 pb-1 text-xs font-sans font-medium tracking-[0.08em] uppercase hover:border-gold hover:text-gold-light transition-all duration-300 ml-1"
            >
              Read Reflections →
            </Link>
          </div>

          {/* Trust micro line */}
          <div className="animate-fade-in-delay-3 max-w-2xl">
            <p className="section-label text-ivory/60 mb-3">Trusted Through Experience In</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 items-center">
              {trustDomains.map((d, i) => (
                <span key={d} className="flex items-center gap-5">
                  <span className="font-sans text-xs tracking-[0.16em] uppercase text-ivory/75">{d}</span>
                  {i < trustDomains.length - 1 && <span className="text-gold/40">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-delay-3">
        <span className="section-label text-ivory/50">Scroll</span>
        <div className="w-px h-10 bg-gold/50" />
      </div>
    </section>
  );
}
