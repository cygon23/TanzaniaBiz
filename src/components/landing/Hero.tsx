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
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900'>
      {/* Dynamic cursor follower */}
      <div
        className='fixed w-6 h-6 bg-blue-400/30 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out mix-blend-screen'
        style={{
          left: mousePos.x - 12,
          top: mousePos.y - 12,
          transform: "scale(1)",
        }}
      />

      {/* Interactive Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Main gradient orbs */}
        <div className='absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-20 right-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "1s" }}></div>
        <div
          className='absolute top-1/2 left-1/3 w-64 h-64 bg-green-400/10 rounded-full blur-2xl animate-bounce'
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
          {/* Revolutionary Badge */}
          <div
            className={`inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-12 border border-white/20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } mt-16`}>
            <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse' />
            <span className='text-white font-medium'>
              Tanzania's #1 Business Transformation Platform
            </span>
            <div className='flex gap-1'>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className='w-1 h-1 bg-blue-400 rounded-full animate-ping'
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>

          {/* Revolutionary Headline */}
          <div className='mb-12'>
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}>
              <span
                className='inline-block animate-bounce'
                style={{ animationDelay: "0.1s" }}>
                Transform
              </span>{" "}
              <span
                className='inline-block animate-bounce'
                style={{ animationDelay: "0.2s" }}>
                Your
              </span>{" "}
              <br />
              <span
                key={currentWord}
                className='inline-block animate-bounce bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse'
                style={{ animationDelay: "0.3s" }}>
                {dynamicWords[currentWord]}
              </span>{" "}
              <span
                className='inline-block animate-bounce text-blue-200'
                style={{ animationDelay: "0.4s" }}>
                Into
              </span>
              <br />
              <span
                className='inline-block animate-bounce bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent'
                style={{ animationDelay: "0.5s" }}>
                Reality
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}>
              The most advanced AI-powered business ecosystem in Tanzania. From
              idea validation to market domination, we provide everything you
              need to build, scale, and revolutionize your business.
            </p>
          </div>

          {/* Interactive Feature Pills */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            {[
              {
                icon: Brain,
                text: "AI Business Oracle",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Globe,
                text: "Tanzania-Focused",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Zap,
                text: "Instant Compliance",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Users,
                text: "Elite Network",
                color: "from-orange-500 to-red-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group flex items-center gap-3 bg-gradient-to-r ${feature.color} p-[1px] rounded-full hover:scale-105 transition-all duration-300 cursor-pointer`}>
                <div className='flex items-center gap-3 bg-slate-900/80 backdrop-blur-sm rounded-full px-6 py-3'>
                  <feature.icon className='w-5 h-5 text-white group-hover:animate-pulse' />
                  <span className='text-white font-medium'>{feature.text}</span>
                </div>
              </div>
            ))}
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
              className='group relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 text-white font-bold px-12 py-6 text-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 border-0'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300' />
              <div className='relative flex items-center'>
                <Rocket className='w-6 h-6 mr-3 group-hover:animate-bounce' />
                Launch Your Empire
                <ArrowRight className='w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300' />
              </div>
            </Button>

            <div className='group flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer'>
              <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Play className='w-8 h-8 text-white ml-1' />
              </div>
              <div className='text-left'>
                <div className='text-white font-bold text-lg'>
                  See the Magic
                </div>
                <div className='text-blue-200'>2-minute demo</div>
              </div>
            </div>
          </div>

          {/* Interactive Success Metrics */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-1100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            {[
              {
                number: "15,000+",
                label: "Businesses Launched",
                icon: Rocket,
                color: "text-blue-400",
              },
              {
                number: "95%",
                label: "Success Rate",
                icon: Target,
                color: "text-green-400",
              },
              {
                number: "< 2 weeks",
                label: "Time to Market",
                icon: Zap,
                color: "text-purple-400",
              },
              {
                number: "500M+",
                label: "TSh Revenue Generated",
                icon: Sparkles,
                color: "text-yellow-400",
              },
            ].map((stat, index) => (
              <div key={index} className='group text-center'>
                <div className='relative mb-4'>
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <stat.icon
                      className={`w-8 h-8 ${stat.color} group-hover:animate-pulse`}
                    />
                  </div>
                  <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg' />
                </div>
                <div className='text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300'>
                  {stat.number}
                </div>
                <div className='text-blue-200 font-medium group-hover:text-white transition-colors duration-300'>
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
          <div className='text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-300'>
            Discover More
          </div>
          <div className='w-8 h-12 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden group-hover:border-white/50 transition-colors duration-300'>
            <div className='w-2 h-4 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2 animate-bounce'></div>
            <div className='absolute inset-0 bg-gradient-to-b from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </div>
          <MousePointer2 className='w-4 h-4 text-white/50 group-hover:text-white/80 group-hover:animate-bounce transition-all duration-300' />
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
