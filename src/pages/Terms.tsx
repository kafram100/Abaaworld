import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <Seo title={"Terms · ABAA"} description={"Terms of use for ABAA.world."} canonical="/terms" />
      <section className="pt-40 pb-24 bg-navy text-ivory">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="section-label mb-6">Legal</p>
          <h1 className="font-serif text-5xl md:text-6xl text-ivory leading-tight">Terms of Use</h1>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 max-w-3xl space-y-12">
          <div>
            <h2 className="font-serif text-3xl text-navy mb-5">Use of Content</h2>
            <p className="font-sans text-base font-light text-charcoal/75 leading-relaxed">
              All content on ABAA.world, including writing, frameworks, and visual identity, is the intellectual property of Arafat Bukola Adam Abdullahi Al Ilory (ABAA) unless otherwise credited. Excerpts may be shared with attribution.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-navy mb-5">Identity Reference</h2>
            <p className="font-sans text-base font-light text-charcoal/75 leading-relaxed">
              Public professional identity: Arafat Bukola Adam Abdullahi Al Ilory (ABAA). Certain legal and administrative records may reflect Arafat Bukola Apooyin.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
