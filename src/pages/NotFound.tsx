import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Home,
  ArrowLeft,
  Search,
  MessageCircle,
  Rocket,
  Compass,
  Map,
  Lightbulb,
  Target,
  Users,
  Building2,
  Sparkles,
  Zap,
} from "lucide-react";

const NotFound = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  const motivationalMessages = [
    "Every great entrepreneur takes unexpected paths!",
    "This detour might lead to your next big idea!",
    "Innovation happens when you explore the unknown!",
    "Consider this a business pivot opportunity!",
    "Success stories are built on navigating challenges!",
  ];

  useEffect(() => {
    setIsVisible(true);

    // Cycle through motivational messages
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % motivationalMessages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center p-4 overflow-hidden relative'>
      {/* Dynamic cursor follower */}
      <div
        className='fixed w-6 h-6 bg-blue-400/30 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out mix-blend-screen'
        style={{
          left: mousePos.x - 12,
          top: mousePos.y - 12,
        }}
      />

      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Main gradient orbs */}
        <div className='absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse' />
        <div
          className='absolute bottom-20 right-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "1s" }}
        />
        <div
          className='absolute top-1/2 left-1/3 w-64 h-64 bg-pink-400/10 rounded-full blur-2xl animate-pulse'
          style={{ animationDelay: "2s" }}
        />

        {/* Floating particles */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-white/20 rounded-full animate-ping'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <div className='absolute inset-0 opacity-5'>
          <div
            className='w-full h-full'
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className='container mx-auto max-w-6xl relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Animated Illustration */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}>
            <div className='relative'>
              {/* Main illustration container */}
              <div className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20'>
                {/* Animated 404 with floating elements */}
                <div className='text-center mb-8'>
                  <div className='relative inline-block'>
                    <h1 className='text-8xl lg:text-9xl font-black text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text animate-pulse'>
                      404
                    </h1>

                    {/* Floating icons around 404 */}
                    <div className='absolute -top-8 -left-8'>
                      <Rocket
                        className='w-8 h-8 text-blue-400 animate-bounce'
                        style={{ animationDelay: "0.5s" }}
                      />
                    </div>
                    <div className='absolute -top-4 -right-12'>
                      <Sparkles
                        className='w-6 h-6 text-purple-400 animate-ping'
                        style={{ animationDelay: "1s" }}
                      />
                    </div>
                    <div className='absolute -bottom-6 -left-12'>
                      <Lightbulb
                        className='w-7 h-7 text-yellow-400 animate-pulse'
                        style={{ animationDelay: "1.5s" }}
                      />
                    </div>
                    <div className='absolute -bottom-8 -right-8'>
                      <Target
                        className='w-8 h-8 text-green-400 animate-spin'
                        style={{
                          animationDuration: "4s",
                          animationDelay: "2s",
                        }}
                      />
                    </div>
                  </div>

                  {/* Animated compass */}
                  <div className='relative w-32 h-32 mx-auto mb-6'>
                    <div
                      className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin opacity-20'
                      style={{ animationDuration: "8s" }}
                    />
                    <div className='absolute inset-2 bg-slate-800 rounded-full flex items-center justify-center'>
                      <Compass className='w-16 h-16 text-blue-400 animate-pulse' />
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className='absolute top-4 right-4'>
                  <div className='w-4 h-4 bg-blue-400 rounded-full animate-ping' />
                </div>
                <div className='absolute bottom-4 left-4'>
                  <div className='w-3 h-3 bg-purple-400 rounded-full animate-bounce' />
                </div>
              </div>

              {/* Floating cards around illustration */}
              <div className='absolute -top-4 -right-4'>
                <div className='bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 animate-float'>
                  <Building2 className='w-6 h-6 text-blue-400' />
                </div>
              </div>
              <div className='absolute -bottom-4 -left-4'>
                <div
                  className='bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 animate-float'
                  style={{ animationDelay: "1s" }}>
                  <Users className='w-6 h-6 text-green-400' />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            className={`order-1 lg:order-2 text-center lg:text-left transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}>
            {/* Main heading */}
            <div className='mb-8'>
              <div className='inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20'>
                <Map className='w-5 h-5 text-green-400' />
                <span className='text-white font-medium'>
                  Exploring New Territory
                </span>
              </div>

              <h2 className='text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
                <span
                  className='inline-block animate-bounce'
                  style={{ animationDelay: "0.1s" }}>
                  Adventure
                </span>{" "}
                <span
                  className='inline-block animate-bounce'
                  style={{ animationDelay: "0.2s" }}>
                  Awaits!
                </span>
              </h2>

              {/* Dynamic motivational message */}
              <div className='relative h-16 mb-6'>
                <p
                  key={currentMessage}
                  className='absolute inset-0 text-xl text-blue-100 leading-relaxed animate-fade-in'>
                  {motivationalMessages[currentMessage]}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='space-y-6 mb-8'>
              <div className='flex flex-col sm:flex-row gap-4'>
                <button
                  onClick={() => (window.location.href = "/")}
                  className='group relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 border-0 rounded-lg cursor-pointer'>
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300' />
                  <div className='relative flex items-center'>
                    <Home className='w-5 h-5 mr-2 group-hover:animate-bounce' />
                    Back to Home
                    <Sparkles className='w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300' />
                  </div>
                </button>

                <button
                  onClick={() =>
                    (window.location.href = "/dashboard/entrepreneur")
                  }
                  className='group bg-white/10 border border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 font-semibold hover:scale-105 transition-all duration-300 rounded-lg cursor-pointer'>
                  <Rocket className='w-5 h-5 mr-2 group-hover:animate-bounce' />
                  Launch Dashboard
                </button>
              </div>
            </div>

            {/* Quick Navigation Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
              {[
                {
                  icon: Target,
                  title: "AI Assistant",
                  path: "/dashboard/entrepreneur/ai",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Building2,
                  title: "Business Plans",
                  path: "/dashboard/entrepreneur/business-plan",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: Users,
                  title: "Funding",
                  path: "/dashboard/entrepreneur/funding",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: Zap,
                  title: "Analytics",
                  path: "/dashboard/entrepreneur/analytics",
                  color: "from-orange-500 to-red-500",
                },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => (window.location.href = item.path)}
                  className='group block w-full text-left'>
                  <Card className='p-4 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                    <div className='flex items-center space-x-3'>
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                        <item.icon className='w-5 h-5 text-white' />
                      </div>
                      <div>
                        <h4 className='text-white font-semibold group-hover:text-blue-200 transition-colors duration-300'>
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </Card>
                </button>
              ))}
            </div>

            {/* Support Section */}
            <Card className='p-6 bg-white/10 backdrop-blur-sm border-white/20'>
              <div className='text-center'>
                <MessageCircle className='w-8 h-8 text-blue-400 mx-auto mb-3 animate-pulse' />
                <h3 className='text-lg font-semibold text-white mb-2'>
                  Need Navigation Help?
                </h3>
                <p className='text-blue-200 text-sm mb-4'>
                  Our AI-powered support team is ready to guide your journey!
                </p>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-white hover:text-blue-200 hover:bg-white/10 transition-all duration-300'
                  onClick={() => (window.location.href = "/contact")}>
                  <MessageCircle className='w-4 h-4 mr-2' />
                  Get Directions
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-10px) rotate(5deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(0deg); 
          }
          75% { 
            transform: translateY(-10px) rotate(-5deg); 
          }
        }
        
        @keyframes fade-in {
          0% { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0px); 
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
