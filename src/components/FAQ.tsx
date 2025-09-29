import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What makes your Web3 marketing approach different?",
    answer: "My approach combines deep understanding of blockchain technology with proven community-building strategies. I focus on authentic engagement rather than superficial metrics, creating sustainable growth through strategic partnerships, content marketing, and community-driven initiatives. Having worked directly with Meta Whale and other successful DeFi projects, I understand the unique challenges and opportunities in the Web3 space."
  },
  {
    question: "How do you measure success in Web3 marketing campaigns?",
    answer: "Success in Web3 marketing goes beyond traditional metrics. I track community growth, engagement quality, token holder retention, trading volume increases, and partnership quality. Key performance indicators include community sentiment analysis, organic reach, influencer partnership ROI, and long-term project sustainability. For Meta Whale, we achieved 400% growth in 6 months with 95% community engagement rates."
  },
  {
    question: "What services do you offer for Web3 projects?",
    answer: "I offer comprehensive Web3 marketing services including: community management and growth strategies, influencer partnerships and collaborations, content creation and brand development, token launch campaigns, exchange listing support, strategic partnership facilitation, social media management, and crisis communication handling. Each service is tailored to the specific needs and goals of your project."
  },
  {
    question: "How do you stay updated with the rapidly changing crypto market?",
    answer: "I maintain active involvement in the Web3 ecosystem through continuous learning, attending major blockchain conferences, participating in DeFi communities, following industry leaders and developers, analyzing successful project launches, and maintaining relationships with key players in the space. This hands-on approach ensures my strategies remain current and effective in the evolving crypto landscape."
  },
  {
    question: "What is your experience with DeFi protocol marketing?",
    answer: "I have extensive experience marketing DeFi protocols, having led campaigns for Meta Whale and several other successful projects. This includes understanding complex tokenomics, explaining yield farming strategies to users, building trust in smart contracts, managing liquidity provider communities, and navigating regulatory considerations. My DeFi marketing expertise has generated over $2M in trading volume across various protocols."
  },
  {
    question: "How do you handle community management during market volatility?",
    answer: "Market volatility requires strategic communication and community reassurance. I implement transparent communication protocols, provide regular project updates, manage FUD (Fear, Uncertainty, Doubt) through factual responses, maintain active presence during critical periods, coordinate with development teams for technical updates, and focus on long-term value propositions rather than short-term price movements."
  },
  {
    question: "What is your typical project engagement timeline?",
    answer: "Project timelines vary based on scope and objectives. Initial strategy development takes 1-2 weeks, community building shows results in 4-8 weeks, full campaign implementation runs 3-6 months, and long-term partnerships can extend 6-12 months or more. I provide detailed milestone tracking and regular progress reports throughout the engagement to ensure transparency and measurable results."
  },
  {
    question: "Do you work with projects in their early stages?",
    answer: "Yes, I specialize in helping early-stage Web3 projects establish strong foundations. This includes developing go-to-market strategies, building initial communities, creating brand identity, preparing for token launches, establishing key partnerships, and developing sustainable growth frameworks. Early-stage projects benefit significantly from proper marketing foundation before scaling efforts."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Web3 marketing and working with me
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="bg-background/50 rounded-lg px-6 border border-border/30 hover:border-web3-purple/50 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left hover:text-web3-purple transition-colors py-6">
                      <span className="text-lg font-semibold pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Additional Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-accent rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-lg opacity-90 mb-6">
              I'm here to help you understand how Web3 marketing can transform your project
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-web3-purple px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;