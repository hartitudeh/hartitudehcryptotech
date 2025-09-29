import { motion } from "framer-motion";
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  MessageCircle,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <MessageCircle className="w-5 h-5" />, href: "#", label: "Telegram" },
  ];

  const quickLinks = [
    { name: "About", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Web3 Marketing Strategy", href: "#" },
    { name: "Community Building", href: "#" },
    { name: "DeFi Protocol Marketing", href: "#" },
    { name: "Token Launch Campaigns", href: "#" },
    { name: "Influencer Partnerships", href: "#" },
    { name: "Content Creation", href: "#" },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Web3 Marketing Pro
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Transforming blockchain projects into market leaders through strategic 
              marketing, community building, and authentic growth strategies.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-web3-purple hover:border-web3-purple/50 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-web3-purple">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-web3-purple transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-web3-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-web3-cyan">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-web3-cyan transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-web3-cyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-web3-green">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-web3-green" />
                <span className="text-muted-foreground">web3.marketing@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-web3-green" />
                <span className="text-muted-foreground">@web3marketingpro</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6 p-4 bg-gradient-secondary rounded-lg">
              <h5 className="text-white font-semibold mb-2">Stay Updated</h5>
              <p className="text-white/80 text-sm mb-3">
                Get the latest Web3 marketing insights and tips
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/60 text-sm focus:outline-none focus:border-white/40 transition-colors"
                />
                <button className="px-4 py-2 bg-white text-web3-green rounded text-sm font-medium hover:bg-white/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-border/50 bg-card/30 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Users className="w-8 h-8 text-web3-purple" />
              <div>
                <div className="text-2xl font-bold text-web3-purple">100K+</div>
                <div className="text-muted-foreground text-sm">Community Members</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <TrendingUp className="w-8 h-8 text-web3-cyan" />
              <div>
                <div className="text-2xl font-bold text-web3-cyan">$2M+</div>
                <div className="text-muted-foreground text-sm">Market Cap Generated</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-8 h-8 text-web3-green" />
              <div>
                <div className="text-2xl font-bold text-web3-green">50+</div>
                <div className="text-muted-foreground text-sm">Projects Launched</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-background/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Web3 Marketing Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-web3-purple transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-web3-purple transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-web3-purple transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;