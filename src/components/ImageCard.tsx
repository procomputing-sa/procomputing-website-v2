import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type CardTone = "light" | "blue" | "dark";
export type CardContrast = "high" | "low";

/**
 * Scrim strengths per tone. "high" keeps text fully legible over busy imagery,
 * "low" lets more of the photo through for decorative cards.
 */
const SCRIMS: Record<CardTone, Record<CardContrast, string>> = {
  light: {
    high: "bg-gradient-to-br from-white/97 via-white/94 to-white/82",
    low: "bg-gradient-to-br from-white/88 via-white/76 to-white/55",
  },
  blue: {
    high: "bg-gradient-to-br from-[#0066FF]/97 via-[#0052CC]/94 to-[#00B8CC]/86",
    low: "bg-gradient-to-br from-[#0066FF]/85 via-[#0052CC]/74 to-[#00B8CC]/58",
  },
  dark: {
    high: "bg-gradient-to-t from-[#04122b]/92 via-[#04122b]/70 to-[#04122b]/40",
    low: "bg-gradient-to-t from-[#04122b]/75 via-[#04122b]/40 to-transparent",
  },
};

export interface ImageCardProps {
  /** srcset string (vite-imagetools `as=srcset`) or a plain image URL. */
  image: string;
  /** Optional explicit fallback src; derived from the srcset when omitted. */
  src?: string;
  alt?: string;
  tone?: CardTone;
  /** Scrim strength on tablet/desktop. */
  contrast?: CardContrast;
  /** Scrim strength on mobile — defaults to "high" for small screens. */
  mobileContrast?: CardContrast;
  /** object-position on desktop, e.g. "center", "right top". */
  focal?: string;
  /** object-position on mobile — tuned separately so crops stay on-subject. */
  mobileFocal?: string;
  /** `sizes` hint for the browser; keeps mobile downloads small. */
  sizes?: string;
  /** Set true only for above-the-fold hero imagery. */
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  children?: ReactNode;
}

/** Pick the last (largest) URL out of a srcset for the `src` fallback. */
function srcFromSrcset(value: string) {
  const parts = value.split(",").map((p) => p.trim());
  const last = parts[parts.length - 1] ?? value;
  return last.split(/\s+/)[0];
}

export function ImageCard({
  image,
  src,
  alt = "",
  tone = "light",
  contrast = "high",
  mobileContrast,
  focal = "center",
  mobileFocal,
  sizes = "(max-width: 640px) 92vw, (max-width: 1024px) 48vw, 33vw",
  priority = false,
  className,
  imageClassName,
  children,
}: ImageCardProps) {
  const isSrcset = image.includes(" ") || image.includes(",");
  const fallback = src ?? (isSrcset ? srcFromSrcset(image) : image);
  const desktopScrim = SCRIMS[tone][contrast];
  const mobileScrim = SCRIMS[tone][mobileContrast ?? "high"];

  return (
    <div className={cn("group relative overflow-hidden isolate", className)}>
      {/* Background image — mobile gets its own focal point and a slight zoom
          so short cards stay filled without stretching the subject. */}
      <img
        src={fallback}
        srcSet={isSrcset ? image : undefined}
        sizes={isSrcset ? sizes : undefined}
        alt={alt}
        aria-hidden={alt === "" ? "true" : undefined}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "low"}
        draggable={false}
        style={
          {
            "--focal": focal,
            "--focal-mobile": mobileFocal ?? focal,
          } as React.CSSProperties
        }
        className={cn(
          "absolute inset-0 -z-10 h-full w-full object-cover select-none",
          "scale-[1.08] sm:scale-100 [object-position:var(--focal-mobile)] sm:[object-position:var(--focal)]",
          "transition-transform duration-[1200ms] will-change-transform",
          "group-hover:scale-[1.12] sm:group-hover:scale-105",
          imageClassName,
        )}
      />
      {/* Contrast scrims — separate mobile/desktop strengths */}
      <div className={cn("absolute inset-0 -z-10 pointer-events-none sm:hidden", mobileScrim)} />
      <div
        className={cn("absolute inset-0 -z-10 pointer-events-none hidden sm:block", desktopScrim)}
      />
      {children}
    </div>
  );
}

export default ImageCard;
