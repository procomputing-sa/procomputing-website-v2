import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Tag, Clock } from "lucide-react";
import { FadeIn, SectionHeader } from "../components/Section";
import { useScrollytelling } from "../hooks/use-scrollytelling";

export const Route = createFileRoute("/specials")({
  head: () => ({
    meta: [
      { title: "Specials & Request a Call Back | ProComputing" },
      {
        name: "description",
        content:
          "Request a prompt call back from ProComputing and browse current IT specials: cloud bundles, workstation refresh deals and CCTV starter kits.",
      },
      { property: "og:title", content: "Specials & Request a Call Back | ProComputing" },
      {
        property: "og:description",
        content: "Prompt call-backs plus limited-time IT bundles on cloud, workstations and CCTV.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://procomputing.co.za/specials" },
      {
        property: "og:image",
        content:
          "https://procomputing.co.za/__l5e/assets-v1/3ec3c529-dfba-4c2b-b6b0-af4ea1a694b5/og-specials.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "ProComputing branded preview image" },
      {
        name: "twitter:image",
        content:
          "https://procomputing.co.za/__l5e/assets-v1/3ec3c529-dfba-4c2b-b6b0-af4ea1a694b5/og-specials.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Specials & Request a Call Back | ProComputing" },
      {
        name: "twitter:description",
        content: "Prompt call-backs plus limited-time IT bundles on cloud, workstations and CCTV.",
      },
    ],
    links: [{ rel: "canonical", href: "https://procomputing.co.za/specials" }],
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
              name: "Specials",
              item: "https://procomputing.co.za/specials",
            },
          ],
        }),
      },
    ],
  }),
  component: Specials,
});

const services = ["Hardware", "Cloud Backup", "Web Development", "IT Maintenance", "CCTV"];

const offers = [
  {
    title: "SME Cloud Bundle",
    price: "R 1 899 / mo",
    tag: "-25%",
    body: "Automated backups, monitoring and priority support for teams up to 15.",
    perks: ["Nightly encrypted backups", "Priority phone support", "Monthly health report"],
  },
  {
    title: "Workstation Refresh",
    price: "R 24 900",
    tag: "Limited",
    body: "Business-grade laptop bundle with 3-year warranty and setup included.",
    perks: ["Intel Core Ultra 7", "32GB RAM · 1TB NVMe", "White-glove deployment"],
  },
  {
    title: "CCTV Starter Kit",
    price: "R 12 500",
    tag: "New",
    body: "Four HD cameras, NVR, UPS backup and cloud viewing app.",
    perks: ["4x 4K cameras", "2TB local storage", "Remote mobile access"],
  },
];

