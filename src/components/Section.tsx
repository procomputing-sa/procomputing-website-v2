import { motion } from "motion/react";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  className = "",
  y = 30,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  italic,
  subtitle,
  center,
}: {
  eyebrow?: string;
  title: string;
  italic?: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <FadeIn>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs text-cyan-300 liquid-glass mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            {eyebrow}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.05}>
        <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-[1.05]">
          {title}
          {italic && (
            <>
              {" "}
              <span className="font-display italic text-gradient-cyan font-normal">{italic}</span>
            </>
          )}
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.1}>
          <p className="mt-5 text-slate-600 text-lg leading-relaxed">{subtitle}</p>
        </FadeIn>
      )}
    </div>
  );
}
