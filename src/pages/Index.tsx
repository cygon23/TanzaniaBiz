import Header from "@/components/layout/Header";
import Hero from "@/components/landing/Hero";
import Story from "@/components/landing/Story";
import Features from "@/components/landing/Features";
import Partnership from "@/components/landing/Partnership";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/FooterV";

const Index = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <Hero />
      <Story />
      <Features />
      <Partnership />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
