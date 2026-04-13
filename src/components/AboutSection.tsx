const features = [
  "Atendimento na hora — sem precisar agendar",
  "Local seguro dentro do shopping",
  "Brinco já incluso no valor",
  "Processo rápido e confortável",
  "Fácil acesso + estacionamento"
];

const AboutSection = () => {
  const storeInside = "/assets/store-inside.jpg";
  const storeFront = "/assets/store-front.jpg";

  return (
    <section id="sobre" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <p className="text-primary font-body text-xs tracking-[0.35em] uppercase font-light">Nossos diferenciais</p>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-foreground leading-tight">
              Por que escolher a <br /><span className="text-gradient-gold italic">Glamour Lindóia?</span>
            </h2>

            <ul className="space-y-4 pt-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex flex-col bg-card p-4 rounded-xl border border-border shadow-sm">
                  <span className="text-base text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <img src={storeFront} alt="Fachada Glamour Lindóia" className="rounded-2xl object-cover h-full w-full min-h-[250px] shadow-soft" />
            <img src={storeInside} alt="Interior Glamour Lindóia" className="rounded-2xl object-cover h-full w-full min-h-[250px] shadow-soft mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
