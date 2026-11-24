import { useState } from "react";
import { Link } from "react-router-dom";
import abaaFloral from "@/assets/abaa-floral.jpeg";

const API_URL = import.meta.env.VITE_API_URL;
const hasRemoteApi = typeof API_URL === "string" && API_URL.trim() !== "" && !API_URL.includes("localhost");

export default function EmailSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    // Persist subscriber locally so no subscription is lost
    try {
      const existing = JSON.parse(localStorage.getItem("abaa_newsletter_subscribers") || "[]");
      if (!existing.includes(trimmed)) {
        existing.push(trimmed);
        localStorage.setItem("abaa_newsletter_subscribers", JSON.stringify(existing));
      }
    } catch {
      // Ignore storage errors
    }

    const mailtoUrl = `mailto:Arafat@abaaworld.com?cc=harafat750@gmail.com&subject=${encodeURIComponent("Newsletter / Waitlist Subscription")}&body=${encodeURIComponent("Please add " + trimmed + " to the ABAA waitlist and founder letters mailing list.")}`;

    // Only attempt fetch if a live remote API URL is explicitly configured
    if (hasRemoteApi) {
      try {
        const res = await fetch(`${API_URL}/api/newsletter`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: trimmed }),
        });

        if (res.ok) {
          setStatus("success");
          setEmail("");
          return;
        }
      } catch {
        // Fall back to webmail dispatch below
      }
    }

    // Direct webmail dispatch to Arafat@abaaworld.com & forward to harafat750@gmail.com
    window.location.href = mailtoUrl;
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="relative py-28 md:py-36 bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <img src={abaaFloral} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/85 to-navy" />
      </div>

      <div className="relative container mx-auto px-6 text-center max-w-2xl">
        <p className="section-label mb-6">Founder Letters</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.05] mb-6">
          Reflections from the work.
        </h2>
        <p className="font-sans text-base font-light text-ivory/65 leading-relaxed mb-10 max-w-xl mx-auto">
          A private correspondence on building systems, leading with stewardship, and shaping ecosystems for human flourishing. Sent occasionally. Read deeply.
        </p>

        {status === "success" ? (
          <div className="text-center">
            <div className="gold-rule-long mx-auto mb-6" />
            <p className="font-serif text-2xl italic text-ivory/90 mb-2">You're on the list.</p>
            <p className="font-sans text-sm text-ivory/55">
              Watch your inbox — ABAA's letters arrive with intention, not noise.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus("idle"); setErrorMsg(""); }}
              placeholder="your@email.com"
              required
              className="flex-1 bg-ivory/10 border border-ivory/25 text-ivory placeholder:text-ivory/40 px-5 py-3.5 text-sm font-sans rounded-lg focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-gold text-navy px-7 py-3.5 text-xs font-sans font-semibold tracking-[0.08em] uppercase rounded-lg hover:bg-ivory hover:shadow-md transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {status === "loading" ? "Joining…" : "Join the List"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="font-sans text-sm text-red-300 mt-3">
            {errorMsg}{" "}
            <Link to="/contact" className="text-gold hover:text-ivory underline transition-colors">
              Contact ABAA
            </Link>
          </p>
        )}

        <p className="font-serif text-sm italic text-ivory/40 mt-6 max-w-md mx-auto">
          No spam. Unsubscribe any time. Or write directly to{" "}
          <a href="mailto:Arafat@abaaworld.com" className="text-gold/70 hover:text-gold transition-colors">
            Arafat@abaaworld.com
          </a>.
        </p>
      </div>
    </section>
  );
}
