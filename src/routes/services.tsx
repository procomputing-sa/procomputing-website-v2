import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { Cloud, Cpu, Globe, Wrench, Server, Video, Check } from "lucide-react";
import { FadeIn, SectionHeader } from "../components/Section";
import { useGsap } from "../hooks/use-gsap";
import { ImageCard } from "../components/ImageCard";
import imgCloud from "../assets/card-cloud.jpg?w=480;800;1280&format=webp&quality=72&as=srcset";
import imgHardware from "../assets/card-hardware.jpg?w=480;800;1280&format=webp&quality=72&as=srcset";
import imgWeb from "../assets/card-web.jpg?w=480;800;1280&format=webp&quality=72&as=srcset";
import imgMaintenance from "../assets/card-maintenance.jpg?w=480;800;1280&format=webp&quality=72&as=srcset";
import imgHosting from "../assets/card-hosting.jpg?w=480;800;1280&format=webp&quality=72&as=srcset";
import imgCctv from "../assets/card-cctv.jpg?w=480;800;1280&format=webp&quality=72&as=srcset";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "IT Services | Cloud, Hardware, Web & CCTV | ProComputing" },
      {
        name: "description",
        content:
          "Explore ProComputing services: cloud backups, IT hardware supply, web design, IT maintenance, hosting and CCTV security for South African businesses.",
      },
      { property: "og:title", content: "IT Services | Cloud, Hardware, Web & CCTV | ProComputing" },
      {
        property: "og:description",
        content:
          "Cloud backups, hardware supply, web design, maintenance, hosting and CCTV security — one accountable IT partner.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://procomputing.co.za/services" },
      {
        property: "og:image",
        content:
          "https://procomputing.co.za/__l5e/assets-v1/40b39c77-df2c-40d0-8252-5e5e81cff0ad/og-services.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "ProComputing branded preview image" },
      {
        name: "twitter:image",
        content:
          "https://procomputing.co.za/__l5e/assets-v1/40b39c77-df2c-40d0-8252-5e5e81cff0ad/og-services.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "IT Services | Cloud, Hardware, Web & CCTV | ProComputing",
      },
      {
        name: "twitter:description",
        content:
          "Cloud backups, hardware supply, web design, maintenance, hosting and CCTV security — one accountable IT partner.",
      },
    ],
    links: [{ rel: "canonical", href: "https://procomputing.co.za/services" }],
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
              name: "Services",
              item: "https://procomputing.co.za/services",
            },
          ],
        }),
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Cloud,
    img: imgCloud,
    title: "Cloud Backups",
    body: "Automated offsite backups, cloud recovery and end-to-end data encryption.",
    features: [
      "Incremental snapshots",
      "Ransomware rollback",
      "Geo-redundant storage",
      "AES-256 encryption",
    ],
  },
  {
    icon: Cpu,
    img: imgHardware,
    title: "IT Product Supplies",
    body: "Enterprise laptops, desktops, Mac & Windows ecosystems and server hardware.",
    features: [
      "Vendor-neutral sourcing",
      "Fleet deployment",
      "Warranty management",
      "Asset tracking",
    ],
  },
  {
    icon: Globe,
    img: imgWeb,
    title: "Web Design & Engineering",
    body: "Modern high-conversion web apps, e-commerce and custom portals.",
    features: [
      "React & headless CMS",
      "Payment integrations",
      "SEO & performance",
      "Ongoing evolution",
    ],
  },
  {
    icon: Wrench,
    img: imgMaintenance,
    title: "IT Maintenance",
    body: "Proactive monitoring, minimum downtime and SLA-backed support.",
    features: ["24/7 monitoring", "Priority SLAs", "Root-cause reporting", "Quarterly reviews"],
  },
  {
    icon: Server,
    img: imgHosting,
    title: "Hosting & Domain Infrastructure",
    body: "Reliable domain provisioning, DNS and high-speed mail hosting.",
    features: ["Domain registration", "Managed DNS", "Business email", "DKIM / SPF / DMARC"],
  },
  {
    icon: Video,
    img: imgCctv,
    title: "CCTV & Physical Security",
    body: "HD surveillance, UPS backup systems and real-time access control.",
    features: ["4K IP cameras", "Remote viewing", "Access control", "UPS integration"],
  },
];

