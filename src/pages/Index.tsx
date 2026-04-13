import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
// import JewelryCarousel from "@/components/JewelryCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstagramSection from "@/components/InstagramSection";
import FAQSection from "@/components/FAQSection";
import LocationSection from "@/components/LocationSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {/* <JewelryCarousel /> */}
        <ServicesSection />
        <DifferentialsSection />
        <AboutSection />
        <TestimonialsSection />
        <InstagramSection />
        <FAQSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
