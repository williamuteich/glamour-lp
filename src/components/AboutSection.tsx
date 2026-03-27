import storeInside from "@/assets/store-inside.jpg";
import storeFront from "@/assets/store-front.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <p className="text-primary font-body text-xs tracking-[0.35em] uppercase font-light">Sobre nós</p>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-foreground leading-tight">
              Conheça a <span className="text-gradient-gold italic">Glamour Lindóia</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed font-light">
              Somos especializados em perfuração de orelha com jóia inclusa. Nosso procedimento é rápido, seguro e realizado com materiais de alta qualidade.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
              Localizada no Shopping Lindóia em Porto Alegre, estamos prontos para te atender sem agendamento prévio. Venha transformar seu estilo!
            </p>
            <p className="text-foreground font-display text-xl italic font-light">
              "Perfure com confiança e saia linda da loja."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <img src={storeFront} alt="Fachada Glamour Lindóia" className="rounded-2xl object-cover h-72 w-full shadow-soft" />
            <img src={storeInside} alt="Interior Glamour Lindóia" className="rounded-2xl object-cover h-72 w-full shadow-soft mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
