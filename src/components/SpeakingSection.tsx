import { Link } from "react-router-dom";
import abaaOlive from "@/assets/abaa-olive.jpeg";

const topics = [
  "Faith & Identity in Leadership",
  "Entrepreneurship as a Spiritual Practice",
  "Women, Voice & Legacy",
  "Building for Longevity, Not Virality",
  "The Inner Architecture of Success",
];

export default function SpeakingSection() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <p className="section-label mb-6">The Stage</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Speaking with
              <br />
              <span className="italic text-gold">Depth & Presence</span>
            </h2>
            <p className="font-sans text-base text-muted-foreground font-light leading-relaxed mb-8 max-w-md">
              ABAA brings a rare combination of intellectual depth, spiritual grounding, and entrepreneurial wisdom to every stage. Whether keynoting for 5,000 or speaking in an intimate gathering, the energy is the same: transformative.
            </p>

            {/* Topics */}
            <div className="mb-10">
              <p className="section-label mb-5">Signature Topics</p>
              <ul className="flex flex-col gap-3">
                {topics.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                    <span className="font-sans text-sm text-foreground/70 font-light">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/speaking"
              className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-7 py-3.5 text-xs font-sans font-medium tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300"
            >
              Book ABAA to Speak
            </Link>
          </div>

          {/* Image */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative">
              <img
                src={abaaOlive}
                alt="ABAA, Speaking"
                className="w-full aspect-[4/5] object-cover object-top"
                loading="lazy"
              />
              {/* Stats overlay */}
              <div className="absolute bottom-8 -left-6 bg-ivory p-6 shadow-lift">
                <p className="font-serif text-3xl text-foreground mb-1">50+</p>
                <p className="section-label">Speaking Engagements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
