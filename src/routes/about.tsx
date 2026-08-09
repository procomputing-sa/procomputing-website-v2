import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Shield, Zap, Puzzle, MapPin, Wallet } from "lucide-react";
import { FadeIn, SectionHeader } from "../components/Section";
import { useGsap } from "../hooks/use-gsap";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | ProComputing IT Team in Amanzimtoti, Durban" },
      {
        name: "description",
        content:
          "Meet ProComputing: a Durban-based engineering team delivering secure, affordable enterprise IT across KwaZulu-Natal, Johannesburg and Cape Town.",
      },
      { property: "og:title", content: "About Us | ProComputing IT Team in Durban" },
      {
        property: "og:description",
        content:
          "A Durban-based engineering team delivering secure, affordable enterprise IT across South Africa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://procomputing.co.za/about" },
      {
        property: "og:image",
        content:
          "https://procomputing.co.za/__l5e/assets-v1/8f5ee23b-04cb-4698-abc3-c45ddc749be2/og-about.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "ProComputing branded preview image" },
      {
        name: "twitter:image",
        content:
          "https://procomputing.co.za/__l5e/assets-v1/8f5ee23b-04cb-4698-abc3-c45ddc749be2/og-about.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Us | ProComputing IT Team in Durban" },
      {
        name: "twitter:description",
        content:
          "A Durban-based engineering team delivering secure, affordable enterprise IT across South Africa.",
      },
    ],
    links: [{ rel: "canonical", href: "https://procomputing.co.za/about" }],
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
              name: "About Us",
              item: "https://procomputing.co.za/about",
            },
          ],
        }),
      },
    ],
  }),
  component: About,
});

const pillars = [
  {
    title: "Who We Are",
    body: "A tight-knit engineering team obsessed with reliable, elegant IT systems that scale with your business.",
  },
  {
    title: "Our Mission",
    body: "To make enterprise-grade infrastructure accessible, secure and understandable — no jargon, no lock-in.",
  },
  {
    title: "What We Do",
    body: "We design, deploy and maintain the full digital backbone: cloud, hardware, network, web and security.",
  },
];

const stats = [
  { value: 10, suffix: "+", label: "Enterprise clients served" },
  { value: 104, suffix: "+", label: "Projects completed" },
  { value: 3, suffix: "+", label: "Accolades earned" },
  { value: 23, suffix: "+", label: "High-capacity networks installed" },
];

const reasons = [
  {
    icon: Wallet,
    title: "Affordable Pricing",
    body: "Transparent, predictable pricing without hidden retainers.",
  },
  {
    icon: MapPin,
    title: "Local Support",
    body: "Boots-on-the-ground engineers based in Durban, responding in hours not days.",
  },
  {
    icon: Zap,
    title: "Install & Forget Automation",
    body: "Automated backups and monitoring that quietly do their job.",
  },
  {
    icon: Shield,
    title: "Zero-Trust Security",
    body: "Every access request is verified. Encryption end to end.",
  },
  {
    icon: Puzzle,
    title: "Universal Compatibility",
    body: "Windows, macOS, Linux, mobile — one team, all stacks.",
  },
];

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const dur = 1400;
    const id = setInterval(() => {
      const p = Math.min(1, (Date.now() - start) / dur);
      setN(Math.floor(p * value));
      if (p === 1) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [inView, value]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

function About() {
  const [open, setOpen] = useState<number | null>(0);
  const heroRef = useRef<HTMLElement>(null);
  const pillarsRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const reasonsRef = useRef<HTMLElement>(null);

  useGsap(({ gsap, isMobile, reduced }) => {
    if (reduced) return;

    /* HERO: copy drifts up, glow blob parallaxes down as you scroll away */
    if (heroRef.current) {
      gsap.to(".about-hero-copy", {
        yPercent: -14,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".about-hero-blob", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    /* PILLARS: staged 3D entrance + subtle scroll-linked tilt */
    if (pillarsRef.current) {
      gsap.from(".pillar-card", {
        opacity: 0,
        y: 60,
        rotateX: -12,
        scale: 0.94,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.14,
        scrollTrigger: { trigger: pillarsRef.current, start: "top 85%" },
      });
      if (!isMobile) {
        gsap.utils.toArray<HTMLElement>(".pillar-card").forEach((el, i) => {
          gsap.fromTo(
            el,
            { y: i % 2 === 0 ? 26 : -26 },
            {
              y: i % 2 === 0 ? -26 : 26,
              ease: "none",
              scrollTrigger: {
                trigger: pillarsRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
      }
    }

    /* STATS: header pins briefly while the numbers pop in one by one */
    if (statsRef.current) {
      gsap.from(".stats-header", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: statsRef.current, start: "top 80%" },
      });
      gsap.from(".stat-card", {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.7,
        ease: "back.out(1.6)",
        stagger: 0.1,
        scrollTrigger: { trigger: ".stats-grid", start: "top 88%" },
      });
    }

    /* REASONS: rows slide in from alternating sides as they enter */
    if (reasonsRef.current) {
      gsap.utils.toArray<HTMLElement>(".reason-row").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          x: i % 2 === 0 ? -50 : 50,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%" },
        });
      });
    }
  }, []);

  return (
    <div>
      <section ref={heroRef} className="px-6 pt-10 pb-24 relative overflow-hidden">
        <div className="about-hero-blob anti-grid-blob w-[520px] h-[520px] rounded-full bg-cyan-400/30 -top-40 left-1/2 -translate-x-1/2" />
        <div className="about-hero-copy max-w-6xl mx-auto text-center relative">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs text-cyan-300 liquid-glass">
              About ProComputing
            </span>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold text-slate-900 leading-[1.05]">
              Engineering trust through{" "}
              <span className="font-display italic text-gradient-cyan font-normal">
                innovation.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl mx-auto text-slate-600 text-lg">
              Based in Durban, South Africa — serving enterprise infrastructure across
              KwaZulu-Natal, Johannesburg and Cape Town.
            </p>
          </FadeIn>
        </div>
      </section>

      <section ref={pillarsRef} className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 [perspective:1400px]">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="pillar-card liquid-glass p-8 h-full rounded-[3rem] rounded-tr-lg relative overflow-hidden transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-cyan-400/10 blur-3xl" />
              <span className="text-xs text-cyan-300">0{i + 1}</span>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section ref={statsRef} className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="stats-header">
            <SectionHeader
              center
              eyebrow="Impact by numbers"
              title="Real work,"
              italic="real results."
            />
          </div>
          <div className="stats-grid mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="stat-card liquid-glass rounded-3xl p-6 text-center transition-transform duration-500 hover:-translate-y-1.5"
              >
                <div className="text-5xl md:text-6xl font-semibold text-gradient-cyan font-display">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-3 text-sm text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={reasonsRef} className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Why choose us"
            title="Cloud backup, security &"
            italic="a team that answers."
          />
          <div className="mt-12 space-y-3">
            {reasons.map((r, i) => (
              <button
                key={r.title}
                onClick={() => setOpen(open === i ? null : i)}
                className="reason-row w-full liquid-glass rounded-2xl p-5 text-left flex items-start gap-4 hover:border-cyan-400/20 hover:translate-x-1 transition-all duration-300"
              >
                <r.icon className="w-6 h-6 text-cyan-300 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-slate-900 font-medium">{r.title}</h3>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-600 transition-transform ${open === i ? "rotate-180" : ""}`}
                    />
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 text-slate-600 text-sm leading-relaxed">{r.body}</p>
                  </motion.div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
