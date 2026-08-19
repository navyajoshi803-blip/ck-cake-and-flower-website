import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";
import { FlowerDivider } from "@/components/icons";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em]",
          light ? "bg-white/10 text-rose-300" : "bg-blush-100 text-rose-600"
        )}
      >
        <FlowerDivider className="w-16 text-current opacity-60" />
        {eyebrow}
        <FlowerDivider className="w-16 text-current opacity-60" />
      </span>
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-semibold sm:text-4xl lg:text-[2.6rem] lg:leading-tight",
          light ? "text-cream-50" : "text-cocoa-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-base sm:text-lg", light ? "text-cream-200/90" : "text-cocoa-500")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Fades children in when they scroll into view. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", visible && "is-visible", className)}
    >
      {children}
    </div>
  );
}
