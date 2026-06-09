import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Ventures", href: "/ventures" },
  { label: "Books", href: "/books" },
  { label: "ABAA.World", href: "/abaa-world" },
  { label: "Speaking", href: "/speaking" },
  { label: "Reflections", href: "/reflections" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const onHome = location.pathname === "/";
  const transparent = onHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? "bg-transparent py-7"
            : "bg-ivory/95 backdrop-blur-md border-b border-stone/40 py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <img src="/favicon.svg" alt="ABAA Logo" className="w-8 h-8 rounded-full border border-gold/40 transition-transform duration-500 group-hover:rotate-12" />
            <span
              className={`font-serif text-2xl font-semibold tracking-[0.18em] transition-colors duration-300 ${
                transparent ? "text-ivory group-hover:text-gold" : "text-navy group-hover:text-gold"
              }`}
            >
              ABAA
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link-hover text-[0.7rem] font-sans font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${
                  location.pathname === item.href
                    ? "text-gold"
                    : transparent
                      ? "text-ivory/85 hover:text-gold"
                      : "text-navy/70 hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className={`lg:hidden transition-colors ${
              transparent ? "text-ivory" : "text-navy"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-navy transition-all duration-500 flex flex-col justify-center items-center gap-7 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em] text-gold mb-4">
          ABAA
        </Link>
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="text-sm font-sans tracking-[0.18em] uppercase text-ivory/80 hover:text-gold transition-colors duration-300"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
