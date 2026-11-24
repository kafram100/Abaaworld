import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { books as works } from "@/data/books";

const speakingTopics = ["Leadership", "Healing", "Systems", "Faith", "Human Development"];

export default function Books() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <Seo title={"Books · ABAA"} description={"Original works by ABAA on systems, stewardship, faith, leadership, and human flourishing."} canonical="/books" />

      <section className="pt-40 pb-20 bg-navy text-ivory">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="section-label mb-6">Books & Ideas</p>
          <h1 className="font-serif text-5xl md:text-7xl text-ivory leading-[1.02] mb-8">Books, reflections & ideas.</h1>
          <div className="gold-rule-long mb-8" />
          <p className="font-serif text-xl md:text-2xl italic text-ivory/80 leading-snug max-w-2xl">
            Writing on systems, identity, faith, human flourishing, gratitude, healing, and purposeful living.
          </p>
        </div>
      </section>

      {/* Current works */}
      <section className="py-28 md:py-32 bg-ivory">
        <div className="container mx-auto px-6">
          <p className="section-label mb-6">Current Works</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-16">A growing body of work.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {works.map((w) => (
              <Link key={w.slug} to={`/books/${w.slug}`} className="group block">
                <div className="aspect-[3/4] overflow-hidden bg-ivory-warm mb-6">
                  <img src={w.cover} alt={w.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
                </div>
                <p className="section-label mb-2">{w.status}</p>
                <h3 className="font-serif text-2xl text-navy mb-3 leading-tight group-hover:text-gold-deep transition-colors">{w.title}</h3>
                <p className="font-sans text-sm font-light text-charcoal/70 leading-relaxed">{w.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-24 md:py-28 bg-ivory-warm">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="section-label mb-6">Upcoming</p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy leading-tight mb-10">On the horizon.</h2>
          <div className="space-y-px bg-stone/40 border border-stone/40">
            {[
              { date: "2026, Q3", t: "First titles enter editorial release" },
              { date: "2026–2027", t: "Reflection series + companion journals" },
              { date: "2027–2028", t: "Long-form systems and human development writing" },
            ].map((u) => (
              <div key={u.t} className="bg-ivory p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-2 md:gap-10">
                <p className="font-serif text-2xl text-gold md:w-48">{u.date}</p>
                <p className="font-serif text-xl text-navy">{u.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking topics */}
      <section className="py-24 md:py-28 bg-navy text-ivory">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="section-label mb-6 text-gold">Speaking Topics from the Work</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory leading-tight mb-10">Conversations rooted in the writing.</h2>
          <div className="flex flex-wrap gap-3 mb-12">
            {speakingTopics.map((t) => (
              <span key={t} className="border border-ivory/30 px-5 py-2.5 text-[0.7rem] font-sans tracking-[0.05em] uppercase text-ivory/80">{t}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/media" className="bg-gold text-navy px-8 py-4 text-xs font-sans font-semibold tracking-[0.08em] uppercase hover:bg-ivory transition-colors rounded-lg">Media Kit</Link>
            <Link to="/speaking" className="border border-ivory/40 text-ivory px-8 py-4 text-xs font-sans font-medium tracking-[0.08em] uppercase hover:border-gold hover:text-gold transition-colors rounded-lg">Invite ABAA to Speak</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
