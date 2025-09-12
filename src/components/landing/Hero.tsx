import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const handleDemoLogin = (role: 'entrepreneur' | 'admin') => {
    localStorage.setItem('demoUser', JSON.stringify({ role, email: `demo-${role}@example.com` }));
    window.location.href = `/dashboard/${role}`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Tanzania entrepreneurs working together" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-white mr-2" />
            <span className="text-white text-sm font-medium">Trusted by 10,000+ Tanzanian Entrepreneurs</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            Empower Your{" "}
            <span className="text-accent-light">Tanzanian</span>{" "}
            Business Dreams
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            AI-powered guidance, mentorship, and compliance tools designed specifically for 
            Tanzanian SMEs, youth entrepreneurs, and business innovators.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Button 
              variant="secondary" 
              size="xl"
              onClick={() => handleDemoLogin('entrepreneur')}
              className="group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-accent-light mr-2" />
                <span className="text-3xl font-bold text-white">10K+</span>
              </div>
              <p className="text-white/80">Active Users</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-accent-light mr-2" />
                <span className="text-3xl font-bold text-white">85%</span>
              </div>
              <p className="text-white/80">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-accent-light mr-2" />
                <span className="text-3xl font-bold text-white">100%</span>
              </div>
              <p className="text-white/80">BRELA Compliant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce-gentle"></div>
        </div>
      </div>
    </section>
  );
};