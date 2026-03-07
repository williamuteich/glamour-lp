import earrings from "@/assets/earrings-gold.jpeg";
import heartSet from "@/assets/heart-set.jpeg";
import silverRings from "@/assets/silver-rings.jpg";
import handbags from "@/assets/handbags.jpg";
import makeup from "@/assets/makeup-display.jpg";
import accessories from "@/assets/accessories.jpg";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "555189703450"; 

const categories = [
  {
    image: earrings,
    title: "Semijoias Folhadas a Ouro",
    desc: "Brincos, colares e pulseiras com acabamento premium.",
    message: "Olá! Tenho interesse nas semijoias folhadas a ouro. Poderia me enviar o catálogo?",
  },
  {
    image: heartSet,
    title: "Peças em Prata",
    desc: "Conjuntos delicados e sofisticados em prata 925.",
    message: "Olá! Gostaria de conhecer as peças em prata 925. Vocês têm opções disponíveis?",
  },
  {
    image: silverRings,
    title: "Anéis de Prata Masculinos",
    desc: "Design moderno para o público masculino.",
    message: "Olá! Tenho interesse nos anéis de prata masculinos. Quais modelos vocês têm?",
  },
  {
    image: handbags,
    title: "Bolsas Femininas",
    desc: "Bolsas elegantes para todas as ocasiões.",
    message: "Olá! Gostaria de ver as opções de bolsas femininas. Poderia me ajudar?",
  },
  {
    image: makeup,
    title: "Maquiagens",
    desc: "Produtos de beleza das melhores marcas.",
    message: "Olá! Tenho interesse nos produtos de maquiagem. Vocês trabalham com quais marcas?",
  },
  {
    image: accessories,
    title: "Acessórios Femininos",
    desc: "Tiaras, presilhas, scrunchies e muito mais.",
    message: "Olá! Gostaria de conhecer os acessórios femininos. Vocês têm tiaras e presilhas?",
  },
];

const ProductsSection = () => {
  const handleCategoryClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <section id="produtos" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <p className="text-primary font-body text-xs tracking-[0.35em] uppercase font-light">Nossas Categorias</p>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-foreground">
            O que você <span className="text-gradient-gold italic">procura?</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto font-light">
            Clique em uma categoria para conversar conosco no WhatsApp sobre os produtos disponíveis.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {categories.map((category) => (
            <button
              key={category.title}
              onClick={() => handleCategoryClick(category.message)}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-gold transition-all duration-500 hover:-translate-y-2 text-left cursor-pointer border-0"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-glamour-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Falar no WhatsApp</span>
                  <ArrowRight className="h-4 w-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2 font-light">{category.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
