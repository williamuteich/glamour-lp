import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/utils";

const WhatsAppButton = () => {
  const handleClick = () => {
    trackEvent("click_whatsapp_floating", "Conversion", "WhatsApp Floating Button");
  };

  return (
    <a
      href="https://wa.me/555189703450?text=Olá! Gostaria de agendar minha perfuração de orelha com acompanhamento de joia incluído."
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform hover:shadow-[#25D366]/50"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
