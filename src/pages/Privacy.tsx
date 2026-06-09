import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <Seo title={"Privacy · ABAA"} description={"Privacy policy for ABAA.world."} canonical="/privacy" />
      <section className="pt-40 pb-24 bg-navy text-ivory">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="section-label mb-6">Legal</p>
          <h1 className="font-serif text-5xl md:text-6xl text-ivory leading-tight">Privacy & Identity Notice</h1>
          <p className="font-sans text-xs tracking-widest uppercase text-gold mt-4">Last Updated: June 2026</p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 max-w-3xl space-y-12">
          <div>
            <h2 className="font-serif text-3xl text-navy mb-5">Identity Disclosure</h2>
            <p className="font-sans text-base font-light text-charcoal/75 leading-relaxed">
              ABAA (Arafat Bukola Adam Abdullahi Al Ilory) is a founder, systems strategist, healthcare professional, author, and faith-inspired global voice. Also searchable as Arafat Adam Abdullahi Al-ilory, Arafat Bukola, Bukola, Bukky, Arafat Al-Ilory, and ABAA.
            </p>
            <p className="font-sans text-base font-light text-charcoal/75 leading-relaxed mt-4">
              Public professional identity: Arafat Bukola Adam Abdullahi Al Ilory (ABAA). Certain legal and administrative records may reflect Arafat Bukola Apooyin.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-navy mb-5">Privacy</h2>
            <p className="font-sans text-base font-light text-charcoal/75 leading-relaxed">
              ABAA.world respects the privacy of every visitor. Information shared through inquiry or subscription forms is used solely to respond to your request and is never sold or shared with third parties.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-navy mb-5">Contact</h2>
            <p className="font-sans text-base font-light text-charcoal/75 leading-relaxed">
              For privacy questions or identity-related inquiries, please use the contact page.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
