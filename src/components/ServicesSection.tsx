import { Ear, Shield, Sparkles, Clock } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <p className="text-primary font-body text-xs tracking-[0.35em] uppercase font-light">Serviços</p>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-foreground">
            Perfuração de <span className="text-gradient-gold italic">Orelha</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-dark rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 shimmer" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative space-y-5">
              <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto">
                <Ear className="h-8 w-8 text-primary" />
              </div>
              <p className="text-rose-light font-body text-xs tracking-[0.35em] uppercase font-light">Perfuração de Orelha</p>
              <p className="text-primary-foreground font-display text-3xl md:text-4xl font-light">
                Com <span className="text-primary font-semibold">JÓIA INCLUSA</span>
              </p>
              <p className="text-primary font-display text-5xl md:text-6xl font-semibold">R$ 59,90</p>
              <p className="text-primary-foreground/50 max-w-md mx-auto font-light text-sm">
                Procedimento rápido, seguro e realizado com materiais adequados.
              </p>

              <div className="flex flex-wrap justify-center gap-8 mt-10 text-primary-foreground/70 text-xs">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-rose-light" />
                  <span className="font-light">Primeiro furo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-rose-light" />
                  <span className="font-light">Novos piercings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-rose-light" />
                  <span className="font-light">Renovar o estilo</span>
                </div>
              </div>

              <a
                href="https://wa.me/555189703450?text=Olá! Gostaria de agendar minha perfuração de orelha."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-primary text-primary-foreground font-medium px-10 py-4 rounded-full text-sm tracking-wide hover:shadow-gold transition-all"
              >
                Agendar minha perfuração
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
