import React, { useState, useEffect, useRef } from "react";
import {
  Brain,
  Shield,
  DollarSign,
  Users,
  BarChart3,
  FileText,
  Zap,
  Globe,
  Target,
  Rocket,
  CheckCircle,
  ArrowRight,
  Sparkles,
  MousePointer2,
  TrendingUp,
  Award,
  Clock,
} from "lucide-react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);

  const mainFeatures = [
    {
      icon: Brain,
      title: "AI Business Oracle",
      subtitle: "Smart Decision Making",
      description:
        "Our advanced AI analyzes market trends, competitor data, and local regulations to provide personalized business insights tailored for the Tanzanian market.",
      benefits: [
        "Market Analysis",
        "Competitor Intelligence",
        "Risk Assessment",
        "Growth Predictions",
      ],
      color: "from-blue-500 to-cyan-500",
      demo: "Analyze 50,000+ Tanzanian businesses in seconds",
    },
    {
      icon: Shield,
      title: "Instant Compliance",
      subtitle: "Legal Made Simple",
      description:
        "Automated compliance with TRA, BRELA, and all Tanzanian business regulations. Stay compliant without the paperwork hassle.",
      benefits: [
        "TRA Registration",
        "BRELA Compliance",
        "License Tracking",
        "Tax Automation",
      ],
      color: "from-green-500 to-emerald-500",
      demo: "Complete business registration in 24 hours",
    },
    {
      icon: DollarSign,
      title: "Smart Funding",
      subtitle: "Capital Access Network",
      description:
        "Connect with investors, get loan pre-approvals, and access government grants specifically available for Tanzanian entrepreneurs.",
      benefits: [
        "Investor Matching",
        "Loan Pre-approval",
        "Grant Applications",
        "Pitch Deck Builder",
      ],
      color: "from-purple-500 to-pink-500",
      demo: "Access to 500M+ TSh funding opportunities",
    },
    {
      icon: Users,
      title: "Elite Network",
      subtitle: "Community & Mentorship",
      description:
        "Join Tanzania's most exclusive entrepreneur network with mentorship from successful business leaders and peer-to-peer learning.",
      benefits: [
        "Expert Mentorship",
        "Peer Networks",
        "Industry Events",
        "Success Tracking",
      ],
      color: "from-orange-500 to-red-500",
      demo: "Connect with 1,000+ successful entrepreneurs",
    },
  ];

  const platformCapabilities = [
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      desc: "Live business metrics and insights",
    },
    {
      icon: FileText,
      title: "Document Automation",
      desc: "Generate legal documents instantly",
    },
    {
      icon: Globe,
      title: "Market Intelligence",
      desc: "Tanzania-specific market data",
    },
    {
      icon: Target,
      title: "Goal Tracking",
      desc: "Automated milestone monitoring",
    },
    {
      icon: Zap,
      title: "Quick Setup",
      desc: "Launch your business in days, not months",
    },
    {
      icon: Rocket,
      title: "Scale Fast",
      desc: "Growth acceleration tools and strategies",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Register & Assess",
      description:
        "Our AI analyzes your business idea and market potential in minutes",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Plan & Validate",
      description:
        "Get a customized business plan with market validation and financial projections",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Launch & Comply",
      description:
        "Automated business registration and compliance with all Tanzanian requirements",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      title: "Scale & Succeed",
      description:
        "Access funding, mentorship, and growth tools to dominate your market",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
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
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, mainFeatures.length]);

  return (
    <section
      ref={sectionRef}
      className='relative py-32 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden'>
      {/* Dynamic Background */}
      <div className='absolute inset-0'>
        {/* Animated grid */}
        <div className='absolute inset-0 opacity-5'>
          <div
            className='w-full h-full'
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
              animation: "drift 20s ease-in-out infinite alternate",
            }}
          />
        </div>

        {/* Floating tech elements */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='absolute opacity-20'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `techFloat ${
                8 + Math.random() * 6
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}>
            <div className='w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full'></div>
          </div>
        ))}

        {/* Large gradient orbs */}
        <div
          className='absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse'
          style={{ animationDuration: "4s" }}></div>
        <div
          className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse'
          style={{ animationDuration: "6s", animationDelay: "2s" }}></div>
      </div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <div
            className={`inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-cyan-500/20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <Sparkles className='w-5 h-5 text-cyan-400 animate-pulse' />
            <span className='text-cyan-200 font-medium'>
              World-Class Technology, Tanzania-First Approach
            </span>
            <div className='w-2 h-2 bg-cyan-400 rounded-full animate-ping'></div>
          </div>

          <h2
            className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            Everything You Need to
            <br />
            <span className='bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse'>
              Dominate Your Market
            </span>
          </h2>

          <p
            className={`text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            A complete business ecosystem designed specifically for Tanzanian
            entrepreneurs, powered by cutting-edge AI and local expertise.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className='grid lg:grid-cols-2 gap-8 mb-20 max-w-7xl mx-auto'>
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}>
              <div
                className={`relative p-[2px] rounded-3xl bg-gradient-to-r ${
                  feature.color
                } transition-all duration-500 ${
                  hoveredCard === index || activeFeature === index
                    ? "scale-105 shadow-2xl shadow-blue-500/20"
                    : "scale-100"
                }`}>
                <div className='bg-slate-800/90 backdrop-blur-sm rounded-3xl p-8 h-full'>
                  {/* Feature Header */}
                  <div className='flex items-start gap-6 mb-6'>
                    <div
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${
                        feature.color
                      } flex items-center justify-center transition-all duration-500 ${
                        hoveredCard === index
                          ? "rotate-12 scale-110"
                          : "rotate-0 scale-100"
                      }`}>
                      <feature.icon className='w-8 h-8 text-white' />
                      {(hoveredCard === index || activeFeature === index) && (
                        <div className='absolute inset-0 rounded-2xl bg-white/20 animate-ping'></div>
                      )}
                    </div>

                    <div className='flex-1'>
                      <div className='text-sm text-blue-300 font-medium mb-1'>
                        {feature.subtitle}
                      </div>
                      <h3 className='text-2xl font-bold text-white mb-2'>
                        {feature.title}
                      </h3>
                      <div
                        className={`text-sm font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                        {feature.demo}
                      </div>
                    </div>
                  </div>

                  {/* Feature Description */}
                  <p className='text-blue-100 leading-relaxed mb-6'>
                    {feature.description}
                  </p>

                  {/* Benefits Grid */}
                  <div className='grid grid-cols-2 gap-3 mb-6'>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className={`flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 ${
                          hoveredCard === index
                            ? "bg-white/10 border-white/20"
                            : ""
                        }`}>
                        <CheckCircle
                          className={`w-4 h-4 text-green-400 transition-all duration-300 ${
                            hoveredCard === index ? "animate-bounce" : ""
                          }`}
                        />
                        <span className='text-sm text-blue-200 font-medium'>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive CTA */}
                  <div
                    className={`flex items-center justify-between p-4 rounded-xl bg-gradient-to-r ${
                      feature.color
                    } bg-opacity-10 border border-white/10 cursor-pointer transition-all duration-300 ${
                      hoveredCard === index
                        ? "bg-opacity-20 border-white/30"
                        : ""
                    }`}>
                    <span className='text-white font-semibold'>
                      Explore Feature
                    </span>
                    <ArrowRight
                      className={`w-5 h-5 text-white transition-all duration-300 ${
                        hoveredCard === index ? "translate-x-2" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              {hoveredCard === index && (
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-20 blur-xl transition-opacity duration-500`}></div>
              )}
            </div>
          ))}
        </div>

        {/* How It Works Process */}
        <div
          className={`mb-20 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}>
          <div className='text-center mb-16'>
            <h3 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              From Idea to{" "}
              <span className='bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent'>
                Empire
              </span>{" "}
              in 4 Steps
            </h3>
            <p className='text-lg text-blue-200 max-w-2xl mx-auto'>
              Our proven process has helped 15,000+ entrepreneurs build
              successful businesses
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
            {processSteps.map((step, index) => (
              <div key={index} className='group relative'>
                {/* Connection line (hidden on mobile) */}
                {index < processSteps.length - 1 && (
                  <div className='hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-white/20 to-transparent transform -translate-y-1/2 z-10'></div>
                )}

                <div className='text-center'>
                  <div className='relative mb-6'>
                    <div
                      className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <step.icon className='w-10 h-10 text-white' />
                    </div>
                    <div className='absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center'>
                      <span className='text-black font-bold text-sm'>
                        {step.step}
                      </span>
                    </div>
                  </div>

                  <h4 className='text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300'>
                    {step.title}
                  </h4>
                  <p className='text-blue-200 leading-relaxed group-hover:text-blue-100 transition-colors duration-300'>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Capabilities */}
        <div
          className={`transition-all duration-1000 delay-1400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              Plus Many More Powerful Tools
            </h3>
            <p className='text-lg text-blue-200'>
              A comprehensive suite designed to accelerate your business growth
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto'>
            {platformCapabilities.map((capability, index) => (
              <div
                key={index}
                className='group text-center transition-all duration-500 hover:scale-110'>
                <div className='relative mb-4'>
                  <div className='w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center group-hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm'>
                    <capability.icon className='w-8 h-8 text-blue-400 group-hover:animate-pulse' />
                  </div>
                  <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg'></div>
                </div>

                <h4 className='text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300'>
                  {capability.title}
                </h4>
                <p className='text-sm text-blue-300 group-hover:text-blue-200 transition-colors duration-300'>
                  {capability.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Guarantee */}
        <div
          className={`mt-20 transition-all duration-1000 delay-1600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className='bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto text-center'>
            <div className='flex justify-center mb-6'>
              <div className='w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl flex items-center justify-center'>
                <Award className='w-10 h-10 text-white' />
              </div>
            </div>

            <h3 className='text-2xl md:text-3xl font-bold text-white mb-4'>
              95% Success Rate Guarantee
            </h3>
            <p className='text-blue-200 mb-8 max-w-2xl mx-auto text-lg leading-relaxed'>
              Join the 95% of entrepreneurs who achieve their business goals
              with TanzaniaBiz. Our AI-powered platform and expert guidance
              ensure your success.
            </p>

            <div className='grid md:grid-cols-3 gap-6 mb-8'>
              <div className='flex items-center justify-center gap-3'>
                <Clock className='w-6 h-6 text-blue-400' />
                <div className='text-left'>
                  <div className='text-white font-semibold'>24 Hours</div>
                  <div className='text-sm text-blue-300'>To Get Started</div>
                </div>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <Shield className='w-6 h-6 text-green-400' />
                <div className='text-left'>
                  <div className='text-white font-semibold'>100% Compliant</div>
                  <div className='text-sm text-blue-300'>
                    With TZ Regulations
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <TrendingUp className='w-6 h-6 text-purple-400' />
                <div className='text-left'>
                  <div className='text-white font-semibold'>500M+ TSh</div>
                  <div className='text-sm text-blue-300'>Revenue Generated</div>
                </div>
              </div>
            </div>

            <button className='group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105'>
              <MousePointer2 className='w-5 h-5 group-hover:animate-bounce' />
              <span className='text-lg'>Try Interactive Demo</span>
              <div className='w-2 h-2 bg-white rounded-full animate-ping'></div>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes techFloat {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-40px) translateX(-5px) rotate(180deg);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-20px) translateX(-15px) rotate(270deg);
            opacity: 0.4;
          }
        }

        @keyframes drift {
          0% {
            transform: translateX(0px) translateY(0px);
          }
          100% {
            transform: translateX(20px) translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
