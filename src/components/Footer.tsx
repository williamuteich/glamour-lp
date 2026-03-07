import logo from "@/assets/logo.jpeg";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-glamour-dark py-14">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          <img src={logo} alt="Glamour Lindóia" className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20" />
          <div>
            <p className="font-display text-2xl text-primary-foreground font-light">Glamour Lindóia</p>
            <p className="text-primary-foreground/40 text-xs mt-2 tracking-[0.2em] uppercase font-light">Maquiagem • Joias • Acessórios</p>
          </div>
          <div className="h-px w-20 bg-primary/20" />
          <p className="text-primary-foreground/40 text-xs font-light">
            Shopping Lindóia – Térreo, Sala 160 – Porto Alegre, RS
          </p>
          <p className="text-primary-foreground/25 text-xs flex items-center gap-1 font-light">
            Feito com <Heart className="h-3 w-3 text-primary fill-primary" /> © {new Date().getFullYear()} Glamour Lindóia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
