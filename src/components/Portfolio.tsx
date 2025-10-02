import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Zap, Target, Code } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import profileImage from "@/assets/profile-placeholder.jpg";

const Portfolio = () => {
  const roles = [
    "Web3 Marketer",
    "Developer",
    "Content Creator",
    "Freelancer",
    "Community Builder",
    "Brand Strategist",
  ];

  const currentRole = useTypewriter(roles, 100, 50, 2000);

  const achievements = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Developement",
      description:
        "Developed and launched 100+ websites with modern frameworks and best practices",
      metrics: "70% growth in 3 years",
      color: "text-web3-purple",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Building",
      description:
        "Built and managed communities for 15+ Web3 projects with combined reach of 50K+",
      metrics: "95% engagement rate",
      color: "text-web3-cyan",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Campaign Excellence",
      description:
        "Executed viral marketing campaigns generating $2M+ in trading volume",
      metrics: "300% ROI average",
      color: "text-web3-green",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Partnerships",
      description:
        "Secured partnerships with top-tier exchanges and influencers",
      metrics: "50+ strategic deals",
      color: "text-web3-pink",
    },
  ];

  const skills = [
    "Web Developer",
    "Web3 Marketing",
    "Crypto Enthusiast",
    "Community Management",
    "DeFi Protocol Marketing",
    "Influencer Partnerships",
    "Social Media Growth",
    "Token Launch Campaigns",
    "Content Creation",
    "Brand Development",
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven track record in Web3 marketing with focus on community
            building, strategic partnerships, and driving measurable growth for
            blockchain projects
          </p>
        </motion.div>

        {/* About Section with Profile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-card/50 backdrop-blur-md border-border/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
                {/* Profile Picture */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="relative w-64 h-74 rounded-2xl overflow-hidden border-4 border-web3-purple/50 shadow-glow">
                    <img
                      src={profileImage}
                      alt="Adeyemi Pelumi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Engr. Pelumi Adeyemi</h3>
                    <div className="h-8 flex items-center justify-center">
                      <span className="text-lg text-web3-purple font-semibold">
                        {currentRole}
                        <span className="animate-pulse">|</span>
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Bio Content */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-web3-purple">
                    Web3 Marketing Specialist
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    With over 5 years in the cryptocurrency space, I specialize
                    in creating and executing comprehensive marketing strategies
                    for Web3 projects. My expertise lies in building authentic
                    communities, driving organic growth, and establishing
                    lasting partnerships in the decentralized ecosystem.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    As the lead marketer for Meta Whale, I've successfully
                    navigated the challenges of DeFi marketing, helping
                    transform innovative protocols into household names within
                    the crypto community.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-gradient-primary text-white border-0 hover:shadow-glow transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-md border-border/50 hover:border-web3-purple/50 transition-all duration-300 h-full group">
                <CardContent className="p-6">
                  <div
                    className={`${achievement.color} mb-4 group-hover:animate-glow-pulse transition-all duration-300`}
                    style={{
                      borderRadius: "50px",
                      width: "fit-content",
                      height: "auto",
                      padding: "10px",
                    }}
                  >
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-web3-purple transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="bg-secondary/50 rounded-lg p-3">
                    <div className="text-sm text-muted-foreground">
                      Key Metric
                    </div>
                    <div className="text-lg font-bold text-web3-purple">
                      {achievement.metrics}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Scale Your Web3 Project?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Let's discuss how I can help drive growth and build community for
              your blockchain project
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-web3-purple px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
