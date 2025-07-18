import { Button } from "@/components/ui/button";
import { ArrowDown, Palette, Gamepad2 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <Palette className="h-12 w-12 text-primary animate-pulse" />
              <Gamepad2 className="h-12 w-12 text-secondary animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-warm-gradient bg-clip-text text-transparent">
              Pixel Perfect
            </h1>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
              Game Art & UI Design
            </h2>
          </div>

          <div className="mb-12 animate-fade-in [animation-delay:0.2s]">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Creative designer specializing in pixel art and game UI/UX.
              Bringing indie games to life with beautiful, functional designs
              that captivate players and enhance gameplay experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in [animation-delay:0.4s]">
            <Button
              onClick={scrollToGallery}
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-elegant hover:shadow-strong transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Hire Me for Your Project
            </Button>
          </div>

          {/* Enhanced CTA Section */}
          <div className="mt-8 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 animate-fade-in [animation-delay:0.6s]">
            <p className="text-sm text-muted-foreground mb-4">
              🎮 Available for freelance projects • 🎨 Custom commissions welcome
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 text-sm">
              <span className="text-primary font-medium">✨ Pixel Art & Sprites</span>
              <span className="text-primary font-medium">🎯 Game UI/UX Design</span>
              <span className="text-primary font-medium">🏗️ Asset Packages</span>
            </div>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown
              className="h-8 w-8 text-primary mx-auto cursor-pointer"
              onClick={scrollToGallery}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;