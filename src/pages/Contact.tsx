import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const inquiryTypes = [
  "Speaking",
  "Partnerships",
  "Media",
  "Founder Collaboration",
  "Books",
  "Advisory",
  "General Inquiry",
];

const API_URL = import.meta.env.VITE_API_URL;
const hasRemoteApi = typeof API_URL === "string" && API_URL.trim() !== "" && !API_URL.includes("localhost");

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "Speaking", organization: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const getWebmailUrl = () => {
    const subject = encodeURIComponent(`[ABAA Contact - ${form.type}] Inquiry from ${form.name || "Website Visitor"}`);
    const bodyLines = [
      `Name: ${form.name || "N/A"}`,
      `Email: ${form.email || "N/A"}`,
      `Organization: ${form.organization || "N/A"}`,
      `Inquiry Type: ${form.type}`,
      "",
      "Message:",
      form.message || ""
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    return `mailto:Arafat@abaaworld.com?cc=harafat750@gmail.com&subject=${subject}&body=${body}`;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name || name.length > 200) return toast({ title: "Please enter your name.", variant: "destructive" });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return toast({ title: "Please enter a valid email.", variant: "destructive" });
    if (!message || message.length > 5000) return toast({ title: "Please share a message.", variant: "destructive" });

    setLoading(true);
    const mailtoUrl = getWebmailUrl();

    // Persist inquiry locally so no message is lost
    try {
      const existing = JSON.parse(localStorage.getItem("abaa_contact_inquiries") || "[]");
      existing.push({
        name,
        email,
        organization: form.organization.trim(),
        inquiry_type: form.type,
        message,
        date: new Date().toISOString(),
      });
      localStorage.setItem("abaa_contact_inquiries", JSON.stringify(existing));
    } catch {
      // Ignore storage errors
    }

    if (hasRemoteApi) {
      try {
        const response = await fetch(`${API_URL}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            organization: form.organization.trim(),
            inquiry_type: form.type,
            message,
          }),
        });

        if (response.ok) {
          setSubmitted(true);
          setLoading(false);
          return;
        }
      } catch {
        // Fall back to webmail dispatch below
      }
    }

    // Direct webmail dispatch to Arafat@abaaworld.com & forward to harafat750@gmail.com
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <Seo title={"Contact · ABAA"} description={"Begin the conversation — speaking, partnerships, enterprise collaboration, and publishing inquiries."} canonical="/contact" />

      <section className="pt-40 pb-24 bg-navy text-ivory">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="section-label mb-6">Contact</p>
          <h1 className="font-serif text-5xl md:text-7xl text-ivory leading-[1.02] mb-8">
            Let's build meaningful things together.
          </h1>
          <div className="gold-rule-long mb-8" />
          <p className="font-serif text-xl md:text-2xl italic text-ivory/80 leading-snug max-w-2xl">
            For speaking, partnerships, media, founder collaboration, books, or advisory engagements.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-4">
            <p className="section-label mb-6">Inquiry Categories</p>
            <ul className="space-y-3 mb-12">
              {inquiryTypes.map((t) => (
                <li key={t} className="border-l border-gold/60 pl-4 font-serif text-lg text-charcoal/85">{t}</li>
              ))}
            </ul>
            <div className="border-t border-stone pt-6">
              <p className="section-label mb-2">Direct</p>
              <a href="mailto:Arafat@abaaworld.com" className="font-sans text-sm text-charcoal/85 hover:text-gold transition-colors font-medium block">
                ✉️ Arafat@abaaworld.com
              </a>
              <p className="font-sans text-xs text-charcoal/60 mt-1">
                Forwarded to: <span className="font-mono text-[11px] text-charcoal/75">harafat750@gmail.com</span>
              </p>
            </div>
          </aside>

          <div className="lg:col-span-8 bg-ivory-warm p-8 md:p-12 rounded-xl border border-stone/30">
            {!submitted ? (
              <form onSubmit={submit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="section-label block mb-2">Full Name</label>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-ivory border border-stone rounded-lg px-4 py-3.5 text-sm font-sans text-charcoal focus:outline-none focus:border-gold transition-colors"
                      placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="section-label block mb-2">Email</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-ivory border border-stone rounded-lg px-4 py-3.5 text-sm font-sans text-charcoal focus:outline-none focus:border-gold transition-colors"
                      placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="section-label block mb-2">Organization</label>
                    <input value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      className="w-full bg-ivory border border-stone rounded-lg px-4 py-3.5 text-sm font-sans text-charcoal focus:outline-none focus:border-gold transition-colors"
                      placeholder="Company, institution, or organization" />
                  </div>
                  <div>
                    <label className="section-label block mb-2">Inquiry Type</label>
                    <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full bg-ivory border border-stone rounded-lg px-4 py-3.5 text-sm font-sans text-charcoal focus:outline-none focus:border-gold transition-colors">
                      {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="section-label block mb-2">Message</label>
                  <textarea required rows={7} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-ivory border border-stone rounded-lg px-4 py-3.5 text-sm font-sans text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Share the context, timing, and what you hope to build together." />
                </div>

                <div className="pt-2">
                  <button type="submit" disabled={loading}
                    className="w-full bg-navy text-ivory py-4 text-xs font-sans font-semibold tracking-[0.08em] uppercase hover:bg-gold hover:text-navy hover:shadow-md transition-all duration-300 rounded-lg disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                    {loading ? "Sending…" : "Submit Inquiry"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex items-center justify-center min-h-[420px] text-center">
                <div>
                  <div className="gold-rule-long mx-auto mb-8" />
                  <p className="font-serif text-3xl italic text-navy mb-4">Message Dispatched.</p>
                  <p className="font-sans text-base font-light text-charcoal/70 max-w-sm mb-6">
                    Thank you for reaching out. Your inquiry has been directed to Arafat@abaaworld.com and forwarded to harafat750@gmail.com. ABAA's team reviews every message and responds within 48 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", type: "Speaking", organization: "", message: "" });
                    }}
                    className="text-xs font-sans font-medium uppercase tracking-[0.08em] text-charcoal/60 hover:text-gold transition-colors"
                  >
                    ← Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer statement */}
      <section className="py-20 bg-emerald text-ivory text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="font-serif text-2xl md:text-3xl italic text-ivory/90 leading-snug">
            "Building systems that move industries, communities, and human potential forward."
          </p>
          <p className="section-label text-gold mt-6">— ABAA</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
