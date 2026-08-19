import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Flavours from "@/components/Flavours";
import Delivery from "@/components/Delivery";
import HowToOrder from "@/components/HowToOrder";
import OrderForm from "@/components/OrderForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import MobileTelegramBar from "@/components/MobileTelegramBar";
import { LanguageProvider, useLang } from "@/i18n/LanguageContext";

function Site() {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-cream-50 font-sans text-cocoa-800">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cocoa-900 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
      >
        {t.common.skipToContent}
      </a>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Flavours />
        <Delivery />
        <HowToOrder />
        <OrderForm />
        <FAQ />
      </main>
      <Footer />
      <MobileTelegramBar />
      <Chatbot />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}
