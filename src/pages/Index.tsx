import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import UIMockups from "@/components/UIMockups";
import Blog from "@/components/Blog";
import FeaturedProjects from "@/components/FeaturedProjects";
import Contact from "@/components/Contact";
import PixelMascot from "@/components/PixelMascot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Gallery />
      <UIMockups />
      <Blog />
      <FeaturedProjects />
      <Contact />
      <PixelMascot />
    </div>
  );
};

export default Index;
