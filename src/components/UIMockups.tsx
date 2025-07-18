import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Smartphone, Tablet, Eye } from "lucide-react";
import gameUI1 from "@/assets/game-ui-1.jpg";
import gameUI2 from "@/assets/game-ui-2.jpg";

const UIMockups = () => {
  const mockups = [
    {
      id: 1,
      title: "RPG Interface Design",
      image: gameUI1,
      platform: "Desktop",
      icon: Monitor,
      tags: ["RPG", "Inventory", "HUD"],
      description: "Complete RPG interface featuring health bars, inventory management, and skill trees designed for immersive gameplay.",
      features: ["Responsive Design", "Accessibility", "Animation Ready"],
    },
    {
      id: 2,
      title: "Mobile Game UI",
      image: gameUI2,
      platform: "Mobile",
      icon: Smartphone,
      tags: ["Mobile", "Casual", "Touch"],
      description: "Mobile-first UI design optimized for touch interactions with clean layouts and intuitive navigation.",
      features: ["Touch Optimized", "Portrait Layout", "Gesture Support"],
    },
    {
      id: 3,
      title: "Tablet Game Dashboard",
      image: gameUI1,
      platform: "Tablet",
      icon: Tablet,
      tags: ["Dashboard", "Management", "Strategy"],
      description: "Strategic game dashboard designed for tablet users with comprehensive information architecture.",
      features: ["Multi-touch", "Landscape Mode", "Data Visualization"],
    },
  ];

  return (
    <section id="ui-mockups" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-warm-gradient bg-clip-text text-transparent">
            Game UI/UX Design
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting intuitive and engaging user interfaces that enhance
            gameplay and provide seamless user experiences across all platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {mockups.map((mockup, index) => (
            <Card
              key={mockup.id}
              className="group overflow-hidden border-none shadow-warm hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={mockup.image}
                  alt={mockup.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="h-6 w-6 text-white cursor-pointer hover:text-primary" />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    <mockup.icon className="h-3 w-3 mr-1" />
                    {mockup.platform}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {mockup.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {mockup.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {mockup.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {mockup.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-muted rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Need Custom UI/UX Design?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I specialize in creating user-centered designs that not only look
            beautiful but also provide intuitive and engaging experiences for
            your game players.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Wireframing & Prototyping
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              User Testing & Research
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Interactive Prototypes
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIMockups;