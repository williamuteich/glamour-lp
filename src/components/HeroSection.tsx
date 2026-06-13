import { trackWhatsAppConversion, trackMapsClick, trackOfflineConversion } from "@/lib/utils";
import { Tag } from "lucide-react";

const HeroSection = () => {
  const heroImg = "/assets/hero-jewelry.jpg";

  const handleWhatsAppClick = () => {
    trackWhatsAppConversion();
  };

  const handleMapsClick = () => {
    trackMapsClick();
  };

  const handleOfflineClick = () => {
    trackOfflineConversion();
  };

  return (
    <section id="inicio" className="relative lg:min-h-[85vh] flex items-center overflow-hidden bg-background pt-44 pb-0 sm:pt-48 sm:pb-0 lg:pt-40 lg:pb-16">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-soft/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/2" />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div className="space-y-6 sm:space-y-8 animate-fade-in-up relative z-10 md:pr-4">
            <div className="inline-block bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-none">
              📢 NÃO PRECISA MARCAR HORÁRIO — É SÓ CHEGAR!
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-7xl font-light leading-[1.2] lg:leading-[1.1] text-foreground">
              Perfuração de orelha + <br className="hidden lg:inline" />{" "}
              <span className="text-gradient-gold italic font-medium">par de brincos inclusos</span> <br className="hidden lg:inline" />{" "}
              por apenas R$59,90
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
              Procedimento rápido, higiênico com pistola e feito na hora no Shopping Lindóia (Térreo, Sala 160). Ideal para adultos e crianças — sem complicação, sem taxa extra e sem necessidade de agendamento!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full">
              <a
                href="#localizacao"
                onClick={handleOfflineClick}
                className="group bg-primary text-primary-foreground font-bold px-10 py-4 rounded-none text-sm tracking-widest uppercase transition-all text-center w-full sm:w-auto shadow-md"
              >
                Ir Direto para a Loja (Só Chegar!)
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Glamour+Lindóia,+Shopping+Lindóia,+Porto+Alegre"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMapsClick}
                className="border border-border text-foreground px-10 py-4 rounded-none text-sm tracking-widest uppercase hover:bg-secondary transition-all font-bold text-center w-full sm:w-auto"
              >
                Como nos encontrar (GPS)
              </a>
            </div>
            <p className="text-xs text-muted-foreground/75 text-center sm:text-left mt-3">
              *Atendimento imediato por ordem de chegada. Dúvidas rápidas?{" "}
              <a
                href={`https://wa.me/555189703450?text=${encodeURIComponent("Olá, gostaria de fazer perfuração + joia inclusa por R$59,90")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="text-primary font-semibold hover:underline"
              >
                Chamar no WhatsApp
              </a>
            </p>
          </div>

          <div className="hidden lg:block relative mx-auto w-full max-w-none ml-auto h-[550px] rounded-none shadow-2xl border border-border bg-background overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.2s" }}>

            <div className="bg-secondary/40 border-b border-border px-5 py-4 flex items-center justify-between z-20 relative">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bg-background border border-border/50 rounded-none px-10 py-1.5 text-xs text-muted-foreground font-body w-1/2 text-center truncate">
                glamourlindoia.com.br
              </div>
            </div>

            <div className="relative h-[calc(100%-53px)] overflow-hidden bg-black flex flex-col items-center justify-center">
              <img
                src={heroImg}
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                alt="Studio Glamour"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="relative z-10 text-center px-10 mb-10 translate-y-12">
                <p className="font-display italic text-3xl font-medium text-white leading-snug drop-shadow-md">
                  Elegância e <br /> Cuidado na Perfuração
                </p>
                <div className="w-10 h-1 bg-primary mx-auto mt-6 rounded-none" />
              </div>
            </div>

            <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-md px-6 py-4 rounded-none shadow-xl border border-border z-20 animate-float">
              <p className="text-primary font-body text-[10px] tracking-[0.2em] uppercase font-semibold mb-1">Qualidade Premium</p>
              <p className="font-display font-medium text-lg leading-tight text-foreground">Ambiente Seguro e <br />Esterilizado</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
