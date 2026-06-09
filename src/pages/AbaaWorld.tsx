import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import abaaFloral from "@/assets/abaa-floral.jpeg";

const pillars = [
  "Gratitude", "Identity Rebuilding", "Healing", "Discernment",
  "Faith-Aligned Growth", "Leadership", "Womanhood", "Boundaries",
  "Spiritual Reflection", "Dua", "Purpose",
];

const featured = [
  { tag: "Gratitude", slug: "on-the-practice-of-noticing", t: "On the practice of noticing.", b: "Gratitude is not sentiment. It is a discipline of perception, a daily return to the things already given." },
  { tag: "Identity", slug: "becoming-who-you-were-before-the-noise", t: "Becoming who you were before the noise.", b: "Rebuilding is rarely loud. It is the quiet, deliberate work of returning to the architecture beneath the persona." },
  { tag: "Faith", slug: "the-long-arc-of-trust", t: "The long arc of trust.", b: "Patience is not waiting. It is the active posture of trust held under tension." },
];

export default function AbaaWorld() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <Seo title={"ABAA.World"} description={"ABAA.World — the editorial and ideas hub for systems thinking, stewardship, and human flourishing."} canonical="/abaa-world" />

      {/* Emotional hero */}
      <section className="relative min-h-[80vh] flex items-center bg-emerald text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={abaaFloral} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald/85 via-emerald/80 to-emerald" />
        </div>
        <div className="relative container mx-auto px-6 pt-40 pb-24 max-w-4xl text-center">
          <p className="section-label mb-8 text-gold">ABAA.World</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory leading-[1.02] mb-10">
            Faith. Reflection. Gratitude. Human Flourishing.
          </h1>
          <div className="gold-rule-long mx-auto mb-10" />
          <p className="font-serif text-xl md:text-2xl italic text-ivory/85 leading-snug max-w-2xl mx-auto">
            Quiet reflections for meaningful living.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-28 md:py-32 bg-ivory">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="section-label mb-6">Content Pillars</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">Eleven gentle entry points into the work.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
            {pillars.map((p, i) => (
              <div key={p} className="border-t border-gold/50 pt-4">
                <p className="font-serif text-xs tracking-[0.05em] text-gold mb-3">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-serif text-2xl text-navy">{p}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-28 md:py-32 bg-ivory-warm">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="section-label mb-6">Featured Reflections</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">From the journal.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone/40 border border-stone/40">
            {featured.map((f) => (
              <Link key={f.t} to={`/reflections/${f.slug}`} className="bg-ivory p-10 flex flex-col group block">
                <p className="section-label mb-4">{f.tag}</p>
                <h3 className="font-serif text-2xl md:text-3xl text-navy leading-tight mb-4 group-hover:text-gold-deep transition-colors">{f.t}</h3>
                <p className="font-serif text-base italic text-charcoal/75 leading-relaxed flex-1">{f.b}</p>
                <p className="section-label text-gold mt-6">Read →</p>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/reflections" className="bg-navy text-ivory px-9 py-4 text-[0.7rem] font-sans font-medium tracking-[0.05em] uppercase hover:bg-gold hover:text-navy transition-colors rounded-full">
              Read Reflections
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
