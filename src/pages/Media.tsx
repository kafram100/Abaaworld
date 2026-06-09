import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Download, FileText, ImageIcon, Mic } from "lucide-react";

const sections = [
  { k: "Press", title: "Official press coverage and media mentions.", body: "Published features and editorial mentions as they release." },
  { k: "Interviews", title: "In-depth profiles and interviews.", body: "Long-form conversations on systems, faith, and human flourishing." },
  { k: "Podcasts", title: "Audio stories and conversations.", body: "Audio appearances and recurring conversations." },
  { k: "Features", title: "Features and spotlights.", body: "Profiles and thematic features across publications." },
  { k: "Articles", title: "Contributed articles and guest columns.", body: "Bylined writing and contributed essays." },
];

const downloads = [
  { icon: FileText, k: "Bio Downloads", note: "Short, medium, and long-form biographies." },
  { icon: ImageIcon, k: "Photography Assets", note: "High-resolution editorial portraits." },
  { icon: Mic, k: "Speaking Assets", note: "Topic sheets, video reel, technical rider." },
];

export default function Media() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <Seo title={"Media · ABAA"} description={"Media appearances, interviews, and conversations featuring ABAA."} canonical="/media" />

      <section className="pt-40 pb-24 bg-navy text-ivory">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="section-label mb-6">Media</p>
          <h1 className="font-serif text-5xl md:text-7xl text-ivory leading-[1.02] mb-8">
            Media, interviews & public conversations.
          </h1>
          <div className="gold-rule-long mb-8" />
          <p className="font-serif text-xl md:text-2xl italic text-ivory/80 leading-snug max-w-2xl">
            For features, podcasts, panels, and editorial inquiries.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-28 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-px bg-stone/40 border border-stone/40">
            {sections.map((s) => (
              <article key={s.k} className="bg-ivory p-10">
                <p className="section-label mb-3">{s.k}</p>
                <h3 className="font-serif text-2xl text-navy mb-3 leading-tight">{s.title}</h3>
                <p className="font-sans text-sm font-light text-charcoal/70 leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>

          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-navy text-ivory p-10">
              <p className="section-label text-gold mb-4">Media Kit</p>
              <h3 className="font-serif text-2xl text-ivory mb-6 leading-tight">High-resolution portraits, biography, and brand assets.</h3>
              <button disabled className="inline-flex items-center gap-3 border border-ivory/20 text-ivory/50 px-6 py-3 text-[0.7rem] font-sans font-medium tracking-[0.05em] uppercase cursor-not-allowed">
                <Download size={14} /> Coming Soon
              </button>
            </div>

            {downloads.map(({ icon: Icon, k, note }) => (
              <div key={k} className="bg-ivory border border-stone p-6 flex items-start gap-4">
                <Icon className="text-gold mt-1" size={20} strokeWidth={1.25} />
                <div>
                  <p className="font-serif text-lg text-navy">{k}</p>
                  <p className="font-sans text-xs text-charcoal/60 mt-1">{note}</p>
                </div>
              </div>
            ))}

            <div className="bg-ivory-warm p-6">
              <p className="section-label mb-2">Media Inquiry</p>
              <p className="font-sans text-sm text-charcoal/75 mb-3">press@abaa.world</p>
              <a href="/contact" className="font-sans text-[0.7rem] tracking-[0.05em] uppercase text-gold-deep hover:text-gold">
                Contact form →
              </a>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}
