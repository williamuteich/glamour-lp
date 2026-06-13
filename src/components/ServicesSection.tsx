import { trackWhatsAppConversion, trackOfflineConversion } from "@/lib/utils";

const ServicesSection = () => {
  const beforeAfterImage = "/assets/imagem-brincos.png";

  const handleAgendarClick = () => {
    trackWhatsAppConversion();
  };

  const handleOfflineClick = () => {
    trackOfflineConversion();
  };

  return (
    <section id="servicos" className="pt-12 pb-24 sm:pt-16 sm:pb-24 lg:py-24 bg-background">
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
          <div className="bg-card shadow-soft rounded-none overflow-hidden border border-border grid lg:grid-cols-2 items-center">
            <div className="relative h-full min-h-[300px] md:min-h-[400px]">
              <img
                src={beforeAfterImage}
                alt="Transformação - Antes e Depois da Perfuração"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-none font-bold shadow-lg">
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
                    <span><strong>NÃO PRECISA AGENDAR:</strong> É só chegar e fazer na hora! Atendimento por ordem de chegada.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span><strong>Somente Furo na Orelha:</strong> Novos furos são feitos exclusivamente no lóbulo da orelha com pistola.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span><strong>Furo Infantil (Crianças):</strong> R$ 89,90 o par. <strong>NÃO é furo humanizado</strong> (somente pistola).</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span><strong>Nariz e Outros Locais:</strong> Colocação/troca de piercing <strong>somente se o furo já existir</strong> (não perfuramos).</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Shopping Lindóia – Térreo, Sala 160 (Porto Alegre)</span>
                  </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full">
                  <a
                    href="#localizacao"
                    onClick={handleOfflineClick}
                    className="inline-block bg-primary text-primary-foreground font-bold px-10 py-4 rounded-none text-sm tracking-widest uppercase hover:shadow-gold transition-all text-center w-full sm:w-auto"
                  >
                    Ir à Loja Agora (Sem Agendar)
                  </a>
                  <a
                    href={`https://wa.me/555189703450?text=${encodeURIComponent("Olá, gostaria de fazer perfuração + joia inclusa por R$59,90")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleAgendarClick}
                    className="inline-block bg-secondary text-foreground border border-border font-bold px-10 py-4 rounded-none text-sm tracking-widest uppercase hover:bg-muted transition-all text-center w-full sm:w-auto"
                  >
                    Chamar no WhatsApp
                  </a>
                </div>
                <p className="text-[11px] text-muted-foreground mt-3 italic text-center lg:text-left">
                  *Evite filas e demoras no WhatsApp: vá direto à loja física no Shopping Lindóia. É só chegar!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