function Specials() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    time: "morning",
    need: "Hardware",
    notes: "",
  });
  const heroRef = useRef<HTMLElement>(null);
  const offersRef = useRef<HTMLElement>(null);

  useScrollytelling(({ parallax, revealStagger, drift }) => {
    if (heroRef.current) parallax(".specials-hero", heroRef.current, -6);
    revealStagger(".wizard-panel", { y: 40, scale: 0.97, start: "top 90%" });
    if (offersRef.current) {
      revealStagger(".offer-card", { y: 52, scale: 0.96, rotateX: 8, stagger: 0.12 });
      drift(".offer-drift", 26);
    }
  });

  const next = () => setStep((s) => Math.min(2, s + 1));
  const prev = () => setStep((s) => Math.max(0, s - 1));

  return (
    <div>
      <section ref={heroRef} className="px-6 pt-10 pb-16 specials-hero overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs text-cyan-300 liquid-glass">
              Call Back · Specials
            </span>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold text-slate-900 leading-[1.05]">
              Request a prompt{" "}
              <span className="font-display italic text-gradient-cyan font-normal">call back.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl mx-auto text-slate-600 text-lg">
              Take a moment to complete the form below. Our technical team will respond within 24
              hours.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-8 overflow-hidden">
        <div className="wizard-panel max-w-3xl mx-auto liquid-glass liquid-glass-glow rounded-[2.5rem] p-8 relative overflow-hidden">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full ${i <= step ? "bg-gradient-to-r from-cyan-400 to-blue-500" : "bg-slate-900/10"}`}
              />
            ))}
          </div>

          {done ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 mx-auto rounded-full bg-cyan-400/20 flex items-center justify-center">
                <Check className="w-8 h-8 text-cyan-300" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">Request received</h3>
              <p className="mt-2 text-slate-600">
                Thanks {form.name || "there"} — we'll call you back on {form.phone || "your number"}{" "}
                shortly.
              </p>
              <button
                onClick={() => {
                  setDone(false);
                  setStep(0);
                }}
                className="mt-6 liquid-glass rounded-full px-5 py-2 text-sm"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {step === 0 && (
                  <div className="space-y-4">
                    <p className="text-xs text-cyan-300">Step 1 · Contact details</p>
                    <h3 className="text-2xl font-semibold text-slate-900">Who should we call?</h3>
                    <input
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="liquid-glass rounded-2xl px-4 py-3 text-sm bg-transparent w-full focus:outline-none focus:border-cyan-400/40"
                    />
                    <input
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="liquid-glass rounded-2xl px-4 py-3 text-sm bg-transparent w-full focus:outline-none focus:border-cyan-400/40"
                    />
                    <div>
                      <p className="text-xs text-slate-500 mb-2">Preferred time</p>
                      <div className="flex flex-wrap gap-2">
                        {["morning", "afternoon", "evening"].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setForm({ ...form, time: t })}
                            className={`px-4 py-1.5 rounded-full text-sm capitalize border ${form.time === t ? "bg-cyan-400/15 border-cyan-400/40 text-cyan-200" : "border-slate-900/10 text-slate-600"}`}
                          >
                            <Clock className="w-3 h-3 inline mr-1" />
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-4">
                    <p className="text-xs text-cyan-300">Step 2 · IT requirement</p>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      What do you need help with?
                    </h3>
                    <select
                      value={form.need}
                      onChange={(e) => setForm({ ...form, need: e.target.value })}
                      className="liquid-glass rounded-2xl px-4 py-3 text-sm bg-transparent w-full focus:outline-none focus:border-cyan-400/40"
                    >
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-white">
                          {s}
                        </option>
                      ))}
                    </select>
                    <textarea
                      rows={5}
                      placeholder="Anything else we should know?"
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="liquid-glass rounded-2xl px-4 py-3 text-sm bg-transparent w-full resize-none focus:outline-none focus:border-cyan-400/40"
                    />
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <p className="text-xs text-cyan-300">Step 3 · Confirm</p>
                    <h3 className="text-2xl font-semibold text-slate-900">Ready to submit</h3>
                    <div className="liquid-glass rounded-2xl p-4 space-y-2 text-sm">
                      <p className="text-slate-700">
                        <span className="text-slate-500">Name · </span>
                        {form.name || "—"}
                      </p>
                      <p className="text-slate-700">
                        <span className="text-slate-500">Phone · </span>
                        {form.phone || "—"}
                      </p>
                      <p className="text-slate-700 capitalize">
                        <span className="text-slate-500">Time · </span>
                        {form.time}
                      </p>
                      <p className="text-slate-700">
                        <span className="text-slate-500">Need · </span>
                        {form.need}
                      </p>
                      {form.notes && (
                        <p className="text-slate-700">
                          <span className="text-slate-500">Notes · </span>
                          {form.notes}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}

          {!done && (
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={prev}
                disabled={step === 0}
                className="liquid-glass rounded-full px-5 py-2 text-sm text-slate-700 inline-flex items-center gap-2 disabled:opacity-40"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              {step < 2 ? (
                <button
                  onClick={next}
                  className="liquid-glass-glow rounded-full px-5 py-2 text-sm text-slate-900 inline-flex items-center gap-2"
                >
                  Next <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setDone(true)}
                  className="liquid-glass-glow rounded-full px-5 py-2 text-sm text-slate-900 inline-flex items-center gap-2"
                >
                  Submit <Check className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      <section ref={offersRef} className="px-6 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Most recent offers"
            title="Limited-time"
            italic="bundles & deals."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {offers.map((o) => (
              <div key={o.title} className="offer-drift">
                <div className="offer-card liquid-glass rounded-3xl p-7 h-full relative overflow-hidden hover:-translate-y-2 transition-transform duration-500">
                  <span className="absolute top-5 right-5 text-xs px-2 py-1 rounded-full liquid-glass text-cyan-300 flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {o.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 pr-16">{o.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{o.body}</p>
                  <p className="mt-5 font-display italic text-4xl text-gradient-cyan">{o.price}</p>
                  <ul className="mt-4 space-y-1.5">
                    {o.perks.map((p) => (
                      <li key={p} className="text-xs text-slate-600 flex items-center gap-2">
                        <Check className="w-3 h-3 text-cyan-300" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
