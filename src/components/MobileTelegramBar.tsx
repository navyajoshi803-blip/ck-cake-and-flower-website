import { Camera } from "lucide-react";
import { TELEGRAM_CHANNEL_URL, TELEGRAM_CONTACT_URL } from "@/data/site";
import { TelegramIcon } from "@/components/icons";
import { useLang } from "@/i18n/LanguageContext";

/** Persistent floating "Order on Telegram" bar shown only on mobile. */
export default function MobileTelegramBar() {
  const { t } = useLang();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-blush-200 bg-white/95 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-8px_30px_-12px_rgb(90_45_45/0.25)] backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a
          href={TELEGRAM_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-rose-200 bg-white px-3 py-2.5 text-xs font-extrabold text-rose-600 active:scale-95"
        >
          <Camera className="h-4 w-4 shrink-0" />
          <span className="truncate">{t.common.viewProducts}</span>
        </a>
        <a
          href={TELEGRAM_CONTACT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-3 py-2.5 text-xs font-extrabold text-white shadow-lift active:scale-95"
        >
          <TelegramIcon className="h-4 w-4 shrink-0" />
          <span className="truncate">{t.common.orderOnTelegram}</span>
        </a>
      </div>
    </div>
  );
}
