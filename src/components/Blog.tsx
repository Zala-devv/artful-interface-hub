import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Creating Seamless Pixel Art Tilesets",
      excerpt: "Learn my process for designing modular tilesets that work perfectly together in any game environment.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Tutorial",
      image: "/api/placeholder/400/250",
    },
    {
      id: 2,
      title: "UI Design for Indie Games: Best Practices",
      excerpt: "Essential tips for creating game interfaces that are both beautiful and functional for indie developers.",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "Game Design",
      image: "/api/placeholder/400/250",
    },
    {
      id: 3,
      title: "My Latest Project: Fantasy RPG Assets",
      excerpt: "Behind the scenes look at creating a complete asset pack for a fantasy RPG, from concept to completion.",
      date: "2024-01-02",
      readTime: "12 min read",
      category: "Project Update",
      image: "/api/placeholder/400/250",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-warm-gradient bg-clip-text text-transparent">
            Dev Blog & Tutorials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights from my creative process, tutorials, and project updates 
            to help fellow artists and game developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={post.id}
              className="group overflow-hidden border-none shadow-warm hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary-glow group"
                >
                  Read More 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-elegant hover:shadow-strong transition-all duration-300"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;