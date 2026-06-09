import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { reflections } from "@/data/reflections";

export default function ReflectionDetail() {
  const { slug } = useParams();
  const r = reflections.find((x) => x.slug === slug);

  if (!r) {
    return (
      <div className="min-h-screen bg-ivory">
        <Navigation />
        <section className="pt-40 pb-32 container mx-auto px-6 max-w-2xl text-center">
          <p className="section-label mb-6">Not Found</p>
          <h1 className="font-serif text-4xl text-navy mb-6">This reflection could not be found.</h1>
          <Link to="/reflections" className="text-gold-deep hover:text-gold font-sans text-sm tracking-[0.05em] uppercase">
            ← Back to Reflections
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  const related = reflections.filter((x) => x.slug !== r.slug && x.category === r.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-ivory">
      <Seo
        title={`${r.title} · Reflections · ABAA`}
        description={r.excerpt}
        canonical={`/reflections/${r.slug}`}
        type="article"
      />
      <Navigation />

      <article className="pt-40 pb-20 bg-ivory">
        <div className="container mx-auto px-6 max-w-3xl">
          <nav aria-label="Breadcrumb" className="font-sans text-xs tracking-[0.18em] uppercase text-charcoal/50 mb-2">
            <Link to="/" className="hover:text-gold-deep transition-colors">Home</Link>
            <span className="mx-2 text-gold/60">/</span>
            <Link to="/reflections" className="hover:text-gold-deep transition-colors">Reflections</Link>
            <span className="mx-2 text-gold/60">/</span>
            <span className="text-charcoal/70">{r.category}</span>
          </nav>
          <p className="section-label mt-10 mb-6">{r.category}</p>
          <h1 className="font-serif text-4xl md:text-6xl text-navy leading-[1.05] mb-8">{r.title}</h1>
          <div className="gold-rule-long mb-8" />
          <div className="flex items-center gap-4 text-[0.7rem] tracking-[0.05em] uppercase text-charcoal/50 mb-12">
            <span>{r.date}</span>
            <span className="text-gold">·</span>
            <span>{r.readTime} read</span>
          </div>

          <p className="font-serif text-2xl italic text-charcoal/80 leading-relaxed mb-12 border-l-2 border-gold pl-6">
            {r.excerpt}
          </p>

          <div className="space-y-7">
            {r.body.map((p, i) => (
              <p key={i} className="font-serif text-lg md:text-xl text-charcoal/85 leading-[1.8]">
                {p}
              </p>
            ))}
          </div>

          <p className="font-sans text-[0.7rem] tracking-[0.05em] uppercase text-gold-deep mt-16">— ABAA</p>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-20 bg-ivory-warm border-t border-stone/60">
          <div className="container mx-auto px-6 max-w-5xl">
            <p className="section-label mb-10">Continue Reading</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {related.map((x) => (
                <Link key={x.slug} to={`/reflections/${x.slug}`} className="block border-t border-stone pt-5 group">
                  <p className="section-label mb-3">{x.category}</p>
                  <h3 className="font-serif text-xl text-navy leading-tight mb-3 group-hover:text-gold-deep transition-colors">{x.title}</h3>
                  <p className="font-sans text-xs tracking-[0.18em] uppercase text-charcoal/45">{x.date} · {x.readTime} read</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
