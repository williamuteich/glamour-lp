import { Instagram, Star } from "lucide-react";

const Footer = () => {
  const logo = "/assets/logo.jpeg";
  return (
    <footer className="bg-secondary border-t border-border py-14">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          <img src={logo} alt="Glamour Lindóia" className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20" />
          <div>
            <p className="font-display text-2xl text-foreground font-light">Glamour Lindóia</p>
            <p className="text-muted-foreground text-xs mt-2 tracking-[0.2em] uppercase font-light">Perfuração de Orelha • Par de Brincos Inclusos • R$ 59,90</p>
          </div>

          <div className="flex items-center gap-0">
            <a
              href="https://www.instagram.com/glamour_lindoia/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors hover:text-primary text-muted-foreground"
              aria-label="Siga-nos no Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://share.google/hur5dhDMdpIrqezSP"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors hover:text-primary text-muted-foreground"
              aria-label="Avalie-nos no Google"
            >
              <Star className="h-5 w-5" />
            </a>
          </div>

          <div className="h-px w-20 bg-primary/20" />
          <p className="text-muted-foreground text-xs font-light">
            Shopping Lindóia – Térreo, Sala 160 – Porto Alegre, RS
          </p>
          <p className="text-muted-foreground text-xs font-light">
            Feito com carinho © {new Date().getFullYear()} Glamour Lindóia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
