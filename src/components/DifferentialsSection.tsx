import { Package, BadgeDollarSign, Heart, MapPin, Gem } from "lucide-react";

const items = [
  { icon: Package, title: "Grande variedade", desc: "Milhares de opções para todos os gostos." },
  { icon: BadgeDollarSign, title: "Preços acessíveis", desc: "Qualidade premium sem pesar no bolso." },
  { icon: Heart, title: "Atendimento especial", desc: "Equipe dedicada a te ajudar na escolha." },
  { icon: MapPin, title: "Fácil acesso", desc: "Térreo do Shopping Lindóia, sala 160." },
  { icon: Gem, title: "Alta qualidade", desc: "Peças modernas com acabamento impecável." },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <p className="text-primary font-body text-xs tracking-[0.35em] uppercase font-light">Por que nos escolher</p>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-foreground">
            Nossos <span className="text-gradient-gold italic">Diferenciais</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {items.map((item) => (
            <div key={item.title} className="text-center space-y-4 p-7 bg-card rounded-2xl shadow-soft hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-rose-soft rounded-full flex items-center justify-center mx-auto">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-base font-medium text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-xs font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
