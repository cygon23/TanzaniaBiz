import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, ArrowLeft, Search, MessageCircle } from "lucide-react";
import illustration404 from "@/assets/404-illustration.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Illustration */}
          <div className="order-2 lg:order-1">
            <img 
              src={illustration404} 
              alt="404 - Page not found illustration" 
              className="w-full h-auto rounded-2xl shadow-large"
            />
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-8xl lg:text-9xl font-bold text-white/20 mb-4">404</h1>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                Oops! Page Not Found
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Looks like you've ventured into uncharted business territory! 
                Don't worry, every great entrepreneur faces unexpected detours on their journey.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  variant="secondary" 
                  size="lg"
                  className="group"
                >
                  <Link to="/">
                    <Home className="w-5 h-5 mr-2" />
                    Back to Home
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  <Link to="/dashboard/entrepreneur">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Dashboard
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Popular Destinations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link 
                  to="/dashboard/entrepreneur" 
                  className="text-white/80 hover:text-white transition-colors text-sm flex items-center space-x-2"
                >
                  <span>→</span>
                  <span>Entrepreneur Dashboard</span>
                </Link>
                <Link 
                  to="/dashboard/entrepreneur/ai" 
                  className="text-white/80 hover:text-white transition-colors text-sm flex items-center space-x-2"
                >
                  <span>→</span>
                  <span>AI Assistant</span>
                </Link>
                <Link 
                  to="/dashboard/entrepreneur/business-plan" 
                  className="text-white/80 hover:text-white transition-colors text-sm flex items-center space-x-2"
                >
                  <span>→</span>
                  <span>Business Plan</span>
                </Link>
                <Link 
                  to="/dashboard/entrepreneur/funding" 
                  className="text-white/80 hover:text-white transition-colors text-sm flex items-center space-x-2"
                >
                  <span>→</span>
                  <span>Funding Opportunities</span>
                </Link>
              </div>
            </Card>

            {/* Support */}
            <div className="mt-8 text-center">
              <p className="text-white/70 text-sm mb-4">
                Still lost? Our support team is here to help!
              </p>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
