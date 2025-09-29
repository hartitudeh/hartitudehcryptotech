import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      project: "",
      budget: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to scale your Web3 project? Let's discuss how I can help you achieve your marketing goals
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-web3-purple">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're launching a new DeFi protocol, building a Web3 community, 
                or looking to scale your existing crypto project, I'm here to help you 
                navigate the complex world of blockchain marketing.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email",
                  content: "web3.marketing@example.com",
                  color: "text-web3-purple"
                },
                {
                  icon: <MessageCircle className="w-6 h-6" />,
                  title: "Telegram",
                  content: "@web3marketingpro",
                  color: "text-web3-cyan"
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Phone",
                  content: "+1 (555) 123-4567",
                  color: "text-web3-green"
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Location",
                  content: "San Francisco, CA",
                  color: "text-web3-pink"
                }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30 hover:border-web3-purple/50 transition-all duration-300"
                >
                  <div className={`${contact.color}`}>
                    {contact.icon}
                  </div>
                  <div>
                    <div className="font-semibold">{contact.title}</div>
                    <div className="text-muted-foreground">{contact.content}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-primary rounded-lg p-6 text-white"
            >
              <div className="flex items-center space-x-3 mb-3">
                <CheckCircle className="w-6 h-6" />
                <h4 className="text-lg font-semibold">Quick Response</h4>
              </div>
              <p className="opacity-90">
                I typically respond to all inquiries within 24 hours. 
                For urgent projects, feel free to reach out via Telegram for faster response.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-md border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-web3-purple transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-web3-purple transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="project" className="text-foreground">Project Name</Label>
                      <Input
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border/50 focus:border-web3-purple transition-colors"
                        placeholder="Your project name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-foreground">Budget Range</Label>
                      <Input
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border/50 focus:border-web3-purple transition-colors"
                        placeholder="e.g., $10k - $50k"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-web3-purple transition-colors resize-none"
                      placeholder="Tell me about your project, goals, and how I can help..."
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 py-6 text-lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;