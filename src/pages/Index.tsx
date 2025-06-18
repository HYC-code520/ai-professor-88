
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProfessorSection from "@/components/ProfessorSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProfessorSection />
      <FeaturesSection />
      <AboutSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
