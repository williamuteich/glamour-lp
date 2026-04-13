const items = [
  { title: "Procedimento rápido (menos de 1 minuto)" },
  { title: "Escala de cuidados e técnica adequada" },
  { title: "Atendimento cuidadoso para crianças" },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <p className="text-primary font-body text-xs tracking-[0.35em] uppercase font-light">Segurança e Conforto</p>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-foreground">
            Dói? É <span className="text-gradient-gold italic">seguro?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center p-8 bg-card rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-all duration-300">
              <h3 className="font-display text-lg font-medium text-foreground">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
