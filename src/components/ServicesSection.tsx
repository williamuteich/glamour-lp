import { trackWhatsAppConversion } from "@/lib/utils";

const ServicesSection = () => {
  const beforeAfterImage = "/assets/imagem-brincos.png";

  const handleAgendarClick = () => {
    trackWhatsAppConversion();
  };

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <p className="text-primary font-body text-xs tracking-[0.35em] uppercase font-light">Oferta por tempo limitado</p>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-foreground">
            Perfuração + <span className="text-gradient-gold italic">Brinco Incluso</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card shadow-soft rounded-3xl overflow-hidden border border-border grid lg:grid-cols-2 items-center">
            <div className="relative h-full min-h-[300px] md:min-h-[400px]">
              <img
                src={beforeAfterImage}
                alt="Transformação - Antes e Depois da Perfuração"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold shadow-lg">
                Resultado Real
              </div>
            </div>

            <div className="p-8 md:p-12 text-center lg:text-left flex flex-col justify-center">
              <div className="space-y-5">
                <p className="text-primary font-body text-xs tracking-[0.35em] uppercase font-light">Por apenas</p>
                <p className="text-primary font-display text-5xl md:text-6xl font-semibold">R$ 59,90</p>

                <div className="flex flex-col items-center lg:items-start gap-3 mt-8 text-foreground/80 font-light text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Perfuração somente com pistola</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Escolha do par de brincos na hora</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="font-bold text-primary">Crianças: R$ 89,90 o par</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Shopping Lindóia – Sala 160</span>
                  </div>
                </div>

                <div className="pt-8 w-full">
                  <a
                    href="https://wa.me/555189703450?text=Olá! Gostaria de agendar minha perfuração de orelha por R$59,90."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleAgendarClick}
                    className="inline-block w-full lg:w-auto bg-primary text-primary-foreground font-medium px-10 py-4 rounded-full text-sm tracking-wide hover:shadow-gold transition-all text-center"
                  >
                    Agendar agora pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
