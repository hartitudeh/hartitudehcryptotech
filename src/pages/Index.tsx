import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CryptoGrid from "@/components/CryptoGrid";
import Airdrops from "@/components/Airdrops";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="crypto">
        <CryptoGrid />
      </div>
      <div id="airdrops">
        <Airdrops />
      </div>
      <Portfolio />
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
