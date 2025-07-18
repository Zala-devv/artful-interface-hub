import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Palette, Gamepad2, Mail, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-warm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-warm-gradient bg-clip-text text-transparent">
              PixelCraft Studio
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("ui-mockups")}
              className="text-foreground hover:text-primary transition-colors"
            >
              UI Mockups
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection("featured-projects")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary-glow text-primary-foreground"
            >
              Hire Me
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <Palette className="h-4 w-4" />
                <span>Gallery</span>
              </button>
              <button
                onClick={() => scrollToSection("ui-mockups")}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <Gamepad2 className="h-4 w-4" />
                <span>UI Mockups</span>
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Blog</span>
              </button>
              <button
                onClick={() => scrollToSection("featured-projects")}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <Gamepad2 className="h-4 w-4" />
                <span>Projects</span>
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary-glow text-primary-foreground w-fit"
              >
                <Mail className="h-4 w-4 mr-2" />
                Hire Me
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;