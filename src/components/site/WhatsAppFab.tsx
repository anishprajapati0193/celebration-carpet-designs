import { MessageCircle } from "lucide-react";

const WHATSAPP =
  "https://wa.me/919999999999?text=Hi%20Celebration%20Carpet%2C%20I%27d%20like%20to%20book%20a%20surprise%20decoration%20in%20Dehradun.";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-glow" />
      <span className="relative flex items-center gap-2 pl-4 pr-5 py-3.5 rounded-full bg-[oklch(0.55_0.18_145)] text-white shadow-elegant hover:scale-105 transition-transform duration-300">
        <MessageCircle size={20} />
        <span className="hidden sm:inline text-sm font-medium">Book on WhatsApp</span>
      </span>
    </a>
  );
}
