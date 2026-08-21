```tsx
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en, type Translation } from "./en";
import { km } from "./km";
import { zh } from "./zh";
import { ko } from "./ko";

export type Lang = "en" | "km" | "zh" | "ko";

const DICTIONARIES: Record<Lang, Translation> = { en, km, zh, ko };
const STORAGE_KEY = "ck-lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: Translation;
  isKhmer: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/** English by default; Khmer only if the browser language is Khmer. */
function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "en";

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "km" || stored === "zh" || stored === "ko") {
      return stored;
    }
  } catch {
    /* localStorage unavailable — fall through to browser detection */
  }

  const langs = [navigator.language, ...(navigator.languages ?? [])];

  if (langs.some((l) => typeof l === "string" && l.toLowerCase().startsWith("km"))) {
    return "km";
  }

  if (langs.some((l) => typeof l === "string" && l.toLowerCase().startsWith("ko"))) {
    return "ko";
  }

  if (langs.some((l) => typeof l === "string" && l.toLowerCase().startsWith("zh"))) {
    return "zh";
  }

  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore write failures */
    }

    document.documentElement.lang = lang;
    document.documentElement.classList.toggle("lang-km", lang === "km");
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const toggleLang = useCallback(
    () =>
      setLangState((current) => {
        const languages: Lang[] = ["en", "km", "zh", "ko"];
        const index = languages.indexOf(current);
        return languages[(index + 1) % languages.length];
      }),
    []
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang,
      t: DICTIONARIES[lang],
      isKhmer: lang === "km",
    }),
    [lang, setLang, toggleLang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);

  if (!ctx) {
    throw new Error("useLang must be used inside a LanguageProvider");
  }

  return ctx;
}
```
