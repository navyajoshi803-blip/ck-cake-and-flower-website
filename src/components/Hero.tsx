import { Clock, MapPin, Zap, Bike, ArrowDown } from "lucide-react";
import { TELEGRAM_CHANNEL_URL, TELEGRAM_CONTACT_URL } from "@/data/site";
import { TelegramIcon } from "@/components/icons";
import { useLang } from "@/i18n/LanguageContext";
import heroCake from "@/assets/hero-cake.jpg";

export default function Hero() {
  const { t } = useLang();

  const chips = [
    { icon: Clock, text: t.hero.chipHours },
    { icon: Zap, text: t.hero.chipSameDay },
    { icon: Bike, text: t.hero.chipDelivery },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-16 sm:pt-[4.5rem]">
      {/* Decorative background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-blush-100/80 blur-3xl" />
        <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-gold-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-blush-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-8 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-20 lg:pt-14">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blush-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-rose-600 shadow-card backdrop-blur">
            <MapPin className="h-3.5 w-3.5" />
            {t.hero.badge}
          </span>

          <h1 className="mt-5 font-display text-[2.6rem] font-bold leading-[1.08] text-cocoa-900 sm:text-6xl lg:text-[4.2rem]">
            CK Cake
            <span className="mx-2 inline-block translate-y-[-2px] align-middle font-normal text-rose-400">·</span>
            Flower
          </h1>

          <p className="mx-auto mt-4 max-w-md text-lg font-semibold text-cocoa-600 sm:text-xl lg:mx-0">
            {t.hero.tagline}{" "}
            <span className="relative whitespace-nowrap text-rose-600">
              {t.hero.taglineCity}
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 w-full text-gold-400"
                fill="none"
              >
                <path d="M2 9c50-6 110-7 196-3" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </p>

          <p className="mx-auto mt-5 max-w-lg text-cocoa-500 lg:mx-0">{t.hero.intro}</p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#products"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-cocoa-900 px-7 py-3.5 text-base font-bold text-cream-50 shadow-lift transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
            >
              {t.hero.ctaBrowse}
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={TELEGRAM_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-7 py-3.5 text-base font-bold text-white shadow-lift transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
            >
              <TelegramIcon className="h-5 w-5" />
              {t.common.orderOnTelegram}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {chips.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-2 text-xs font-bold text-cocoa-600 shadow-card"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-rose-500" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-t-[10rem] rounded-b-[2.5rem] border-8 border-white shadow-lift">
            <img
              src={heroCake}
              alt={t.hero.imageAlt}
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/5.4]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-700/20 via-transparent to-transparent" />
          </div>

          {/* Floating badges */}
          <div className="absolute -left-2 top-14 animate-float rounded-2xl bg-white/95 px-4 py-3 shadow-lift backdrop-blur sm:left-4">
            <p className="flex items-center gap-2 text-sm font-extrabold text-cocoa-900">
              <span className="text-lg">⚡</span> {t.hero.badgeSameDayTitle}
            </p>
            <p className="mt-0.5 pl-7 text-xs font-semibold text-cocoa-500">{t.hero.badgeSameDaySub}</p>
          </div>
          <div className="absolute -right-2 bottom-10 animate-float-slow rounded-2xl bg-white/95 px-4 py-3 shadow-lift backdrop-blur sm:right-4">
            <p className="flex items-center gap-2 text-sm font-extrabold text-cocoa-900">
              <span className="text-lg">🛵</span> {t.hero.badgeFreeTitle}
            </p>
            <p className="mt-0.5 pl-7 text-xs font-semibold text-cocoa-500">{t.hero.badgeFreeSub}</p>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative border-y border-blush-200 bg-white/70 py-3 backdrop-blur">
        <p className="px-4 text-center text-xs font-bold uppercase tracking-[0.22em] text-rose-500">
          {t.hero.marquee}{" "}
          <a
            href={TELEGRAM_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gold-400 decoration-2 underline-offset-4 hover:text-rose-600"
          >
            {t.hero.marqueeLink}
          </a>
        </p>
      </div>
    </section>
  );
}
