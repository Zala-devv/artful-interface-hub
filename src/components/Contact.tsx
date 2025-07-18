import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, User, Send, MapPin, Clock, Coffee } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", project: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-warm-gradient bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready to bring your game vision to life? I'd love to hear about your project
            and discuss how we can work together to create something amazing.
          </p>
          
          {/* Commission CTA */}
          <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-6 border border-primary/20 mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-2">Open for Commissions</h3>
            <p className="text-muted-foreground mb-4">
              Custom pixel art, game UI design, and asset creation starting at competitive rates
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Available for new projects</span>
              </div>
              <div className="text-primary font-medium">
                💼 Quick turnaround • 🎨 Unlimited revisions • 💯 100% satisfaction
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-none shadow-warm">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <MessageSquare className="h-6 w-6 text-primary mr-2" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pl-10 border-border focus:ring-primary"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-10 border-border focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="project" className="text-sm font-medium text-foreground">
                    Project Type
                  </label>
                  <Input
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="border-border focus:ring-primary"
                    placeholder="e.g., Pixel art commission, Game UI design, etc."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-border focus:ring-primary resize-none"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground shadow-elegant hover:shadow-strong transition-all duration-300"
                  size="lg"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-none shadow-warm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Let's Connect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <span>hello@pixelcraft.studio</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <span>Remote Worldwide</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <span>Usually responds within 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-warm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  What to Include
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Coffee className="h-4 w-4 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-sm">Project scope and timeline</span>
                  </li>
                  <li className="flex items-start">
                    <Coffee className="h-4 w-4 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-sm">Reference images or style preferences</span>
                  </li>
                  <li className="flex items-start">
                    <Coffee className="h-4 w-4 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-sm">Budget range</span>
                  </li>
                  <li className="flex items-start">
                    <Coffee className="h-4 w-4 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-sm">Platform requirements (PC, mobile, etc.)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-muted rounded-2xl p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Quick Response Guarantee
              </h3>
              <p className="text-sm text-muted-foreground">
                I understand that timing is crucial in game development.
                That's why I commit to responding to all inquiries within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;