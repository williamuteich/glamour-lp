import { MessageSquare, Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-border overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rose-light/20 to-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/10 to-rose-light/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative text-center space-y-6">
              <div className="flex items-center justify-center gap-1 py-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground">
                Avalie a <span className="text-gradient-gold italic">Glamour Lindóia</span>
              </h2>

              <p className="text-muted-foreground font-light max-w-md mx-auto">
                Sua opinião é muito importante para nós. Compartilhe sua experiência e ajude outras pessoas a descobrirem nossa loja.
              </p>

              <a
                href="https://www.google.com/search?kgmid=/g/11q1lk5yny&hl=pt-BR&q=Glamour+Lind%C3%B3ia&shndl=30&shem=ptotple,shrtsdl&source=sh/x/loc/osrp/m5/2&kgs=3fb6a4e0ab44cd9d&utm_source=ptotple,shrtsdl,sh/x/loc/osrp/m5/2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:shadow-gold transition-all"
              >
                <MessageSquare className="h-5 w-5" />
                Avaliar no Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
