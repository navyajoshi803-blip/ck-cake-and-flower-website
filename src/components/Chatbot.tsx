import { useEffect, useRef, useState, type FormEvent } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { TELEGRAM_CHANNEL_URL, TELEGRAM_CONTACT_URL, telegramContactLinkWithMessage } from "@/data/site";
import { TelegramIcon } from "@/components/icons";
import { useLang } from "@/i18n/LanguageContext";
import type { Translation } from "@/i18n/en";

type ChipKey = keyof Translation["chatbot"]["chips"];
type LinkKey = keyof Translation["chatbot"]["links"];
type OrderField = "name" | "contact" | "product" | "location" | "date" | "time";
type OrderStep = null | OrderField | "done";

type Intent =
  | "cancel"
  | "thanks"
  | "hours"
  | "coconut"
  | "cakes"
  | "flowers"
  | "delivery"
  | "prices"
  | "sameDay"
  | "telegram"
  | "order"
  | "somethingElse"
  | "greeting"
  | "goodbye"
  | "fallback";

interface ChatMessage {
  id: number;
  role: "bot" | "user";
  text: string;
  chips?: ChipKey[];
  link?: { label: string; href: string } | null;
}

const ORDER_FIELDS: OrderField[] = ["name", "contact", "product", "location", "date", "time"];

/** Chip → intent mapping so buttons work identically in both languages. */
const CHIP_INTENT: Record<ChipKey, Intent> = {
  hours: "hours",
  flavours: "cakes",
  delivery: "delivery",
  flowers: "flowers",
  order: "order",
  telegram: "telegram",
  coconut: "coconut",
  chocolate: "cakes",
  strawberry: "cakes",
  blueberry: "cakes",
  cancel: "cancel",
  newOrder: "order",
  somethingElse: "somethingElse",
};

/** Matches English and Khmer keywords — order matters (first match wins). */
const INTENT_PATTERNS: { intent: Intent; re: RegExp }[] = [
  { intent: "cancel", re: /(cancel|stop|never ?mind|forget it|បោះបង់|ឈប់|កុំ)/i },
  { intent: "coconut", re: /(coconut|ដូង)/i },
  { intent: "sameDay", re: /(same-?day|today|urgent|asap|ថ្ងៃនេះ|បន្ទាន់|ឥឡូវ)/i },
  { intent: "prices", re: /(price|cost|how much|expensive|តម្លៃ|ថ្លៃ|ប៉ុន្មាន|លុយ)/i },
  { intent: "delivery", re: /(deliver|shipping|ដឹក|ដឹកជញ្ជូន|សេវាដឹក)/i },
  { intent: "hours", re: /(hour|open|close|ម៉ោង|បើក|បិទ)/i },
  { intent: "flowers", re: /(flower|bouquet|rose|arrangement|ផ្កា|ភួង|កុលាប)/i },
  { intent: "cakes", re: /(flavou?r|cake|chocolate|strawberry|blueberry|នំ|ខេក|រសជាតិ|សូកូឡា|ស្ត្របឺរី|ប៊្លូបឺរី)/i },
  { intent: "order", re: /(order|buy|book|purchase|កម្ម៉ង់|កម្មង់|ទិញ|ចង់បាន)/i },
  { intent: "telegram", re: /(telegram|channel|contact|da723|message|reach|តេលេក្រាម|ទាក់ទង|សារ|ឆានែល)/i },
  { intent: "somethingElse", re: /(something else|another question|anything else|អ្វីផ្សេង|សំណួរផ្សេង)/i },
  { intent: "thanks", re: /(thank|thanks|អរគុណ)/i },
  { intent: "goodbye", re: /(bye|goodbye|see you|លាហើយ|ជម្រាបលា)/i },
  { intent: "greeting", re: /^(hi|hello|hey|yo|good (morning|afternoon|evening)|សួស្តី|ជម្រាបសួរ|ហេឡូ)/i },
];

function detectIntent(raw: string): Intent {
  const text = raw.trim();
  for (const { intent, re } of INTENT_PATTERNS) {
    if (re.test(text)) return intent;
  }
  return "fallback";
}

interface Reply {
  text: string;
  chips?: ChipKey[];
  link?: { label: string; href: string } | null;
  step: OrderStep;
}

let idCounter = 1;

