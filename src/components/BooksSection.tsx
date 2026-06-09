import { Link } from "react-router-dom";
import { books as works } from "@/data/books";

export default function BooksSection() {
  const featuredBooks = works.slice(0, 3); // Take the first 3 books to highlight

  return (
    <section className="py-28 bg-ivory">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="section-label mb-4">The Writing</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy">
              Books & Ideas
            </h2>
          </div>
          <Link
            to="/books"
            className="text-xs font-sans tracking-widest uppercase text-gold-deep border-b border-gold/40 pb-0.5 hover:border-gold transition-colors self-start md:self-auto whitespace-nowrap"
          >
            View All Works →
          </Link>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {featuredBooks.map((book) => (
            <Link
              key={book.slug}
              to={`/books/${book.slug}`}
              className="group flex flex-col"
            >
              {/* Cover */}
              <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-ivory-warm">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-500" />
              </div>

              {/* Meta */}
              <p className="section-label mb-3">{book.status}</p>
              <h3 className="font-serif text-xl mb-3 text-navy group-hover:text-gold-deep transition-colors duration-300">
                {book.title}
              </h3>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-4 font-light">
                {book.desc}
              </p>
              <span className="text-xs font-sans tracking-widest uppercase text-gold-deep border-b border-gold/30 pb-0.5 self-start group-hover:border-gold transition-colors duration-300">
                Explore Work
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
