import { ArrowRight, Cake, Camera, Flower2, MessageCircle } from "lucide-react";
import { SectionHeading, Reveal } from "@/components/ui";
import { FLAVOUR_KEYS, TELEGRAM_CHANNEL_URL, TELEGRAM_CONTACT_URL, TELEGRAM_HANDLE } from "@/data/site";
import { TelegramIcon } from "@/components/icons";
import { useLang } from "@/i18n/LanguageContext";

export default function Products() {
  const { t } = useLang();

  return (
    <section id="products" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t.products.eyebrow}
            title={t.products.title}
            subtitle={t.products.subtitle}
          />
        </Reveal>

        {/* Telegram notice banner */}
        <Reveal className="mt-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 p-6 shadow-lift sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"
            />
            <div className="relative flex flex-col items-center gap-5 text-center lg:flex-row lg:justify-between lg:text-left">
              <div className="flex flex-col items-center gap-4 lg:flex-row">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
                  <Camera className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                    {t.products.bannerTitle}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-rose-100">{t.products.bannerSub}</p>
                </div>
              </div>
              <a
                href={TELEGRAM_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-rose-600 shadow-card transition-transform hover:scale-[1.03] active:scale-95"
              >
                <TelegramIcon className="h-4 w-4" />
                {t.common.viewProductsOnTelegram}
              </a>
            </div>
          </div>
        </Reveal>

        {/* Category cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Reveal delay={100}>
            <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-chocolate/10 text-chocolate">
                  <Cake className="h-6 w-6" />
                </span>
                <h3 className="font-display text-2xl font-bold text-cocoa-900">{t.products.cakesTitle}</h3>
              </div>
              <p className="mt-4 text-cocoa-600">{t.products.cakesText}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {FLAVOUR_KEYS.map((key) => (
                  <span
                    key={key}
                    className="rounded-full bg-cream-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-cocoa-700"
                  >
                    {t.flavours.items[key].name}
                  </span>
                ))}
              </div>
              <p className="mt-5 rounded-2xl bg-amber-50 p-3 text-xs font-semibold text-amber-800">
                {t.products.cakesNote}
              </p>
              <a
                href={TELEGRAM_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-extrabold text-rose-600 transition-colors hover:text-rose-700"
              >
                {t.products.cakesCta}
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-200/50 text-rose-600">
                  <Flower2 className="h-6 w-6" />
                </span>
                <h3 className="font-display text-2xl font-bold text-cocoa-900">{t.products.flowersTitle}</h3>
              </div>
              <p className="mt-4 text-cocoa-600">{t.products.flowersText}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {t.products.flowerTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blush-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-rose-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-5 rounded-2xl bg-rose-50 p-3 text-xs font-semibold text-rose-700">
                {t.products.flowersNote}
              </p>
              <a
                href={TELEGRAM_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-extrabold text-rose-600 transition-colors hover:text-rose-700"
              >
                {t.products.flowersCta}
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8" delay={150}>
          <div className="flex flex-col items-center gap-3 rounded-3xl border-2 border-dashed border-rose-200 bg-rose-50/60 p-6 text-center sm:flex-row sm:justify-center sm:text-left">
            <MessageCircle className="h-6 w-6 shrink-0 text-rose-500" />
            <p className="text-sm font-semibold text-cocoa-700">
              {t.products.helpPrefix}{" "}
              <a
                href={TELEGRAM_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold text-rose-600 underline underline-offset-2 hover:text-rose-700"
              >
                {TELEGRAM_HANDLE}
              </a>{" "}
              {t.products.helpSuffix}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
