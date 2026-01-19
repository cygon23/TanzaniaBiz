import React, { useState, useEffect, useRef } from "react";
import {
  Brain,
  Shield,
  DollarSign,
  Users,
  Sparkles,
  ArrowRight,
  Zap,
} from "lucide-react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);

  const mainFeatures = [
    {
      icon: Brain,
      title: "AI Business Oracle",
      description:
        "Advanced AI analyzes market trends and local regulations to provide personalized business insights.",
      color: "from-primary to-primary/80",
      gradient: "bg-gradient-to-br from-primary/10 to-primary/5",
    },
    {
      icon: Shield,
      title: "Instant Compliance",
      description:
        "Automated compliance with TRA, BRELA, and all Tanzanian regulations. Stay compliant effortlessly.",
      color: "from-secondary to-secondary/80",
      gradient: "bg-gradient-to-br from-secondary/10 to-secondary/5",
    },
    {
      icon: DollarSign,
      title: "Smart Funding",
      description:
        "Connect with investors and access government grants specifically for Tanzanian entrepreneurs.",
      color: "from-primary to-primary/80",
      gradient: "bg-gradient-to-br from-primary/10 to-primary/5",
    },
    {
      icon: Users,
      title: "Elite Network",
      description:
        "Join Tanzania's most exclusive entrepreneur network with expert mentorship and peer learning.",
      color: "from-secondary to-secondary/80",
      gradient: "bg-gradient-to-br from-secondary/10 to-secondary/5",
    },
  ];

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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % mainFeatures.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible, mainFeatures.length]);

  return (
    <section
      ref={sectionRef}
      className='relative py-32 bg-white overflow-hidden'>
      {/* Animated Background */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "2s" }}></div>
      </div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center mb-20'>
          <h2
            className={`text-4xl md:text-6xl font-bold text-secondary mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            Complete Business{" "}
            <span className='bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent'>
              Solutions
            </span>
          </h2>
          <p
            className={`text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            Everything you need to launch, grow, and scale your business
          </p>
        </div>

        {/* Circular Feature Showcase */}
        <div className='max-w-6xl mx-auto mb-20'>
          <div className='relative'>
            {/* Center Circle */}
            <div
              className={`w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border-4 border-white shadow-2xl flex items-center justify-center transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}>
              <div className='text-center'>
                <div className='w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center'>
                  {React.createElement(mainFeatures[activeFeature].icon, {
                    className: "w-12 h-12 text-white",
                  })}
                </div>
                <h3 className='text-2xl font-bold text-secondary'>
                  {mainFeatures[activeFeature].title}
                </h3>
              </div>
            </div>

            {/* Orbiting Feature Cards */}
            {mainFeatures.map((feature, index) => {
              const angle = (index * 360) / mainFeatures.length;
              const radius = 280;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={index}
                  className={`absolute top-1/2 left-1/2 cursor-pointer transition-all duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    transitionDelay: `${index * 150}ms`,
                  }}
                  onClick={() => setActiveFeature(index)}>
                  <div
                    className={`group p-6 rounded-2xl ${
                      feature.gradient
                    } border-2 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:shadow-2xl ${
                      activeFeature === index
                        ? "border-primary scale-110 shadow-2xl"
                        : "border-white/50"
                    }`}>
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                      <feature.icon className='w-8 h-8 text-white' />
                    </div>
                    <h4 className='text-lg font-bold text-secondary mb-2 whitespace-nowrap'>
                      {feature.title}
                    </h4>
                    <p className='text-sm text-slate-600 w-48'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Dots */}
          <div className='flex justify-center gap-3 mt-12'>
            {mainFeatures.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeFeature === index
                    ? "w-12 bg-primary"
                    : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <button className='group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105'>
            <Zap className='w-6 h-6 group-hover:animate-bounce' />
            <span className='text-lg'>Explore All Features</span>
            <ArrowRight className='w-6 h-6 group-hover:translate-x-2 transition-transform duration-300' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
