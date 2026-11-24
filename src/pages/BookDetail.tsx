import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { books } from "@/data/books";

export default function BookDetail() {
  const { slug } = useParams();
  const b = books.find((x) => x.slug === slug);

  if (!b) {
    return (
      <div className="min-h-screen bg-ivory">
        <Navigation />
        <section className="pt-40 pb-32 container mx-auto px-6 max-w-2xl text-center">
          <p className="section-label mb-6">Not Found</p>
          <h1 className="font-serif text-4xl text-navy mb-6">This title could not be found.</h1>
          <Link to="/books" className="text-gold-deep hover:text-gold font-sans text-sm tracking-[0.05em] uppercase">
            ← Back to Books
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  const related = books.filter((x) => x.slug !== b.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-ivory">
      <Seo
        title={`${b.title} · Books · ABAA`}
        description={b.desc}
        canonical={`/books/${b.slug}`}
        type="book"
        image={b.cover}
      />
      <Navigation />

      <section className="pt-40 pb-24 bg-navy text-ivory">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] overflow-hidden bg-ivory-warm">
              <img src={b.cover} alt={b.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <nav aria-label="Breadcrumb" className="font-sans text-xs tracking-[0.18em] uppercase text-ivory/60 mb-2">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <span className="mx-2 text-gold/60">/</span>
              <Link to="/books" className="hover:text-gold transition-colors">Books</Link>
            </nav>
            <p className="section-label text-gold mt-8 mb-6">{b.status}</p>
            <h1 className="font-serif text-4xl md:text-6xl text-ivory leading-[1.05] mb-6">{b.title}</h1>
            <div className="gold-rule-long mb-8" />
            <p className="font-serif text-xl md:text-2xl italic text-ivory/80 leading-snug max-w-2xl">{b.desc}</p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-ivory">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="section-label mb-8">About the Work</p>
          <div className="space-y-7">
            {b.about.map((p, i) => (
              <p key={i} className="font-serif text-lg md:text-xl text-charcoal/85 leading-[1.8]">{p}</p>
            ))}
          </div>

          <p className="section-label mt-16 mb-5">Themes</p>
          <div className="flex flex-wrap gap-3">
            {b.themes.map((t) => (
              <span key={t} className="border border-stone px-5 py-2.5 text-[0.7rem] font-sans tracking-[0.05em] uppercase text-charcoal/70">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-16 border-t border-stone pt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="bg-navy text-ivory px-8 py-4 text-xs font-sans font-semibold tracking-[0.08em] uppercase hover:bg-gold hover:text-navy transition-colors rounded-lg">
              Publishing & Rights Inquiries
            </Link>
            <Link to="/books" className="border border-stone text-charcoal px-8 py-4 text-xs font-sans font-medium tracking-[0.08em] uppercase hover:border-gold hover:text-gold-deep transition-colors rounded-lg">
              View All Works
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 bg-ivory-warm border-t border-stone/60">
          <div className="container mx-auto px-6 max-w-5xl">
            <p className="section-label mb-10">More Works</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {related.map((x) => (
                <Link key={x.slug} to={`/books/${x.slug}`} className="group block">
                  <div className="aspect-[3/4] overflow-hidden bg-ivory mb-5">
                    <img src={x.cover} alt={x.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <p className="section-label mb-2">{x.status}</p>
                  <h3 className="font-serif text-xl text-navy leading-tight group-hover:text-gold-deep transition-colors">{x.title}</h3>
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
