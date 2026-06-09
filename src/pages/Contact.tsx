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

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "Speaking", organization: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

      if (!response.ok) {
        const errorData = await response.json() as Record<string, unknown>;
        const errorMsg = errorData.error != null ? String(errorData.error) : "Failed to submit inquiry";
        throw new Error(errorMsg);
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Please try again shortly.";
      toast({ title: "Could not send message", description: message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
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
              <p className="font-sans text-sm text-charcoal/75">hello@abaa.world</p>
              <p className="font-sans text-sm text-charcoal/75 mt-1">press@abaa.world</p>
            </div>
          </aside>

          <div className="lg:col-span-8 bg-ivory-warm p-8 md:p-12">
            {!submitted ? (
              <form onSubmit={submit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="section-label block mb-2">Full Name</label>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-ivory border border-stone px-4 py-3.5 text-sm font-sans text-charcoal focus:outline-none focus:border-gold transition-colors"
                      placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="section-label block mb-2">Email</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-ivory border border-stone px-4 py-3.5 text-sm font-sans text-charcoal focus:outline-none focus:border-gold transition-colors"
                      placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="section-label block mb-2">Organization</label>
                    <input value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      className="w-full bg-ivory border border-stone px-4 py-3.5 text-sm font-sans text-charcoal focus:outline-none focus:border-gold transition-colors"
                      placeholder="Company, institution, or organization" />
                  </div>
                  <div>
                    <label className="section-label block mb-2">Inquiry Type</label>
                    <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full bg-ivory border border-stone px-4 py-3.5 text-sm font-sans text-charcoal focus:outline-none focus:border-gold transition-colors">
                      {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="section-label block mb-2">Message</label>
                  <textarea required rows={7} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-ivory border border-stone px-4 py-3.5 text-sm font-sans text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Share the context, timing, and what you hope to build together." />
                </div>

                <button type="submit" disabled={loading}
                  className="w-full bg-navy text-ivory py-4 text-[0.7rem] font-sans font-medium tracking-[0.05em] uppercase hover:bg-gold hover:text-navy transition-all duration-300 rounded-full disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? "Sending…" : "Connect With ABAA"}
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center min-h-[420px] text-center">
                <div>
                  <div className="gold-rule-long mx-auto mb-8" />
                  <p className="font-serif text-3xl italic text-navy mb-4">Message received.</p>
                  <p className="font-sans text-base font-light text-charcoal/70 max-w-sm">
                    Thank you for reaching out. ABAA's team reviews every message personally and responds within 48 hours.
                  </p>
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
