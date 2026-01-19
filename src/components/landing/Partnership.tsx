import React, { useState, useEffect, useRef } from "react";
import {
  Handshake,
  Building2,
  GraduationCap,
  Globe,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Partnership = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const partners = [
    {
      icon: Building2,
      title: "Corporate Partners",
      description: "Strategic alliances with leading businesses",
      color: "from-primary to-primary/80",
    },
    {
      icon: TrendingUp,
      title: "Investors & VCs",
      description: "Fund high-potential African startups",
      color: "from-secondary to-secondary/80",
    },
    {
      icon: GraduationCap,
      title: "Educational",
      description: "Build tomorrow's business leaders",
      color: "from-primary to-primary/90",
    },
    {
      icon: Globe,
      title: "Government & NGOs",
      description: "Drive economic growth together",
      color: "from-secondary to-secondary/90",
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

  return (
    <section
      ref={sectionRef}
      className='relative py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden'>
      {/* Animated Background */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "2s" }}></div>
      </div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center mb-20'>
          <div
            className={`inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-primary/20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <Handshake className='w-5 h-5 text-primary' />
            <span className='text-secondary font-semibold'>
              Partnership Opportunities
            </span>
          </div>

          <h2
            className={`text-4xl md:text-6xl font-bold text-secondary mb-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            Partner with{" "}
            <span className='bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'>
              Africa's Future
            </span>
          </h2>
          <p
            className={`text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            Join us in transforming Africa's business landscape
          </p>
        </div>

        {/* Partnership Wave Design */}
        <div className='max-w-6xl mx-auto mb-16'>
          <div className='relative'>
            {/* Connecting Wave Line */}
            <svg
              className={`absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 transition-all duration-1500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              viewBox='0 0 1200 100'
              preserveAspectRatio='none'>
              <path
                d='M0,50 Q300,20 600,50 T1200,50'
                stroke='url(#gradient)'
                strokeWidth='2'
                fill='none'
                className='animate-pulse'
              />
              <defs>
                <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                  <stop offset='0%' stopColor='#DD762A' stopOpacity='0.3' />
                  <stop offset='50%' stopColor='#DD762A' stopOpacity='0.6' />
                  <stop offset='100%' stopColor='#23110C' stopOpacity='0.3' />
                </linearGradient>
              </defs>
            </svg>

            {/* Partner Cards */}
            <div className='grid md:grid-cols-4 gap-8 relative z-10'>
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className={`group transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}>
                  <div className='relative'>
                    {/* Card */}
                    <div className='bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-slate-200'>
                      {/* Icon */}
                      <div
                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${partner.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <partner.icon className='w-10 h-10 text-white' />
                      </div>

                      {/* Content */}
                      <h3 className='text-xl font-bold text-secondary mb-3 text-center'>
                        {partner.title}
                      </h3>
                      <p className='text-slate-600 text-sm text-center leading-relaxed'>
                        {partner.description}
                      </p>

                      {/* Hover Glow */}
                      <div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${partner.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>
                    </div>

                    {/* Connection Dot */}
                    <div
                      className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${partner.color} shadow-lg transition-all duration-500 group-hover:scale-150`}>
                      <div className='absolute inset-0 rounded-full bg-white/30 animate-ping'></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}>
          <div className='bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 backdrop-blur-sm rounded-3xl p-12 border border-primary/20 shadow-xl text-center'>
            <Sparkles className='w-12 h-12 text-primary mx-auto mb-6 animate-spin' style={{ animationDuration: '3s' }} />
            <h3 className='text-3xl font-bold text-secondary mb-6'>
              Ready to Make an Impact?
            </h3>
            <p className='text-lg text-slate-600 mb-8 max-w-2xl mx-auto'>
              Join our mission to empower 100,000+ African entrepreneurs and
              transform the continent's business ecosystem
            </p>
            <a
              href='/contact'
              className='inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 group'>
              <Handshake className='w-6 h-6 group-hover:animate-bounce' />
              <span className='text-lg'>Become a Partner</span>
              <ArrowRight className='w-6 h-6 group-hover:translate-x-2 transition-transform duration-300' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
