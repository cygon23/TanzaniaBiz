import React, { useState, useEffect, useRef } from "react";
import {
  Star,
  Quote,
  TrendingUp,
  Award,
  Building2,
  Users,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Play,
  CheckCircle,
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import avatar from "@/assets/avatar.png";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredStat, setHoveredStat] = useState(null);
  const sectionRef = useRef(null);
  

  const testimonials = [
    {
      id: 1,
      name: "Amina Hassan",
      title: "CEO & Founder",
      company: "Kilimanjaro Tech Solutions",
      location: "Moshi, Tanzania",
      rating: 4,
      testimonial:
        "TanzaniaBiz transformed my tech startup from an idea to a TSh 50M revenue company in just 18 months. The AI-powered market insights helped me identify the perfect niche, and their compliance automation saved me months of paperwork.",
      results: {
        revenue: "TSh 50M+",
        growth: "400%",
        employees: "25",
      },
      businessType: "Technology",
      joinedDate: "2022",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "John Mwanza",
      title: "Managing Director",
      company: "Safari Logistics Ltd",
      location: "Dar es Salaam, Tanzania",
      rating: 5,
      testimonial:
        "The funding network feature connected me with the perfect investor within 3 months. TanzaniaBiz didn't just help me find capital – they prepared me with the right pitch, financial projections, and business strategy.",
      results: {
        funding: "TSh 180M",
        expansion: "3 Cities",
        jobs: "60",
      },
      businessType: "Logistics",
      joinedDate: "2023",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      name: "Fatma Juma",
      title: "Founder",
      company: "Zanzibar Spice Co.",
      location: "Stone Town, Zanzibar",
      rating: 5,
      testimonial:
        "From a small spice shop to exporting across East Africa! TanzaniaBiz's market intelligence showed me untapped opportunities, and their compliance tools made international trade documentation effortless.",
      results: {
        markets: "5 Countries",
        revenue: "TSh 120M",
        growth: "600%",
      },
      businessType: "Export/Import",
      joinedDate: "2021",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      name: "Michael Kitenge",
      title: "CEO",
      company: "AgriTech Tanzania",
      location: "Arusha, Tanzania",
      rating: 5,
      testimonial:
        "TanzaniaBiz connected me with agricultural experts, investors, and technology partners. What started as a farming consultation idea is now Tanzania's leading AgriTech platform serving 5,000+ farmers.",
      results: {
        farmers: "5,000+",
        revenue: "TSh 200M",
        impact: "10 Regions",
      },
      businessType: "AgriTech",
      joinedDate: "2022",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      name: "Grace Mbwana",
      title: "Founder & CEO",
      company: "EduCare Solutions",
      location: "Dodoma, Tanzania",
      rating: 5,
      testimonial:
        "The mentorship network introduced me to education industry veterans who guided my EdTech startup to success. TanzaniaBiz's AI recommendations helped me pivot at the right time, leading to explosive growth.",
      results: {
        students: "50,000+",
        schools: "200+",
        revenue: "TSh 80M",
      },
      businessType: "Education Technology",
      joinedDate: "2023",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const successStats = [
    {
      icon: TrendingUp,
      number: "95%",
      label: "Success Rate",
      description: "Of businesses achieve their goals",
      color: "text-green-400",
    },
    {
      icon: Award,
      number: "4.9/5",
      label: "Customer Rating",
      description: "Based on 10,000+ reviews",
      color: "text-yellow-400",
    },
    {
      icon: Building2,
      number: "15,000+",
      label: "Businesses Launched",
      description: "Across all 26 regions",
      color: "text-blue-400",
    },
    {
      icon: Users,
      number: "1M+",
      label: "TSh Revenue Generated",
      description: "By our entrepreneur community",
      color: "text-purple-400",
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
    if (isVisible && isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isAutoPlaying]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section
      ref={sectionRef}
      className='relative py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden'>
      {/* Dynamic Background */}
      <div className='absolute inset-0'>
        {/* Floating quotes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className='absolute opacity-5'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `quoteFloat ${
                5 + Math.random() * 4
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}>
            <Quote className='w-8 h-8 text-blue-400 rotate-12' />
          </div>
        ))}

        {/* Star particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='absolute opacity-20'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `starTwinkle ${
                2 + Math.random() * 3
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}>
            <Star className='w-3 h-3 text-yellow-400' fill='currentColor' />
          </div>
        ))}

        {/* Gradient orbs */}
        <div className='absolute top-20 right-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "3s" }}></div>
      </div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <div
            className={`inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-yellow-500/20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <Star
              className='w-5 h-5 text-yellow-400 animate-spin'
              style={{ animationDuration: "3s" }}
            />
            <span className='text-yellow-200 font-medium'>
              Real Stories, Real Success, Real Impact
            </span>
            <Sparkles className='w-5 h-5 text-orange-400 animate-pulse' />
          </div>

          <h2
            className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            Entrepreneurs Are
            <br />
            <span className='bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse'>
              Loving TanzaniaBiz
            </span>
          </h2>

          <p
            className={`text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            From Dar es Salaam to Zanzibar, from Moshi to Mbeya – Tanzanian
            entrepreneurs are building incredible businesses with our platform.
          </p>
        </div>

        {/* Success Statistics */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-6xl mx-auto transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          {successStats.map((stat, index) => (
            <div
              key={index}
              className='group text-center transition-all duration-500 hover:scale-110'
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}>
              <div className='relative mb-6'>
                <div
                  className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all duration-300 backdrop-blur-sm ${
                    hoveredStat === index ? "scale-110 rotate-12" : ""
                  }`}>
                  <stat.icon
                    className={`w-10 h-10 ${stat.color} group-hover:animate-bounce`}
                  />
                </div>
                {hoveredStat === index && (
                  <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-xl animate-pulse'></div>
                )}
              </div>

              <div className='text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300'>
                {stat.number}
              </div>
              <div className='text-lg font-semibold text-blue-200 mb-1 group-hover:text-white transition-colors duration-300'>
                {stat.label}
              </div>
              <div className='text-sm text-blue-300 group-hover:text-blue-100 transition-colors duration-300'>
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div
          className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
          <div
            className={`relative bg-gradient-to-r ${currentTestimonial.color} p-[2px] rounded-3xl`}>
            <div className='bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 md:p-12'>
              {/* Navigation Controls */}
              <div className='flex justify-between items-center mb-8'>
                <div className='flex items-center gap-4'>
                  <button
                    onClick={prevTestimonial}
                    className='w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm'>
                    <ChevronLeft className='w-6 h-6 text-white' />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className='w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm'>
                    <ChevronRight className='w-6 h-6 text-white' />
                  </button>
                </div>

                <div className='flex gap-2'>
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeTestimonial
                          ? "bg-white scale-125"
                          : "bg-white/30 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className='grid md:grid-cols-3 gap-8 items-center'>
                {/* Customer Info */}
                <div className='text-center md:text-left'>
                  <div className='relative mb-6'>
                    <div className='w-32 h-32 mx-auto md:mx-0 rounded-3xl overflow-hidden border-4 border-white/20'>
                      <img
                        src={avatar}
                        alt="User Avatar"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    </div>
                    <div className='absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center'>
                      <Award className='w-6 h-6 text-white' />
                    </div>
                  </div>

                  <h3 className='text-2xl font-bold text-white mb-1'>
                    {currentTestimonial.name}
                  </h3>
                  <p className='text-lg text-blue-200 mb-2'>
                    {currentTestimonial.title}
                  </p>
                  <p className='text-blue-300 font-semibold mb-3'>
                    {currentTestimonial.company}
                  </p>

                  <div className='flex items-center justify-center md:justify-start gap-2 mb-4'>
                    <MapPin className='w-4 h-4 text-blue-400' />
                    <span className='text-blue-300 text-sm'>
                      {currentTestimonial.location}
                    </span>
                  </div>

                  <div className='flex justify-center md:justify-start gap-1 mb-4'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className='w-5 h-5 text-yellow-400'
                        fill='currentColor'
                      />
                    ))}
                  </div>

                  <div className='inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20'>
                    <Calendar className='w-4 h-4 text-blue-400' />
                    <span className='text-blue-200 text-sm'>
                      Customer since {currentTestimonial.joinedDate}
                    </span>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className='md:col-span-2'>
                  <div className='relative mb-8'>
                    <Quote className='w-12 h-12 text-blue-400/30 absolute -top-2 -left-2' />
                    <p className='text-xl md:text-2xl text-white leading-relaxed font-medium pl-8'>
                      {currentTestimonial.testimonial}
                    </p>
                  </div>

                  {/* Business Results */}
                  <div className='grid grid-cols-3 gap-6'>
                    {Object.entries(currentTestimonial.results).map(
                      ([key, value], index) => (
                        <div
                          key={key}
                          className='text-center p-4 rounded-2xl bg-white/5 border border-white/10'>
                          <div
                            className={`text-2xl font-bold bg-gradient-to-r ${currentTestimonial.color} bg-clip-text text-transparent mb-2`}>
                            {value}
                          </div>
                          <div className='text-sm text-blue-300 capitalize font-medium'>
                            {key === "revenue"
                              ? "Revenue"
                              : key === "growth"
                              ? "Growth Rate"
                              : key === "employees"
                              ? "Employees"
                              : key === "funding"
                              ? "Funding Raised"
                              : key === "expansion"
                              ? "City Expansion"
                              : key === "jobs"
                              ? "Jobs Created"
                              : key === "markets"
                              ? "Export Markets"
                              : key === "farmers"
                              ? "Farmers Served"
                              : key === "impact"
                              ? "Regional Impact"
                              : key === "students"
                              ? "Students Reached"
                              : key === "schools"
                              ? "Partner Schools"
                              : key}
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  <div className='mt-6 flex items-center gap-3'>
                    <CheckCircle className='w-5 h-5 text-green-400' />
                    <span className='text-blue-200 font-medium'>
                      {currentTestimonial.businessType} • Verified Success Story
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          {testimonials
            .filter((_, index) => index !== activeTestimonial)
            .slice(0, 3)
            .map((testimonial, index) => (
              <div
                key={testimonial.id}
                className='group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer'
                onClick={() =>
                  setActiveTestimonial(
                    testimonials.findIndex((t) => t.id === testimonial.id)
                  )
                }>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/20'>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-bold text-white group-hover:text-blue-300 transition-colors duration-300'>
                      {testimonial.name}
                    </h4>
                    <p className='text-sm text-blue-300'>
                      {testimonial.company}
                    </p>
                    <div className='flex gap-1 mt-1'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className='w-3 h-3 text-yellow-400'
                          fill='currentColor'
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className='text-blue-100 text-sm leading-relaxed mb-4 line-clamp-3'>
                  {testimonial.testimonial.length > 120
                    ? testimonial.testimonial.substring(0, 120) + "..."
                    : testimonial.testimonial}
                </p>

                <div className='flex items-center justify-between'>
                  <span className='text-xs text-blue-400 font-medium'>
                    {testimonial.businessType}
                  </span>
                  <ArrowRight className='w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform duration-300' />
                </div>
              </div>
            ))}
        </div>

        {/* Video Testimonials CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className='bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Want to See More Success Stories?
            </h3>
            <p className='text-blue-200 mb-8 max-w-2xl mx-auto'>
              Watch video testimonials from our entrepreneur community and
              discover how TanzaniaBiz is transforming businesses across
              Tanzania.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 via-pink-600 to-purple-600 hover:from-red-600 hover:via-pink-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105'>
                <Play className='w-5 h-5 group-hover:animate-bounce' />
                Watch Video Stories
                <ArrowRight className='w-5 h-5 group-hover:translate-x-2 transition-transform duration-300' />
              </button>

              <button className='flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 rounded-2xl text-white font-medium backdrop-blur-sm'>
                <Heart className='w-5 h-5' />
                Share Your Success Story
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes quoteFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(12deg) scale(1);
            opacity: 0.05;
          }
          25% {
            transform: translateY(-20px) rotate(25deg) scale(1.1);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-40px) rotate(12deg) scale(0.9);
            opacity: 0.08;
          }
          75% {
            transform: translateY(-20px) rotate(-5deg) scale(1.1);
            opacity: 0.1;
          }
        }

        @keyframes starTwinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
