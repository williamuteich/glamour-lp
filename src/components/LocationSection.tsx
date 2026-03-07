import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <p className="text-primary font-body text-xs tracking-[0.35em] uppercase font-light">Como chegar</p>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-foreground">
            Visite a <span className="text-gradient-gold italic">Glamour Lindóia</span>
          </h2>
          <p className="text-muted-foreground font-light">Shopping Lindóia – Térreo, Sala 160 – Porto Alegre, RS</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-soft h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.943472423332!2d-51.15449422366908!3d-30.00977947494107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519776987fdd719%3A0xbe780735ac46e089!2sGlamour%20Lind%C3%B3ia!5e0!3m2!1spt-BR!2sbr!4v1772905966350!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Shopping Lindóia"
            />
          </div>

          <div className="space-y-7 flex flex-col justify-center">
            {[
              { icon: MapPin, title: "Endereço", text: "Shopping Lindóia – Térreo, Sala 160\nPorto Alegre – RS" },
              { icon: Clock, title: "Horário", text: "Seg a Sáb: 10h às 22h\nDom: 14h às 20h" },
              { icon: Phone, title: "Contato", text: "Fale conosco pelo WhatsApp" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-rose-soft rounded-full flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-medium text-foreground text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm font-light whitespace-pre-line">{item.text}</p>
                </div>
              </div>
            ))}

            <a
              href="https://www.google.com/maps/place/Shopping+Lind%C3%B3ia"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-3.5 rounded-full text-sm tracking-wide hover:shadow-gold transition-all w-fit"
            >
              Ver no Google Maps
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
