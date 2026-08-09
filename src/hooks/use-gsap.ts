import { useEffect } from "react";

export type GsapCtx = {
  gsap: (typeof import("gsap"))["gsap"];
  ScrollTrigger: (typeof import("gsap/ScrollTrigger"))["ScrollTrigger"];
  isMobile: boolean;
  reduced: boolean;
};

/**
 * Loads GSAP + ScrollTrigger on the client and runs `setup` inside a gsap.context
 * so every tween/trigger is reverted automatically on unmount.
 */
export function useGsap(setup: (ctx: GsapCtx) => void, deps: unknown[] = []) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;
    let revert: (() => void) | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const ctx = gsap.context(() => setup({ gsap, ScrollTrigger, isMobile, reduced }));
      revert = () => ctx.revert();
      ScrollTrigger.refresh();
    })();

    return () => {
      cancelled = true;
      revert?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
