import { Clock, MapPin, Heart } from "lucide-react";
import {
  NAV_LINKS,
  TELEGRAM_CHANNEL_URL,
  TELEGRAM_CONTACT_URL,
  TELEGRAM_HANDLE,
} from "@/data/site";
import { TelegramIcon } from "@/components/icons";
import LanguageToggle from "@/components/LanguageToggle";
import { useLang } from "@/i18n/LanguageContext";
import logo from "@/assets/ck-cake-logo.png";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-cocoa-900 pb-24 text-cream-100 md:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={logo}
                alt="CK Cake & Flower"
                className="h-12 w-12 shrink-0 rounded-full object-cover shadow-lift"
              />
              <span className="leading-tight">
                <span className="block font-display text-lg font-bold text-white">{t.common.brand}</span>
                <span className="block text-[0.65rem] font-bold uppercase tracking-[0.22em] text-rose-300">
                  {t.common.city}
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-200/80">{t.footer.about}</p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cream-200/80">
              <MapPin className="h-4 w-4 shrink-0 text-rose-300" />
              {t.common.location}
            </p>
            <div className="mt-5">
              <LanguageToggle variant="dark" drop="up" />
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold-300">
              {t.footer.hoursTitle}
            </h3>
            <p className="mt-4 inline-flex items-center gap-2.5 rounded-2xl bg-white/5 px-4 py-3.5 text-sm font-bold">
              <Clock className="h-5 w-5 shrink-0 text-rose-300" />
              {t.common.openingHours}
            </p>
            <p className="mt-3 text-xs font-semibold text-cream-200/60">{t.footer.hoursNote}</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold-300">
              {t.footer.exploreTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-cream-200/80 transition-colors hover:text-rose-300">
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
              <li>
                <a href="#order" className="text-cream-200/80 transition-colors hover:text-rose-300">
                  {t.nav.orderRequest}
                </a>
              </li>
            </ul>
          </div>

          {/* Telegram */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold-300">
              {t.footer.telegramTitle}
            </h3>
            <p className="mt-4 text-sm font-semibold text-cream-200/80">{t.footer.telegramText}</p>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={TELEGRAM_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-white/20"
              >
                <TelegramIcon className="h-4 w-4 shrink-0 text-sky-300" />
                {t.common.viewProductsOnTelegram}
              </a>
              <a
                href={TELEGRAM_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-5 py-3 text-sm font-extrabold text-white shadow-lift transition-transform hover:scale-[1.02] active:scale-95"
              >
                <TelegramIcon className="h-4 w-4 shrink-0" />
                {t.common.orderOnTelegram}
              </a>
              <a
                href={TELEGRAM_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-5 py-3 text-sm font-extrabold text-cream-100 transition-colors hover:border-white/40 hover:text-white"
              >
                {t.common.contactHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-7">
          <p className="flex flex-col items-center justify-between gap-3 text-xs font-semibold text-cream-200/60 sm:flex-row">
            <span>
              © {new Date().getFullYear()} {t.common.brand} · {t.common.location} · {TELEGRAM_HANDLE}
            </span>
            <span className="inline-flex items-center gap-1.5">
              {t.footer.madeWith} <Heart className="h-3.5 w-3.5 fill-rose-400 text-rose-400" /> {t.footer.madeIn}
            </span>
          </p>
          <p className="mt-3 text-center text-[0.7rem] font-semibold text-cream-200/40 sm:text-left">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
