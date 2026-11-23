import { Link } from "react-router-dom";
import abaaGold from "@/assets/abaa-gold.jpeg";
import { ArrowRight } from "lucide-react";

export default function MeetAbaaSection() {
  return (
    <section className="py-28 md:py-36 bg-ivory">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Portrait */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={abaaGold} alt="Editorial portrait of Arafat Bukola Adam Abdullahi Al Ilory (ABAA), founder, systems architect, author" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block w-32 h-32 border border-gold" aria-hidden />
        </div>

        {/* Copy */}
        <div className="lg:col-span-7">
          <p className="section-label mb-6">Meet ABAA</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.05] mb-8 text-balance">
            Where enterprise architecture meets human dignity and lasting purpose.
          </h2>
          <div className="gold-rule-long mb-8" />
          <div className="space-y-6 font-serif text-lg md:text-xl text-charcoal/85 leading-relaxed max-w-2xl">
            <p>
              Arafat Bukola Adam Abdullahi Al Ilory (ABAA) is a founder, systems strategist, healthcare professional, author, enterprise builder, and faith-inspired global voice working at the intersection of logistics, healthcare, education, governance, technology, and human development.
            </p>
            <p>
              She is the Founder and Group Chair of a growing ecosystem of ventures focused on transforming fragmented systems into scalable, practical, and sustainable solutions.
            </p>
            <p>
              Her work bridges systems thinking, healthcare, education, enterprise infrastructure, ethical technology, and human flourishing.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-3 mt-10 text-navy border-b border-gold pb-1.5 text-xs font-sans font-semibold tracking-[0.08em] uppercase hover:text-gold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Learn About ABAA <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
