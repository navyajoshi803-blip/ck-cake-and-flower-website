import { SectionHeading, Reveal } from "@/components/ui";
import { ORDER_STEP_LINKS, TELEGRAM_CONTACT_URL, TELEGRAM_HANDLE } from "@/data/site";
import { TelegramIcon } from "@/components/icons";
import { useLang } from "@/i18n/LanguageContext";

const STEP_EMOJI = ["📸", "🎂", "💬"];

export default function HowToOrder() {
  const { t } = useLang();

  return (
    <section
      id="how-to-order"
      className="scroll-mt-24 bg-gradient-to-b from-cream-50 via-blush-50 to-cream-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t.howToOrder.eyebrow}
            title={t.howToOrder.title}
            subtitle={t.howToOrder.subtitle}
          />
        </Reveal>

        <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute left-[16%] right-[16%] top-9 hidden border-t-2 border-dashed border-blush-300 md:block"
          />

          {t.howToOrder.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 120} className="relative">
              <div className="flex h-full flex-col items-center rounded-3xl bg-white p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative">
                  <span className="flex h-18 w-18 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-rose-600 font-display text-2xl font-bold text-white shadow-lift">
                    {i + 1}
                  </span>
                  <span className="absolute -right-1.5 -top-1.5 text-2xl" aria-hidden>
                    {STEP_EMOJI[i]}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-cocoa-900">{step.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cocoa-500">{step.text}</p>
                <a
                  href={ORDER_STEP_LINKS[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-blush-100 px-5 py-2.5 text-sm font-extrabold text-rose-600 transition-colors hover:bg-blush-200"
                >
                  <TelegramIcon className="h-4 w-4 shrink-0" />
                  {step.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="text-center text-sm font-semibold text-cocoa-500">
            {t.howToOrder.footerPrefix}{" "}
            <a
              href={TELEGRAM_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-rose-600 underline decoration-gold-400 decoration-2 underline-offset-2 hover:text-rose-700"
            >
              {TELEGRAM_HANDLE}
            </a>{" "}
            {t.howToOrder.footerSuffix}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
