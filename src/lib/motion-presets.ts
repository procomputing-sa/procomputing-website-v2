/**
 * Shared motion configuration used by every page.
 * Framer Motion (declarative reveals) + GSAP (scroll-linked scrollytelling)
 * both read their timings/eases from here so pages feel consistent.
 */

export const MOTION = {
  ease: "power2.out" as const,
  easeBack: "back.out(1.6)" as const,
  duration: { fast: 0.45, base: 0.65, slow: 0.9 },
  stagger: { tight: 0.06, base: 0.1, loose: 0.14 },
  /** ScrollTrigger start positions */
  start: { card: "top 88%", section: "top 80%" },
  /** Scrub values — mobile uses `true` (cheapest, no extra rAF smoothing) */
  scrub: { desktop: 1 as number | boolean, mobile: true as number | boolean },
  /** Parallax amplitude in percent; halved on mobile to reduce paint area */
  parallax: { desktop: 12, mobile: 5 },
} as const;

/** Framer Motion viewport config — reveal once, slightly early. */
export const VIEWPORT_ONCE = { once: true, margin: "-50px" } as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export const staggerParent = (stagger = MOTION.stagger.base) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
});
