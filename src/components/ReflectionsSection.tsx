import { Link } from "react-router-dom";
import abaaFlowers from "@/assets/abaa-flowers.jpeg";

const reflections = [
  {
    category: "Essays",
    date: "February 2026",
    title: "On Building Things That Outlast You",
    excerpt:
      "Legacy is not a monument you build, it is the imprint left on the people you chose to show up for, consistently, over time.",
    readTime: "6 min read",
  },
  {
    category: "Identity & Purpose",
    date: "January 2026",
    title: "The Permission You Were Never Waiting For",
    excerpt:
      "Somewhere along the way, we learned to shrink. To ask. To wait for a room that may never open its door for us. This is about deciding not to wait.",
    readTime: "8 min read",
  },
  {
    category: "Founder Thoughts",
    date: "December 2025",
    title: "What Entrepreneurship Taught Me About Faith",
    excerpt:
      "Every founder's journey is ultimately a study in trust, trust in your vision, your people, and in something larger than your own ability to see what's coming.",
    readTime: "5 min read",
  },
];

export default function ReflectionsSection() {
  return (
    <section className="py-28 bg-muted/40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left, Image + Quote */}
          <div className="lg:col-span-4 relative">
            <div className="relative">
              <img
                src={abaaFlowers}
                alt="Arafat Bukola Adam Abdullahi Al Ilory (ABAA), founder, systems architect and author"
                className="w-full aspect-[4/5] object-cover object-top"
                loading="lazy"
              />
              {/* Pull quote overlay */}
              <div className="absolute -bottom-6 -right-6 bg-foreground text-background p-6 max-w-[220px]">
                <p className="font-serif text-sm italic leading-relaxed">
                  "Words, when chosen with care, become the architecture of change."
                </p>
                <div className="gold-rule mt-4" />
              </div>
            </div>
          </div>

          {/* Right, Articles */}
          <div className="lg:col-span-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="section-label mb-4">The Archive</p>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                  Reflections
                </h2>
              </div>
              <Link
                to="/reflections"
                className="text-xs font-sans tracking-widest uppercase text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors whitespace-nowrap hidden md:block"
              >
                All Reflections →
              </Link>
            </div>

            <div className="flex flex-col divide-y divide-border">
              {reflections.map((item, i) => (
                <Link
                  key={i}
                  to="/reflections"
                  className="group py-8 first:pt-0"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <p className="section-label">{item.category}</p>
                    <span className="text-stone text-xs">·</span>
                    <p className="font-sans text-xs text-muted-foreground">{item.date}</p>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl mb-3 text-foreground group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light mb-4">
                    {item.excerpt}
                  </p>
                  <span className="text-xs font-sans tracking-widest uppercase text-gold/70 group-hover:text-gold transition-colors">
                    {item.readTime} →
                  </span>
                </Link>
              ))}
            </div>

            <Link
              to="/reflections"
              className="mt-8 inline-block text-xs font-sans tracking-widest uppercase text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors md:hidden"
            >
              All Reflections →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
