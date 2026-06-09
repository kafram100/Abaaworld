import { Link } from "react-router-dom";
import abaaGreen from "@/assets/abaa-green.jpeg";

const pressLogos = [
  "Forbes Africa",
  "Vogue Africa",
  "CNN Africa",
  "The Guardian",
  "TED",
  "Al Jazeera",
];

export default function PressHighlight() {
  return (
    <section className="py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Press logos */}
        <div className="text-center mb-20">
          <p className="section-label mb-6">Featured In</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {pressLogos.map((logo) => (
              <span
                key={logo}
                className="font-serif text-lg md:text-xl font-medium text-foreground/20 hover:text-foreground/50 transition-colors duration-300 cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-20">
          <div className="flex-1 h-px bg-border" />
          <div className="gold-rule-long shrink-0" />
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* About preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={abaaGreen}
              alt="Arafat Bukola Adam Abdullahi Al Ilory (ABAA), founder and author"
              className="w-full aspect-[4/5] object-cover object-top"
              loading="lazy"
            />
            <div className="absolute top-8 -right-5 bg-gold px-6 py-3">
              <p className="font-serif text-sm italic text-charcoal">Author · Speaker · Founder</p>
            </div>
          </div>

          <div>
            <p className="section-label mb-6">The Person Behind the Work</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Meet <span className="italic text-gold">Arafat</span>
              <br />
              Adam Abdullahi
            </h2>
            <div className="space-y-5 text-muted-foreground font-sans font-light text-base leading-relaxed mb-10">
              <p>
                ABAA is a writer, founder, and thinker whose work sits at the intersection of identity, faith, and entrepreneurship. Her voice, warm, incisive, and deeply rooted, has reached readers and audiences across the globe.
              </p>
              <p>
                She writes stories that challenge, essays that clarify, and builds communities that empower. Her mission is singular: to leave a body of work that matters.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 text-xs font-sans font-medium tracking-widest uppercase hover:bg-gold hover:text-foreground transition-all duration-300"
            >
              Full Biography
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
