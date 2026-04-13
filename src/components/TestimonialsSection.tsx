import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const testimonials = [
  {
    name: "Vanessa Martins",
    time: "Comentário do Google",
    initial: "V",
    image: null,
    text: "Loja simplesmente maravilhosa! O atendimento é impecável, super atencioso e acolhedor. A qualidade das semi joias e acessórios é excelente, peças lindas, modernas e com ótimo acabamento. Dá pra ver o cuidado e o carinho em cada detalhe. Com certeza virei cliente fiel. Recomendo muito!",
    rating: 5,
  },
  {
    name: "Pamela Uteich Rodrigues",
    time: "Comentário do Google",
    initial: "P",
    image: "/assets/PamelaUteichRodrigues.png",
    text: "Experiência maravilhosa! A loja é organizada, tem uma grande variedade de bijuterias e maquiagens lindas e de ótima qualidade. O atendimento foi impecável, com certeza voltarei mais vezes.",
    rating: 5,
  },
  {
    name: "Rayssa Paim",
    time: "Comentário do Google",
    initial: "R",
    image: null,
    text: "Que experiência maravilhosa! Nessa loja encontrei literalmente tudo que precisava, fiquei encantada com atendimento e as peças, indico!",
    rating: 5,
  },
  {
    name: "Lisiane Almada Cauduro e Kolas",
    time: "Comentário do Google",
    initial: "L",
    image: "/assets/LisianeAlmadaCauduroeKolas.png",
    text: "Atendimento maravilhoso e produtos de excelente qualidade. Amei a experiência!",
    rating: 5,
  },
  {
    name: "Maribel Zanotto",
    time: "Comentário do Google",
    initial: "M",
    image: "/assets/MaribelZanotto.png",
    text: "Loja maravilhosa! Atendimento impecável, ambiente agradável e tudo muito bem organizado. Sempre fui muito bem recebida 🥰",
    rating: 5,
  },
  {
    name: "Karen Leticia Brunisaki",
    time: "Comentário do Google",
    initial: "K",
    image: "/assets/KarenLeticiaBrunisaki.png",
    text: "A loja possui muitas opções atrativas e o atendimento é excelente!",
    rating: 5,
  },
  {
    name: "Cristina Pereira",
    time: "Comentário do Google",
    initial: "C",
    image: "/assets/CristinaPereira.png",
    text: "Sou cliente há anos da Glamour Lindóia, pois lá sempre sou recebida com muito carinho e encontro semi jóias lindas, por um ótimo preço!",
    rating: 5,
  },
  {
    name: "Fran Fernanndes",
    time: "Comentário do Google",
    initial: "F",
    image: "/assets/FranFernanndes.png",
    text: "Que loja maravilhosa, com muita variedade e preços ótimos . Parabéns ❤️🌹",
    rating: 5,
  },
  {
    name: "Denise Alcione Dorscheid",
    time: "Comentário do Google",
    initial: "D",
    image: null,
    text: "Local limpo e organizado. Com muitas variedades. Atendimento atencioso. Preços bons.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3500);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section id="avaliacoes" className="py-24 bg-background border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <p className="text-primary font-body text-xs tracking-[0.35em] uppercase font-light">Avaliações</p>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-foreground">
            Quem já fez, <span className="text-gradient-gold italic">recomenda</span>
          </h2>
          <p className="text-muted-foreground font-light max-w-md mx-auto pt-2">
            Veja o que dizem as pessoas que já passaram pela Glamour no Shopping Lindóia.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full bg-card p-6 sm:p-8 rounded-2xl border border-border shadow-soft flex flex-col hover:border-primary/20 transition-colors">
                    <div className="flex justify-between items-start mb-5">
                      <div className="flex items-center gap-3">
                        {t.image ? (
                          <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/10" />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl uppercase ring-2 ring-primary/10">
                            {t.initial}
                          </div>
                        )}
                        <div>
                          <h4 className="font-display font-medium text-foreground text-sm sm:text-base leading-tight mb-1">{t.name}</h4>
                          <p className="text-muted-foreground text-[10px] uppercase tracking-wider font-light">{t.time}</p>
                        </div>
                      </div>
                      <GoogleIcon />
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="font-display text-base text-foreground/90 italic leading-relaxed flex-grow">
                      "{t.text}"
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://share.google/hur5dhDMdpIrqezSP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-foreground hover:bg-secondary/80 px-6 py-3 rounded-full font-medium transition-colors shadow-sm text-sm"
          >
            <GoogleIcon />
            Ver mais avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
