import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Target,
  Users,
  Award,
  Lightbulb,
  Heart,
  Globe,
  Sparkles,
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Play,
  ChevronRight,
  Brain,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/landing/FooterV";


const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "Empowering Tanzanian entrepreneurs with world-class tools and knowledge to build successful businesses.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "Building a supportive ecosystem where entrepreneurs can learn, grow, and succeed together.",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Leveraging cutting-edge AI and technology to solve real business challenges in Tanzania.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Globe,
    title: "Local Impact",
    description:
      "Creating solutions tailored specifically for Tanzania's unique business environment and culture.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
];

const team = [
  {
    name: "Expert",
    role: "CEO & Co-Founder",
    background:
      "Former World Bank economist with 15+ years in African development",
    expertise: "Economic Development, Fintech, Policy",
    color: "text-blue-600",
  },
  {
    name: "Expert",
    role: "CTO & Co-Founder",
    background:
      "Ex-Google engineer, AI/ML specialist with focus on emerging markets",
    expertise: "AI/ML, Software Architecture, Scalable Systems",
    color: "text-purple-600",
  },
  {
    name: "Expert",
    role: "Head of Business Development",
    background: "Serial entrepreneur with 3 successful exits in East Africa",
    expertise: "Business Strategy, Partnerships, Market Expansion",
    color: "text-green-600",
  },
  {
    name: "Expert",
    role: "Head of Compliance",
    background: "Former BRELA official with deep regulatory knowledge",
    expertise: "Legal Compliance, Government Relations, Policy",
    color: "text-orange-600",
  },
];

const milestones = [
  {
    year: "2021",
    title: "Foundation",
    description:
      "TanzaniaBiz founded with vision to democratize business success",
    icon: Sparkles,
    color: "from-blue-500 to-purple-600",
  },
  {
    year: "2022",
    title: "Platform Launch",
    description: "Beta platform launched with 1,000+ early entrepreneurs",
    icon: TrendingUp,
    color: "from-green-500 to-blue-600",
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Advanced AI assistant launched in Swahili and English",
    icon: Brain,
    color: "from-purple-500 to-pink-600",
  },
  {
    year: "2024",
    title: "Scale & Impact",
    description: "15,000+ entrepreneurs served with 95% success rate",
    icon: Award,
    color: "from-orange-500 to-red-600",
  },
];

const stats = [
  {
    number: "15,000+",
    label: "Entrepreneurs Empowered",
    icon: Users,
    color: "text-blue-600",
  },
  {
    number: "95%",
    label: "Business Success Rate",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    number: "500+",
    label: "Expert Mentors",
    icon: Star,
    color: "text-purple-600",
  },
  {
    number: "100%",
    label: "Compliance Achievement",
    icon: Shield,
    color: "text-orange-600",
  },
];

