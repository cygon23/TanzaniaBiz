import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Users,
  TrendingUp,
  Award,
  Calendar,
  Building2,
  Heart,
  Lightbulb,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Story = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const sectionRef = useRef(null);

  const timelineData = [
    {
      year: "2021",
      title: "The Vision Born",
      description:
        "A team of economists, technologists, and entrepreneurs identified the gap in Tanzania's business ecosystem.",
      icon: Lightbulb,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2022",
      title: "Platform Launch",
      description:
        "Launched with AI-powered tools and local compliance automation for Tanzanian businesses.",
      icon: Building2,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2023",
      title: "Rapid Growth",
      description:
        "Reached 10,000+ entrepreneurs with 90% success rate in business goal achievement.",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
    },
    {
      year: "2024",
      title: "Market Leader",
      description:
        "15,000+ businesses served with 95% success rate, becoming Tanzania's #1 business platform.",
      icon: Award,
      color: "from-orange-500 to-red-500",
    },
  ];

  const impactStats = [
    { number: "15,000+", label: "Entrepreneurs Served", icon: Users },
    { number: "95%", label: "Success Rate", icon: Award },
    { number: "26", label: "Regions Covered", icon: MapPin },
    { number: "500M+", label: "TSh Revenue Generated", icon: TrendingUp },
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
        setActiveTimeline((prev) => (prev + 1) % timelineData.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className='relative py-32 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0'>
        {/* Floating geometric shapes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className='absolute opacity-10'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}>
            <div
              className='w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rotate-45'
              style={{
                borderRadius: `${Math.random() * 50}%`,
              }}
            />
          </div>
        ))}

        {/* Tanzania map silhouette effect */}
        <div className='absolute top-20 right-10 w-96 h-96 opacity-5'>
          <svg viewBox='0 0 200 200' className='w-full h-full'>
            <path
              d='M50,50 Q100,30 150,50 Q170,100 150,150 Q100,170 50,150 Q30,100 50,50'
              fill='url(#tanzaniaGradient)'
              className='animate-pulse'
            />
            <defs>
              <linearGradient
                id='tanzaniaGradient'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='100%'>
                <stop offset='0%' stopColor='#3B82F6' />
                <stop offset='100%' stopColor='#8B5CF6' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <div
            className={`inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-blue-500/20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <Heart className='w-5 h-5 text-red-400 animate-pulse' />
            <span className='text-blue-200 font-medium'>
              Born from Passion, Built for Impact
            </span>
            <Sparkles
              className='w-5 h-5 text-yellow-400 animate-spin'
              style={{ animationDuration: "3s" }}
            />
          </div>

          <h2
            className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            The{" "}
            <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse'>
              TanzaniaBiz
            </span>{" "}
            Story
          </h2>

          <p
            className={`text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            From a simple observation to Tanzania's most powerful business
            transformation platform
          </p>
        </div>

        {/* Mission Statement */}
        <div
          className={`bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-20 border border-white/10 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
          <div className='text-center'>
            <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent'>
                "Tanzania has incredible entrepreneurial talent, but many
                promising businesses fail due to lack of access to the right
                tools, knowledge, and support systems."
              </span>
            </h3>
            <p className='text-lg text-blue-200 max-w-2xl mx-auto'>
              This powerful observation became the foundation of our mission to
              level the playing field for Tanzanian entrepreneurs.
            </p>
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className='mb-20'>
          <h3
            className={`text-3xl font-bold text-white text-center mb-12 transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            Our Journey to Excellence
          </h3>

          <div className='relative max-w-4xl mx-auto'>
            {/* Timeline line */}
            <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30'></div>

            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : index % 2 === 0
                    ? "opacity-0 -translate-x-10"
                    : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${1000 + index * 200}ms` }}>
                {/* Timeline item */}
                <div
                  className={`flex ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } items-center w-full`}>
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    }`}>
                    <div
                      className={`group bg-gradient-to-r ${
                        item.color
                      } p-[2px] rounded-2xl hover:scale-105 transition-all duration-500 ${
                        activeTimeline === index ? "scale-105 shadow-2xl" : ""
                      }`}>
                      <div className='bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6'>
                        <div className='flex items-center gap-3 mb-3'>
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}>
                            <item.icon className='w-6 h-6 text-white' />
                          </div>
                          <div>
                            <div className='text-2xl font-bold text-white'>
                              {item.year}
                            </div>
                            <div className='text-lg font-semibold text-blue-200'>
                              {item.title}
                            </div>
                          </div>
                        </div>
                        <p className='text-blue-100 leading-relaxed'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Central timeline dot */}
                  <div className='relative z-10'>
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${
                        item.color
                      } transition-all duration-500 ${
                        activeTimeline === index
                          ? "scale-150 shadow-lg"
                          : "scale-100"
                      }`}>
                      <div className='absolute inset-0 rounded-full animate-ping bg-white/30'></div>
                    </div>
                  </div>

                  <div className='w-5/12'></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div
          className={`transition-all duration-1000 delay-1400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <h3 className='text-3xl font-bold text-white text-center mb-12'>
            Our Impact Across Tanzania
          </h3>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto'>
            {impactStats.map((stat, index) => (
              <div key={index} className='group text-center'>
                <div className='relative mb-6'>
                  <div className='w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 backdrop-blur-sm'>
                    <stat.icon className='w-10 h-10 text-blue-400 group-hover:animate-bounce' />
                  </div>
                  <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl'></div>
                </div>

                <div className='text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300'>
                  {stat.number}
                </div>
                <div className='text-blue-200 font-medium group-hover:text-white transition-colors duration-300'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className='inline-flex items-center gap-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 cursor-pointer group'>
            <span className='text-lg'>Join Our Success Story</span>
            <ArrowRight className='w-5 h-5 group-hover:translate-x-2 transition-transform duration-300' />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-15px) rotate(90deg) scale(1.1);
          }
          50% {
            transform: translateY(-30px) rotate(180deg) scale(0.9);
          }
          75% {
            transform: translateY(-15px) rotate(270deg) scale(1.1);
          }
        }
      `}</style>
    </section>
  );
};

export default Story;
