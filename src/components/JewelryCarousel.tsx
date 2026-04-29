import { trackWhatsAppConversion } from "@/lib/utils";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const items = [
    { name: "Ponto de Luz Clássico", type: "Titânio" },
    { name: "Argola Delicada", type: "Ouro 18k Folheado" },
    { name: "Coração Prata", type: "Prata 925" },
    { name: "Estrela Guia", type: "Aço Cirúrgico" },
    { name: "Bolinha Tradicional", type: "Ouro 18k Folheado" },
    { name: "Zircônia Quadrada", type: "Titânio" },
    { name: "Triskle Delicado", type: "Aço Cirúrgico" },
    { name: "Pérola Simples", type: "Prata 925" },
];

const JewelryCarousel = () => {
    const heroImg = "/assets/hero-jewelry.jpg";
    return (
        <section className="py-20 bg-background border-t border-border/50">
            <div className="container mx-auto px-4 mb-10 text-center">
                <h2 className="font-display text-4xl sm:text-5xl font-light text-foreground mb-3">
                    Modelos <span className="text-gradient-gold italic">Inclusos</span>
                </h2>
                <p className="text-muted-foreground font-light text-sm max-w-md mx-auto">
                    Escolha o seu brinco + perfuração por R$ 59,90. Várias opções disponíveis.
                </p>
            </div>

            <div className="container px-4 sm:px-12 max-w-6xl mx-auto pb-12">
                <Carousel
                    opts={{ align: "start" }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-3 py-4">
                        {items.map((item, idx) => (
                            <CarouselItem key={idx} className="pl-3 basis-[45%] md:basis-[30%] lg:basis-[22%]">
                                <div className="flex flex-col bg-card p-3 sm:p-4 rounded-xl border border-border/80 shadow-soft h-full hover:border-primary/30 transition-colors group">
                                    <div className="w-full aspect-square bg-rose-soft/20 rounded-lg border border-primary/10 overflow-hidden relative mix-blend-multiply mb-3">
                                        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                                        <img src={heroImg} className="w-full h-full object-cover opacity-80 scale-125 group-hover:scale-110 transition-transform duration-500" alt="Joia modelo" />
                                        <div className="absolute bottom-1.5 right-1.5 bg-primary text-white text-[8px] sm:text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-sm">
                                            Incluso
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <p className="font-display font-medium text-base sm:text-lg text-foreground leading-tight">{item.name}</p>
                                        <p className="text-muted-foreground text-[10px] sm:text-[11px] font-medium tracking-wide mt-1">{item.type}</p>
                                    </div>
                                    <a
                                        href={`https://wa.me/555189703450?text=${encodeURIComponent(`Olá! Gostaria de agendar minha perfuração e já quero reservar o modelo: ${item.name}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={trackWhatsAppConversion}
                                        className="mt-4 w-full bg-primary/5 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-[9px] sm:text-[10px] uppercase tracking-wider py-2 sm:py-2.5 rounded-md flex justify-center text-center items-center"
                                    >
                                        Agendar & Reservar
                                    </a>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex bg-background hover:bg-secondary border-border hover:text-primary transition-colors" />
                    <CarouselNext className="hidden sm:flex bg-background hover:bg-secondary border-border hover:text-primary transition-colors" />
                </Carousel>
            </div>
        </section>
    );
};

export default JewelryCarousel;
