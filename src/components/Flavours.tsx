import { Info, ArrowRight } from "lucide-react";
import { SectionHeading, Reveal } from "@/components/ui";
import { FLAVOUR_KEYS, FLAVOUR_STYLES, TELEGRAM_CHANNEL_URL, TELEGRAM_CONTACT_URL, TELEGRAM_HANDLE } from "@/data/site";
import { cn } from "@/utils/cn";
import { useLang } from "@/i18n/LanguageContext";
import { TelegramIcon } from "@/components/icons";

export default function Flavours() {
  const { t } = useLang();

  return (
    <section id="flavours" className="scroll-mt-24 bg-gradient-to-b from-cream-100/70 to-cream-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t.flavours.eyebrow}
            title={t.flavours.title}
            subtitle={t.flavours.subtitle}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FLAVOUR_KEYS.map((key, i) => {
            const style = FLAVOUR_STYLES[key];
            const item = t.flavours.items[key];
            return (
              <Reveal key={key} delay={i * 90}>
                <div
                  className={cn(
                    "relative flex h-full flex-col items-center rounded-3xl border-2 p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift",
                    style.needsConfirmation
                      ? "border-gold-300 bg-gradient-to-b from-gold-300/20 to-white"
                      : "border-blush-100 bg-white"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br text-5xl shadow-soft",
                      style.gradient
                    )}
                  >
                    {style.emoji}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-cocoa-900">{item.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-cocoa-500">{item.note}</p>

                  {style.needsConfirmation ? (
                    <a
                      href={TELEGRAM_CONTACT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gold-300/30 px-3.5 py-2 text-xs font-extrabold text-amber-700 transition-colors hover:bg-gold-300/50"
                    >
                      <Info className="h-3.5 w-3.5 shrink-0" />
                      {t.flavours.confirmBadge}
                    </a>
                  ) : (
                    <a
                      href={TELEGRAM_CHANNEL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-rose-600 transition-colors hover:text-rose-700"
                    >
                      {t.flavours.photosCta}
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={TELEGRAM_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cocoa-900 px-6 py-3.5 text-sm font-extrabold text-cream-50 shadow-lift transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
            >
              <TelegramIcon className="h-4 w-4" />
              {t.common.viewProductsOnTelegram}
            </a>
            <a
              href={TELEGRAM_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-rose-200 bg-white px-6 py-3.5 text-sm font-extrabold text-rose-600 transition-colors hover:border-rose-400 sm:w-auto"
            >
              <TelegramIcon className="h-4 w-4" />
              {TELEGRAM_HANDLE}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
