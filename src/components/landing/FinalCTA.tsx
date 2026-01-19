import React, { useState, useEffect, useRef } from "react";
import {
  Rocket,
  ArrowRight,
  Sparkles,
  Zap,
  Crown,
  Star,
  Users,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  Gift,
  Target,
  Flame,
  Lightbulb,
  Award,
} from "lucide-react";

const FinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45,
  });
  const [activeOffer, setActiveOffer] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const offers = [
    {
      title: "Entrepreneur Pro",
      subtitle: "Perfect for Startups",
      originalPrice: "TSh 50,000/month",
      price: "FREE",
      duration: "for 3 months",
      features: [
        "AI Business Oracle",
        "Instant Compliance Tools",
        "Market Intelligence",
        "Expert Mentorship",
        "Funding Network Access",
      ],
      color: "from-primary to-primary/80",
      popular: false,
    },
    {
      title: "Scale Master",
      subtitle: "For Growing Businesses",
      originalPrice: "TSh 150,000/month",
      price: "TSh 75,000",
      duration: "/month",
      features: [
        "Everything in Entrepreneur Pro",
        "Advanced Analytics Dashboard",
        "Priority Investor Matching",
        "1-on-1 Strategic Sessions",
        "Custom Market Reports",
        "White-glove Compliance",
      ],
      color: "from-secondary to-secondary/80",
      popular: true,
    },
    {
      title: "Empire Builder",
      subtitle: "For Established Companies",
      originalPrice: "TSh 300,000/month",
      price: "TSh 200,000",
      duration: "/month",
      features: [
        "Everything in Scale Master",
        "Dedicated Success Manager",
        "Custom AI Models",
        "Exclusive Investor Events",
        "International Expansion Support",
        "24/7 Priority Support",
        "Custom Integrations",
      ],
      color: "from-primary to-primary/90",
      popular: false,
    },
  ];

  const urgencyFeatures = [
    {
      icon: Clock,
      text: "Limited Time: 50% Off First Year",
      color: "text-primary",
    },
    {
      icon: Users,
      text: "Join 15,000+ Successful Entrepreneurs",
      color: "text-primary",
    },
    {
      icon: Award,
      text: "95% Success Rate Guarantee",
      color: "text-green-400",
    },
    {
      icon: Lightbulb,
      text: "Launch Your Business in 24 Hours",
      color: "text-yellow-400",
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
        setActiveOffer((prev) => (prev + 1) % offers.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleGetStarted = (plan) => {
    // In a real app, this would handle the signup/payment process
    console.log(`Getting started with ${plan} plan`);
    // For demo, redirect to dashboard
    window.location.href = "/dashboard/entrepreneur";
  };

  return (
    <section
      ref={sectionRef}
      className='relative py-32 bg-white overflow-hidden'>
      {/* Ultra Dynamic Background */}
      <div className='absolute inset-0'>
        {/* Animated mesh gradient */}
        <div className='absolute inset-0 opacity-10'>
          <div
            className='w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10'
            style={{
              background: `radial-gradient(ellipse at ${mousePos.x * 0.1}% ${
                mousePos.y * 0.1
              }%, hsl(var(--primary) / 0.1) 0%, hsl(var(--secondary) / 0.05) 50%, hsl(var(--primary) / 0.05) 100%)`,
            }}
          />
        </div>

        {/* Energy particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className='absolute opacity-40'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `energyFloat ${
                4 + Math.random() * 6
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}>
            <div className='w-2 h-2 bg-gradient-to-r from-primary to-primary/80 rounded-full animate-pulse'></div>
          </div>
        ))}

        {/* Lightning bolts */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className='absolute opacity-10'
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + Math.sin(i) * 40}%`,
              animation: `lightning ${
                2 + Math.random() * 2
              }s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}>
            <Lightbulb className='w-8 h-8 text-yellow-500 rotate-45' />
          </div>
        ))}

        {/* Massive gradient orbs */}
        <div
          className='absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse'
          style={{ animationDuration: "3s" }}></div>
        <div
          className='absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse'
          style={{ animationDuration: "4s", animationDelay: "1s" }}></div>
        <div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse'
          style={{ animationDuration: "5s", animationDelay: "2s" }}></div>
      </div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        {/* Clean CTA */}
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <h2 className='text-3xl md:text-5xl font-bold text-secondary mb-6 leading-tight'>
            Start Building Your
            <span className='bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent'>
              {" "}Business Today
            </span>
          </h2>

          <p className='text-lg text-slate-600 max-w-2xl mx-auto mb-12'>
            Join 15,000+ entrepreneurs transforming their businesses with RAV
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
            <button
              onClick={() => handleGetStarted("Free Trial")}
              className='group relative bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary text-white font-bold px-10 py-5 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl border-0'>
              <div className='relative flex items-center gap-3'>
                <Rocket className='w-6 h-6 group-hover:animate-bounce' />
                Get Started Free
                <ArrowRight className='w-6 h-6 group-hover:translate-x-2 transition-transform duration-300' />
              </div>
            </button>

            <div className='flex items-center gap-3 text-slate-600'>
              <Shield className='w-5 h-5 text-green-500' />
              <div className='text-left'>
                <div className='font-semibold text-secondary text-sm'>
                  No Credit Card Required
                </div>
                <div className='text-xs'>Start your free trial today</div>
              </div>
            </div>
          </div>

          {/* Simple Stats */}
          <div className='flex flex-wrap justify-center gap-8 md:gap-12 pt-8 border-t border-slate-200'>
            <div className='flex items-center gap-2'>
              <Users className='w-5 h-5 text-primary' />
              <span className='text-sm text-slate-600'>15K+ Entrepreneurs</span>
            </div>
            <div className='flex items-center gap-2'>
              <TrendingUp className='w-5 h-5 text-green-500' />
              <span className='text-sm text-slate-600'>95% Success Rate</span>
            </div>
            <div className='flex items-center gap-2'>
              <Award className='w-5 h-5 text-yellow-500' />
              <span className='text-sm text-slate-600'>Africa's #1 Platform</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes energyFloat {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-30px) translateX(15px) scale(1.2);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-60px) translateX(-10px) scale(0.8);
            opacity: 1;
          }
          75% {
            transform: translateY(-30px) translateX(-20px) scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes lightning {
          0%,
          90%,
          100% {
            opacity: 0.2;
            transform: scale(1) rotate(45deg);
          }
          10%,
          20% {
            opacity: 1;
            transform: scale(1.2) rotate(45deg);
          }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;
