import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/555189703450?text=Olá! Gostaria de agendar minha perfuração de orelha."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,45%)] text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform animate-float"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
