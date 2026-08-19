import { Bike, Gift, MapPin, Zap, Info } from "lucide-react";
import { SectionHeading, Reveal } from "@/components/ui";
import { DELIVERY_KEYS } from "@/data/site";
import { useLang } from "@/i18n/LanguageContext";
import bouquet from "@/assets/bouquet.jpg";

const ICONS = { map: MapPin, bike: Bike, gift: Gift, zap: Zap } as const;

export default function Delivery() {
  const { t } = useLang();

  return (
    <section id="delivery" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Image side */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-[2.5rem] border-8 border-white shadow-lift">
              <img
                src={bouquet}
                alt={t.delivery.imageAlt}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 w-max max-w-[92%] -translate-x-1/2 animate-float rounded-2xl bg-white/95 px-5 py-3 text-center shadow-lift backdrop-blur">
              <p className="text-sm font-extrabold text-cocoa-900">{t.delivery.floatTitle}</p>
              <p className="text-xs font-semibold text-cocoa-500">{t.delivery.floatSub}</p>
            </div>
          </div>
        </Reveal>

        {/* Copy side */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionHeading
              eyebrow={t.delivery.eyebrow}
              title={t.delivery.title}
              subtitle={t.delivery.subtitle}
            />
          </Reveal>

          <div className="mt-10 space-y-4">
            {DELIVERY_KEYS.map((key, i) => {
              const Icon = ICONS[key];
              const point = t.delivery.points[key];
              return (
                <Reveal key={key} delay={i * 80}>
                  <div className="flex items-start gap-4 rounded-2xl bg-white p-4.5 shadow-card transition-shadow hover:shadow-soft sm:p-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blush-100 text-rose-600">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-cocoa-900">{point.title}</h3>
                      <p className="mt-0.5 text-sm leading-relaxed text-cocoa-500">{point.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200}>
            <p className="mt-6 inline-flex items-start gap-2.5 rounded-2xl border border-gold-300 bg-gold-300/15 px-4 py-3.5 text-sm font-semibold text-cocoa-600">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              {t.delivery.note}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
