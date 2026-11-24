import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Seo from "@/components/Seo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      <Seo title="Page Not Found · ABAA" description="The page you are looking for may have moved or never existed." canonical="/404" noIndex />
      <Navigation />
      <main className="flex-1 flex items-center justify-center pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <p className="section-label mb-6 text-gold-deep">Error 404</p>
          <h1 className="font-serif text-6xl md:text-8xl text-navy leading-[0.95] mb-8">
            This page is not part of the archive.
          </h1>
          <div className="gold-rule-long mx-auto mb-8" />
          <p className="font-serif text-xl italic text-charcoal/70 leading-snug max-w-lg mx-auto mb-12">
            The page you're looking for may have moved, been retired, or never existed. Return to the home page or explore the work below.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-navy text-ivory px-8 py-4 text-xs font-sans font-semibold tracking-[0.08em] uppercase hover:bg-gold hover:text-navy transition-colors rounded-lg"
            >
              Return Home
            </Link>
            <Link
              to="/reflections"
              className="inline-flex items-center gap-2 border border-stone text-charcoal px-8 py-4 text-xs font-sans font-medium tracking-[0.08em] uppercase hover:border-gold hover:text-gold-deep transition-colors rounded-lg"
            >
              Read Reflections
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-gold-deep border-b border-gold/40 pb-1 text-xs font-sans font-medium tracking-[0.08em] uppercase hover:border-gold transition-colors"
            >
              Contact ABAA
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
