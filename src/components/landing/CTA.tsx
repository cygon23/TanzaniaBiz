import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Free 30-day trial",
  "No credit card required",
  "AI assistant in Swahili & English",
  "BRELA compliance guarantee",
  "Expert mentor matching",
  "24/7 support"
];

export const CTA = () => {
  const handleDemoLogin = () => {
    localStorage.setItem('demoUser', JSON.stringify({ 
      role: 'entrepreneur', 
      email: 'demo-entrepreneur@example.com' 
    }));
    window.location.href = '/dashboard/entrepreneur';
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] repeat"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your{" "}
            <span className="text-accent-light">Tanzanian Success Story?</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who are already building successful businesses 
            with our AI-powered platform designed for Tanzania.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-white/90 text-sm">
                <CheckCircle className="w-4 h-4 text-accent-light mr-2 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              variant="secondary" 
              size="xl"
              onClick={handleDemoLogin}
              className="group shadow-large hover:shadow-glow"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-white/70 text-sm mb-4">
              Trusted by 10,000+ Tanzanian entrepreneurs
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-white text-xs font-medium px-3 py-1 border border-white/20 rounded-full">
                BRELA Partner
              </div>
              <div className="text-white text-xs font-medium px-3 py-1 border border-white/20 rounded-full">
                TRA Compliant
              </div>
              <div className="text-white text-xs font-medium px-3 py-1 border border-white/20 rounded-full">
                ISO Certified
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};