export default function Chatbot() {
  const { t, lang } = useLang();
  const c = t.chatbot;

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [order, setOrder] = useState<Record<string, string>>({});
  const [step, setStep] = useState<OrderStep>(null);
  const [unread, setUnread] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 0,
      role: "bot",
      text: c.welcome,
      chips: ["hours", "flavours", "delivery", "flowers", "order", "telegram"],
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const stepRef = useRef<OrderStep>(null);
  const orderRef = useRef<Record<string, string>>({});
  const tRef = useRef(t);
  stepRef.current = step;
  orderRef.current = order;
  tRef.current = t;

  /** Restart the conversation in the newly selected language. */
  useEffect(() => {
    setMessages([
      {
        id: idCounter++,
        role: "bot",
        text: c.welcome,
        chips: ["hours", "flavours", "delivery", "flowers", "order", "telegram"],
      },
    ]);
    setStep(null);
    setOrder({});
    setTyping(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) {
      setUnread(false);
      window.setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [open]);

  const buildSummary = (o: Record<string, string>, tr: Translation): string => {
    const s = tr.chatbot.order;
    return [
      s.summaryIntro,
      ``,
      `👤 ${s.summaryName}: ${o.name}`,
      `📞 ${s.summaryContact}: ${o.contact}`,
      `🎂 ${s.summaryProduct}: ${o.product}`,
      `📍 ${s.summaryLocation}: ${o.location}`,
      `📅 ${s.summaryDate}: ${o.date}`,
      `🕐 ${s.summaryTime}: ${o.time}`,
      ``,
      s.summaryOutro,
    ].join("\n");
  };

  /** Rule-based engine — never invents prices, stock, designs or delivery times. */
  const respond = (raw: string, forcedIntent: Intent | null, tr: Translation): Reply => {
    const cb = tr.chatbot;
    const currentStep = stepRef.current;
    const currentOrder = orderRef.current;
    const link = (key: LinkKey, href: string) => ({ label: cb.links[key], href });

    const intent = forcedIntent ?? detectIntent(raw);

    if (intent === "cancel") {
      return { text: cb.replies.cancel, chips: ["hours", "flavours", "order"], step: null };
    }

    // Active order flow — capture the answer for the current field
    if (currentStep && currentStep !== "done" && ORDER_FIELDS.includes(currentStep)) {
      const nextOrder = { ...currentOrder, [currentStep]: raw.trim() };
      const idx = ORDER_FIELDS.indexOf(currentStep);
      const nextField = idx + 1 < ORDER_FIELDS.length ? ORDER_FIELDS[idx + 1] : null;

      if (!nextField) {
        return {
          text:
            `${cb.order.recapTitle}\n\n` +
            `👤 ${nextOrder.name}\n📞 ${nextOrder.contact}\n🎂 ${nextOrder.product}\n` +
            `📍 ${nextOrder.location}\n📅 ${nextOrder.date}\n🕐 ${nextOrder.time}\n\n` +
            cb.order.recapWarning,
          link: link("sendOrder", telegramContactLinkWithMessage(buildSummary(nextOrder, tr))),
          chips: ["newOrder", "somethingElse"],
          step: "done",
        };
      }

      const prompt =
        nextField === "contact"
          ? `${cb.order.contactPrefix}${nextOrder.name}${cb.order.contactSuffix}`
          : cb.order[nextField];
      return { text: prompt, step: nextField };
    }

    if (currentStep === "done" && intent !== "order" && intent !== "somethingElse") {
      return {
        text: cb.replies.orderReady,
        link: link("sendOrder", telegramContactLinkWithMessage(buildSummary(currentOrder, tr))),
        chips: ["newOrder", "somethingElse"],
        step: "done",
      };
    }

    switch (intent) {
      case "thanks":
        return { text: cb.replies.thanks, chips: ["hours", "order", "telegram"], step: null };
      case "hours":
        return { text: cb.replies.hours, chips: ["flavours", "delivery", "order"], step: null };
      case "coconut":
        return {
          text: cb.replies.coconut,
          link: link("askCoconut", TELEGRAM_CONTACT_URL),
          chips: ["chocolate", "strawberry", "blueberry", "order"],
          step: null,
        };
      case "cakes":
        return {
          text: cb.replies.cakes,
          link: link("seeCakes", TELEGRAM_CHANNEL_URL),
          chips: ["coconut", "delivery", "order"],
          step: null,
        };
      case "flowers":
        return {
          text: cb.replies.flowers,
          link: link("seeFlowers", TELEGRAM_CHANNEL_URL),
          chips: ["flavours", "delivery", "order"],
          step: null,
        };
      case "delivery":
        return { text: cb.replies.delivery, chips: ["order", "hours", "telegram"], step: null };
      case "prices":
        return {
          text: cb.replies.prices,
          link: link("viewPrices", TELEGRAM_CHANNEL_URL),
          chips: ["order", "telegram"],
          step: null,
        };
      case "sameDay":
        return {
          text: cb.replies.sameDay,
          link: link("messageNow", TELEGRAM_CONTACT_URL),
          chips: ["order", "delivery"],
          step: null,
        };
      case "telegram":
        return {
          text: cb.replies.telegram,
          link: link("openChannel", TELEGRAM_CHANNEL_URL),
          chips: ["order", "hours"],
          step: null,
        };
      case "order":
        return { text: cb.replies.orderIntro + cb.order.name, chips: ["cancel"], step: "name" };
      case "somethingElse":
        return {
          text: cb.replies.somethingElse,
          chips: ["hours", "flavours", "delivery", "flowers"],
          step: null,
        };
      case "greeting":
        return {
          text: cb.replies.greeting,
          chips: ["hours", "flavours", "delivery", "order"],
          step: null,
        };
      case "goodbye":
        return { text: cb.replies.goodbye, step: null };
      default:
        return {
          text: cb.replies.fallback,
          link: link("messageNow", TELEGRAM_CONTACT_URL),
          chips: ["hours", "order", "telegram"],
          step: currentStep,
        };
    }
  };

  const send = (raw: string, forcedIntent: Intent | null = null) => {
    const value = raw.trim();
    if (!value || typing) return;
    setInput("");
    setMessages((m) => [...m, { id: idCounter++, role: "user", text: value }]);
    setTyping(true);

    window.setTimeout(() => {
      const activeField =
        stepRef.current && stepRef.current !== "done" ? (stepRef.current as OrderField) : null;
      const result = respond(value, forcedIntent, tRef.current);

      // Store the answer captured for the field that was being asked
      if (activeField && forcedIntent !== "cancel") {
        setOrder((o) => ({ ...o, [activeField]: value }));
      }
      if (result.step === null) setOrder({});
      setStep(result.step);

      setMessages((m) => [
        ...m,
        { id: idCounter++, role: "bot", text: result.text, chips: result.chips, link: result.link ?? null },
      ]);
      setTyping(false);
    }, 700 + Math.random() * 400);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? c.closeLabel : c.openLabel}
        className={cn(
          "fixed bottom-[5.75rem] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-lift transition-transform hover:scale-105 active:scale-95 md:bottom-6 md:right-6",
          open && "rotate-90"
        )}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && unread && (
          <span aria-hidden className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-rose-400" />
            <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-rose-500" />
          </span>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label={c.title}
          className="fixed inset-x-3 bottom-[5.5rem] top-16 z-50 flex animate-pop flex-col overflow-hidden rounded-3xl border border-blush-200 bg-white shadow-[0_30px_80px_-20px_rgb(60_20_30/0.45)] sm:inset-x-auto sm:bottom-24 sm:right-5 sm:top-auto sm:h-[34rem] sm:w-[24rem]"
        >
          {/* Header */}
          <div className="relative flex items-center gap-3 bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-4 text-white">
            <div aria-hidden className="absolute -right-6 -top-8 h-28 w-28 rounded-full bg-white/10 blur-xl" />
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
              <Bot className="h-6 w-6" />
            </span>
            <div className="relative min-w-0 flex-1">
              <p className="truncate font-display text-base font-bold leading-tight">{c.title}</p>
              <p className="flex items-center gap-1.5 text-xs font-semibold text-rose-100">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                <span className="truncate">{c.status}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={c.closeChat}
              className="relative rounded-full p-2 transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-cream-50/70 px-4 py-4">
            {messages.map((msg) =>
              msg.role === "bot" ? (
                <div key={msg.id} className="max-w-[88%] animate-pop">
                  <div className="rounded-2xl rounded-bl-md border border-blush-100 bg-white px-4 py-3 text-sm leading-relaxed text-cocoa-700 shadow-card">
                    <p className="whitespace-pre-line">{msg.text}</p>
                    {msg.link && (
                      <a
                        href={msg.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-2.5 text-xs font-extrabold text-white shadow-lift transition-transform hover:scale-[1.02] active:scale-95"
                      >
                        <TelegramIcon className="h-3.5 w-3.5 shrink-0" />
                        {msg.link.label}
                      </a>
                    )}
                  </div>
                  {msg.chips && msg.chips.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {msg.chips.map((chipKey) => (
                        <button
                          key={chipKey}
                          type="button"
                          onClick={() => send(c.chips[chipKey], CHIP_INTENT[chipKey])}
                          className="rounded-full border border-rose-200 bg-white px-3 py-1.5 text-xs font-bold text-rose-600 transition-colors hover:border-rose-400 hover:bg-blush-50"
                        >
                          {c.chips[chipKey]}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div key={msg.id} className="flex justify-end">
                  <p className="max-w-[85%] animate-pop rounded-2xl rounded-br-md bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-2.5 text-sm font-semibold leading-relaxed text-white shadow-card">
                    {msg.text}
                  </p>
                </div>
              )
            )}

            {typing && (
              <div className="flex w-max animate-pop items-center gap-1.5 rounded-2xl rounded-bl-md border border-blush-100 bg-white px-4 py-3 shadow-card">
                <span className="h-2 w-2 animate-bounce rounded-full bg-rose-300 [animation-delay:0ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-rose-400 [animation-delay:150ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-rose-500 [animation-delay:300ms]" />
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-cream-200 bg-white px-3 py-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={c.placeholder}
              aria-label={c.inputLabel}
              className="min-w-0 flex-1 rounded-full border-2 border-cream-200 bg-cream-50 px-4 py-2.5 text-sm font-semibold text-cocoa-800 outline-none transition-colors placeholder:font-normal placeholder:text-cocoa-300 focus:border-rose-400"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              aria-label={c.sendLabel}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-lift transition-transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
