import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { FadeIn } from "../components/Section";
import { useGsap } from "../hooks/use-gsap";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process | The 6-D IT Delivery Framework | ProComputing" },
      {
        name: "description",
        content:
          "Discover, Define, Design, Develop, Deploy, Deliver — see how ProComputing plans, builds and supports IT projects with zero-downtime deployments.",
      },
      { property: "og:title", content: "Our Process | The 6-D IT Delivery Framework" },
      {
        property: "og:description",
        content:
          "Discover, Define, Design, Develop, Deploy, Deliver — how ProComputing engineers reliable IT outcomes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://procomputing.co.za/process" },
      {
        property: "og:image",
        content:
          "https://procomputing.co.za/__l5e/assets-v1/110a856f-2863-4c28-97c2-0ea548e35ffe/og-process.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "ProComputing branded preview image" },
      {
        name: "twitter:image",
        content:
          "https://procomputing.co.za/__l5e/assets-v1/110a856f-2863-4c28-97c2-0ea548e35ffe/og-process.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Our Process | The 6-D IT Delivery Framework" },
      {
        name: "twitter:description",
        content:
          "Discover, Define, Design, Develop, Deploy, Deliver — how ProComputing engineers reliable IT outcomes.",
      },
    ],
    links: [{ rel: "canonical", href: "https://procomputing.co.za/process" }],
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
              name: "Our Process",
              item: "https://procomputing.co.za/process",
            },
          ],
        }),
      },
    ],
  }),
  component: Process,
});

const steps = [
  { n: "01", title: "Discover", body: "Deep requirement gathering and full infrastructure audit." },
  { n: "02", title: "Define", body: "Strategic blueprinting and risk mitigation planning." },
  { n: "03", title: "Design", body: "Architecture drafting, network topology and UX design." },
  { n: "04", title: "Develop", body: "Engineering, hardware configuration and software setup." },
  { n: "05", title: "Deploy", body: "Zero-downtime deployment and cloud integration." },
  { n: "06", title: "Deliver", body: "Ongoing SLA maintenance and continuous support." },
];

function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useGsap(({ gsap, reduced }) => {
    if (reduced || !ref.current) return;
    const paths = gsap.utils.toArray<SVGPathElement>(".process-path");
    paths.forEach((path) => {
      // The svg's parent box maps 1:1 to the card grid, so the first/last
      // path anchors sit at ~8.3% / ~91.7% of its height (card row centers).
      const box = path.closest("svg")?.parentElement ?? ref.current!;
      gsap.fromTo(
        path,
        { strokeDashoffset: 1 },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: box,
            // start drawing exactly when card 01 reaches the viewport centre
            start: "top+=8.3% center",
            // finish when the last card centre reaches the viewport centre
            end: "bottom-=8.3% center",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        },
      );
    });
  });

  return (
    <div>
      <section ref={heroRef} className="px-6 pt-10 pb-16 text-center process-hero">
        <FadeIn>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs text-cyan-300 liquid-glass">
            What We Do
          </span>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold text-slate-900 leading-[1.05] max-w-4xl mx-auto">
            Our 6-D process{" "}
            <span className="font-display italic text-gradient-cyan font-normal">framework.</span>
          </h1>
        </FadeIn>
      </section>

      <section ref={ref} className="relative px-6 py-16">
        <div className="max-w-6xl mx-auto relative">
          {/* Mobile: single-column serpentine rail */}
          <div className="md:hidden relative">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 1680"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="cyanFillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00F0FF" />
                  <stop offset="100%" stopColor="#0066FF" />
                </linearGradient>
              </defs>
              <path
                d="M 20 140 C 20 280, 60 280, 60 420 C 60 560, 20 560, 20 700 C 20 840, 60 840, 60 980 C 60 1120, 20 1120, 20 1260 C 20 1400, 60 1400, 60 1540"
                stroke="rgba(15,23,42,0.1)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 20 140 C 20 280, 60 280, 60 420 C 60 560, 20 560, 20 700 C 20 840, 60 840, 60 980 C 60 1120, 20 1120, 20 1260 C 20 1400, 60 1400, 60 1540"
                stroke="url(#cyanFillMobile)"
                strokeWidth="2.5"
                fill="none"
                pathLength={1}
                strokeDasharray="1"
                strokeDashoffset="1"
                className="process-path"
                style={{ filter: "drop-shadow(0 0 8px rgba(0,240,255,0.6))" }}
              />
            </svg>

            <div className="relative">
              {steps.map((s) => (
                <div key={s.n} className="h-[280px] flex items-center pl-16">
                  <FadeIn className="w-full">
                    <div className="process-card liquid-glass liquid-glass-glow rounded-3xl p-6">
                      <span className="font-display italic text-4xl text-gradient-cyan">{s.n}</span>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900">{s.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{s.body}</p>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: serpentine path aligned to a fixed-row grid */}
          <div className="hidden md:block relative">
            {/* SVG spans the exact grid height. Anchors sit at column
                centers (x=250 / x=750 of 1000) and row centers (y = i*380 + 190
                of 380 * 6 = 2280). preserveAspectRatio="none" scales the
                viewBox to the container while keeping anchors aligned with
                the 2-col / 6-row grid below. */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 2280"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="cyanFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00F0FF" />
                  <stop offset="100%" stopColor="#0066FF" />
                </linearGradient>
              </defs>
              <path
                d="M 250 190 C 250 380, 750 380, 750 570 C 750 760, 250 760, 250 950 C 250 1140, 750 1140, 750 1330 C 750 1520, 250 1520, 250 1710 C 250 1900, 750 1900, 750 2090"
                stroke="rgba(15,23,42,0.1)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 250 190 C 250 380, 750 380, 750 570 C 750 760, 250 760, 250 950 C 250 1140, 750 1140, 750 1330 C 750 1520, 250 1520, 250 1710 C 250 1900, 750 1900, 750 2090"
                stroke="url(#cyanFill)"
                strokeWidth="2.5"
                fill="none"
                pathLength={1}
                strokeDasharray="1"
                strokeDashoffset="1"
                className="process-path"
                style={{ filter: "drop-shadow(0 0 8px rgba(0,240,255,0.6))" }}
              />
            </svg>

            <div className="grid grid-cols-2 relative">
              {steps.map((s, i) => (
                <div
                  key={s.n}
                  className={`h-[380px] flex items-center ${
                    i % 2 === 0 ? "col-start-1 justify-start pr-8" : "col-start-2 justify-end pl-8"
                  }`}
                >
                  <FadeIn className="w-full max-w-md">
                    <div className="process-card liquid-glass liquid-glass-glow rounded-3xl p-8">
                      <span className="font-display italic text-5xl text-gradient-cyan">{s.n}</span>
                      <h3 className="mt-3 text-2xl font-semibold text-slate-900">{s.title}</h3>
                      <p className="mt-3 text-slate-600">{s.body}</p>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
