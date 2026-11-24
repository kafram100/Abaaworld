import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";

const footerLinks = {
  Ecosystem: [
    { label: "About ABAA", href: "/about" },
    { label: "Founder Portfolio", href: "/portfolio" },
    { label: "Ventures", href: "/ventures" },
    { label: "Books", href: "/books" },
  ],
  Engage: [
    { label: "Speaking", href: "/speaking" },
    { label: "Reflections", href: "/reflections" },
    { label: "Media", href: "/media" },
    { label: "Press", href: "/press" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-ivory/70">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="font-serif text-3xl font-semibold text-ivory tracking-[0.18em] block mb-5">
              ABAA
            </Link>
            <p className="section-label text-gold mb-5">Arafat Bukola Adam Abdullahi Al Ilory</p>
            <p className="font-sans text-sm font-light leading-relaxed text-ivory/50 max-w-sm mb-8">
              Founder · Systems Architect · Enterprise Builder · Author · Faith-Inspired Global Voice. Building systems for human flourishing.
            </p>
            <div className="flex items-center gap-5">
              {[
                { icon: Instagram, href: "https://www.instagram.com/arafat_adam_al_ilory?fqnt=c2l5M2tocHd2bWZl", label: "Instagram", external: true },
                { icon: Linkedin, href: "https://www.linkedin.com/in/arafatadamabdullahi?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn", external: true },
                { icon: Youtube, href: "https://www.youtube.com/@MeetAbaa", label: "YouTube", external: true },
                { icon: Mail, href: "mailto:Arafat@abaaworld.com", label: "Email", external: true },
              ].map(({ icon: Icon, href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="text-ivory/30 hover:text-gold transition-colors duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col} className="md:col-span-3">
              <p className="section-label text-ivory/35 mb-6">{col}</p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="font-sans text-sm font-light text-ivory/55 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-12 lg:col-span-12 mt-4">
            <div className="editorial-border-left border-l border-gold/40">
              <p className="font-serif text-lg italic text-ivory/55 leading-relaxed max-w-2xl">
                "Sustainable transformation requires systems, stewardship, and service."
              </p>
              <p className="section-label text-gold/60 mt-3">- ABAA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ivory/30">
            ©️ 2026 - 2027 ABAA · Arafat Bukola Adam Abdullahi Al Ilory · abaa.world
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="font-sans text-xs text-ivory/30 hover:text-ivory/60 transition-colors">Privacy</Link>
            <Link to="/terms" className="font-sans text-xs text-ivory/30 hover:text-ivory/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
