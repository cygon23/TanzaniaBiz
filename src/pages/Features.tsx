import React, { useState, useEffect, useRef } from "react";
import {
  Bot,
  Users,
  FileText,
  TrendingUp,
  Shield,
  Smartphone,
  BookOpen,
  DollarSign,
  Sparkles,
  Zap,
  Rocket,
  CheckCircle,
  ArrowLeft,
  Play,
  Star,
  Globe,
  Target,
  Award,
  ChevronRight,
  Brain,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/landing/FooterV";

const features = [
  {
    icon: Bot,
    title: "AI Business Assistant",
    description:
      "24/7 intelligent guidance with advanced AI in Swahili and English for business transformation.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    gradient: "from-primary to-primary/80",
    accent: Sparkles,
    benefits: [
      "Multilingual support",
      "24/7 availability",
      "Personalized advice",
      "Market insights",
    ],
  },
  {
    icon: Shield,
    title: "Compliance Automation",
    description:
      "Automated compliance system with predictive analytics for BRELA & TRA requirements.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    gradient: "from-secondary to-secondary/80",
    accent: Zap,
    benefits: [
      "BRELA integration",
      "TRA compliance",
      "Deadline tracking",
      "Document automation",
    ],
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description:
      "Connect with Africa's most successful business leaders through our AI-powered matching.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    gradient: "from-primary to-primary/90",
    accent: Rocket,
    benefits: [
      "Expert matching",
      "1-on-1 sessions",
      "Group workshops",
      "Success tracking",
    ],
  },
  {
    icon: FileText,
    title: "Business Plan Builder",
    description:
      "Generate investor-grade business plans with AI assistance and premium templates.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    gradient: "from-secondary to-secondary/90",
    accent: Sparkles,
    benefits: [
      "AI-powered generation",
      "Investor templates",
      "Financial projections",
      "Market research",
    ],
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description:
      "Real-time market analytics with AI-powered predictive insights for African opportunities.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    gradient: "from-primary to-primary/80",
    accent: Zap,
    benefits: [
      "Real-time data",
      "Predictive analytics",
      "Market trends",
      "Opportunity alerts",
    ],
  },
  {
    icon: DollarSign,
    title: "Funding Network",
    description:
      "Access to grants, venture capital, and investment opportunities through our partner network.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    gradient: "from-secondary to-secondary/80",
    accent: Rocket,
    benefits: [
      "Grant opportunities",
      "VC connections",
      "Investment tracking",
      "Pitch preparation",
    ],
  },
  {
    icon: BookOpen,
    title: "Learning Academy",
    description:
      "Interactive courses and simulations designed by Africa's top financial experts.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    gradient: "from-primary to-primary/90",
    accent: Sparkles,
    benefits: [
      "Expert courses",
      "Interactive simulations",
      "Certification programs",
      "Progress tracking",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Experience",
    description:
      "Mobile-first design with offline-first architecture and seamless connectivity.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    gradient: "from-secondary to-secondary/90",
    accent: Zap,
    benefits: [
      "Mobile optimized",
      "Offline capability",
      "Cross-platform",
      "Real-time sync",
    ],
  },
];

const stats = [
  {
    number: "15,000+",
    label: "Active Entrepreneurs",
    icon: Users,
    color: "text-primary",
  },
  {
    number: "95%",
    label: "Success Rate",
    icon: TrendingUp,
    color: "text-secondary",
  },
  {
    number: "500+",
    label: "Expert Mentors",
    icon: Star,
    color: "text-primary",
  },
  {
    number: "100%",
    label: "Compliance Rate",
    icon: Shield,
    color: "text-secondary",
  },
];

const heroFeatures = [
  { icon: Brain, text: "AI-Powered Insights" },
  { icon: Globe, text: "Africa-Focused" },
  { icon: Target, text: "Results-Driven" },
  { icon: Award, text: "Expert-Validated" },
];

const Features = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState({ users: 0, success: 0, mentors: 0, compliance: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
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

    const targets = { users: 15000, success: 95, mentors: 500, compliance: 100 };
    let current = { users: 0, success: 0, mentors: 0, compliance: 0 };

    const timer = setInterval(() => {
      current.users = Math.min(current.users + targets.users / steps, targets.users);
      current.success = Math.min(current.success + targets.success / steps, targets.success);
      current.mentors = Math.min(current.mentors + targets.mentors / steps, targets.mentors);
      current.compliance = Math.min(current.compliance + targets.compliance / steps, targets.compliance);

      setCount({
        users: Math.floor(current.users),
        success: Math.floor(current.success),
        mentors: Math.floor(current.mentors),
        compliance: Math.floor(current.compliance),
      });

      if (
        current.users >= targets.users &&
        current.success >= targets.success &&
        current.mentors >= targets.mentors &&
        current.compliance >= targets.compliance
      ) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <div className='min-h-screen bg-white overflow-hidden'>
      <Header />

      {/* Hero Section */}
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
              className={`inline-flex flex-wrap items-center justify-center gap-4 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-primary/20 shadow-lg transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}>
              {heroFeatures.map((feature, index) => (
                <div
                  key={index}
                  className='flex items-center gap-2 text-slate-700'>
                  <feature.icon className='w-4 h-4 text-primary' />
                  <span className='text-sm font-medium'>{feature.text}</span>
                  {index < heroFeatures.length - 1 && (
                    <div className='w-1 h-1 bg-slate-400 rounded-full' />
                  )}
                </div>
              ))}
            </div>

            {/* Animated Headline */}
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
              Powerful{" "}
              <span className='bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent'>
                Business
              </span>
              <br />
              Solutions
            </h1>

            <p
              className={`text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}>
              The most comprehensive business platform in Africa. From AI
              assistance to expert mentorship, we provide everything you need to
              build, grow, and scale your enterprise.
            </p>

            {/* Animated Stats Counter */}
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto transition-all duration-1000 delay-700 ${
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
                  icon: TrendingUp,
                  number: `${count.success}%`,
                  label: "Success Rate",
                  color: "text-green-500",
                },
                {
                  icon: Star,
                  number: `${count.mentors}+`,
                  label: "Mentors",
                  color: "text-primary",
                },
                {
                  icon: Shield,
                  number: `${count.compliance}%`,
                  label: "Compliance",
                  color: "text-secondary",
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
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse'></div>
          <div
            className='absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse'
            style={{ animationDelay: "2s" }}></div>
        </div>

        <div className='container mx-auto px-4 lg:px-8 relative z-10'>
          <div className='text-center mb-20'>
            <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 font-medium'>
              <Lightbulb className='w-4 h-4' />
              Comprehensive Solutions
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-6'>
              Everything You Need to
              <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                {" "}
                Succeed
              </span>
            </h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed'>
              Our platform combines cutting-edge AI technology with deep local
              expertise to deliver unparalleled business solutions for African
              entrepreneurs.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
            {features.map((feature, index) => (
              <Card
                key={index}
                className='group relative overflow-hidden p-6 h-full bg-white border-slate-200 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-4 cursor-pointer'
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}>
                {/* Hover background effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Magic border effect */}
                <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${feature.gradient} p-[1px]`}>
                  <div className='w-full h-full bg-white rounded-lg' />
                </div>

                {/* Content */}
                <div className='relative z-10'>
                  {/* Icon Section */}
                  <div className='flex items-center justify-between mb-6'>
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <feature.icon className='w-7 h-7 text-white' />
                    </div>
                    <feature.accent className='w-6 h-6 text-slate-400 group-hover:text-slate-600 group-hover:animate-pulse transition-all duration-300' />
                  </div>

                  <h3 className='text-xl font-bold mb-4 text-slate-800 group-hover:text-slate-900 transition-colors duration-300'>
                    {feature.title}
                  </h3>
                  <p className='text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300'>
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <ul className='space-y-3'>
                    {feature.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className='flex items-center text-sm text-slate-500 group-hover:text-slate-600 transition-all duration-300'
                        style={{ animationDelay: `${idx * 100}ms` }}>
                        <CheckCircle className='w-4 h-4 text-green-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300' />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Floating particles on hover */}
                {hoveredFeature === index && (
                  <div className='absolute inset-0 pointer-events-none'>
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className='absolute w-1 h-1 bg-primary rounded-full animate-ping'
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 200}ms`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur-xl opacity-20 animate-pulse' />
            <div className='relative bg-gradient-to-r from-secondary via-primary/90 to-secondary rounded-3xl p-12 lg:p-16 text-white overflow-hidden'>
              {/* Background pattern */}
              <div className='absolute inset-0 opacity-10'>
                <div className='absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse' />
                <div
                  className='absolute bottom-10 left-10 w-24 h-24 bg-primary rounded-full blur-2xl animate-bounce'
                  style={{ animationDuration: "3s" }}
                />
              </div>

              <div className='relative z-10 max-w-4xl mx-auto text-center'>
                <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20'>
                  <Rocket className='w-5 h-5 text-white animate-bounce' />
                  <span className='text-sm font-medium text-white'>
                    Ready to Launch?
                  </span>
                </div>

                <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight'>
                  Transform Your Business
                  <span className='bg-gradient-to-r from-white to-primary-foreground bg-clip-text text-transparent'>
                    {" "}
                    Today
                  </span>
                </h3>
                <p className='text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto'>
                  Join over 15,000 successful entrepreneurs who are already
                  using our AI-powered platform to build, scale, and dominate
                  their markets across Africa.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center'>
                  <Button
                    size='lg'
                    className='bg-white text-secondary hover:bg-slate-50 font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105'>
                    <Play className='w-5 h-5 mr-2' />
                    Start Free Trial
                    <Sparkles className='w-5 h-5 ml-2 animate-spin' style={{ animationDuration: '3s' }} />
                  </Button>
                  <Button
                    size='lg'
                    className='bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white/20 hover:border-white font-bold px-10 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg'>
                    <Rocket className='w-5 h-5 mr-2' />
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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
      `}</style>
    </div>
  );
};

export default Features;
