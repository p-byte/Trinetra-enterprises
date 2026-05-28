import { business } from "@/config/business";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href={business.whatsapp}
      aria-label="Contact Trinetra Enterprises on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-ember text-white shadow-glow transition hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
