export const TELEGRAM_CHANNEL_URL = "https://t.me/+WoEMfc7ic4s5MzM0";
export const TELEGRAM_CONTACT_URL = "https://t.me/da723";
export const TELEGRAM_HANDLE = "@da723";

/** Nav entries — labels come from the active translation (t.nav[key]). */
export const NAV_LINKS = [
  { key: "products", href: "#products" },
  { key: "flavours", href: "#flavours" },
  { key: "delivery", href: "#delivery" },
  { key: "howToOrder", href: "#how-to-order" },
  { key: "faq", href: "#faq" },
] as const;

export type NavKey = (typeof NAV_LINKS)[number]["key"];

/** Flavour presentation data — names/notes come from translations. */
export const FLAVOUR_KEYS = ["chocolate", "strawberry", "blueberry", "coconut"] as const;
export type FlavourKey = (typeof FLAVOUR_KEYS)[number];

export const FLAVOUR_STYLES: Record<FlavourKey, { emoji: string; gradient: string; needsConfirmation?: boolean }> = {
  chocolate: { emoji: "🍫", gradient: "from-[#6b4632] to-[#9c6b4a]" },
  strawberry: { emoji: "🍓", gradient: "from-[#d94f6f] to-[#f08aa1]" },
  blueberry: { emoji: "🫐", gradient: "from-[#4f5da8] to-[#7f8fd4]" },
  coconut: { emoji: "🥥", gradient: "from-[#8a7a6a] to-[#cbb9a4]", needsConfirmation: true },
};

export const DELIVERY_KEYS = ["map", "bike", "gift", "zap"] as const;
export type DeliveryKey = (typeof DELIVERY_KEYS)[number];

export const PRODUCT_OPTION_KEYS = [
  "chocolate",
  "strawberry",
  "blueberry",
  "coconut",
  "flowers",
  "unsure",
] as const;
export type ProductOptionKey = (typeof PRODUCT_OPTION_KEYS)[number];

/** Telegram links for each "How to order" step. */
export const ORDER_STEP_LINKS = [
  TELEGRAM_CHANNEL_URL,
  TELEGRAM_CHANNEL_URL,
  TELEGRAM_CONTACT_URL,
] as const;

export function telegramContactLinkWithMessage(text: string): string {
  return `${TELEGRAM_CONTACT_URL}?text=${encodeURIComponent(text)}`;
}
