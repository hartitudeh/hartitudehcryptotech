import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Gift, TrendingUp, Clock } from "lucide-react";

const airdrops = [
  {
    name: "Lio",
    description: "Layer 2 scaling solution with mainnet live. Complete testnet transactions to qualify.",
    status: "Active",
    category: "Layer 2",
    referCode: "PELUMIADEYEMI111E7O9CXVl78dY", // Example refer code
    // rewards: "Up to $50 in LIO tokens", --- IGNORE ---
    requirements: [
      "Download Lio app from Google Play",
      "Input the refer code and earn 1 lio",
      "Mine 4 more lio tokens everyday"
    ],
    link: "https://play.google.com/store/apps/details?id=com.io.liocoinbase",
    logo: "🦁"
  },
  {
    name: "zkSync Era",
    description: "zkEVM rollup with active ecosystem. Interact with dApps to potentially qualify.",
    status: "Active",
    category: "Layer 2",
    referCode: "TBA",
    requirements: [
      "Bridge to zkSync Era",
      "Use zkSync native dApps",
      "Complete multiple transactions"
    ],
    link: "https://zksync.io/",
    logo: "⚡"
  },
  {
    name: "LayerZero",
    description: "Omnichain interoperability protocol. Use LayerZero-powered bridges and apps.",
    status: "Active",
    category: "Interoperability",
    referCode: "TBA",
    requirements: [
      "Use Stargate Finance",
      "Try multiple LayerZero apps",
      "Bridge across chains"
    ],
    link: "https://layerzero.network/",
    logo: "🌐"
  },
  {
    name: "MetaMask Snaps",
    description: "Explore MetaMask Snaps ecosystem for potential rewards.",
    status: "Speculative",
    category: "Wallet",
    referCode: "TBA",
    requirements: [
      "Install MetaMask Snaps",
      "Use Snaps features",
      "Provide feedback"
    ],
    link: "https://metamask.io/snaps/",
    logo: "🦊"
  },
  {
    name: "Scroll",
    description: "zkEVM Layer 2 with growing ecosystem. Early adopters may benefit.",
    status: "Active",
    category: "Layer 2",
    referCode: "TBA",
    requirements: [
      "Bridge to Scroll",
      "Interact with Scroll dApps",
      "Maintain activity"
    ],
    link: "https://scroll.io/",
    logo: "📜"
  },
  {
    name: "Base",
    description: "Coinbase's Layer 2 built on OP Stack. Active ecosystem development.",
    status: "Active",
    category: "Layer 2",
    referCode: "TBA",
    requirements: [
      "Bridge to Base",
      "Use Base dApps",
      "Complete transactions"
    ],
    link: "https://base.org/",
    logo: "🔵"
  }
];

const Airdrops = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Latest <span className="bg-gradient-primary bg-clip-text text-transparent">Airdrops</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't miss out on potential rewards. Here are the latest airdrop opportunities in the crypto space.
          </p>
          <Badge variant="outline" className="mt-4">
            <Clock className="w-3 h-3 mr-1" />
            Updated Regularly
          </Badge>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {airdrops.map((airdrop, index) => (
            <motion.div
              key={airdrop.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-4xl">{airdrop.logo}</div>
                    <Badge 
                      variant={airdrop.status === "Active" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {airdrop.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{airdrop.name}</CardTitle>
                  <CardDescription>{airdrop.description}</CardDescription>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      {airdrop.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {airdrop.referCode}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {airdrop.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      className="w-full mt-4"
                      variant="default"
                      onClick={() => window.open(airdrop.link, "_blank")}
                    >
                      Join Airdrop
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 p-6 rounded-lg bg-primary/10 border border-primary/20"
        >
          <h3 className="text-xl font-bold mb-2">⚠️ Important Disclaimer</h3>
          <p className="text-sm text-muted-foreground">
            Airdrop participation carries risks. Always DYOR (Do Your Own Research) before connecting wallets or 
            transferring funds. Never share your private keys or seed phrases. This information is for educational 
            purposes only and not financial advice.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Airdrops;
