import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Cloud,
  Cpu,
  Globe,
  Wrench,
  Server,
  Video,
  ArrowUpRight,
  Laptop,
  Monitor,
  Apple,
  Cable,
  Building2,
  Smartphone,
  Brain,
  Package,
} from "lucide-react";
import { FadeIn, SectionHeader } from "../components/Section";
import { ImageCard } from "../components/ImageCard";
import { useGsap } from "../hooks/use-gsap";
import heroBg from "../assets/hero-bg.jpg?w=1920&format=webp&quality=70";

import imgCloud from "../assets/card-cloud.jpg?w=480;800;1280&format=webp&quality=72&as=srcset";
import imgHardware from "../assets/card-hardware.jpg?w=480;800;1280&format=webp&quality=72&as=srcset";
import imgWeb from "../assets/card-web.jpg?w=480;800;1280&format=webp&quality=72&as=srcset";
import imgMaintenance from "../assets/card-maintenance.jpg?w=480;800;1280&format=webp&quality=72&as=srcset";
import imgHosting from "../assets/card-hosting.jpg?w=480;800;1280&format=webp&quality=72&as=srcset";
import imgCctv from "../assets/card-cctv.jpg?w=480;800;1280&format=webp&quality=72&as=srcset";
import prodLaptop from "../assets/prod-laptop.jpg?w=480;800;1280&format=webp&quality=72&as=srcset";
import prodDesktop from "../assets/prod-desktop.jpg?w=480;800;1280&format=webp&quality=72&as=srcset";
import prodMac from "../assets/prod-mac.jpg?w=480;800;1280&format=webp&quality=72&as=srcset";
import prodNetwork from "../assets/prod-network.jpg?w=480;800;1280&format=webp&quality=72&as=srcset";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProComputing | Enterprise IT, Cloud & Web in Durban" },
      {
        name: "description",
        content:
          "Cloud backups, IT hardware supply, web engineering, hosting, CCTV and managed IT support for South African businesses. Talk to ProComputing in Durban today.",
      },
      { property: "og:title", content: "ProComputing | Enterprise IT, Cloud & Web in Durban" },
      {
        property: "og:description",
        content:
          "Cloud backups, IT hardware, web engineering, hosting, CCTV and managed IT support for South African businesses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://procomputing.co.za/" },
      {
        property: "og:image",
        content:
          "https://procomputing.co.za/__l5e/assets-v1/117d6950-f707-4bca-86a6-8581a71ccbf3/og-home.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "ProComputing branded preview image" },
      {
        name: "twitter:image",
        content:
          "https://procomputing.co.za/__l5e/assets-v1/117d6950-f707-4bca-86a6-8581a71ccbf3/og-home.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ProComputing | Enterprise IT, Cloud & Web in Durban" },
      {
        name: "twitter:description",
        content:
          "Cloud backups, IT hardware, web engineering, hosting, CCTV and managed IT support for South African businesses.",
      },
    ],
    links: [{ rel: "canonical", href: "https://procomputing.co.za/" }],
  }),
  component: Home,
});

const services = [
  {
    icon: Cloud,
    title: "Cloud Backups",
    desc: "Automated offsite backups with encryption at rest and in transit.",
    img: imgCloud,
  },
  {
    icon: Cpu,
    title: "IT Hardware",
    desc: "Enterprise laptops, desktops, servers and workstation deployment.",
    img: imgHardware,
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "High-conversion web apps, portals and e-commerce experiences.",
    img: imgWeb,
  },
  {
    icon: Wrench,
    title: "IT Maintenance",
    desc: "Proactive monitoring, minimum downtime, SLA-backed support.",
    img: imgMaintenance,
  },
  {
    icon: Server,
    title: "Hosting & Domains",
    desc: "Reliable DNS, mail hosting and domain provisioning.",
    img: imgHosting,
  },
  {
    icon: Video,
    title: "CCTV & Security",
    desc: "HD surveillance, UPS backup and real-time access control.",
    img: imgCctv,
  },
];

const products = [
  {
    icon: Laptop,
    name: "Business Laptops",
    spec: "Intel Core Ultra · 32GB · 1TB NVMe",
    img: prodLaptop,
  },
  {
    icon: Monitor,
    name: "Desktop Workstations",
    spec: "Ryzen 9 · 64GB · dual-4K",
    img: prodDesktop,
  },
  { icon: Apple, name: "Mac Ecosystem", spec: "M4 Pro · deployment ready", img: prodMac },
  {
    icon: Cable,
    name: "Networking & Accessories",
    spec: "Enterprise switches · UPS · cabling",
    img: prodNetwork,
  },
];

