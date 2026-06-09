import { Link } from "react-router-dom";
import abaaChampagne from "@/assets/abaa-champagne.jpeg";

export default function EntrepreneurSection() {
  return (
    <section className="py-0 bg-charcoal overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Image */}
        <div className="relative order-2 lg:order-1 h-64 lg:h-auto">
          <img
            src={abaaChampagne}
            alt="Arafat Bukola Adam Abdullahi Al Ilory (ABAA), founder portrait"
            className="w-full h-full object-cover object-top opacity-80"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal/60 hidden lg:block" />
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2 flex flex-col justify-center px-10 md:px-16 py-20 text-background">
          <p className="section-label text-gold mb-6">A Movement</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight mb-6">
            Entrepreneur
            <br />
            <span className="text-gold italic">ByDNA™</span>
          </h2>
          <div className="gold-rule-long mb-8" />
          <p className="font-sans text-base text-ivory/70 font-light leading-relaxed max-w-md mb-4">
            Some people don't choose entrepreneurship. It chooses them. EntrepreneurByDNA™ is a private movement for founders who lead from identity, not just ambition.
          </p>
          <p className="font-sans text-sm text-ivory/50 font-light leading-relaxed max-w-md mb-12">
            A community, a mentorship circle, and a founder letter series designed for those building with purpose, faith, and a long view.
          </p>

          {/* Tiers */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {["Community", "Private Circle", "Founder Letters", "Mentorship", "Events", "Resources"].map((tier) => (
              <div key={tier} className="border border-ivory/10 px-4 py-3">
                <span className="font-sans text-xs tracking-widest uppercase text-ivory/50">{tier}</span>
              </div>
            ))}
          </div>

          <Link
            to="/entrepreneurbydna"
            className="inline-flex items-center gap-3 bg-gold text-charcoal px-8 py-4 text-xs font-sans font-medium tracking-widest uppercase hover:bg-gold-deep transition-colors duration-300 self-start rounded-full"
          >
            Join the Movement
          </Link>
        </div>
      </div>
    </section>
  );
}
