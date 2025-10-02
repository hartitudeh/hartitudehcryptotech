import { Coins, TrendingUp, Shield, Zap, Globe, Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/meta-whale-hero.jpg";
import cryptoElements from "@/assets/crypto-elements.jpg";
import user1 from "@/assets/user1.jpg";
import user2 from "@/assets/user2.jpg";
import user3 from "@/assets/user3.jpg";
import user4 from "@/assets/user4.jpg";
import user5 from "@/assets/user5.jpg";

const MetaWhaleFlyer = () => {
  const earningsData = [
    {
      name: "Alex Chen",
      image: user1,
      earnings: "12,450 CES",
      testimonial: "META WHALE transformed my passive income strategy. The DeFi applications are incredibly intuitive and profitable.",
    },
    {
      name: "Sarah Martinez",
      image: user2,
      earnings: "18,920 CES",
      testimonial: "As a content creator, I finally have full control over my digital assets. The NFT marketplace is game-changing!",
    },
    {
      name: "James Kumar",
      image: user3,
      earnings: "25,680 CES",
      testimonial: "Trading on the Binance Blockchain through META WHALE has been seamless. Great returns and solid infrastructure.",
    },
    {
      name: "Emma Wilson",
      image: user4,
      earnings: "31,200 CES",
      testimonial: "The educational resources helped me understand Web3. Now I'm earning consistently through multiple streams.",
    },
    {
      name: "Michael Rodriguez",
      image: user5,
      earnings: "22,340 CES",
      testimonial: "META WHALE's ecosystem is comprehensive. From NFTs to DeFi, everything I need in one powerful platform.",
    },
  ];

  const benefits = [
    {
      icon: Coins,
      title: "Real Income Opportunities",
      description: "Earn through our CES token and decentralized ecosystem",
    },
    {
      icon: TrendingUp,
      title: "Content Monetization",
      description: "Turn your creativity into revenue streams",
    },
    {
      icon: Shield,
      title: "Full NFT Ownership",
      description: "Complete control over your digital assets",
    },
    {
      icon: Zap,
      title: "DeFi Applications",
      description: "Access cutting-edge financial tools",
    },
    {
      icon: Globe,
      title: "Binance Blockchain",
      description: "Built on trusted, scalable infrastructure",
    },
    {
      icon: Wallet,
      title: "Educational Resources",
      description: "Learn and grow with expert guidance",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="relative mb-8 overflow-hidden rounded-3xl">
          <img 
            src={heroImage} 
            alt="META WHALE Digital Ecosystem" 
            className="h-[400px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <Badge className="mb-4 bg-primary/20  backdrop-blur-sm border-primary/30">
              Powered by Polygon Blockchain
            </Badge>
            <h1 className="mb-4 text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                META WHALE
              </span>
            </h1>
            <p className="max-w-2xl text-xl text-muted-foreground">
              Your Gateway to Decentralized Income & Digital Ownership
            </p>
          </div>
        </div>

        {/* Introduction Card */}
        <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm shadow-[0_0_40px_hsl(270_95%_65%/0.3)]">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Welcome to the Future of Web3
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
            META WHALE is a revolutionary decentralized ecosystem that combines NFT marketplace, 
            DeFi applications, and content monetization on the Binance Blockchain. Our platform 
            empowers creators, traders, and investors to take full control of their digital assets 
            while generating real income.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
              CES Token
            </Badge>
            <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
              NFT Marketplace
            </Badge>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              DeFi Platform
            </Badge>
          </div>
        </Card>

        {/* Earnings Carousel */}
        <div className="mb-8 mt-16">
          <h2 className="mb-6  text-center text-3xl font-bold text-foreground">
            What People Says About META WHALE
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto w-full max-w-5xl"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {earningsData.map((user, index) => (
                <CarouselItem key={index} className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3">
                  <div className="group relative h-full">
                    <Card className="overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm transition-all hover:shadow-[0_0_40px_hsl(270_95%_65%/0.5)]">
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={user.image}
                          alt={user.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <p className="text-sm italic text-muted-foreground">
                            "{user.testimonial}"
                          </p>
                        </div>
                      </div>
                      
                      {/* Always Visible Info */}
                      <div className="p-4">
                        <h3 className="font-bold text-foreground">{user.name}</h3>
                        <div className="mt-2 flex items-center gap-2">
                          <Badge className="bg-primary/20 text-primary border-primary/30">
                            {user.earnings}
                          </Badge>
                          <span className="text-xs text-muted-foreground">earned</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-card/80 backdrop-blur-sm" />
            <CarouselNext className="right-0 bg-card/80 backdrop-blur-sm" />
          </Carousel>
        </div>

        {/* Benefits Grid */}
        <div className="mb-8 mt-16">
          <h2 className="mb-6 text-center text-3xl font-bold text-foreground">
            Why Choose META WHALE?
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="group border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-[0_0_30px_hsl(270_95%_65%/0.4)]"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 transition-all group-hover:bg-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Features Section */}
        <Card className="mb-8 overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Complete Digital Ecosystem
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Token Exchange:</strong> Trade CES tokens with ease
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">NFT Ownership:</strong> Full control over your digital assets
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">3D Arts & Gaming:</strong> Create and trade unique assets
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Community Control:</strong> You own what you create
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-auto">
              <img 
                src={cryptoElements} 
                alt="Crypto Elements" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent md:from-card" />
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="rounded-3xl bg-gradient-to-r from-primary via-accent to-secondary p-[2px]">
          <Card className="bg-card/95 p-8 text-center backdrop-blur-sm">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Ready to Join the Revolution?
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Start your journey with META WHALE today and unlock the full potential of Web3
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button className="rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 font-bold text-primary-foreground shadow-[0_0_30px_hsl(270_95%_65%/0.5)] transition-all hover:shadow-[0_0_50px_hsl(270_95%_65%/0.7)] hover:scale-105">
                Get Started Now
              </button>
              <button className="rounded-xl border-2 border-primary/50 bg-background/50 px-8 py-4 font-bold text-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10">
                Learn More
              </button>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>META WHALE • Decentralized Ecosystem on Binance Blockchain</p>
          <p className="mt-2">Empowering Creators • Enabling Ownership • Generating Income</p>
        </div>
      </div>
    </div>
  );
};

export default MetaWhaleFlyer;