const heroCards = [
  {
    icon: Building2,
    title: "Enterprise",
    sub: "Scale-ready IT",
    gradient: "from-[#0066FF] to-[#00B8CC]",
  },
  { icon: Cloud, title: "Cloud", sub: "Backups & infra", gradient: "from-[#00B8CC] to-[#0066FF]" },
  { icon: Globe, title: "Web", sub: "Engineering", gradient: "from-[#0066FF] to-[#00B8CC]" },
  {
    icon: Smartphone,
    title: "Mobile Dev",
    sub: "iOS & Android apps",
    gradient: "from-[#0066FF] to-[#00B8CC]",
  },
  {
    icon: Brain,
    title: "AI Integrations",
    sub: "Smart automation",
    gradient: "from-[#00B8CC] to-[#0066FF]",
  },
  {
    icon: Server,
    title: "Hosting",
    sub: "Domains & mail",
    gradient: "from-[#00B8CC] to-[#0066FF]",
  },
  {
    icon: Package,
    title: "IT Products",
    sub: "Hardware supplies",
    gradient: "from-[#0066FF] to-[#00B8CC]",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    sub: "SLA support",
    gradient: "from-[#0066FF] to-[#00B8CC]",
  },
  { icon: Video, title: "CCTV", sub: "Surveillance", gradient: "from-[#00B8CC] to-[#0066FF]" },
];

type HeroCard = (typeof heroCards)[number];

