import heroImg from "@/assets/hero-jewelry.jpg";
import { Flame, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Coleção de joias douradas" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-glamour-dark/95 via-glamour-dark/75 to-glamour-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-glamour-dark/40 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 pt-28 pb-20">
        <div className="max-w-2xl space-y-10">
          <div className="space-y-5 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-rose-light" />
              <p className="text-rose-light font-body text-xs tracking-[0.35em] uppercase font-light">Shopping Lindóia • Porto Alegre</p>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] text-primary-foreground">
              Beleza, estilo e{" "}
              <span className="text-gradient-gold italic font-medium">glamour</span>
              <br />em um só lugar
            </h1>
            <p className="text-base text-primary-foreground/60 font-light leading-relaxed max-w-md">
              A Glamour Lindóia oferece acessórios, maquiagens, semijoias e muito mais no Shopping Lindóia.
            </p>
          </div>

          <div className="rounded-2xl p-6 max-w-sm border-2 border-amber-400/50 animate-fade-in-up bg-gradient-to-br from-glamour-dark/95 via-glamour-dark/90 to-rose-dark/80 backdrop-blur-sm shadow-2xl" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2 text-amber-400 mb-3">
              <Flame className="h-5 w-5" />
              <span className="font-body font-bold text-xs tracking-[0.2em] uppercase">Promoção especial</span>
            </div>
            <p className="text-white font-display text-xl font-medium drop-shadow-sm">
              Perfuração de orelha com <span className="text-amber-400 font-bold">JÓIA INCLUSA</span>
            </p>
            <p className="text-amber-400 text-4xl font-display font-bold mt-2 drop-shadow-sm">R$ 59,90</p>
            <p className="text-white/80 text-sm mt-3 font-light">Procedimento rápido, seguro e feito na loja.</p>
            <a
              href="https://wa.me/555189703450?text=Olá! Gostaria de agendar minha perfuração de orelha."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-amber-500 hover:bg-amber-400 text-glamour-dark font-semibold px-5 py-2.5 rounded-full text-sm transition-all hover:shadow-lg"
            >
              Agendar agora
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a href="#localizacao" className="group bg-primary text-primary-foreground font-medium px-8 py-3.5 rounded-full text-sm tracking-wide hover:shadow-gold transition-all flex items-center gap-2">
              Visitar a loja
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#produtos" className="border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-primary-foreground/10 transition font-light">
              Ver produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
