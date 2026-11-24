import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import abaaChampagne from "@/assets/abaa-champagne.jpeg";
import abaaGold from "@/assets/abaa-gold.jpeg";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Community",
    price: "Free",
    desc: "Open access to the EntrepreneurByDNA™ community, public content, and monthly founder letters.",
    features: ["Monthly Founder Letters", "Community Forum Access", "Public Resources", "Event Announcements"],
    linkTo: "/contact?type=General Inquiry&message=I would like to join the EntrepreneurByDNA Community.",
  },
  {
    name: "Private Circle",
    price: "₦25,000 / mo",
    desc: "Curated community for serious founders. Monthly Q&A with ABAA, private group, and exclusive essays.",
    features: ["Everything in Community", "Monthly Q&A with ABAA", "Private Circle Forum", "Exclusive Essays", "Early Book Access"],
    featured: true,
    linkTo: "/contact?type=Advisory&message=I would like to join the EntrepreneurByDNA Private Circle.",
  },
  {
    name: "Mentorship",
    price: "By Application",
    desc: "A deeply personal mentorship experience for founders selected for the annual cohort.",
    features: ["1:1 Strategy Sessions", "Bespoke Guidance", "Annual Cohort Events", "Direct Access to ABAA"],
    linkTo: "/contact?type=Advisory&message=I would like to apply for the EntrepreneurByDNA Mentorship cohort.",
  },
];

export default function EntrepreneurByDNA() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <Seo title={"EntrepreneurByDNA · ABAA"} description={"The EntrepreneurByDNA movement - a global community for purpose-driven founders."} canonical="/entrepreneurbydna" />
      <main className="pt-24">
        {/* Hero */}
        <div className="relative overflow-hidden bg-charcoal min-h-[70vh] flex items-center">
          <div className="absolute inset-0 opacity-30">
            <img src={abaaChampagne} alt="" className="w-full h-full object-cover object-center" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 to-charcoal/40" />
          <div className="relative container mx-auto px-6 py-24">
            <p className="section-label text-gold mb-6">A Movement</p>
            <h1 className="font-serif text-5xl md:text-7xl text-ivory leading-tight mb-6">
              Entrepreneur
              <br />
              <span className="italic text-gold">ByDNA™</span>
            </h1>
            <div className="gold-rule-long mb-8" />
            <p className="font-sans text-lg text-ivory/70 font-light max-w-lg leading-relaxed mb-10">
              You didn't choose entrepreneurship. It chose you. This is a home for those building with their whole identity, not just their ambition.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#tiers" className="inline-flex items-center gap-2 bg-gold text-charcoal px-8 py-4 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-gold-deep transition-colors duration-300 rounded-lg">
                Join the Movement
              </a>
              <Link to="/reflections" className="inline-flex items-center gap-2 border border-ivory/30 text-ivory px-8 py-4 text-xs font-sans font-medium tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300 rounded-lg">
                Read Founder Letters
              </Link>
            </div>
          </div>
        </div>

        {/* What it is */}
        <div className="py-24 bg-ivory">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="section-label mb-6">The Philosophy</p>
                <h2 className="font-serif text-4xl text-navy mb-8">
                  Not Everyone Builds
                  <br />
                  <span className="italic text-gold">The Same Way</span>
                </h2>
                <div className="space-y-5 text-charcoal/70 font-sans font-light text-base leading-relaxed editorial-border-left">
                  <p>
                    EntrepreneurByDNA™ was born from the recognition that some founders operate from a different source code. Their decisions are shaped by values, faith, and a vision that extends beyond the next funding round.
                  </p>
                  <p>
                    This is a space for those founders. A private circle. A mentorship community. A letter series. An annual event. A way of life.
                  </p>
                </div>
              </div>
              <div>
                <img src={abaaGold} alt="Arafat Bukola Adam Abdullahi Al Ilory (ABAA), founder portrait" className="w-full aspect-[4/5] object-cover object-top" />
              </div>
            </div>
          </div>
        </div>

        {/* Tiers */}
        <div id="tiers" className="py-24 bg-ivory-warm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="section-label mb-4">Membership</p>
              <h2 className="font-serif text-4xl text-navy">Choose Your Circle</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`p-8 flex flex-col ${
                    tier.featured
                      ? "bg-charcoal text-ivory relative"
                      : "bg-ivory border border-stone/60"
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-8">
                      <span className="bg-gold text-charcoal text-xs font-sans font-medium px-4 py-1 tracking-widest uppercase">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <p className="section-label mb-2" style={{ color: tier.featured ? "hsl(var(--gold))" : undefined }}>
                    {tier.name}
                  </p>
                  <p className={`font-serif text-3xl mb-4 ${tier.featured ? "text-ivory" : "text-navy"}`}>
                    {tier.price}
                  </p>
                  <p className={`font-sans text-sm font-light leading-relaxed mb-8 ${tier.featured ? "text-ivory/60" : "text-charcoal/70"}`}>
                    {tier.desc}
                  </p>
                  <ul className="flex flex-col gap-3 mb-10 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                        <span className={`font-sans text-sm font-light ${tier.featured ? "text-ivory/70" : "text-charcoal/70"}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={tier.linkTo}
                    className={`block text-center py-3.5 text-xs font-sans font-medium tracking-widest uppercase transition-all duration-300 ${
                      tier.featured
                        ? "bg-gold text-charcoal hover:bg-gold-deep"
                        : "border border-stone text-navy hover:border-gold hover:text-gold-deep"
                    }`}
                  >
                    {tier.name === "Mentorship" ? "Apply Now" : "Get Started"}
                  </Link>
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
