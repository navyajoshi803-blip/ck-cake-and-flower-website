import { useState, type FormEvent } from "react";
import {
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  Clock,
  Loader2,
  MapPin,
  Package,
  Send,
  User,
} from "lucide-react";
import { SectionHeading, Reveal } from "@/components/ui";
import {
  PRODUCT_OPTION_KEYS,
  TELEGRAM_CHANNEL_URL,
  TELEGRAM_HANDLE,
  telegramContactLinkWithMessage,
} from "@/data/site";
import { TelegramIcon } from "@/components/icons";
import { cn } from "@/utils/cn";
import { useLang } from "@/i18n/LanguageContext";

interface FormState {
  name: string;
  contact: string;
  product: string;
  location: string;
  date: string;
  time: string;
}

const EMPTY: FormState = { name: "", contact: "", product: "", location: "", date: "", time: "" };

const inputClasses =
  "w-full rounded-xl border-2 border-cream-200 bg-cream-50/60 px-4 py-3 text-sm font-semibold text-cocoa-800 placeholder:font-normal placeholder:text-cocoa-300 outline-none transition-colors focus:border-rose-400 focus:bg-white";

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-extrabold text-cocoa-700">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs font-bold text-rose-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function OrderForm() {
  const { t } = useLang();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const f = t.orderForm;

  const set = (key: keyof FormState) => (value: string) => {
    setForm((s) => ({ ...s, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = f.errors.name;
    if (!form.contact.trim()) next.contact = f.errors.contact;
    if (!form.product) next.product = f.errors.product;
    if (!form.location.trim()) next.location = f.errors.location;
    if (!form.date) next.date = f.errors.date;
    if (!form.time) next.time = f.errors.time;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 900);
  };

  const summaryText = [
    f.summary.intro,
    ``,
    `👤 ${f.summary.name}: ${form.name.trim()}`,
    `📞 ${f.summary.contact}: ${form.contact.trim()}`,
    `🎂 ${f.summary.product}: ${form.product}`,
    `📍 ${f.summary.location}: ${form.location.trim()}`,
    `📅 ${f.summary.date}: ${form.date}`,
    `🕐 ${f.summary.time}: ${form.time}`,
    ``,
    f.summary.outro,
  ].join("\n");

  const today = new Date().toISOString().split("T")[0];
  const firstName = form.name.trim().split(" ")[0];

  return (
    <section id="order" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={f.eyebrow} title={f.title} subtitle={f.subtitle} />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
            {status === "success" ? (
              <div className="animate-pop px-6 py-14 text-center sm:px-14">
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-10 w-10" />
                </span>
                <h3 className="mt-6 font-display text-3xl font-bold text-cocoa-900">
                  {f.successTitle}
                  {firstName ? `, ${firstName}` : ""}!
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-lg font-semibold leading-relaxed text-cocoa-600">
                  {f.successText}
                </p>
                <p className="mx-auto mt-3 max-w-md rounded-2xl bg-blush-50 px-5 py-3.5 text-sm font-semibold text-cocoa-500">
                  {f.successNotePrefix}{" "}
                  <span className="font-extrabold text-rose-600">{f.successNoteHighlight}</span>{" "}
                  {f.successNoteSuffix}
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={telegramContactLinkWithMessage(summaryText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-lift transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
                  >
                    <TelegramIcon className="h-4 w-4 shrink-0" />
                    {f.continueTelegram}
                  </a>
                  <a
                    href={TELEGRAM_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-cream-200 px-7 py-3.5 text-sm font-bold text-cocoa-600 transition-colors hover:border-rose-300 hover:text-rose-600 sm:w-auto"
                  >
                    {t.common.viewProductsOnTelegram}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setForm(EMPTY);
                    setStatus("idle");
                  }}
                  className="mt-5 text-sm font-bold text-cocoa-400 underline decoration-gold-400 decoration-2 underline-offset-4 transition-colors hover:text-cocoa-600"
                >
                  {f.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={f.labels.name} htmlFor="order-name" error={errors.name}>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cocoa-300" />
                      <input
                        id="order-name"
                        type="text"
                        autoComplete="name"
                        placeholder={f.placeholders.name}
                        value={form.name}
                        onChange={(e) => set("name")(e.target.value)}
                        className={cn(inputClasses, "pl-11", errors.name && "border-rose-400")}
                      />
                    </div>
                  </Field>

                  <Field label={f.labels.contact} htmlFor="order-contact" error={errors.contact}>
                    <div className="relative">
                      <Send className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cocoa-300" />
                      <input
                        id="order-contact"
                        type="text"
                        autoComplete="tel"
                        placeholder={f.placeholders.contact}
                        value={form.contact}
                        onChange={(e) => set("contact")(e.target.value)}
                        className={cn(inputClasses, "pl-11", errors.contact && "border-rose-400")}
                      />
                    </div>
                  </Field>

                  <div className="sm:col-span-2">
                    <Field label={f.labels.product} htmlFor="order-product" error={errors.product}>
                      <div className="relative">
                        <Package className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cocoa-300" />
                        <select
                          id="order-product"
                          value={form.product}
                          onChange={(e) => set("product")(e.target.value)}
                          className={cn(
                            inputClasses,
                            "appearance-none pl-11",
                            !form.product && "text-cocoa-300",
                            errors.product && "border-rose-400"
                          )}
                        >
                          <option value="" disabled>
                            {f.placeholders.product}
                          </option>
                          {PRODUCT_OPTION_KEYS.map((key) => (
                            <option key={key} value={f.productOptions[key]} className="text-cocoa-800">
                              {f.productOptions[key]}
                            </option>
                          ))}
                        </select>
                      </div>
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <Field label={f.labels.location} htmlFor="order-location" error={errors.location}>
                      <div className="relative">
                        <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cocoa-300" />
                        <input
                          id="order-location"
                          type="text"
                          placeholder={f.placeholders.location}
                          value={form.location}
                          onChange={(e) => set("location")(e.target.value)}
                          className={cn(inputClasses, "pl-11", errors.location && "border-rose-400")}
                        />
                      </div>
                    </Field>
                  </div>

                  <Field label={f.labels.date} htmlFor="order-date" error={errors.date}>
                    <div className="relative">
                      <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cocoa-300" />
                      <input
                        id="order-date"
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={(e) => set("date")(e.target.value)}
                        className={cn(inputClasses, "pl-11", errors.date && "border-rose-400")}
                      />
                    </div>
                  </Field>

                  <Field label={f.labels.time} htmlFor="order-time" error={errors.time}>
                    <div className="relative">
                      <Clock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cocoa-300" />
                      <input
                        id="order-time"
                        type="time"
                        value={form.time}
                        onChange={(e) => set("time")(e.target.value)}
                        className={cn(inputClasses, "pl-11", errors.time && "border-rose-400")}
                      />
                    </div>
                  </Field>
                </div>

                <aside className="flex flex-col rounded-3xl bg-gradient-to-b from-blush-50 to-cream-100 p-6 sm:p-7">
                  <p className="inline-flex items-start gap-2.5 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3.5 text-xs font-bold leading-relaxed text-amber-800">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    {f.disclaimer}
                  </p>
                  <div className="mt-6">
                    <h4 className="font-display text-lg font-bold text-cocoa-900">{f.nextTitle}</h4>
                    <ol className="mt-3 space-y-3 text-sm font-semibold text-cocoa-600">
                      {[f.next1, f.next2, f.next3].map((step, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-500 text-xs font-extrabold text-white">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <a
                    href={TELEGRAM_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border-2 border-rose-200 bg-white px-5 py-3 text-sm font-extrabold text-rose-600 transition-colors hover:border-rose-400"
                  >
                    <TelegramIcon className="h-4 w-4 shrink-0" />
                    {f.browseFirst}
                  </a>
                  <p className="mt-auto pt-6 text-xs font-semibold leading-relaxed text-cocoa-400">{f.tip}</p>
                </aside>

                <div className="sm:col-span-2 lg:col-span-1">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-8 py-4 text-base font-extrabold text-white shadow-lift transition-transform hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto lg:col-span-1"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-5 w-5 shrink-0 animate-spin" />
                        {f.submitting}
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 shrink-0" />
                        {f.submit}
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-xs font-semibold text-cocoa-400">
                    {TELEGRAM_HANDLE} · {t.common.openingHours}
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