const About = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [hoveredTeam, setHoveredTeam] = useState(null);
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
        className='fixed w-4 h-4 bg-blue-500/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out'
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          transform:
            hoveredValue !== null || hoveredTeam !== null
              ? "scale(3)"
              : "scale(1)",
        }}
      />

      {/* Hero Section */}
      <section className='relative py-20 lg:py-32 bg-white overflow-hidden'>
        {/* Animated background elements */}
        <div className='absolute inset-0'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse'></div>
          <div
            className='absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse'
            style={{ animationDelay: "1s" }}></div>
          <div
            className='absolute top-1/2 left-1/3 w-48 h-48 bg-green-400/10 rounded-full blur-2xl animate-bounce'
            style={{ animationDelay: "2s", animationDuration: "4s" }}></div>
        </div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-white/20 rounded-full animate-ping'
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
              <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20'>
                <Heart className='w-4 h-4 text-red-300' />
                <span className='text-sm font-medium text-white/90'>
                  Empowering Tanzania
                </span>
                <div className='w-1 h-1 bg-white/50 rounded-full' />
                <Globe className='w-4 h-4 text-blue-300' />
                <span className='text-sm font-medium text-white/90'>
                  Since 2021
                </span>
              </div>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight'>
              <span
                className='inline-block animate-bounce'
                style={{ animationDelay: "0.1s" }}>
                Empowering
              </span>{" "}
              <span
                className='inline-block animate-bounce'
                style={{ animationDelay: "0.2s" }}>
                Tanzania's
              </span>{" "}
              <br />
              <span
                className='inline-block animate-bounce bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
                style={{ animationDelay: "0.3s" }}>
                Entrepreneurial
              </span>{" "}
              <span
                className='inline-block animate-bounce text-blue-200'
                style={{ animationDelay: "0.4s" }}>
                Future
              </span>
            </h1>

            <p className='text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]'>
              We're on a mission to democratize business success by providing
              every Tanzanian entrepreneur with the tools, knowledge, and
              support they need to build thriving businesses.
            </p>

            {/* Animated Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-500 ${
                    currentStat === index ? "scale-105 bg-white/20" : ""
                  }`}
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
                  }}>
                  {currentStat === index && (
                    <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse' />
                  )}
                  <stat.icon
                    className={`w-8 h-8 ${
                      stat.color
                    } mx-auto mb-3 transition-transform duration-300 ${
                      currentStat === index ? "scale-110" : ""
                    }`}
                  />
                  <div className='text-3xl md:text-4xl font-bold text-white mb-1'>
                    <CountUp end={stat.number} />
                  </div>
                  <p className='text-blue-200 text-sm font-medium'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 font-medium'>
                <Sparkles className='w-4 h-4' />
                Our Journey
              </div>
              <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-6'>
                The Story Behind
                <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                  {" "}
                  Our Mission
                </span>
              </h2>
            </div>

            <Card className='p-8 lg:p-12 mb-16 bg-white/80 backdrop-blur-sm border-slate-200 shadow-2xl'>
              <div className='prose prose-lg max-w-none'>
                <p className='text-slate-600 leading-relaxed mb-6 text-lg'>
                  TanzaniaBiz was born from a simple but powerful observation:
                  Tanzania has incredible entrepreneurial talent, but many
                  promising businesses fail due to lack of access to the right
                  tools, knowledge, and support systems.
                </p>
                <p className='text-slate-600 leading-relaxed mb-6 text-lg'>
                  Founded in 2021 by a team of economists, technologists, and
                  successful entrepreneurs, we set out to level the playing
                  field by creating a comprehensive platform that brings
                  world-class business resources directly to Tanzanian
                  entrepreneurs.
                </p>
                <p className='text-slate-600 leading-relaxed text-lg'>
                  Today, we're proud to serve over 15,000 entrepreneurs across
                  Tanzania, with a 95% success rate in helping businesses
                  achieve their goals. Our platform combines cutting-edge AI
                  technology with deep local knowledge to provide personalized
                  guidance, compliance automation, and access to funding
                  opportunities.
                </p>
              </div>
            </Card>

            {/* Timeline */}
            <div className='space-y-8'>
              <div className='text-center mb-12'>
                <h3 className='text-3xl md:text-4xl font-bold text-slate-800 mb-4'>
                  Our Milestones
                </h3>
                <p className='text-lg text-slate-600'>
                  Key moments in our journey to transform Tanzania's business
                  landscape
                </p>
              </div>

              {milestones.map((milestone, index) => (
                <Card
                  key={index}
                  className='p-8 group bg-white border-slate-200 hover:shadow-2xl hover:border-slate-300 transition-all duration-500 hover:-translate-y-1'
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                  }}>
                  <div className='flex items-center gap-8'>
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${milestone.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <milestone.icon className='w-10 h-10 text-white' />
                    </div>
                    <div className='flex-1'>
                      <div className='flex flex-col md:flex-row md:items-center gap-4 mb-4'>
                        <span className='text-3xl md:text-4xl font-bold text-blue-600'>
                          {milestone.year}
                        </span>
                        <h3 className='text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300'>
                          {milestone.title}
                        </h3>
                      </div>
                      <p className='text-lg text-slate-600 leading-relaxed'>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className='py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50/30'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-medium'>
              <Target className='w-4 h-4' />
              Our Values
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-6'>
              What Drives
              <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
                {" "}
                Our Work
              </span>
            </h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              The core principles that guide everything we do at TanzaniaBiz
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <Card
                key={index}
                className='group text-center p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-slate-300 transition-all duration-500 hover:-translate-y-2 cursor-pointer'
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}>
                {/* Hover background effect */}
                <div
                  className={`absolute inset-0 ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
                />

                <div className='relative z-10'>
                  <div
                    className={`w-16 h-16 rounded-2xl ${value.bgColor} border border-slate-200 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className='text-xl font-bold mb-4 text-slate-800 group-hover:text-slate-900 transition-colors duration-300'>
                    {value.title}
                  </h3>
                  <p className='text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300'>
                    {value.description}
                  </p>
                </div>

                {/* Floating particles on hover */}
                {hoveredValue === index && (
                  <div className='absolute inset-0 pointer-events-none'>
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 ${value.color.replace(
                          "text-",
                          "bg-"
                        )} rounded-full animate-ping`}
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
        </div>
      </section>

      {/* Team */}
      <section className='py-20 lg:py-32 bg-white'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6 font-medium'>
              <Users className='w-4 h-4' />
              Leadership Team
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-6'>
              Meet the Visionaries Behind
              <span className='bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'>
                {" "}
                TanzaniaBiz
              </span>
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {team.map((member, index) => (
              <Card
                key={index}
                className='group p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-slate-300 transition-all duration-500 hover:-translate-y-2 cursor-pointer'
                onMouseEnter={() => setHoveredTeam(index)}
                onMouseLeave={() => setHoveredTeam(null)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                }}>
                <div className='relative z-10'>
                  <div className='mb-6'>
                    <h3 className='text-2xl font-bold mb-2 text-slate-800 group-hover:text-slate-900 transition-colors duration-300'>
                      {member.name}
                    </h3>
                    <p className={`${member.color} font-bold text-lg mb-4`}>
                      {member.role}
                    </p>
                    <p className='text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300'>
                      {member.background}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {member.expertise.split(", ").map((skill, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 ${member.color
                            .replace("text-", "bg-")
                            .replace("-600", "-50")} ${
                            member.color
                          } text-sm rounded-full border ${member.color
                            .replace("text-", "border-")
                            .replace("-600", "-200")} font-medium`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating particles on hover */}
                {hoveredTeam === index && (
                  <div className='absolute inset-0 pointer-events-none'>
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className='absolute w-1 h-1 bg-blue-400 rounded-full animate-ping'
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 150}ms`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className='py-20 lg:py-32 relative'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-20 animate-pulse' />
            <div className='relative bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 lg:p-16 text-white overflow-hidden'>
              {/* Background pattern */}
              <div className='absolute inset-0 opacity-10'>
                <div className='absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse' />
                <div
                  className='absolute bottom-10 left-10 w-24 h-24 bg-blue-300 rounded-full blur-2xl animate-bounce'
                  style={{ animationDuration: "3s" }}
                />
              </div>

              <div className='relative z-10 max-w-4xl mx-auto text-center'>
                <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20'>
                  <Rocket className='w-5 h-5 text-blue-300 animate-bounce' />
                  <span className='text-sm font-medium text-blue-100'>
                    Join Our Mission
                  </span>
                </div>

                <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight'>
                  Be Part of Tanzania's
                  <span className='bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent'>
                    {" "}
                    Entrepreneurial Revolution
                  </span>
                </h3>
                <p className='text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto'>
                  Join thousands of successful entrepreneurs who are already
                  transforming their businesses and building the future of
                  Tanzania's economy with our platform.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center'>
                  <Button
                    size='lg'
                    className='bg-white text-slate-900 hover:bg-blue-50 font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105'>
                    <Sparkles className='w-5 h-5 mr-2 animate-spin' />
                    Start Your Journey
                    <ChevronRight className='w-5 h-5 ml-2' />
                  </Button>
                  <Button
                    size='lg'
                    className='bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-2 border-blue-300/50 text-blue-100 hover:bg-blue-500/30 hover:border-blue-300 font-bold px-10 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg'>
                    <Play className='w-5 h-5 mr-2' />
                    Explore Features
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

export default About;
