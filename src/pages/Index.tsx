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
    <div className="relative">
      <Header />
      
      {/* Fixed Home Section */}
      <div className="fixed inset-0 z-0">
        <Hero />
      </div>
      
      {/* Scrollable Content */}
      <div className="relative z-10 bg-background" style={{ marginTop: '100vh' }}>
        <Gallery />
        <UIMockups />
        <Blog />
        <FeaturedProjects />
        <Contact />
      </div>
      
      <PixelMascot />
    </div>
  );
};

export default Index;
