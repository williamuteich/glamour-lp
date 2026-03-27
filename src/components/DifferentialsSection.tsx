import { ShieldCheck, Gem, Clock, Smile, Sparkles } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Segurança garantida", desc: "Material esterilizado e técnica profissional em todos os procedimentos." },
  { icon: Gem, title: "Jóia inclusa", desc: "Brinco de qualidade já incluído no valor – sem custo adicional." },
  { icon: Clock, title: "Rápido e sem dor", desc: "Procedimento ágil feito na hora, sem precisar agendar com antecedência." },
  { icon: Smile, title: "Atendimento especial", desc: "Equipe atenciosa e acolhedora para deixar você à vontade." },
  { icon: Sparkles, title: "No shopping", desc: "Térreo do Shopping Lindóia, sala 160 – fácil acesso e estacionamento." },
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
