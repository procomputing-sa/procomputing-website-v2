import { useGsap, type GsapCtx } from "./use-gsap";
import { MOTION } from "../lib/motion-presets";

type Gsap = GsapCtx["gsap"];
type ST = GsapCtx["ScrollTrigger"];

export type ScrollHelpers = {
  gsap: Gsap;
  ScrollTrigger: ST;
  isMobile: boolean;
  /** Vertical parallax on an element/selector while its trigger scrolls past. */
  parallax: (target: gsap.TweenTarget, trigger: Element | string, yPercent?: number) => void;
  /** Staggered entrance for a set of cards. Batched for performance. */
  revealStagger: (
    selector: string,
    opts?: {
      y?: number;
      scale?: number;
      rotateX?: number;
      stagger?: number;
      start?: string;
      ease?: string;
    },
  ) => void;
  /** Subtle scroll-linked drift; skipped on mobile to avoid scroll jank. */
  drift: (selector: string, amount?: number) => void;
  /** Draw an SVG path in sync with scroll progress. */
  drawPath: (selector: string, trigger: Element | string, offset?: [string, string]) => void;
};

/**
 * One entry point for every page's scrollytelling.
 * Handles: reduced-motion opt-out, mobile tuning, GPU hints and
 * automatic cleanup (via gsap.context inside useGsap).
 */
export function useScrollytelling(setup: (h: ScrollHelpers) => void, deps: unknown[] = []) {
  useGsap(({ gsap, ScrollTrigger, isMobile, reduced }) => {
    if (reduced) return;

    // Mobile: avoid re-running layout work on URL-bar show/hide.
    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    });

    const scrub = isMobile ? MOTION.scrub.mobile : MOTION.scrub.desktop;

    const helpers: ScrollHelpers = {
      gsap,
      ScrollTrigger,
      isMobile,

      parallax: (target, trigger, yPercent) => {
        const amount = yPercent ?? (isMobile ? MOTION.parallax.mobile : MOTION.parallax.desktop);
        gsap.to(target, {
          yPercent: amount,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger,
            start: "top top",
            end: "bottom top",
            scrub,
            fastScrollEnd: true,
          },
        });
      },

      revealStagger: (selector, opts = {}) => {
        const els = gsap.utils.toArray<HTMLElement>(selector);
        if (!els.length) return;
        gsap.set(els, { willChange: "transform, opacity" });

        ScrollTrigger.batch(els, {
          start: opts.start ?? MOTION.start.card,
          once: true,
          onEnter: (batch) =>
            gsap.from(batch, {
              opacity: 0,
              y: opts.y ?? 40,
              scale: opts.scale ?? 1,
              rotateX: isMobile ? 0 : (opts.rotateX ?? 0),
              transformOrigin: "50% 100%",
              duration: MOTION.duration.base,
              ease: opts.ease ?? MOTION.ease,
              stagger: opts.stagger ?? (isMobile ? MOTION.stagger.tight : MOTION.stagger.base),
              force3D: true,
              clearProps: "willChange,transform",
            }),
        });
      },

      drift: (selector, amount = 40) => {
        if (isMobile) return; // continuous scrub tweens are the main source of mobile jank
        gsap.utils.toArray<HTMLElement>(selector).forEach((el, i) => {
          gsap.to(el, {
            y: i % 2 === 0 ? -amount : amount,
            ease: "none",
            force3D: true,
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub,
              fastScrollEnd: true,
            },
          });
        });
      },

      drawPath: (selector, trigger, offset = ["top 80%", "bottom 20%"]) => {
        gsap.utils.toArray<SVGPathElement>(selector).forEach((path) => {
          gsap.fromTo(
            path,
            { strokeDasharray: 1, strokeDashoffset: 1 },
            {
              strokeDashoffset: 0,
              ease: "none",
              scrollTrigger: {
                trigger,
                start: offset[0],
                end: offset[1],
                scrub,
                fastScrollEnd: true,
              },
            },
          );
        });
      },
    };

    setup(helpers);
    ScrollTrigger.refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
