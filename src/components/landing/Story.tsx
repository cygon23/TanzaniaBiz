import React, { useState, useEffect, useRef } from "react";
import {
  Heart,
  Sparkles,
  ArrowRight,
  Zap,
  Target,
  Globe,
} from "lucide-react";

const Story = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className='relative py-32 bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden'>
      {/* Animated Background */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "2s" }}></div>
      </div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div
            className={`inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-primary/20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <Heart className='w-5 h-5 text-primary animate-pulse' />
            <span className='text-secondary font-semibold'>The RAV Story</span>
          </div>

          <h2
            className={`text-4xl md:text-6xl font-bold text-secondary mb-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            Built for{" "}
            <span className='bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'>
              Impact
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className='max-w-5xl mx-auto'>
          {/* Mission Statement Card */}
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-200 shadow-xl mb-12 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}>
            <div className='text-center'>
              <Sparkles className='w-12 h-12 text-primary mx-auto mb-6 animate-spin' style={{ animationDuration: '3s' }} />
              <p className='text-2xl md:text-3xl font-bold text-secondary mb-6 leading-relaxed'>
                Empowering African entrepreneurs with AI-powered tools, expert
                guidance, and a thriving community
              </p>
              <p className='text-lg text-slate-600 max-w-3xl mx-auto'>
                We believe every entrepreneur deserves access to world-class
                business tools and support. That's why we built RAV.
              </p>
            </div>
          </div>

          {/* Value Props Grid */}
          <div
            className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            <div className='group bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2'>
              <div className='w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                <Zap className='w-7 h-7 text-white' />
              </div>
              <h3 className='text-xl font-bold text-secondary mb-3'>
                AI-Powered
              </h3>
              <p className='text-slate-600 leading-relaxed'>
                Cutting-edge artificial intelligence tailored for African
                markets and businesses
              </p>
            </div>

            <div className='group bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2'>
              <div className='w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                <Target className='w-7 h-7 text-white' />
              </div>
              <h3 className='text-xl font-bold text-secondary mb-3'>
                Results-Driven
              </h3>
              <p className='text-slate-600 leading-relaxed'>
                Proven strategies and tools that deliver measurable business
                growth and success
              </p>
            </div>

            <div className='group bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2'>
              <div className='w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                <Globe className='w-7 h-7 text-white' />
              </div>
              <h3 className='text-xl font-bold text-secondary mb-3'>
                Africa-First
              </h3>
              <p className='text-slate-600 leading-relaxed'>
                Built specifically for African entrepreneurs, regulations, and
                market dynamics
              </p>
            </div>
          </div>

          {/* CTA */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            <a
              href='/about'
              className='inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group'>
              <span className='text-lg'>Learn More About Us</span>
              <ArrowRight className='w-5 h-5 group-hover:translate-x-2 transition-transform duration-300' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
