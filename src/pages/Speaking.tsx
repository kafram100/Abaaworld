import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const topics = [
  "Systems Thinking", "Enterprise Building", "Faith & Identity",
  "Healthcare Innovation", "Women Leadership", "Education Systems",
  "Human Flourishing", "Ethical Technology",
];

const audiences = [
  { k: "Corporate", b: "Executive leadership, founder convenings, strategic offsites." },
  { k: "Universities", b: "Lectures, faculty programs, student leadership institutes." },
  { k: "Faith Organizations", b: "Reflections, mosques, faith-rooted leadership formation." },
  { k: "Healthcare Institutions", b: "Clinical leadership, systems, compliance, patient experience." },
  { k: "Government", b: "Policy forums, public sector leadership, civic frameworks." },
  { k: "Conferences", b: "Keynotes, panels, fireside conversations." },
  { k: "NGOs", b: "Mission-aligned organizations, human development initiatives." },
];

export default function Speaking() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <Seo title={"Speaking · ABAA"} description={"ABAA on stage - keynotes, panels, and conversations on systems, leadership, and stewardship."} canonical="/speaking" />

      <section className="pt-40 pb-24 bg-navy text-ivory">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="section-label mb-6">Speaking</p>
          <h1 className="font-serif text-5xl md:text-7xl text-ivory leading-[1.02] mb-8">
            Conversations that build meaningful change.
          </h1>
          <div className="gold-rule-long mb-8" />
          <p className="font-serif text-xl md:text-2xl italic text-ivory/80 leading-snug max-w-2xl">
            Speaking on systems, human flourishing, leadership, healthcare, ethics, faith, education, and scalable transformation.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="py-28 md:py-32 bg-ivory">
        <div className="container mx-auto px-6">
          <p className="section-label mb-6">Topics</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-12">Eight conversations, one through-line.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {topics.map((t, i) => (
              <div key={t} className="border-t border-stone pt-4">
                <p className="section-label mb-3">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-serif text-2xl text-navy">{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-28 md:py-32 bg-ivory-warm">
        <div className="container mx-auto px-6">
          <p className="section-label mb-6">Audiences</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-12">Built for serious rooms.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/40 border border-stone/40">
            {audiences.map((a) => (
              <div key={a.k} className="bg-ivory p-10">
                <h3 className="font-serif text-2xl text-navy mb-3">{a.k}</h3>
                <p className="font-sans text-sm font-light text-charcoal/70 leading-relaxed">{a.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-32 bg-navy text-ivory text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight mb-10">
            Invite ABAA into your room.
          </h2>
          <div className="gold-rule-long mx-auto mb-10" />
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact?type=speaking" className="bg-gold text-navy px-9 py-4 text-xs font-sans font-semibold tracking-[0.08em] uppercase hover:bg-ivory transition-colors rounded-lg">Book ABAA to Speak</Link>
            <Link to="/media" className="border border-ivory/40 text-ivory px-9 py-4 text-xs font-sans font-medium tracking-[0.08em] uppercase hover:border-gold hover:text-gold transition-colors rounded-lg">Media Kit</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
