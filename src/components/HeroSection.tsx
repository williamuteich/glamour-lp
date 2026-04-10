import heroImg from "@/assets/hero-jewelry.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-background pt-24 pb-12 lg:pb-16">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-soft/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/2" />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div className="space-y-8 animate-fade-in-up relative z-10 md:pr-4">
            <div className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-primary" />
                  <p className="text-primary font-body text-xs tracking-[0.35em] uppercase font-semibold">
                    Shopping Lindóia
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-transparent" />
                  <p className="text-muted-foreground font-body text-[10px] sm:text-xs tracking-widest uppercase font-light">
                    Térreo, Sala 160 – Porto Alegre, RS
                  </p>
                </div>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-light leading-[1.1] text-foreground">
                Perfuração de orelha + <br />
                <span className="text-gradient-gold italic font-medium">brinco incluso</span> <br />
                por apenas R$59,90
              </h1>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-md">
                Procedimento rápido, seguro e feito na hora no Shopping Lindóia. Ideal para adultos e crianças — sem complicação e sem taxa extra.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://wa.me/555189703450?text=Olá! Gostaria de agendar minha perfuração de orelha com brinco incluso por R$59,90."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary text-primary-foreground font-medium px-8 py-3.5 rounded-full text-sm tracking-wide hover:shadow-gold transition-all"
              >
                Falar no WhatsApp
              </a>
              <a
                href="#localizacao"
                className="border border-border text-foreground px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-secondary transition font-light"
              >
                Como chegar
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative mx-auto w-full max-w-none ml-auto h-[550px] rounded-[#2rem] shadow-2xl border border-border bg-background overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.2s" }}>

            <div className="bg-secondary/40 border-b border-border px-5 py-4 flex items-center justify-between z-20 relative">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bg-background border border-border/50 rounded-md px-10 py-1.5 text-xs text-muted-foreground font-body w-1/2 text-center truncate">
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
                <div className="w-10 h-1 bg-primary mx-auto mt-6 rounded-full" />
              </div>
            </div>

            <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-border z-20 animate-float">
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
