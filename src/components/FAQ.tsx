import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading, Reveal } from "@/components/ui";
import { TELEGRAM_CHANNEL_URL, TELEGRAM_CONTACT_URL, TELEGRAM_HANDLE } from "@/data/site";
import { cn } from "@/utils/cn";
import { TelegramIcon } from "@/components/icons";
import { useLang } from "@/i18n/LanguageContext";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLang();

  return (
    <section id="faq" className="scroll-mt-24 bg-gradient-to-b from-cream-50 to-cream-100/70 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} subtitle={t.faq.subtitle} />
        </Reveal>

        <div className="mt-12 space-y-3.5">
          {t.faq.items.map((faq, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={faq.q} delay={i * 60}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border-2 bg-white shadow-card transition-colors",
                    open ? "border-rose-300" : "border-transparent"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left sm:px-6 sm:py-5"
                  >
                    <span className="font-display text-base font-bold text-cocoa-900 sm:text-lg">{faq.q}</span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                        open ? "rotate-180 bg-rose-500 text-white" : "bg-blush-100 text-rose-600"
                      )}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-cocoa-500 sm:px-6 sm:pb-6 sm:text-base">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-white p-6 text-center shadow-card sm:flex-row sm:text-left">
            <div>
              <p className="font-display text-lg font-bold text-cocoa-900">{t.faq.stillTitle}</p>
              <p className="mt-0.5 text-sm font-semibold text-cocoa-500">{t.faq.stillText}</p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row">
              <a
                href={TELEGRAM_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream-200 px-5 py-2.5 text-sm font-extrabold text-cocoa-600 transition-colors hover:border-rose-300 hover:text-rose-600"
              >
                <TelegramIcon className="h-4 w-4 shrink-0" />
                {t.common.viewProducts}
              </a>
              <a
                href={TELEGRAM_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-5 py-2.5 text-sm font-extrabold text-white shadow-lift transition-transform hover:scale-[1.03] active:scale-95"
              >
                <TelegramIcon className="h-4 w-4 shrink-0" />
                {TELEGRAM_HANDLE}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
