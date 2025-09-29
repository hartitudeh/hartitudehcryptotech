import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Founder, DefiMax Protocol",
    content: "Working with this Web3 marketing expert transformed our project completely. The community growth and engagement strategies delivered exceptional results beyond our expectations.",
    rating: 5,
    avatar: "AC"
  },
  {
    id: 2,
    name: "Sarah Rodriguez",
    role: "CEO, CryptoVault",
    content: "The Meta Whale campaign was a masterclass in Web3 marketing. The strategic approach to community building and partnerships drove incredible organic growth for our platform.",
    rating: 5,
    avatar: "SR"
  },
  {
    id: 3,
    name: "Michael Thompson",
    role: "CMO, BlockChain Innovations",
    content: "Exceptional understanding of the DeFi space and what drives community engagement. The marketing campaigns delivered measurable ROI and long-term value for our ecosystem.",
    rating: 5,
    avatar: "MT"
  },
  {
    id: 4,
    name: "Elena Vasquez",
    role: "Project Lead, MetaDAO",
    content: "The strategic partnerships and influencer network access provided through this collaboration was invaluable. Our token launch exceeded all targets thanks to the comprehensive marketing approach.",
    rating: 5,
    avatar: "EV"
  },
  {
    id: 5,
    name: "David Kim",
    role: "Founder, NFT Marketplace Pro",
    content: "Outstanding results in building authentic community engagement. The Web3 marketing strategies were perfectly tailored to our target audience and delivered sustainable growth.",
    rating: 5,
    avatar: "DK"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
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
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What leading Web3 projects say about working with me
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Card className="bg-card/50 backdrop-blur-md border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Quote className="w-12 h-12 text-web3-purple mx-auto mb-4 opacity-60" />
                <p className="text-xl md:text-2xl leading-relaxed text-foreground mb-6">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-web3-purple shadow-glow' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
            />
          ))}
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/30 backdrop-blur-sm border-border/30 hover:border-web3-purple/50 transition-all duration-300 h-full group">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    "{testimonial.content.slice(0, 120)}..."
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-medium text-sm group-hover:text-web3-purple transition-colors">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { number: "50+", label: "Happy Clients" },
            { number: "98%", label: "Success Rate" },
            { number: "5.0", label: "Average Rating" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-gradient-primary rounded-2xl text-white"
            >
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;