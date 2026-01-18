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
        {/* Explosive Header */}
        <div className='text-center mb-16'>
          <div
            className={`inline-flex items-center gap-3 bg-gradient-to-r from-red-50 to-yellow-50 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-red-200 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <Flame className='w-5 h-5 text-red-500 animate-bounce' />
            <span className='text-red-600 font-medium'>
              Limited Time: Explosive Launch Offer!
            </span>
            <Sparkles
              className='w-5 h-5 text-yellow-500 animate-spin'
              style={{ animationDuration: "2s" }}
            />
          </div>

          <h2
            className={`text-5xl md:text-7xl lg:text-8xl font-bold text-secondary mb-8 leading-tight transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <span className='inline-block animate-bounce'>Ready</span>{" "}
            <span
              className='inline-block animate-bounce'
              style={{ animationDelay: "0.1s" }}>
              to
            </span>{" "}
            <span
              className='inline-block animate-bounce'
              style={{ animationDelay: "0.2s" }}>
              Build
            </span>{" "}
            <br />
            <span
              className='bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent'
              style={{ animationDelay: "0.3s" }}>
              Your Empire?
            </span>
          </h2>

          <p
            className={`text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            Join the{" "}
            <span className='text-green-600 font-bold'>
              15,000+ entrepreneurs
            </span>{" "}
            who've transformed their dreams into
            <span className='text-primary font-bold'>
              {" "}
              TSh 500M+ in revenue
            </span>{" "}
            using RAV!
          </p>
        </div>

        {/* Urgency Countdown */}
        <div
          className={`bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-sm rounded-3xl p-8 border border-red-500/20 mb-16 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
          <div className='text-center mb-6'>
            <h3 className='text-2xl font-bold text-secondary mb-2'>
              🔥 Launch Offer Ends In:
            </h3>
            <p className='text-red-600'>
              Don't miss out on 50% OFF your first year!
            </p>
          </div>

          <div className='grid grid-cols-4 gap-4 max-w-md mx-auto'>
            {Object.entries(countdown).map(([unit, value]) => (
              <div key={unit} className='text-center'>
                <div className='bg-gradient-to-b from-red-500 to-red-600 text-white text-2xl md:text-3xl font-bold py-4 px-2 rounded-2xl border border-red-400 shadow-lg'>
                  {value.toString().padStart(2, "0")}
                </div>
                <div className='text-red-600 text-sm font-medium mt-2 capitalize'>
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency Features */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          {urgencyFeatures.map((feature, index) => (
            <div
              key={index}
              className='group bg-white backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:border-primary/30 hover:scale-105 transition-all duration-300 text-center shadow-lg'>
              <div className='w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                <feature.icon
                  className={`w-8 h-8 ${feature.color} group-hover:animate-pulse`}
                />
              </div>
              <p className='text-secondary font-semibold text-sm leading-relaxed'>
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Plans */}
        <div
          className={`mb-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}>
          <div className='text-center mb-12'>
            <h3 className='text-3xl md:text-4xl font-bold text-secondary mb-4'>
              Choose Your Path to Success
            </h3>
            <p className='text-xl text-slate-700 max-w-2xl mx-auto'>
              Select the perfect plan to launch, scale, or dominate your market
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-500 ${
                  offer.popular ? "scale-105 lg:scale-110" : "hover:scale-105"
                }`}>
                {offer.popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 z-10'>
                    <div className='bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg'>
                      <Crown className='w-4 h-4' />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div
                  className={`relative bg-gradient-to-r ${
                    offer.color
                  } p-[2px] rounded-3xl ${
                    offer.popular ? "shadow-2xl shadow-primary/25" : ""
                  }`}>
                  <div className='bg-white backdrop-blur-sm rounded-3xl p-8 h-full'>
                    {/* Plan Header */}
                    <div className='text-center mb-8'>
                      <div
                        className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${offer.color} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                        <Target className='w-10 h-10 text-white' />
                      </div>

                      <h4 className='text-2xl font-bold text-secondary mb-2'>
                        {offer.title}
                      </h4>
                      <p className='text-slate-600 mb-4'>{offer.subtitle}</p>

                      {offer.originalPrice !== offer.price && (
                        <div className='text-red-500 line-through text-lg mb-2'>
                          {offer.originalPrice}
                        </div>
                      )}
                      <div className='flex items-baseline justify-center gap-2 mb-2'>
                        <span
                          className={`text-4xl font-bold bg-gradient-to-r ${offer.color} bg-clip-text text-transparent`}>
                          {offer.price}
                        </span>
                        <span className='text-slate-600'>{offer.duration}</span>
                      </div>

                      {offer.price === "FREE" && (
                        <div className='inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium border border-green-200'>
                          <Gift className='w-4 h-4' />
                          Limited Time Offer
                        </div>
                      )}
                    </div>

                    {/* Features List */}
                    <div className='space-y-4 mb-8'>
                      {offer.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className='flex items-center gap-3'>
                          <CheckCircle className='w-5 h-5 text-green-500 flex-shrink-0' />
                          <span className='text-slate-700'>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => handleGetStarted(offer.title)}
                      className={`w-full py-4 px-8 bg-gradient-to-r ${
                        offer.color
                      } hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-3 ${
                        offer.popular ? "animate-pulse" : ""
                      }`}>
                      <Rocket className='w-5 h-5' />
                      {offer.price === "FREE"
                        ? "Start Free Trial"
                        : "Get Started Now"}
                      <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                    </button>

                    {offer.popular && (
                      <div className='text-center mt-4'>
                        <div className='inline-flex items-center gap-2 text-yellow-500 text-sm font-medium'>
                          <Star className='w-4 h-4' fill='currentColor' />
                          Chosen by 70% of our users
                          <Star className='w-4 h-4' fill='currentColor' />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Mega CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className='relative max-w-4xl mx-auto'>
            {/* Pulsing background effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/15 to-secondary/20 rounded-3xl blur-xl animate-pulse'></div>

            <div className='relative bg-gradient-to-r from-primary via-primary/90 to-secondary p-[3px] rounded-3xl shadow-2xl'>
              <div className='bg-white backdrop-blur-sm rounded-3xl p-12'>
                <div className='mb-8'>
                  <div className='flex justify-center gap-2 mb-6'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className='w-8 h-8 text-yellow-400 animate-pulse'
                        fill='currentColor'
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>

                  <h3 className='text-3xl md:text-5xl font-bold text-secondary mb-6 leading-tight'>
                    Don't Let Your Dreams Wait Another Day!
                  </h3>

                  <p className='text-xl text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed'>
                    Over{" "}
                    <span className='text-green-600 font-bold'>
                      15,000 entrepreneurs
                    </span>{" "}
                    have already started their journey. Join them and transform
                    your business idea into a{" "}
                    <span className='text-primary font-bold'>
                      thriving empire
                    </span>{" "}
                    today!
                  </p>

                  <div className='grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8'>
                    <div className='text-center'>
                      <div className='text-2xl font-bold text-green-600 mb-1'>
                        24 Hours
                      </div>
                      <div className='text-sm text-slate-600'>To Launch</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-2xl font-bold text-primary mb-1'>
                        95% Success
                      </div>
                      <div className='text-sm text-slate-600'>
                        Rate Guaranteed
                      </div>
                    </div>
                    <div className='text-center'>
                      <div className='text-2xl font-bold text-yellow-600 mb-1'>
                        50% OFF
                      </div>
                      <div className='text-sm text-slate-600'>First Year</div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
                  <button
                    onClick={() => handleGetStarted("Free Trial")}
                    className='group relative bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary text-white font-black px-12 py-6 text-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-110 rounded-2xl border-0'>
                    <div className='absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300' />
                    <div className='relative flex items-center gap-4'>
                      <Zap className='w-8 h-8 group-hover:animate-bounce' />
                      START FREE TRIAL NOW
                      <ArrowRight className='w-8 h-8 group-hover:translate-x-2 transition-transform duration-300' />
                    </div>
                  </button>

                  <div className='flex items-center gap-3 text-slate-600'>
                    <Shield className='w-6 h-6 text-green-500' />
                    <div className='text-left'>
                      <div className='font-semibold text-secondary'>Risk-Free Guarantee</div>
                      <div className='text-sm'>30-day money back</div>
                    </div>
                  </div>
                </div>

                {/* Social Proof */}
                <div className='mt-12 pt-8 border-t border-slate-200'>
                  <div className='flex flex-wrap justify-center items-center gap-8'>
                    <div className='flex items-center gap-2'>
                      <TrendingUp className='w-5 h-5 text-green-500' />
                      <span className='text-sm text-slate-600'>
                        500M+ TSh Generated
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Users className='w-5 h-5 text-primary' />
                      <span className='text-sm text-slate-600'>
                        15,000+ Active Users
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Award className='w-5 h-5 text-yellow-500' />
                      <span className='text-sm text-slate-600'>
                        Africa's #1 Platform
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <p className='text-slate-600 text-sm mb-4'>
            Trusted by entrepreneurs across all 26 regions of Tanzania
          </p>
          <div className='flex flex-wrap justify-center gap-8 items-center opacity-60'>
            <div className='text-xs text-slate-600'>
              🏦 Bank of Tanzania Certified
            </div>
            <div className='text-xs text-slate-600'>🛡️ BRELA Compliant</div>
            <div className='text-xs text-slate-600'>📊 TRA Integrated</div>
            <div className='text-xs text-slate-600'>🌍 ISO 27001 Secured</div>
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
