import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, Filter } from "lucide-react";
import pixelArt1 from "@/assets/pixel-art-1.jpg";
import pixelArt2 from "@/assets/pixel-art-2.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const artworks = [
    {
      id: 1,
      title: "Adventure Character Sprites",
      image: pixelArt1,
      tags: ["Character Design", "Sprite Animation", "8-bit"],
      category: "Pixel Art",
      likes: 324,
      description: "Complete character sprite sheet for an indie adventure game with idle and walking animations.",
    },
    {
      id: 2,
      title: "Village Environment",
      image: pixelArt2,
      tags: ["Environment", "Pixel Art", "16-bit"],
      category: "Pixel Art",
      likes: 256,
      description: "Cozy village scene with warm lighting and detailed pixel art buildings.",
    },
    {
      id: 3,
      title: "Combat UI Elements",
      image: pixelArt1,
      tags: ["UI Elements", "Game Assets", "Icons"],
      category: "UI Design",
      likes: 198,
      description: "Custom UI elements designed for turn-based combat systems.",
    },
    {
      id: 4,
      title: "Retro Platform Tiles",
      image: pixelArt2,
      tags: ["Tileset", "Platform", "Retro"],
      category: "Tilesets",
      likes: 145,
      description: "Modular tileset for retro-style platformer games with seamless connectivity.",
    },
    {
      id: 5,
      title: "Game Menu Interface",
      image: pixelArt1,
      tags: ["UI Design", "Menu", "Interface"],
      category: "UI Design",
      likes: 187,
      description: "Clean and intuitive game menu interface with animated elements.",
    },
    {
      id: 6,
      title: "Skill Icons Pack",
      image: pixelArt2,
      tags: ["Icons", "Skills", "RPG"],
      category: "Icons",
      likes: 213,
      description: "Complete set of skill and ability icons for RPG games.",
    },
  ];

  const filters = ["All", "Pixel Art", "UI Design", "Icons", "Tilesets"];
  
  const filteredArtworks = activeFilter === "All" 
    ? artworks 
    : artworks.filter(artwork => artwork.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-warm-gradient bg-clip-text text-transparent">
            Creative Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore my collection of pixel art creations, from character sprites
            to detailed environments, all crafted with passion and precision.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={`transition-all duration-300 ${
                  activeFilter === filter 
                    ? "bg-primary text-primary-foreground shadow-elegant" 
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork, index) => (
            <Card
              key={artwork.id}
              className="group overflow-hidden border-none shadow-warm hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="h-6 w-6 text-white cursor-pointer hover:text-primary" />
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-2 text-white">
                    <Heart className="h-5 w-5" />
                    <span className="font-medium">{artwork.likes}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {artwork.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {artwork.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {artwork.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              View on ArtStation
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Check Behance
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;