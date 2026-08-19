import { useEffect, useState } from "react";
import { Cake, Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { NAV_LINKS, TELEGRAM_CONTACT_URL } from "@/data/site";
import { TelegramIcon } from "@/components/icons";
import LanguageToggle from "@/components/LanguageToggle";
import { useLang } from "@/i18n/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "bg-cream-50/90 shadow-[0_4px_24px_-12px_rgb(90_45_45/0.25)] backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:h-[4.5rem] sm:px-6">
        <a href="#home" className="group flex items-center gap-2.5" aria-label="CK Cake & Flower — home">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600 text-white shadow-soft transition-transform group-hover:scale-105">
            <Cake className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold text-cocoa-900 sm:text-lg">
              CK Cake &amp; Flower
            </span>
            <span className="block text-[0.65rem] font-bold uppercase tracking-[0.22em] text-rose-500">
              {t.common.city}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-bold text-cocoa-600 transition-colors hover:bg-blush-100 hover:text-rose-600"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <a
            href={TELEGRAM_CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-5 py-2.5 text-sm font-bold text-white shadow-lift transition-transform hover:scale-[1.03] active:scale-95 lg:inline-flex"
          >
            <TelegramIcon className="h-4 w-4" />
            {t.common.orderOnTelegram}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.common.closeMenu : t.common.openMenu}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cream-200 bg-white text-cocoa-700 shadow-card lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-b border-cream-200 bg-cream-50/95 backdrop-blur-md transition-all duration-300 lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 border-b-0 opacity-0"
        )}
      >
        <div className="space-y-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-bold text-cocoa-700 transition-colors hover:bg-blush-100 hover:text-rose-600"
            >
              {t.nav[link.key]}
            </a>
          ))}
          <a
            href={TELEGRAM_CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-3.5 text-sm font-bold text-white shadow-lift"
          >
            <TelegramIcon className="h-4 w-4" />
            {t.common.orderOnTelegram}
          </a>
        </div>
      </div>
    </header>
  );
}
