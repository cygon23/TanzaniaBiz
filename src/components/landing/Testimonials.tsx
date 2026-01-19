import React, { useState, useEffect, useRef } from "react";
import {
  Star,
  Quote,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import avatar from "@/assets/user.jpeg";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      name: "Amina Hassan",
      title: "Tech Entrepreneur",
      location: "Moshi",
      testimonial:
        "TanzaniaBiz transformed my tech startup from an idea to reality. The AI-powered insights and expert guidance made all the difference.",
      color: "from-primary to-primary/80",
    },
    {
      name: "John Mwanza",
      title: "Logistics Director",
      location: "Dar es Salaam",
      testimonial:
        "The funding network connected me with the perfect investors. TanzaniaBiz prepared me with everything I needed to succeed.",
      color: "from-secondary to-secondary/80",
    },
    {
      name: "Fatma Juma",
      title: "Export Business Owner",
      location: "Zanzibar",
      testimonial:
        "From a small shop to exporting across East Africa! The market intelligence and compliance tools were game-changers.",
      color: "from-primary to-primary/90",
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
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      ref={sectionRef}
      className='relative py-32 bg-white overflow-hidden'>
      {/* Background */}
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
            <Sparkles className='w-5 h-5 text-primary animate-pulse' />
            <span className='text-secondary font-semibold'>Success Stories</span>
          </div>

          <h2
            className={`text-4xl md:text-6xl font-bold text-secondary mb-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <span className='bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'>
              Success
            </span>{" "}
            Stories
          </h2>
          <p
            className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            African entrepreneurs are building incredible businesses with our platform
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
          <div className='relative'>
            {/* Main Card */}
            <div className='bg-gradient-to-br from-white via-white to-slate-50 rounded-3xl p-12 md:p-16 shadow-2xl border border-slate-200'>
              {/* Quote Icon */}
              <div
                className={`absolute top-8 left-8 w-16 h-16 bg-gradient-to-r ${testimonials[activeTestimonial].color} rounded-2xl flex items-center justify-center opacity-20`}>
                <Quote className='w-8 h-8 text-white' />
              </div>

              {/* Content */}
              <div className='relative'>
                {/* Stars */}
                <div className='flex justify-center gap-2 mb-8'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-6 h-6 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className='text-2xl md:text-3xl font-medium text-secondary text-center leading-relaxed mb-12'>
                  "{testimonials[activeTestimonial].testimonial}"
                </p>

                {/* Author Info */}
                <div className='flex flex-col items-center'>
                  {/* Avatar */}
                  <div className='relative mb-6'>
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${testimonials[activeTestimonial].color} p-1`}>
                      <img
                        src={avatar}
                        alt={testimonials[activeTestimonial].name}
                        className='w-full h-full rounded-full object-cover'
                      />
                    </div>
                    <div className='absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg'>
                      <Sparkles className='w-4 h-4 text-white' />
                    </div>
                  </div>

                  {/* Name & Details */}
                  <h4 className='text-2xl font-bold text-secondary mb-2'>
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className='text-lg text-slate-600 mb-3'>
                    {testimonials[activeTestimonial].title}
                  </p>
                  <div className='flex items-center gap-2 text-slate-500'>
                    <MapPin className='w-4 h-4' />
                    <span>{testimonials[activeTestimonial].location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-20 w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-slate-200'>
              <ChevronLeft className='w-6 h-6 text-secondary' />
            </button>

            <button
              onClick={nextTestimonial}
              className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-20 w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-slate-200'>
              <ChevronRight className='w-6 h-6 text-secondary' />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className='flex justify-center gap-3 mt-12'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? "w-12 bg-primary"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
