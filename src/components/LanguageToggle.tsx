import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useLang, type Lang } from "@/i18n/LanguageContext";
import { en } from "@/i18n/en";
import { km } from "@/i18n/km";
import { zh } from "@/i18n/zh";

const OPTIONS: { code: Lang; flag: string; label: string; short: string }[] = [
  { code: "en", flag: en.flag, label: en.label, short: en.shortLabel },
  { code: "km", flag: km.flag, label: km.label, short: km.shortLabel },
  { code: "zh", flag: zh.flag, label: zh.label, short: zh.shortLabel },
];

/** Globe dropdown language selector — compact on mobile, full label on desktop. */
export default function LanguageToggle({
  variant = "light",
  drop = "down",
}: {
  variant?: "light" | "dark";
  drop?: "down" | "up";
}) {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = OPTIONS.find((o) => o.code === lang) ?? OPTIONS[0];

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.common.chooseLanguage}
        className={cn(
          "inline-flex h-10 items-center gap-1.5 rounded-full border-2 px-2.5 text-sm font-extrabold transition-colors sm:px-3.5",
          variant === "dark"
            ? "border-white/20 bg-white/10 text-cream-100 hover:border-white/40"
            : "border-cream-200 bg-white text-cocoa-700 shadow-card hover:border-rose-300 hover:text-rose-600"
        )}
      >
        <Globe className="h-4 w-4 shrink-0" aria-hidden />
        <span aria-hidden className="text-base leading-none">
          {current.flag}
        </span>
        <span className="hidden sm:inline">{current.short}</span>
        <ChevronDown
          className={cn("h-3.5 w-3.5 shrink-0 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.common.language}
          className={cn(
            "absolute right-0 z-50 w-44 animate-pop overflow-hidden rounded-2xl border border-cream-200 bg-white p-1.5 shadow-lift",
            drop === "up" ? "bottom-full mb-2" : "mt-2"
          )}
        >
          {OPTIONS.map((opt) => {
            const active = opt.code === lang;
            return (
              <li key={opt.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLang(opt.code);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-bold transition-colors",
                    active ? "bg-blush-100 text-rose-600" : "text-cocoa-700 hover:bg-cream-100"
                  )}
                >
                  <span aria-hidden className="text-base leading-none">
                    {opt.flag}
                  </span>
                  <span className="flex-1">{opt.label}</span>
                  {active && <Check className="h-4 w-4 shrink-0" aria-hidden />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
