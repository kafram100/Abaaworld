import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { reflections } from "@/data/reflections";

const categories = ["All", "Faith", "Healing", "Discernment", "Gratitude", "Leadership", "Identity", "Purpose", "Human Flourishing"];

export default function Reflections() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? reflections : reflections.filter((r) => r.category === active);

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <Seo title={"Reflections · ABAA"} description={"Reflections for meaningful living - faith, healing, discernment, gratitude, and human flourishing."} canonical="/reflections" />

      <section className="pt-40 pb-20 bg-navy text-ivory">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="section-label mb-6">Reflections</p>
          <h1 className="font-serif text-5xl md:text-7xl text-ivory leading-[1.02] mb-8">Reflections for meaningful living.</h1>
          <div className="gold-rule-long mb-8" />
          <p className="font-serif text-xl md:text-2xl italic text-ivory/80 leading-snug max-w-2xl">
            Faith, healing, discernment, gratitude, leadership, identity, purpose, and human flourishing.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b border-stone bg-ivory/95 sticky top-[72px] z-20 backdrop-blur">
        <div className="container mx-auto px-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`text-[0.7rem] font-sans tracking-[0.05em] uppercase px-4 py-2 transition-colors ${
                active === c ? "bg-navy text-ivory" : "text-charcoal/60 hover:text-navy"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="py-20 md:py-24 bg-ivory">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {filtered.length > 0 && (
            <Link to={`/reflections/${filtered[0].slug}`} className="lg:col-span-7 border-t border-gold pt-8 block group">
              <p className="section-label mb-4">{filtered[0].category} · Featured</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.05] mb-6 group-hover:text-gold-deep transition-colors">{filtered[0].title}</h2>
              <p className="font-serif text-lg md:text-xl italic text-charcoal/75 leading-relaxed mb-6 max-w-2xl">{filtered[0].excerpt}</p>
              <div className="flex items-center gap-4 text-[0.7rem] tracking-[0.05em] uppercase text-charcoal/50">
                <span>{filtered[0].date}</span>
                <span className="text-gold">·</span>
                <span>{filtered[0].readTime} read</span>
              </div>
            </Link>
          )}

          <div className="lg:col-span-5 space-y-px bg-stone/40 border border-stone/40">
            {filtered.slice(1, 4).map((r) => (
              <Link key={r.slug} to={`/reflections/${r.slug}`} className="bg-ivory p-6 block group">
                <p className="section-label mb-2">{r.category}</p>
                <h3 className="font-serif text-xl text-navy leading-tight mb-2 group-hover:text-gold-deep transition-colors">{r.title}</h3>
                <p className="font-sans text-xs text-charcoal/55">{r.date} · {r.readTime} read</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Grid - shows items beyond the 4 featured above, or all items when filtering returns ≤ 4 */}
      <section className="py-20 md:py-28 bg-ivory-warm">
        <div className="container mx-auto px-6">
          {filtered.length > 4 && (
            <p className="section-label mb-12">More Reflections</p>
          )}
          {filtered.length <= 4 && (
            <p className="section-label mb-12">All Reflections</p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {(filtered.length > 4 ? filtered.slice(4) : filtered).map((r) => (
              <Link key={r.slug} to={`/reflections/${r.slug}`} className="border-t border-stone pt-5 group cursor-pointer block">
                <p className="section-label mb-3">{r.category}</p>
                <h3 className="font-serif text-2xl text-navy leading-tight mb-3 group-hover:text-gold-deep transition-colors">{r.title}</h3>
                <p className="font-sans text-sm font-light text-charcoal/70 leading-relaxed mb-4">{r.excerpt}</p>
                <p className="font-sans text-xs tracking-[0.18em] uppercase text-charcoal/45">{r.date} · {r.readTime} read</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
