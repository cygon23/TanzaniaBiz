import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  Brain,
  Globe,
  Rocket,
  ChevronDown,
  MousePointer2,
  Lightbulb,
  Target,
  Users,
  TrendingUp,
} from "lucide-react";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const dynamicWords = ["Dreams", "Ideas", "Visions", "Potential", "Future"];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % dynamicWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleDemoLogin = () => {
    // localStorage.setItem('demoUser', JSON.stringify({
    //   role: 'entrepreneur',
    //   email: 'demo-entrepreneur@example.com'
    // }));
    window.location.href = "/dashboard/entrepreneur";
  };

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-white'>
      {/* Dynamic cursor follower */}
      <div
        className='fixed w-6 h-6 bg-primary/30 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out mix-blend-screen'
        style={{
          left: mousePos.x - 12,
          top: mousePos.y - 12,
          transform: "scale(1)",
        }}
      />

      {/* Interactive Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Main gradient orbs */}
        <div className='absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "1s" }}></div>
        <div
          className='absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-bounce'
          style={{ animationDelay: "2s", animationDuration: "4s" }}></div>

        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-white/20 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
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

      {/* Main Content */}
      <div className='relative z-10 container mx-auto px-4 lg:px-8 py-20'>
        <div className='max-w-6xl mx-auto text-center'>
          {/* Simple Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-slate-200 shadow-sm transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } mt-16`}>
            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
            <span className='text-secondary font-medium text-sm'>
              Empowering 15,000+ African Entrepreneurs
            </span>
          </div>

          {/* Simplified Headline */}
          <div className='mb-12'>
            <h1
              className={`text-6xl md:text-8xl lg:text-9xl font-bold text-secondary mb-8 leading-tight transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}>
              Build Your{" "}
              <span className='bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent'>
                Empire
              </span>
            </h1>
          </div>


          {/* Revolutionary CTA Section */}
          <div
            className={`flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 transition-all duration-1000 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <Button
              size='lg'
              onClick={handleDemoLogin}
              className='group relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold px-12 py-6 text-xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 border-0'>
              <div className='absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300' />
              <div className='relative flex items-center'>
                <Rocket className='w-6 h-6 mr-3 group-hover:animate-bounce' />
                Launch Your Empire
                <ArrowRight className='w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300' />
              </div>
            </Button>

            <div className='group flex items-center gap-4 bg-primary/5 backdrop-blur-sm rounded-2xl px-8 py-6 border border-primary/20 hover:bg-primary/10 transition-all duration-300 cursor-pointer'>
              <div className='w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Play className='w-8 h-8 text-primary ml-1' />
              </div>
              <div className='text-left'>
                <div className='text-secondary font-bold text-lg'>
                  See the Magic
                </div>
                <div className='text-slate-700'>2-minute demo</div>
              </div>
            </div>
          </div>

          {/* Simplified Success Metrics */}
          <div
            className={`flex flex-wrap justify-center gap-8 md:gap-12 max-w-3xl mx-auto transition-all duration-1000 delay-1100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            {[
              { number: "15K+", label: "Entrepreneurs", icon: Users },
              { number: "95%", label: "Success Rate", icon: Target },
              { number: "500M+", label: "TSh Generated", icon: TrendingUp },
            ].map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='flex items-center justify-center gap-2 mb-2'>
                  <stat.icon className='w-5 h-5 text-primary' />
                  <div className='text-3xl font-bold text-secondary'>
                    {stat.number}
                  </div>
                </div>
                <div className='text-slate-600 text-sm font-medium'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Scroll Indicator */}
      <div
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 delay-1300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
        <div className='group flex flex-col items-center gap-4 cursor-pointer'>
          <div className='text-slate-600 text-sm font-medium group-hover:text-secondary transition-colors duration-300'>
            Discover More
          </div>
          <div className='w-8 h-12 border-2 border-primary/30 rounded-full flex justify-center relative overflow-hidden group-hover:border-primary/50 transition-colors duration-300'>
            <div className='w-2 h-4 bg-gradient-to-b from-primary to-primary/80 rounded-full mt-2 animate-bounce'></div>
            <div className='absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </div>
          <MousePointer2 className='w-4 h-4 text-slate-500 group-hover:text-secondary group-hover:animate-bounce transition-all duration-300' />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(90deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
          75% {
            transform: translateY(-10px) rotate(270deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
