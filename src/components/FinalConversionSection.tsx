import { Link } from "react-router-dom";
import abaaFloral from "@/assets/abaa-floral.jpeg";

export default function FinalConversionSection() {
  return (
    <section className="relative py-32 md:py-40 bg-navy text-ivory overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={abaaFloral} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />
      </div>

      <div className="relative container mx-auto px-6 max-w-4xl text-center">
        <p className="section-label mb-6">Begin the Conversation</p>
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory leading-[1.02] mb-10">
          Systems. Stewardship. Human Flourishing.
        </h2>
        <div className="gold-rule-long mx-auto mb-10" />
        <p className="font-serif text-xl md:text-2xl italic text-ivory/80 leading-snug max-w-3xl mx-auto mb-14">
          Whether through speaking, partnerships, enterprise collaboration, books, or thought leadership, ABAA is committed to building systems that create meaningful and sustainable impact.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-navy px-9 py-4 text-[0.7rem] font-sans font-medium tracking-[0.05em] uppercase hover:bg-ivory transition-all duration-300 rounded-full"
          >
            Work With ABAA
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 border border-ivory/40 text-ivory px-9 py-4 text-[0.7rem] font-sans font-medium tracking-[0.05em] uppercase hover:border-gold hover:text-gold transition-all duration-300 rounded-full"
          >
            Explore Founder Portfolio
          </Link>
          <Link
            to="/reflections"
            className="inline-flex items-center gap-2 text-gold border-b border-gold/40 pb-1 text-[0.7rem] font-sans font-medium tracking-[0.05em] uppercase hover:border-gold transition-all duration-300"
          >
            Read ABAA.World
          </Link>
        </div>
      </div>
    </section>
  );
}
