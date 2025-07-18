import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Lead Developer",
      company: "Indie Pixel Studios",
      content: "Working with PixelCraft Studio was an absolute game-changer for our project. The attention to detail in the pixel art and UI design exceeded our expectations.",
      rating: 5,
      avatar: "SC"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Game Director",
      company: "RetroWave Games",
      content: "The UI/UX designs were not only beautiful but incredibly functional. Our player engagement increased by 40% after implementing the new interfaces.",
      rating: 5,
      avatar: "MR"
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Creative Director",
      company: "Moonlight Interactive",
      content: "Professional, creative, and always on time. The pixel art style perfectly captured the nostalgic feel we were aiming for in our adventure game.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  const clients = [
    "Indie Pixel Studios",
    "RetroWave Games",
    "Moonlight Interactive",
    "Digital Dreams",
    "Pixel Perfect Games",
    "Cosmic Studios"
  ];

  return (
    <section id="testimonials" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-warm-gradient bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear what indie developers and studios say about working with me
            on their creative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="border-none shadow-warm hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-primary fill-current"
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-warm-gradient rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Trusted by Creative Studios
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clients.map((client, index) => (
              <div
                key={client}
                className="px-6 py-3 bg-card rounded-lg shadow-sm hover:shadow-warm transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-sm font-medium text-muted-foreground">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;