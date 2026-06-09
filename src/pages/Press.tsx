import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import abaaGreen from "@/assets/abaa-green.jpeg";
import abaaFloral from "@/assets/abaa-floral.jpeg";
import abaaGrey from "@/assets/abaa-grey.jpeg";

const mediaItems = [
  {
    outlet: "Forbes Africa",
    type: "Interview",
    title: "The Author Redefining What a Founder Can Look Like",
    date: "January 2026",
    image: abaaGreen,
  },
  {
    outlet: "Vogue Africa",
    type: "Feature",
    title: "ABAA: Faith, Fashion, and the Future of Literary Culture",
    date: "November 2025",
    image: abaaFloral,
  },
  {
    outlet: "Al Jazeera",
    type: "Opinion",
    title: "Why Muslim Women Are Reshaping the Global Literary Conversation",
    date: "September 2025",
    image: abaaGrey,
  },
];

export default function Press() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <Seo title="Press · ABAA" description="Press resources, biography, and media mentions for ABAA." canonical="/press" />
      <main className="pt-24">
        {/* Header */}
        <div className="container mx-auto px-6 py-20 border-b border-stone">
          <p className="section-label mb-4">Media</p>
          <h1 className="font-serif text-5xl md:text-7xl text-navy">Press</h1>
        </div>

        {/* Media Kit CTA */}
        <div className="bg-ivory-warm py-12">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="section-label mb-2">Download</p>
              <h2 className="font-serif text-2xl text-navy">Official Media Kit</h2>
              <p className="font-sans text-sm text-charcoal/60 font-light mt-2">
                Bio versions, headshots, logo files, and press-ready images.
              </p>
            </div>
            <div className="flex gap-4">
              <button disabled className="bg-navy/40 text-ivory/60 px-7 py-3.5 text-xs font-sans font-medium tracking-widest uppercase cursor-not-allowed">
                Kit Coming Soon
              </button>
              <Link
                to="/contact?type=media"
                className="border border-stone text-navy px-7 py-3.5 text-xs font-sans font-medium tracking-widest uppercase hover:border-gold hover:text-gold-deep transition-all duration-300"
              >
                Press Inquiries
              </Link>
            </div>
          </div>
        </div>

        {/* Media coverage */}
        <div className="container mx-auto px-6 py-24">
          <p className="section-label mb-12">Media Coverage</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {mediaItems.map((item) => (
              <div key={item.title} className="group flex flex-col">
                <div className="overflow-hidden mb-6 aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="section-label">{item.outlet}</span>
                  <span className="text-stone text-xs">·</span>
                  <span className="font-sans text-xs text-charcoal/60">{item.type}</span>
                </div>
                <h3 className="font-serif text-lg text-navy group-hover:text-gold-deep transition-colors duration-300 mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-charcoal/50 font-light">{item.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Headshots */}
        <div className="py-16 bg-ivory-warm">
          <div className="container mx-auto px-6">
            <p className="section-label mb-8">Official Headshots</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[abaaGreen, abaaGrey, abaaFloral, abaaGreen].map((img, i) => (
                <div key={i} className="group relative overflow-hidden aspect-square cursor-pointer">
                  <img src={img} alt="ABAA Press Photo" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity font-sans text-xs tracking-widest uppercase">Download</span>
                  </div>
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
