import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, Sparkles } from "lucide-react";
import { FadeIn } from "../components/Section";
import { useScrollytelling } from "../hooks/use-scrollytelling";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ProComputing | IT Support in Amanzimtoti, Durban" },
      {
        name: "description",
        content:
          "Contact ProComputing at 394 Andrew Zondo Road, Amanzimtoti, Durban. Call +27 8444 77308, email info@procomputing.co.za or send an enquiry online.",
      },
      { property: "og:title", content: "Contact ProComputing | IT Support in Durban" },
      {
        property: "og:description",
        content:
          "394 Andrew Zondo Road, Amanzimtoti, Durban. Call +27 8444 77308 or email info@procomputing.co.za.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://procomputing.co.za/contact" },
      {
        property: "og:image",
        content:
          "https://procomputing.co.za/__l5e/assets-v1/13338eff-11a5-4b9e-b7f2-3029385e4f9f/og-contact.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "ProComputing branded preview image" },
      {
        name: "twitter:image",
        content:
          "https://procomputing.co.za/__l5e/assets-v1/13338eff-11a5-4b9e-b7f2-3029385e4f9f/og-contact.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact ProComputing | IT Support in Durban" },
      {
        name: "twitter:description",
        content:
          "394 Andrew Zondo Road, Amanzimtoti, Durban. Call +27 8444 77308 or email info@procomputing.co.za.",
      },
    ],
    links: [{ rel: "canonical", href: "https://procomputing.co.za/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://procomputing.co.za/" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Contact",
              item: "https://procomputing.co.za/contact",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://procomputing.co.za/#localbusiness",
          name: "ProComputing (PTY) LTD",
          url: "https://procomputing.co.za/",
          image:
            "https://procomputing.co.za/__l5e/assets-v1/13338eff-11a5-4b9e-b7f2-3029385e4f9f/og-contact.jpg",
          sameAs: [
            "https://www.facebook.com/procomputingsa",
            "https://www.tiktok.com/@kumargovender",
          ],
          email: "info@procomputing.co.za",
          telephone: "+27844477308",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "394 Andrew Zondo Road",
            addressLocality: "Amanzimtoti",
            addressRegion: "KwaZulu-Natal",
            postalCode: "4126",
            addressCountry: "ZA",
          },
          areaServed: "South Africa",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "17:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday"],
              opens: "08:00",
              closes: "12:00",
            },
          ],
        }),
      },
    ],
  }),
  component: Contact,
});

const pills = ["Cloud", "Hardware", "Web", "CCTV"];

function Contact() {
  const [selected, setSelected] = useState<string[]>(["Cloud"]);
  const [sent, setSent] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const bodyRef = useRef<HTMLElement>(null);

  useScrollytelling(({ parallax, revealStagger }) => {
    if (heroRef.current) parallax(".contact-hero", heroRef.current, -6);
    if (bodyRef.current) {
      revealStagger(".contact-panel", { y: 48, scale: 0.97, rotateX: 6, start: "top 88%" });
      revealStagger(".contact-chip", { y: 22, stagger: 0.08, start: "top 92%" });
    }
  });

  const toggle = (p: string) =>
    setSelected((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));

  return (
    <div>
      <section ref={heroRef} className="px-6 pt-10 pb-16 text-center contact-hero">
        <FadeIn>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs text-cyan-300 liquid-glass">
            Contact
          </span>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold text-slate-900 leading-[1.05] max-w-4xl mx-auto">
            Let's build your{" "}
            <span className="font-display italic text-gradient-cyan font-normal">
              digital backbone.
            </span>
          </h1>
        </FadeIn>
      </section>

      <section ref={bodyRef} className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
          {/* Form */}
          <FadeIn>
            <div className="contact-panel liquid-glass rounded-[2.5rem] rounded-tl-lg p-8 relative overflow-hidden">
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10 liquid-glass flex flex-col items-center justify-center text-center p-8"
                  >
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
                        animate={{
                          opacity: 0,
                          x: (Math.random() - 0.5) * 400,
                          y: (Math.random() - 0.5) * 400,
                          scale: 1,
                        }}
                        transition={{ duration: 1.5, delay: i * 0.03 }}
                        className="absolute w-2 h-2 rounded-full bg-cyan-400"
                        style={{ boxShadow: "0 0 12px #00F0FF" }}
                      />
                    ))}
                    <Sparkles className="w-10 h-10 text-cyan-300" />
                    <h3 className="mt-4 text-2xl font-semibold text-slate-900">Message sent</h3>
                    <p className="mt-2 text-slate-600">We'll be in touch within 24 hours.</p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-6 liquid-glass rounded-full px-5 py-2 text-sm"
                    >
                      Send another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <h2 className="text-2xl font-semibold text-slate-900">Send us a message</h2>
              <p className="text-sm text-slate-500 mt-1">Typical response within 24 hours.</p>

              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="Full name"
                    className="liquid-glass rounded-2xl px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-cyan-400/40 w-full"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    className="liquid-glass rounded-2xl px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-cyan-400/40 w-full"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-2">What can we help with?</p>
                  <div className="flex flex-wrap gap-2">
                    {pills.map((p) => {
                      const active = selected.includes(p);
                      return (
                        <button
                          type="button"
                          key={p}
                          onClick={() => toggle(p)}
                          className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                            active
                              ? "bg-cyan-400/15 border-cyan-400/40 text-cyan-200"
                              : "border-slate-900/10 text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="liquid-glass rounded-2xl px-4 py-3 text-sm bg-transparent w-full resize-none focus:outline-none focus:border-cyan-400/40"
                />

                <button
                  type="submit"
                  className="liquid-glass-glow rounded-full px-6 py-3 text-sm text-slate-900 inline-flex items-center gap-2"
                >
                  Send message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </FadeIn>

          {/* Right column */}
          <FadeIn delay={0.1}>
            <div className="space-y-5">
              <div className="contact-panel liquid-glass rounded-[2.5rem] rounded-tr-lg p-6 relative overflow-hidden">
                <div className="h-56 rounded-2xl relative overflow-hidden border border-slate-900/10">
                  <iframe
                    title="ProComputing location map"
                    src="https://maps.google.com/maps?q=394+Andrew+Zondo+Road%2C+Amanzimtoti%2C+Durban%2C+4126&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
                <div className="mt-4 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-300 mt-0.5" />
                  <div>
                    <p className="text-slate-900 font-medium">ProComputing HQ</p>
                    <p className="text-slate-600 text-sm">
                      394 Andrew Zondo Road
                      <br />
                      Amanzimtoti, Durban, 4126
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: Phone, label: "Call", value: "+27 8444 77308", href: "tel:+27844477308" },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@procomputing.co.za",
                    href: "mailto:info@procomputing.co.za",
                  },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    value: "Chat now",
                    href: "https://wa.me/27844477308",
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="contact-chip liquid-glass rounded-2xl p-4 hover:border-cyan-400/30 transition-colors block"
                  >
                    <c.icon className="w-5 h-5 text-cyan-300" />
                    <p className="text-xs text-slate-500 mt-3">{c.label}</p>
                    <p className="text-sm text-slate-900 truncate">{c.value}</p>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
