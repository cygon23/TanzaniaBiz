import React, { useState, useEffect, useRef } from "react";
import {
  Handshake,
  Building2,
  GraduationCap,
  Heart,
  Briefcase,
  Users,
  Globe,
  TrendingUp,
  Award,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Star,
  Rocket,
  Target,
  Zap,
} from "lucide-react";

const Partnership = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePartnerType, setActivePartnerType] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const sectionRef = useRef(null);

  const partnershipTypes = [
    {
      id: "corporate",
      title: "Corporate Partners",
      subtitle: "Strategic Business Alliances",
      description:
        "Join forces with Tanzania's leading business platform to expand your reach and impact.",
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
      benefits: [
        "Access to 15,000+ verified businesses",
        "Co-branded marketing opportunities",
        "Revenue sharing programs",
        "Priority feature integration",
      ],
      examples: [
        "Banks & Financial Institutions",
        "Technology Companies",
        "Consulting Firms",
        "Service Providers",
      ],
    },
    {
      id: "investors",
      title: "Investors & VCs",
      subtitle: "Fund the Future",
      description:
        "Connect with high-potential Tanzanian startups and established businesses seeking growth capital.",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      benefits: [
        "Pre-vetted investment opportunities",
        "Detailed business analytics",
        "Direct entrepreneur access",
        "Portfolio management tools",
      ],
      examples: [
        "Venture Capital Firms",
        "Angel Investors",
        "Development Finance",
        "Impact Investors",
      ],
    },
    {
      id: "education",
      title: "Educational Partners",
      subtitle: "Building Tomorrow's Leaders",
      description:
        "Collaborate with us to provide real-world business education and mentorship programs.",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
      benefits: [
        "Student internship programs",
        "Curriculum integration",
        "Research partnerships",
        "Graduate job placement",
      ],
      examples: [
        "Universities",
        "Business Schools",
        "Training Institutes",
        "Certification Bodies",
      ],
    },
    {
      id: "government",
      title: "Government & NGOs",
      subtitle: "Driving Economic Growth",
      description:
        "Partner with us to accelerate economic development and job creation across Tanzania.",
      icon: Globe,
      color: "from-orange-500 to-red-500",
      benefits: [
        "Economic impact reporting",
        "Job creation tracking",
        "Policy recommendations",
        "Community outreach programs",
      ],
      examples: [
        "Government Agencies",
        "Development Partners",
        "NGOs",
        "International Organizations",
      ],
    },
  ];

  const supporterBenefits = [
    {
      icon: Heart,
      title: "Community Impact",
      description:
        "Help create thousands of jobs and strengthen Tanzania's economy",
      metric: "15,000+ businesses supported",
    },
    {
      icon: Star,
      title: "Brand Recognition",
      description: "Get recognized as a champion of Tanzanian entrepreneurship",
      metric: "1M+ entrepreneur network reach",
    },
    {
      icon: Target,
      title: "Market Access",
      description:
        "Direct access to Tanzania's most dynamic business ecosystem",
      metric: "26 regions covered",
    },
    {
      icon: Rocket,
      title: "Innovation Leader",
      description:
        "Be associated with Tanzania's most innovative business platform",
      metric: "95% success rate",
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
        setActivePartnerType((prev) => (prev + 1) % partnershipTypes.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const handlePartnershipInquiry = (type) => {
    // In a real app, this would open a contact form or navigate to a partnership page
    console.log(`Partnership inquiry for: ${type}`);
  };

  return (
    <section
      ref={sectionRef}
      className='relative py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden'>
      {/* Dynamic Background */}
      <div className='absolute inset-0'>
        {/* Connection lines animation */}
        <svg
          className='absolute inset-0 w-full h-full opacity-5'
          viewBox='0 0 1000 1000'>
          {[...Array(15)].map((_, i) => (
            <g key={i}>
              <line
                x1={Math.random() * 1000}
                y1={Math.random() * 1000}
                x2={Math.random() * 1000}
                y2={Math.random() * 1000}
                stroke='url(#connectionGradient)'
                strokeWidth='1'
                className='animate-pulse'
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              />
              <circle
                cx={Math.random() * 1000}
                cy={Math.random() * 1000}
                r='3'
                fill='#3B82F6'
                className='animate-ping'
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            </g>
          ))}
          <defs>
            <linearGradient
              id='connectionGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'>
              <stop offset='0%' stopColor='#3B82F6' />
              <stop offset='50%' stopColor='#8B5CF6' />
              <stop offset='100%' stopColor='#EC4899' />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating partnership icons */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className='absolute opacity-10'
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              animation: `partnerFloat ${
                6 + Math.random() * 4
              }s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}>
            <Handshake className='w-12 h-12 text-blue-400 rotate-12' />
          </div>
        ))}

        {/* Gradient orbs */}
        <div className='absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-1/4 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "2s" }}></div>
      </div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <div
            className={`inline-flex items-center gap-3 bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-pink-500/20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <Handshake className='w-5 h-5 text-pink-400 animate-pulse' />
            <span className='text-pink-200 font-medium'>
              Building Tanzania's Business Ecosystem Together
            </span>
            <Heart className='w-5 h-5 text-red-400 animate-pulse' />
          </div>

          <h2
            className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            Partner with
            <br />
            <span className='bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse'>
              Tanzania's Future
            </span>
          </h2>

          <p
            className={`text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            Join our mission to transform Tanzania's business landscape. Whether
            you're a corporation, investor, educator, or supporter, there's a
            place for you in our ecosystem.
          </p>
        </div>

        {/* Partnership Types Showcase */}
        <div className='mb-20'>
          {/* Partnership Navigation */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            {partnershipTypes.map((type, index) => (
              <button
                key={type.id}
                onClick={() => setActivePartnerType(index)}
                className={`group flex items-center gap-3 px-6 py-3 rounded-2xl border transition-all duration-300 ${
                  activePartnerType === index
                    ? `bg-gradient-to-r ${type.color} text-white border-transparent shadow-lg`
                    : "bg-slate-800/50 text-blue-200 border-white/10 hover:border-white/30 hover:bg-slate-700/50"
                }`}>
                <type.icon
                  className={`w-5 h-5 transition-all duration-300 ${
                    activePartnerType === index ? "animate-bounce" : ""
                  }`}
                />
                <span className='font-medium'>{type.title}</span>
              </button>
            ))}
          </div>

          {/* Active Partnership Display */}
          <div
            className={`transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            {partnershipTypes.map((type, index) => (
              <div
                key={type.id}
                className={`transition-all duration-500 ${
                  activePartnerType === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 absolute"
                }`}>
                {activePartnerType === index && (
                  <div
                    className={`bg-gradient-to-r ${type.color} p-[2px] rounded-3xl max-w-4xl mx-auto`}>
                    <div className='bg-slate-800/90 backdrop-blur-sm rounded-3xl p-8'>
                      <div className='flex items-start gap-6 mb-8'>
                        <div
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${type.color} flex items-center justify-center`}>
                          <type.icon className='w-10 h-10 text-white' />
                        </div>
                        <div className='flex-1'>
                          <div className='text-sm text-blue-300 font-medium mb-2'>
                            {type.subtitle}
                          </div>
                          <h3 className='text-3xl font-bold text-white mb-4'>
                            {type.title}
                          </h3>
                          <p className='text-blue-100 text-lg leading-relaxed'>
                            {type.description}
                          </p>
                        </div>
                      </div>

                      <div className='grid md:grid-cols-2 gap-8'>
                        {/* Benefits */}
                        <div>
                          <h4 className='text-xl font-bold text-white mb-4'>
                            Partnership Benefits
                          </h4>
                          <div className='space-y-3'>
                            {type.benefits.map((benefit, benefitIndex) => (
                              <div
                                key={benefitIndex}
                                className='flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300'>
                                <CheckCircle className='w-5 h-5 text-green-400 flex-shrink-0' />
                                <span className='text-blue-100 font-medium'>
                                  {benefit}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Examples */}
                        <div>
                          <h4 className='text-xl font-bold text-white mb-4'>
                            Perfect For
                          </h4>
                          <div className='space-y-3'>
                            {type.examples.map((example, exampleIndex) => (
                              <div
                                key={exampleIndex}
                                className='flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-white/5 to-blue-500/5 border border-white/10'>
                                <Star className='w-5 h-5 text-yellow-400 flex-shrink-0' />
                                <span className='text-blue-100 font-medium'>
                                  {example}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className='mt-8 flex flex-col sm:flex-row gap-4'>
                        <button
                          onClick={() => handlePartnershipInquiry(type.id)}
                          className={`flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r ${type.color} hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-2xl text-white font-bold`}>
                          <Mail className='w-5 h-5' />
                          Start Partnership Discussion
                          <ArrowRight className='w-5 h-5' />
                        </button>
                        <button className='flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 rounded-2xl text-white font-medium backdrop-blur-sm'>
                          <Phone className='w-5 h-5' />
                          Schedule a Call
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why Support Us */}
        <div
          className={`transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              Why Support TanzaniaBiz?
            </h3>
            <p className='text-lg text-blue-200 max-w-2xl mx-auto'>
              When you partner with us, you're not just supporting a platform –
              you're investing in Tanzania's economic future.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
            {supporterBenefits.map((benefit, index) => (
              <div
                key={index}
                className='group text-center transition-all duration-500 hover:scale-105'
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}>
                <div className='relative mb-6'>
                  <div
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center group-hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm ${
                      hoveredBenefit === index ? "scale-110 rotate-6" : ""
                    }`}>
                    <benefit.icon className='w-10 h-10 text-purple-400 group-hover:animate-pulse' />
                  </div>
                  {hoveredBenefit === index && (
                    <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-lg animate-pulse'></div>
                  )}
                </div>

                <h4 className='text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300'>
                  {benefit.title}
                </h4>
                <p className='text-blue-200 mb-4 leading-relaxed group-hover:text-blue-100 transition-colors duration-300'>
                  {benefit.description}
                </p>
                <div className='text-sm font-bold text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20'>
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className='bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Ready to Build Tanzania's Future Together?
            </h3>
            <p className='text-blue-200 mb-8 max-w-2xl mx-auto'>
              Join our growing network of partners, supporters, and
              collaborators who are making a real impact on Tanzania's business
              landscape.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-600 to-red-600 hover:from-purple-600 hover:via-pink-700 hover:to-red-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105'>
                <Handshake className='w-5 h-5 group-hover:animate-bounce' />
                Become a Partner
                <ArrowRight className='w-5 h-5 group-hover:translate-x-2 transition-transform duration-300' />
              </button>

              <button className='flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 rounded-2xl text-white font-medium backdrop-blur-sm'>
                <MapPin className='w-5 h-5' />
                Visit Our Office in Dar es Salaam
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes partnerFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(12deg) scale(1);
            opacity: 0.1;
          }
          25% {
            transform: translateY(-15px) rotate(25deg) scale(1.1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-30px) rotate(12deg) scale(0.9);
            opacity: 0.15;
          }
          75% {
            transform: translateY(-15px) rotate(-5deg) scale(1.1);
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
};

export default Partnership;
