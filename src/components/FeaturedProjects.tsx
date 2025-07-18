import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";
import gameUi1 from "@/assets/game-ui-1.jpg";
import gameUi2 from "@/assets/game-ui-2.jpg";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Mystic Woods RPG",
      client: "Indie Dreams Studio",
      description: "Complete UI/UX design and pixel art assets for an enchanting fantasy RPG adventure.",
      image: gameUi1,
      tags: ["UI Design", "Pixel Art", "RPG"],
      year: "2024",
      rating: 5,
    },
    {
      id: 2,
      title: "Retro Platformer Pack",
      client: "PixelCraft Games",
      description: "Comprehensive asset package including characters, environments, and UI elements.",
      image: gameUi2,
      tags: ["Character Design", "Environment", "Assets"],
      year: "2023",
      rating: 5,
    },
    {
      id: 3,
      title: "Space Explorer Interface",
      client: "Cosmic Studios",
      description: "Futuristic game interface design with animated elements and responsive layouts.",
      image: gameUi1,
      tags: ["UI Design", "Animation", "Sci-Fi"],
      year: "2024",
      rating: 4,
    },
  ];

  return (
    <section id="featured-projects" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-warm-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Successful collaborations with indie game studios and developers 
            around the world, bringing creative visions to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-none shadow-warm hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="h-6 w-6 text-white cursor-pointer hover:text-primary" />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {project.year}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < project.rating ? "fill-current" : "opacity-30"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">
                    {project.rating}/5
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-primary font-medium mb-2">
                  Client: {project.client}
                </p>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to bring your game vision to life?
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-elegant hover:shadow-strong transition-all duration-300"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;