const partners = [
  "mcgins.co.za",
  "mltrade.co.za",
  "industrialshelvingintl.com",
  "365properties.co.za",
  "getalonggang.co.za",
  "l4ainternational.com",
  "wrapstar.co.za",
  "eliteconcreteproducts.co.za",
  "leatherhead.co.za",
  "nace3rdpartyinspections.com",
  "leatherhead.co.za",
  "nace3rdpartyinspections.com",
  "kingfisherinn.co.za",
  "cornerstonetransport.co.za",
  "sjenterprize.co.za",
];

function Services() {
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLElement>(null);
  const partnersRef = useRef<HTMLElement>(null);

  useGsap(({ gsap, isMobile, reduced }) => {
    if (reduced) return;

    /* HERO: headline drifts and softens as the catalogue takes over */
    if (heroRef.current) {
      gsap.to(".svc-hero-copy", {
        yPercent: -18,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".svc-hero-blob", {
        yPercent: 35,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    /* CARDS: staged 3D entrance, glow reveal, and scroll-linked column drift */
    if (gridRef.current) {
      gsap.from(".svc-card", {
        opacity: 0,
        y: 60,
        rotateX: -10,
        scale: 0.94,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
      });
      gsap.fromTo(
        ".svc-card",
        { boxShadow: "0 0 0 rgba(0,102,255,0)" },
        {
          boxShadow: "0 18px 60px -18px rgba(0,102,255,0.45)",
          duration: 0.9,
          stagger: 0.1,
          scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
        },
      );
      if (!isMobile) {
        gsap.utils.toArray<HTMLElement>(".svc-card").forEach((el, i) => {
          const dir = i % 3 === 1 ? -1 : 1;
          gsap.fromTo(
            el,
            { y: 24 * dir },
            {
              y: -24 * dir,
              ease: "none",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
      }
    }

    /* PARTNERS: header pins briefly, marquee reacts to scroll direction */
    if (partnersRef.current) {
      gsap.from(".partners-header", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: partnersRef.current, start: "top 80%" },
      });
      gsap.fromTo(
        ".partners-rail",
        { x: 80, opacity: 0.4 },
        {
          x: -80,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: partnersRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }
  }, []);

  return (
    <div>
      <section ref={heroRef} className="px-6 pt-10 pb-16 text-center relative overflow-hidden">
        <div className="svc-hero-blob anti-grid-blob w-[540px] h-[540px] rounded-full bg-cyan-400/30 -top-48 left-1/2 -translate-x-1/2" />
        <div className="svc-hero-copy relative">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs text-cyan-300 liquid-glass">
              Services Catalogue
            </span>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold text-slate-900 leading-[1.05] max-w-4xl mx-auto">
              Comprehensive IT{" "}
              <span className="font-display italic text-gradient-cyan font-normal">
                ecosystems.
              </span>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section ref={gridRef} className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 [perspective:1500px]">
          {services.map((s) => (
            <ImageCard
              key={s.title}
              image={s.img}
              tone="light"
              contrast="high"
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 48vw, 33vw"
              className="svc-card liquid-glass liquid-glass-glow rounded-3xl p-7 h-full hover:[transform:translateZ(20px)_translateY(-6px)] transition-transform duration-500"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl liquid-glass flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.body}</p>
                <ul className="mt-5 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="w-3.5 h-3.5 text-cyan-500 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </ImageCard>
          ))}
        </div>
      </section>

      <section ref={partnersRef} className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="partners-header">
            <SectionHeader
              center
              eyebrow="Partner Ecosystem"
              title="Working with the"
              italic="best in the industry."
            />
          </div>
          <div className="partners-rail mt-12 overflow-hidden liquid-glass rounded-full py-6">
            <div className="flex gap-16 animate-marquee whitespace-nowrap">
              {[...partners, ...partners].map((p, i) => (
                <span
                  key={i}
                  className="text-2xl font-display italic text-slate-500 hover:text-cyan-300 transition-colors"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
