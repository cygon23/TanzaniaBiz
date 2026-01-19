import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Sparkles,
  Rocket,
  MousePointer2,
  Users,
  Target,
  TrendingUp,
  Zap,
  Star,
  Award,
  Globe,
  Boxes,
  Code,
  Gauge,
} from "lucide-react";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState({ users: 0, success: 0, revenue: 0 });
  const heroRef = useRef(null);

  const dynamicWords = ["Dreams", "Ideas", "Vision", "Potential", "Future"];

  const floatingIcons = [
    { Icon: Zap, delay: 0, duration: 4 },
    { Icon: Star, delay: 1, duration: 5 },
    { Icon: Award, delay: 0.5, duration: 4.5 },
    { Icon: Globe, delay: 1.5, duration: 5.5 },
    { Icon: Boxes, delay: 0.8, duration: 4.8 },
    { Icon: Code, delay: 1.2, duration: 5.2 },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % dynamicWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { users: 15000, success: 95, revenue: 500 };
    let current = { users: 0, success: 0, revenue: 0 };

    const timer = setInterval(() => {
      current.users = Math.min(current.users + targets.users / steps, targets.users);
      current.success = Math.min(current.success + targets.success / steps, targets.success);
      current.revenue = Math.min(current.revenue + targets.revenue / steps, targets.revenue);

      setCount({
        users: Math.floor(current.users),
        success: Math.floor(current.success),
        revenue: Math.floor(current.revenue),
      });

      if (
        current.users >= targets.users &&
        current.success >= targets.success &&
        current.revenue >= targets.revenue
      ) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const handleDemoLogin = () => {
    window.location.href = "/auth";
  };

  return (
    <section
      ref={heroRef}
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white'>
      {/* Animated Gradient Orbs with Parallax */}
      <div className='absolute inset-0 overflow-hidden'>
        <div
          className='absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full blur-3xl animate-pulse'
          style={{
            transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className='absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full blur-3xl animate-pulse'
          style={{
            transform: `translate(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5}px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: "1s",
          }}
        />
        <div
          className='absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full blur-2xl animate-pulse'
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: "2s",
            animationDuration: "4s",
          }}
        />

        {/* Floating Tech Icons */}
        {floatingIcons.map((item, i) => (
          <div
            key={i}
            className='absolute opacity-10'
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + Math.sin(i * 2) * 30}%`,
              animation: `techFloat ${item.duration}s ease-in-out infinite`,
              animationDelay: `${item.delay}s`,
            }}>
            <item.Icon className='w-12 h-12 text-primary' />
          </div>
        ))}

        {/* Animated Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-primary/30 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particleFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className='absolute inset-0 opacity-5'>
          <div
            className='w-full h-full'
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #DD762A 1px, transparent 0)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className='relative z-10 container mx-auto px-4 lg:px-8 py-20'>
        <div className='max-w-6xl mx-auto text-center'>
          {/* Animated Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-primary/20 shadow-lg transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
            } mt-16`}>
            <div className='relative flex items-center'>
              <div className='w-2 h-2 bg-green-500 rounded-full animate-ping absolute' />
              <div className='w-2 h-2 bg-green-500 rounded-full' />
            </div>
            <span className='text-secondary font-semibold text-sm'>
              🚀 Trusted by 15,000+ Entrepreneurs
            </span>
            <Sparkles className='w-4 h-4 text-primary animate-pulse' />
          </div>

          {/* Animated Headline with Word Morphing */}
          <div className='mb-12'>
            <h1
              className={`text-6xl md:text-8xl lg:text-9xl font-bold text-secondary mb-8 leading-tight transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`,
                transition: "transform 0.1s ease-out",
              }}>
              Transform Your{" "}
              <span className='relative inline-block'>
                <span
                  className='bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent'
                  key={currentWord}>
                  {dynamicWords[currentWord]}
                </span>
                <div className='absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/40 rounded-full animate-pulse' />
              </span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}>
              Africa's most powerful{" "}
              <span className='text-primary font-semibold'>
                AI-driven platform
              </span>{" "}
              for entrepreneurs. Launch, grow, and scale your business with
              cutting-edge tools built for the African market.
            </p>
          </div>

          {/* CTA Buttons with Magnetic Effect */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <button
              onClick={handleDemoLogin}
              className='group relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold px-12 py-5 text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-110 border-0 rounded-2xl overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300' />
              <div className='relative flex items-center gap-3'>
                <Rocket className='w-6 h-6 group-hover:rotate-12 transition-transform duration-300' />
                Launch Your Empire
                <ArrowRight className='w-6 h-6 group-hover:translate-x-2 transition-transform duration-300' />
              </div>
              <div className='absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl group-hover:blur-2xl transition-all duration-300' />
            </button>

            <button className='group flex items-center gap-4 bg-white/80 backdrop-blur-md rounded-2xl px-8 py-5 border border-slate-200 hover:border-primary/30 hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'>
              <div className='w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Play className='w-6 h-6 text-primary ml-1' />
              </div>
              <div className='text-left'>
                <div className='text-secondary font-bold text-lg'>
                  Watch Demo
                </div>
                <div className='text-slate-600 text-sm'>2-minute tour</div>
              </div>
            </button>
          </div>

          {/* Animated Stats Counter */}
          <div
            className={`flex flex-wrap justify-center gap-8 md:gap-12 max-w-4xl mx-auto transition-all duration-1000 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            {[
              {
                icon: Users,
                number: `${count.users.toLocaleString()}+`,
                label: "Entrepreneurs",
                color: "text-primary",
              },
              {
                icon: Target,
                number: `${count.success}%`,
                label: "Success Rate",
                color: "text-green-500",
              },
              {
                icon: TrendingUp,
                number: `${count.revenue}M+`,
                label: "TSh Generated",
                color: "text-primary",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className='group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>
                <div className='flex flex-col items-center gap-3'>
                  <div className='w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className='text-4xl font-bold text-secondary group-hover:scale-110 transition-transform duration-300'>
                    {stat.number}
                  </div>
                  <div className='text-slate-600 font-medium text-sm'>
                    {stat.label}
                  </div>
                </div>
                <div className='absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300' />
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div
            className={`flex flex-wrap justify-center items-center gap-8 mt-16 transition-all duration-1000 delay-1100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <div className='flex items-center gap-2 text-slate-600'>
              <Award className='w-5 h-5 text-primary' />
              <span className='text-sm font-medium'>TRA Certified</span>
            </div>
            <div className='flex items-center gap-2 text-slate-600'>
              <Award className='w-5 h-5 text-green-500' />
              <span className='text-sm font-medium'>BRELA Compliant</span>
            </div>
            <div className='flex items-center gap-2 text-slate-600'>
              <Award className='w-5 h-5 text-primary' />
              <span className='text-sm font-medium'>ISO 27001 Secured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 delay-1300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
        <div className='group flex flex-col items-center gap-3 cursor-pointer'>
          <div className='text-slate-600 text-sm font-medium group-hover:text-primary transition-colors duration-300'>
            Scroll to Explore
          </div>
          <div className='w-8 h-12 border-2 border-primary/30 rounded-full flex justify-center relative overflow-hidden group-hover:border-primary/50 transition-colors duration-300'>
            <div className='w-2 h-4 bg-gradient-to-b from-primary to-primary/80 rounded-full mt-2 animate-bounce' />
          </div>
          <MousePointer2 className='w-4 h-4 text-slate-500 group-hover:text-primary group-hover:animate-bounce transition-all duration-300' />
        </div>
      </div>

      <style>{`
        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-15px) translateX(10px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-30px) translateX(-5px);
            opacity: 1;
          }
          75% {
            transform: translateY(-15px) translateX(-10px);
            opacity: 0.6;
          }
        }

        @keyframes techFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
