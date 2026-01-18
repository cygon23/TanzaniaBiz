import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
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

  const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * parseInt(end.replace(/[^0-9]/g, ""))));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, [end, duration]);

    return (
      <span>
        {end.includes("+")
          ? `${count.toLocaleString()}+`
          : end.includes("%")
          ? `${count}%`
          : count.toLocaleString()}
      </span>
    );
  };

  return (
    <div className='min-h-screen bg-white overflow-hidden'>
      {/* Header */}
      <Header />

      {/* Dynamic cursor follower */}
      <div
        className='fixed w-4 h-4 bg-primary/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out'
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          transform: hoveredFeature !== null ? "scale(3)" : "scale(1)",
        }}
      />

      {/* Hero Section */}
      <section className='relative py-20 lg:py-32 bg-white overflow-hidden'>
        {/* Animated background elements */}
        <div className='absolute inset-0'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse'></div>
          <div
            className='absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse'
            style={{ animationDelay: "1s" }}></div>
          <div
            className='absolute top-1/2 left-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-bounce'
            style={{ animationDelay: "2s", animationDuration: "4s" }}></div>
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-primary/20 rounded-full animate-ping'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}

        <div className='container mx-auto px-4 lg:px-8 relative z-10'>
          <div className='text-center max-w-5xl mx-auto'>
            <div className='flex justify-center mb-8'>
              <div className='flex items-center gap-4 bg-white backdrop-blur-sm rounded-full px-6 py-3 border border-slate-200'>
                {heroFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-2 text-slate-700'>
                    <feature.icon className='w-4 h-4' />
                    <span className='text-sm font-medium'>{feature.text}</span>
                    {index < heroFeatures.length - 1 && (
                      <div className='w-1 h-1 bg-slate-400 rounded-full' />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-secondary mb-8 leading-tight'>
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
              <span
                className='inline-block animate-bounce bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'
                style={{ animationDelay: "0.3s" }}>
                Business
              </span>
              <br />
              <span
                className='inline-block animate-bounce text-3xl md:text-4xl lg:text-5xl text-slate-700'
                style={{ animationDelay: "0.4s" }}>
                with AI-Powered Solutions
              </span>
            </h1>

            <p className='text-xl md:text-2xl text-slate-700 mb-12 leading-relaxed max-w-4xl mx-auto opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]'>
              The most comprehensive business platform in Africa. From AI
              assistance to expert mentorship, we provide everything you need to
              build, grow, and scale your enterprise.
            </p>

            {/* Animated Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl bg-white backdrop-blur-sm border border-slate-200 transition-all duration-500 ${
                    currentStat === index ? "scale-105 border-primary shadow-lg" : ""
                  }`}
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
                  }}>
                  {currentStat === index && (
                    <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse' />
                  )}
                  <stat.icon
                    className={`w-8 h-8 ${
                      stat.color
                    } mx-auto mb-3 transition-transform duration-300 ${
                      currentStat === index ? "scale-110" : ""
                    }`}
                  />
                  <div className='text-3xl md:text-4xl font-bold text-secondary mb-1'>
                    <CountUp end={stat.number} />
                  </div>
                  <p className='text-slate-600 text-sm font-medium'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]'>
              <Button
                size='lg'
                className='bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-secondary/90 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105'>
                <Sparkles className='w-5 h-5 mr-2 animate-spin' />
                Start Your Journey
                <ChevronRight className='w-5 h-5 ml-2 animate-bounce' />
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-2 border-slate-200 text-slate-700 hover:bg-slate-50 backdrop-blur-sm font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105'>
                <Play className='w-5 h-5 mr-2' />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50 relative'>
        <div className='container mx-auto px-4 lg:px-8'>
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
                className='group relative overflow-hidden p-6 h-full bg-white border-slate-200 hover:shadow-2xl hover:border-slate-300 transition-all duration-500 hover:-translate-y-2 cursor-pointer'
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}>
                {/* Hover background effect */}
                <div
                  className={`absolute inset-0 ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Magic border effect */}
                <div className='absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 p-[1px]'>
                  <div className='w-full h-full bg-white rounded-lg' />
                </div>

                {/* Content */}
                <div className='relative z-10'>
                  {/* Icon Section */}
                  <div className='flex items-center justify-between mb-6'>
                    <div
                      className={`w-14 h-14 rounded-2xl ${feature.bgColor} border border-slate-200 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <feature.icon className={`w-7 h-7 ${feature.color}`} />
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
                    {[...Array(6)].map((_, i) => (
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
                    <Sparkles className='w-5 h-5 ml-2 animate-spin' />
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

      {/* Footer */}
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
      `}</style>
    </div>
  );
};

export default Features;
