import { Footer } from "@/components/Footer";
import { HomePage } from "@/components/HomePage";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { I18nProvider } from "@/utils/i18n";

export default function Page() {
  return (
    <I18nProvider>
      <Navbar />
      <HomePage />
      <Footer />
      <WhatsAppButton />
    </I18nProvider>
  );
}
