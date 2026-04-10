const ServicesSection = () => {
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

        <div className="max-w-3xl mx-auto">
          <div className="bg-card shadow-soft rounded-3xl p-10 md:p-14 text-center relative overflow-hidden border border-border">
            <div className="relative space-y-5">
              <p className="text-primary font-body text-xs tracking-[0.35em] uppercase font-light">Por apenas</p>
              <p className="text-primary font-display text-5xl md:text-6xl font-semibold">R$ 59,90</p>

              <div className="flex flex-col items-center gap-3 mt-8 text-foreground/80 font-light text-sm">
                <span>Valor final (sem surpresas)</span>
                <span>Escolha do brinco na hora</span>
                <span>Atendimento imediato no shopping</span>
              </div>

              <div className="mt-8 pt-6 border-t border-border inline-block max-w-sm mx-auto">
                <p className="text-primary font-medium text-lg leading-relaxed">
                  Você já sai com o brinco incluso — sem pagar nada a mais.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="https://wa.me/555189703450?text=Olá! Gostaria de agendar minha perfuração de orelha por R$59,90."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-primary-foreground font-medium px-10 py-4 rounded-full text-sm tracking-wide hover:shadow-gold transition-all"
                >
                  Agendar agora pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