function HeroGridCard({ card, index }: { card: HeroCard; index: number }) {
  const Icon = card.icon;
  const durations = [7, 8, 9, 7.5, 8.5, 9.5];
  const duration = durations[index % durations.length];
  const delay = index * 0.18;
  return (
    <div
      className="liquid-glass rounded-2xl sm:rounded-3xl aspect-square flex flex-col items-center justify-center text-center p-3 sm:p-4 animate-float shadow-lg shadow-slate-900/5 pointer-events-auto hover:scale-[1.03] transition-transform duration-300"
      style={{ animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
    >
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-md shrink-0`}
      >
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
      </div>
      <p className="mt-2 sm:mt-3 font-semibold text-slate-900 text-xs sm:text-sm lg:text-base truncate w-full px-1">
        {card.title}
      </p>
      <p className="text-slate-500 text-[10px] sm:text-xs truncate w-full px-1">{card.sub}</p>
    </div>
  );
}

const testimonialsRow1 = [
  {
    name: "Adel Naidoo",
    role: "Operations Lead",
    quote: "ProComputing rebuilt our entire network in a weekend. Zero downtime since.",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Narseen Nelson",
    role: "Managing Director",
    quote: "Their cloud backup layer saved us during a ransomware attempt. Genuinely life-saving.",
    avatar: "https://i.pravatar.cc/120?img=15",
  },
  {
    name: "Thandi M.",
    role: "Finance Manager",
    quote: "Local support that actually picks up. Rare and valuable.",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Rajesh Pillay",
    role: "IT Director",
    quote: "Server migration handled overnight. Woke up to a faster stack.",
    avatar: "https://i.pravatar.cc/120?img=33",
  },
  {
    name: "Nomsa Khumalo",
    role: "CTO",
    quote: "Their SLA response time is genuinely under 10 minutes. Every time.",
    avatar: "https://i.pravatar.cc/120?img=48",
  },
];

const testimonialsRow2 = [
  {
    name: "Lerato Dube",
    role: "COO",
    quote: "The CCTV rollout across three branches was flawless. Zero snags.",
    avatar: "https://i.pravatar.cc/120?img=45",
  },
  {
    name: "Sipho K.",
    role: "Founder",
    quote: "Web platform they built converts twice what our old site did.",
    avatar: "https://i.pravatar.cc/120?img=52",
  },
  {
    name: "Ayesha Patel",
    role: "Head of Ops",
    quote: "Response times under 10 minutes. Every single ticket, without fail.",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
  {
    name: "Deon van Wyk",
    role: "IT Manager",
    quote: "Their team quietly modernised our whole hardware stack. No fuss.",
    avatar: "https://i.pravatar.cc/120?img=13",
  },
  {
    name: "Priya Reddy",
    role: "CFO",
    quote: "Transparent invoicing and predictable costs. Finally.",
    avatar: "https://i.pravatar.cc/120?img=44",
  },
];

const testimonialsRow3 = [
  {
    name: "Kabelo Mokoena",
    role: "Systems Architect",
    quote: "Migration to their hosting cut our page loads by 60%.",
    avatar: "https://i.pravatar.cc/120?img=68",
  },
  {
    name: "Zanele Mthembu",
    role: "Head of IT",
    quote: "Best managed IT partner we've ever engaged. Full stop.",
    avatar: "https://i.pravatar.cc/120?img=49",
  },
  {
    name: "Johan Botha",
    role: "General Manager",
    quote: "They treat our infrastructure like it's their own.",
    avatar: "https://i.pravatar.cc/120?img=60",
  },
  {
    name: "Fatima Adams",
    role: "Product Lead",
    quote: "The web build was pixel-perfect and shipped ahead of schedule.",
    avatar: "https://i.pravatar.cc/120?img=26",
  },
  {
    name: "Tumi Sithole",
    role: "Owner",
    quote: "Small business friendly, enterprise grade delivery.",
    avatar: "https://i.pravatar.cc/120?img=20",
  },
  {
    name: "Mark Fourie",
    role: "Head of Engineering",
    quote: "Their monitoring caught a hardware failure before we did.",
    avatar: "https://i.pravatar.cc/120?img=59",
  },
];

type Testimonial = { name: string; role: string; quote: string; avatar: string };

function TestimonialCard({ t, blue }: { t: Testimonial; blue?: boolean }) {
  return (
    <div
      className={`shrink-0 w-[280px] sm:w-[340px] md:w-[380px] p-5 sm:p-6 rounded-3xl backdrop-blur-xl border transition-transform duration-300 hover:scale-[1.02] ${
        blue
          ? "bg-gradient-to-br from-[#0066FF]/85 via-[#0052CC]/80 to-[#00B8CC]/75 border-white/30 text-white shadow-[0_8px_40px_-8px_rgba(0,102,255,0.45)]"
          : "bg-white/80 border-slate-900/10 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.08)]"
      }`}
    >
      <div className="flex items-start gap-3">
        <img
          src={t.avatar}
          alt={t.name}
          className={`w-11 h-11 rounded-full object-cover ring-2 shrink-0 ${blue ? "ring-white/60" : "ring-slate-900/10"}`}
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <p
              className={`text-sm font-semibold truncate ${blue ? "text-white" : "text-slate-900"}`}
            >
              {t.name}
            </p>
            <svg
              className={`w-3.5 h-3.5 shrink-0 ${blue ? "text-white" : "text-[#0066FF]"}`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
          <p className={`text-xs truncate ${blue ? "text-white/75" : "text-slate-500"}`}>
            {t.role}
          </p>
        </div>
      </div>
      <p
        className={`mt-4 leading-relaxed text-[15px] ${blue ? "text-white/95" : "text-slate-800"}`}
      >
        {t.quote}
      </p>
      <div
        className={`mt-4 flex items-center gap-4 text-xs ${blue ? "text-white/60" : "text-slate-400"}`}
      >
        <span>10:24 AM</span>
        <span>Jul 22, 2026</span>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  speed = "normal",
  blueIndex,
  active,
}: {
  items: Testimonial[];
  direction?: "left" | "right";
  speed?: "normal" | "slow";
  blueIndex?: number;
  active: boolean;
}) {
  const animClass = !active
    ? ""
    : direction === "right"
      ? "animate-marquee-reverse"
      : speed === "slow"
        ? "animate-marquee-slow"
        : "animate-marquee";
  const doubled = [...items, ...items];
  return (
    <div className="marquee-row group relative overflow-hidden [will-change:transform]">
      <div className={`flex gap-6 w-max ${animClass} group-hover:[animation-play-state:paused]`}>
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} blue={(i % items.length) % 2 === 1} />
        ))}
      </div>
    </div>
  );
}

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeActive = useInView(marqueeRef, { margin: "-15% 0px -15% 0px" });

  const servicesRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);

  useGsap(({ gsap, ScrollTrigger, isMobile, reduced }) => {
    if (reduced) return;

    /* ---------- HERO: background parallax + tag stagger ---------- */
    if (heroRef.current) {
      gsap.to(".hero-bg-img", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-copy", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    /* ---------- SERVICES: pinned header + staged card entrance ---------- */
    if (servicesRef.current) {
      if (!isMobile) {
        ScrollTrigger.create({
          trigger: servicesRef.current,
          start: "top top+=80",
          end: "+=320",
          pin: ".services-header",
          pinSpacing: false,
        });
      }
      gsap.from(".service-card", {
        opacity: 0,
        scale: 0.95,
        y: 40,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".services-grid", start: "top 85%" },
      });
      gsap.fromTo(
        ".service-card",
        { boxShadow: "0 0 0 rgba(0,102,255,0)" },
        {
          boxShadow: "0 18px 60px -18px rgba(0,102,255,0.45)",
          duration: 0.9,
          stagger: 0.12,
          scrollTrigger: { trigger: ".services-grid", start: "top 85%" },
        },
      );
    }

    /* ---------- PRODUCTS: pinned horizontal scroll + 3D tilt ---------- */
    if (productsRef.current && !isMobile) {
      const track = productsRef.current.querySelector<HTMLElement>(".products-track");
      if (track) {
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth * 0.78);
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top top",
            end: () => `+=${distance() + 400}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
        gsap.utils.toArray<HTMLElement>(".product-visual").forEach((el) => {
          gsap.fromTo(
            el,
            { rotateY: 12, rotateX: -6, scale: 0.94 },
            {
              rotateY: -12,
              rotateX: 6,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                containerAnimation: gsap.getTweensOf(track)[0],
                start: "left right",
                end: "right left",
                scrub: true,
              },
            },
          );
        });
      }
    } else if (productsRef.current) {
      gsap.from(".product-card", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: productsRef.current, start: "top 85%" },
      });
    }

    /* ---------- TESTIMONIALS: scroll-linked row drift ---------- */
    if (testimonialsRef.current) {
      const rows = gsap.utils.toArray<HTMLElement>(".marquee-row");
      rows.forEach((row, i) => {
        gsap.fromTo(
          row,
          { x: i % 2 === 0 ? 60 : -60 },
          {
            x: i % 2 === 0 ? -60 : 60,
            ease: "none",
            scrollTrigger: {
              trigger: testimonialsRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }
  }, []);

  return (
    <div>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative px-6 pb-16 min-h-[90vh] md:min-h-[95vh] overflow-hidden"
      >
        {/* Background image + readability scrim */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            width={1920}
            height={1088}
            className="hero-bg-img w-full h-[115%] object-cover object-[70%_center] md:object-center [will-change:transform]"
          />
          {/* soft light wash keeps dark type readable without killing the photo */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F4F7FB]/60 via-[#F4F7FB]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7FB]/80 via-[#F4F7FB]/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F4F7FB]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-0 sm:px-0 pt-10 lg:pt-20 pb-16 grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-start xl:items-center min-h-[80vh] xl:min-h-[85vh]">
          {/* Left: text content */}
          <div className="hero-copy text-center xl:text-left [will-change:transform]">
            <FadeIn delay={0.05}>
              <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-slate-900 leading-[1.02] tracking-tight">
                We provide a wide array of{" "}
                <span className="font-display italic text-gradient-cyan font-normal">
                  IT solutions.
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 max-w-2xl mx-auto xl:mx-0 text-slate-700 text-lg">
                From cloud backups to enterprise hardware, we architect the digital backbone of
                forward-thinking businesses across South Africa.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3 justify-center xl:justify-start">
                <Link
                  to="/services"
                  className="liquid-glass-glow rounded-full px-6 py-3 text-sm text-white bg-gradient-to-r from-[#0066FF] to-[#00B8CC] inline-flex items-center gap-2 shadow-lg shadow-[#0066FF]/25 hover:shadow-[#0066FF]/40 transition-shadow"
                >
                  Explore Solutions <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/specials"
                  className="liquid-glass rounded-full px-6 py-3 text-sm text-slate-800 hover:text-slate-900"
                >
                  Instant Call Back
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right: 3×3 square technology cards — hidden on mobile */}
          <div className="hidden sm:grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5 w-full max-w-xl lg:max-w-none mx-auto lg:mx-0">
            {heroCards.map((card, i) => (
              <HeroGridCard key={card.title} card={card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW CAN WE HELP */}
      <section ref={servicesRef} className="relative px-6 py-32 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-full -z-10 pointer-events-none">
          <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#0066FF]/10 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="services-header">
            <SectionHeader
              eyebrow="How can we help you?"
              title="A modular stack for"
              italic="every layer of your business."
            />
          </div>
          <div className="services-grid mt-16 grid grid-cols-1 md:grid-cols-6 gap-5">
            {services.map((s, i) => {
              const spans = [
                "md:col-span-3 md:row-span-2",
                "md:col-span-3",
                "md:col-span-2",
                "md:col-span-4",
                "md:col-span-4",
                "md:col-span-2",
              ];
              const isBlue = i === 0 || i === 3;
              return (
                <div
                  key={s.title}
                  className={`service-card [will-change:transform,opacity] ${spans[i]}`}
                >
                  <ImageCard
                    image={s.img}
                    tone={isBlue ? "blue" : "light"}
                    contrast="high"
                    mobileContrast="high"
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 60vw, 45vw"
                    className={`h-full liquid-glass rounded-3xl p-8 transition-colors ${
                      isBlue
                        ? "border-transparent hover:border-white/20"
                        : "hover:border-cyan-400/30"
                    }`}
                  >
                    <div className="relative z-10">
                      <s.icon className={`w-8 h-8 ${isBlue ? "text-white" : "text-cyan-500"}`} />
                      <h3
                        className={`mt-6 text-2xl font-semibold ${isBlue ? "text-white" : "text-slate-900"}`}
                      >
                        {s.title}
                      </h3>
                      <p className={`mt-2 ${isBlue ? "text-white/90" : "text-slate-600"}`}>
                        {s.desc}
                      </p>
                    </div>
                    <ArrowUpRight
                      className={`absolute top-6 right-6 z-10 w-5 h-5 transition-all group-hover:rotate-45 ${isBlue ? "text-white/80 group-hover:text-white" : "text-slate-500 group-hover:text-cyan-500"}`}
                    />
                  </ImageCard>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS — pinned horizontal sequence on desktop, stacked on mobile */}
      <section
        ref={productsRef}
        className="relative px-6 py-24 md:py-0 md:min-h-screen md:flex md:flex-col md:justify-center overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeader
            eyebrow="Hardware & Products"
            title="Workstations engineered"
            italic="for real workloads."
          />
        </div>
        <div className="mt-14 overflow-hidden md:overflow-visible">
          <div className="products-track flex flex-col sm:flex-row gap-5 md:w-max md:pl-[max(1.5rem,calc((100%-80rem)/2))] md:pr-[20vw] [will-change:transform]">
            {products.map((p) => (
              <div
                key={p.name}
                className="product-card group liquid-glass rounded-3xl p-6 md:w-[340px] shrink-0 hover:-translate-y-2 transition-transform duration-500 [perspective:1200px]"
              >
                <ImageCard
                  image={p.img}
                  alt={p.name}
                  tone="dark"
                  contrast="low"
                  mobileContrast="high"
                  focal="center"
                  mobileFocal="center 40%"
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 44vw, 22vw"
                  className="product-visual relative aspect-square rounded-2xl border border-slate-900/10 flex items-center justify-center mb-5 [transform-style:preserve-3d] [will-change:transform]"
                >
                  <p.icon className="relative z-10 w-14 h-14 text-cyan-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform" />
                </ImageCard>
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{p.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={testimonialsRef} className="relative px-4 sm:px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-x-0 top-1/4 h-[600px] bg-gradient-to-b from-[#0066FF]/8 via-[#00B8CC]/5 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            center
            eyebrow="Voices from the network"
            title="Trusted by teams who"
            italic="don't tolerate downtime."
          />
        </div>

        <div ref={marqueeRef} className="relative mt-20 max-w-7xl mx-auto px-2 sm:px-0 overflow-hidden">
          {/* Side fade overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 md:w-28 z-10 bg-gradient-to-r from-[#F4F7FB] via-[#F4F7FB]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 md:w-28 z-10 bg-gradient-to-l from-[#F4F7FB] via-[#F4F7FB]/80 to-transparent" />

          <div className="flex flex-col gap-4 md:gap-6 overflow-hidden rounded-3xl border border-slate-900/5 px-2 sm:px-4 md:px-6 py-6 sm:py-8 bg-slate-900/[0.02]">
            <MarqueeRow
              items={testimonialsRow1}
              direction="left"
              blueIndex={1}
              active={marqueeActive}
            />
            <MarqueeRow
              items={testimonialsRow2}
              direction="right"
              speed="slow"
              blueIndex={2}
              active={marqueeActive}
            />
            <MarqueeRow
              items={testimonialsRow3}
              direction="left"
              blueIndex={3}
              active={marqueeActive}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
