const LocationSection = () => {
  return (
    <section id="localizacao" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <p className="text-primary font-body text-xs tracking-[0.35em] uppercase font-light">Onde estamos</p>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-foreground">
            Tudo isso por apenas R$59,90 <span className="text-gradient-gold italic">com brinco incluso</span>
          </h2>
          <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto pt-2">
            Sem taxas escondidas. Sem complicação. Você chega, escolhe o brinco e já sai com ele.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto bg-card rounded-3xl p-8 border border-border shadow-soft">
          <div className="rounded-2xl overflow-hidden shadow-sm h-64 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.943634208898!2d-51.15449422355863!3d-30.009774829671265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519776987fdd719%3A0xbe780735ac46e089!2sGlamour%20Lind%C3%B3ia!5e0!3m2!1spt-BR!2sbr!4v1774618697838!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Shopping Lindóia"
            />
          </div>

          <div className="space-y-6 flex flex-col justify-center">
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase font-light text-primary mb-1">Endereço</p>
              <h3 className="font-display font-medium text-foreground text-xl">Shopping Lindóia – Térreo, Sala 160</h3>
              <p className="text-muted-foreground text-sm font-light">Porto Alegre – RS</p>
            </div>

            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase font-light text-primary mb-1">Horário de Funcionamento</p>
              <p className="text-muted-foreground text-base font-light">Seg a Sáb: 10h às 21h</p>
              <p className="text-muted-foreground text-base font-light">Dom: Fechado</p>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/555189703450?text=Olá!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary/10 text-primary hover:bg-primary/20 font-medium px-6 py-3 rounded-full text-sm tracking-wide transition-all"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
