import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import resourceFoundersFaith from "@/assets/resource-founders-faith.jpg";
import resource10Questions from "@/assets/resource-10-questions.jpg";
import resourceLettersToYoungerMe from "@/assets/resource-letters-to-younger-me.jpg";

const freeReads = [
  {
    cover: resourceFoundersFaith,
    title: "The Founder's Faith: A Reflection",
    desc: "A short PDF guide on navigating uncertainty with spiritual grounding.",
    tag: "Free PDF",
  },
  {
    cover: resource10Questions,
    title: "10 Questions for the Long-Term Builder",
    desc: "A clarity framework for founders building beyond the next milestone.",
    tag: "Free PDF",
  },
  {
    cover: resourceLettersToYoungerMe,
    title: "Letters to the Younger Me",
    desc: "An intimate collection of reflections written as letters, for anyone rebuilding.",
    tag: "Free PDF",
  },
];

const recommended = [
  { title: "Educated", author: "Tara Westover", genre: "Memoir" },
  { title: "Beloved", author: "Toni Morrison", genre: "Fiction" },
  { title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", genre: "Nonfiction" },
  { title: "Let My People Go Surfing", author: "Yvon Chouinard", genre: "Business" },
  { title: "The Book Thief", author: "Markus Zusak", genre: "Fiction" },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <Seo title="Resources · ABAA" description="Resources, frameworks, and reading from ABAA for systems builders and faith-inspired leaders." canonical="/resources" />
      <main className="pt-24">
        {/* Header */}
        <div className="container mx-auto px-6 py-20 border-b border-stone">
          <p className="section-label mb-4">The Library</p>
          <h1 className="font-serif text-5xl md:text-7xl text-navy">Resources</h1>
        </div>

        {/* Free Reads */}
        <div className="container mx-auto px-6 py-24">
          <p className="section-label mb-4">Free Reads</p>
          <h2 className="font-serif text-4xl text-navy mb-12">
            Download <span className="italic text-gold">& Begin</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {freeReads.map((item) => (
              <div key={item.title} className="group flex flex-col border border-stone hover:border-gold transition-colors duration-300">
                <div className="overflow-hidden aspect-[4/3]">
                  <img src={item.cover} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="section-label mb-3">{item.tag}</span>
                  <h3 className="font-serif text-lg text-navy mb-2">{item.title}</h3>
                  <p className="font-sans text-sm text-charcoal/65 font-light leading-relaxed flex-1 mb-5">{item.desc}</p>
                  <button disabled className="w-full border border-stone/50 text-charcoal/40 py-3 text-xs font-sans font-medium tracking-widest uppercase cursor-not-allowed">
                    Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Books */}
        <div className="py-24 bg-ivory-warm">
          <div className="container mx-auto px-6">
            <p className="section-label mb-4">Recommended</p>
            <h2 className="font-serif text-4xl text-navy mb-12">
              Books ABAA <span className="italic text-gold">Recommends</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-stone border border-stone">
              {recommended.map((book, i) => (
                <div key={i} className="p-8 hover:bg-ivory transition-colors duration-300 group">
                  <p className="section-label mb-3">{book.genre}</p>
                  <h3 className="font-serif text-xl text-navy group-hover:text-gold-deep transition-colors duration-300 mb-1">{book.title}</h3>
                  <p className="font-sans text-sm text-charcoal/55 font-light">{book.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
