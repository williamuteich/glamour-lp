import { Menu, X, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const logo = "/assets/logo.jpeg";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-border shadow-soft" : "bg-transparent py-2"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Glamour Lindóia" className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/20" />
          <div className="hidden sm:block">
            <span className="font-display text-xl font-semibold text-foreground">Glamour</span>
            <span className="block text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Lindóia</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {["Início", "Serviços", "Sobre", "Localização"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="text-xs font-medium tracking-[0.15em] uppercase transition-colors hover:text-primary text-muted-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.instagram.com/glamour_lindoia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <div className="h-4 w-px bg-border mx-1" />
          <span className="text-[10px] tracking-widest uppercase text-muted-foreground font-light px-2 py-1 rounded-full bg-secondary/50">Shopping Lindóia</span>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://www.instagram.com/glamour_lindoia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-foreground p-2">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden glass border-b border-border px-4 py-5 space-y-4">
          {["Início", "Serviços", "Sobre", "Localização"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
