import React, { useState, useEffect, useRef } from "react";
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
  Zap,
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
      "Empowering African entrepreneurs with world-class tools and knowledge to build successful businesses.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "Building a supportive ecosystem where entrepreneurs can learn, grow, and succeed together.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Leveraging cutting-edge AI and technology to solve real business challenges in Africa.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Globe,
    title: "Local Impact",
    description:
      "Creating solutions tailored specifically for Africa's unique business environment and culture.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const team = [
  {
    name: "Expert",
    role: "CEO & Co-Founder",
    background:
      "Former World Bank economist with 15+ years in African development",
    expertise: "Economic Development, Fintech, Policy",
    color: "text-primary",
  },
  {
    name: "Expert",
    role: "CTO & Co-Founder",
    background:
      "Ex-Google engineer, AI/ML specialist with focus on emerging markets",
    expertise: "AI/ML, Software Architecture, Scalable Systems",
    color: "text-secondary",
  },
  {
    name: "Expert",
    role: "Head of Business Development",
    background: "Serial entrepreneur with 3 successful exits in East Africa",
    expertise: "Business Strategy, Partnerships, Market Expansion",
    color: "text-primary",
  },
  {
    name: "Expert",
    role: "Head of Compliance",
    background: "Former BRELA official with deep regulatory knowledge",
    expertise: "Legal Compliance, Government Relations, Policy",
    color: "text-secondary",
  },
];

const milestones = [
  {
    year: "2021",
    title: "Foundation",
    description:
      "RAV founded with vision to democratize business success across Africa",
    icon: Sparkles,
    color: "from-primary to-primary/80",
  },
  {
    year: "2022",
    title: "Platform Launch",
    description: "Beta platform launched with 1,000+ early entrepreneurs",
    icon: TrendingUp,
    color: "from-secondary to-secondary/80",
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Advanced AI assistant launched in Swahili and English",
    icon: Brain,
    color: "from-primary to-primary/90",
  },
  {
    year: "2024",
    title: "Scale & Impact",
    description: "15,000+ entrepreneurs served with 95% success rate",
    icon: Award,
    color: "from-secondary to-secondary/90",
  },
];

const stats = [
  {
    number: "15,000+",
    label: "Entrepreneurs Empowered",
    icon: Users,
    color: "text-primary",
  },
  {
    number: "95%",
    label: "Business Success Rate",
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
    label: "Compliance Achievement",
    icon: Shield,
    color: "text-secondary",
  },
];

const About = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [hoveredTeam, setHoveredTeam] = useState(null);
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
              className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-primary/20 shadow-lg transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}>
              <div className='relative flex items-center'>
                <div className='w-2 h-2 bg-green-500 rounded-full animate-ping absolute' />
                <div className='w-2 h-2 bg-green-500 rounded-full' />
              </div>
              <Heart className='w-4 h-4 text-red-500 animate-pulse' />
              <span className='text-secondary font-semibold text-sm'>
                Empowering Africa Since 2021
              </span>
              <Sparkles className='w-4 h-4 text-primary animate-pulse' />
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
              Building{" "}
              <span className='bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent'>
                Africa's
              </span>
              <br />
              Future Together
            </h1>

            <p
              className={`text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}>
              We're on a mission to democratize business success by providing every
              African entrepreneur with the tools, knowledge, and support they need
              to build thriving businesses.
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
                  label: "Expert Mentors",
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

      {/* Our Story */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse'></div>
          <div
            className='absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse'
            style={{ animationDelay: "2s" }}></div>
        </div>

        <div className='container mx-auto px-4 lg:px-8 relative z-10'>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 font-medium'>
                <Sparkles className='w-4 h-4' />
                Our Journey
              </div>
              <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-6'>
                The Story Behind
                <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                  {" "}
                  Our Mission
                </span>
              </h2>
            </div>

            <Card className='p-8 lg:p-12 mb-16 bg-white backdrop-blur-sm border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500'>
              <div className='prose prose-lg max-w-none'>
                <p className='text-slate-600 leading-relaxed mb-6 text-lg'>
                  RAV was born from a simple but powerful observation:
                  Africa has incredible entrepreneurial talent, but many
                  promising businesses fail due to lack of access to the right
                  tools, knowledge, and support systems.
                </p>
                <p className='text-slate-600 leading-relaxed mb-6 text-lg'>
                  Founded in 2021 by a team of economists, technologists, and
                  successful entrepreneurs, we set out to level the playing
                  field by creating a comprehensive platform that brings
                  world-class business resources directly to African
                  entrepreneurs.
                </p>
                <p className='text-slate-600 leading-relaxed text-lg'>
                  Today, we're proud to serve over 15,000 entrepreneurs across
                  Africa, with a 95% success rate in helping businesses
                  achieve their goals. Our platform combines cutting-edge AI
                  technology with deep local knowledge to provide personalized
                  guidance, compliance automation, and access to funding
                  opportunities.
                </p>
              </div>
            </Card>

            {/* Enhanced Timeline */}
            <div className='space-y-12'>
              <div className='text-center mb-12'>
                <h3 className='text-3xl md:text-4xl font-bold text-slate-800 mb-4'>
                  Our{" "}
                  <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                    Journey
                  </span>{" "}
                  Milestones
                </h3>
                <p className='text-lg text-slate-600'>
                  Key moments in our journey to transform Africa's business
                  landscape
                </p>
              </div>

              {/* Vertical Timeline */}
              <div className='relative'>
                {/* Timeline Line */}
                <div className='absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2'></div>

                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative mb-16 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}>
                    <div
                      className={`flex items-center gap-8 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                      } flex-col md:gap-0`}>
                      {/* Content Card */}
                      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                        <Card
                          className='group p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2'
                          style={{
                            animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                          }}>
                          <div className='flex items-start gap-6'>
                            <div
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${milestone.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                              <milestone.icon className='w-8 h-8 text-white' />
                            </div>
                            <div className='flex-1'>
                              <h3 className='text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-300'>
                                {milestone.title}
                              </h3>
                              <p className='text-slate-600 leading-relaxed'>
                                {milestone.description}
                              </p>
                            </div>
                          </div>
                          <div className='absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300' />
                        </Card>
                      </div>

                      {/* Year Circle */}
                      <div className='absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10'>
                        <div className='relative'>
                          <div className='w-24 h-24 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300'>
                            <span className='text-2xl font-bold text-primary'>
                              {milestone.year}
                            </span>
                          </div>
                          <div className='absolute inset-0 bg-primary/20 rounded-full animate-ping'></div>
                        </div>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className='w-full md:w-5/12 hidden md:block'></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className='py-20 lg:py-32 bg-white relative overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse'></div>
          <div
            className='absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse'
            style={{ animationDelay: "2s" }}></div>
        </div>

        <div className='container mx-auto px-4 lg:px-8 relative z-10'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6 font-medium'>
              <Target className='w-4 h-4' />
              Our Values
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-6'>
              What Drives
              <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                {" "}
                Our Work
              </span>
            </h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              The core principles that guide everything we do at RAV
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <Card
                key={index}
                className='group text-center p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-4 cursor-pointer relative overflow-hidden'
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
                    className={`w-16 h-16 rounded-2xl ${value.bgColor} border border-slate-200 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
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
                    {[...Array(6)].map((_, i) => (
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
      <section className='py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse'></div>
          <div
            className='absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse'
            style={{ animationDelay: "2s" }}></div>
        </div>

        <div className='container mx-auto px-4 lg:px-8 relative z-10'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 font-medium'>
              <Users className='w-4 h-4' />
              Leadership Team
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-6'>
              Meet the Visionaries Behind
              <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                {" "}
                RAV
              </span>
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {team.map((member, index) => (
              <Card
                key={index}
                className='group p-8 bg-white border-slate-200 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-4 cursor-pointer relative overflow-hidden'
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
                            .replace("-600", "-200")} font-medium group-hover:scale-105 transition-transform duration-300`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating particles on hover */}
                {hoveredTeam === index && (
                  <div className='absolute inset-0 pointer-events-none'>
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className='absolute w-1 h-1 bg-primary rounded-full animate-ping'
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
      <section className='py-20 lg:py-32 relative bg-white'>
        <div className='container mx-auto px-4 lg:px-8'>
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
                    Join Our Mission
                  </span>
                </div>

                <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight'>
                  Be Part of Africa's
                  <span className='bg-gradient-to-r from-white to-primary-foreground bg-clip-text text-transparent'>
                    {" "}
                    Entrepreneurial Revolution
                  </span>
                </h3>
                <p className='text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto'>
                  Join thousands of successful entrepreneurs who are already
                  transforming their businesses and building the future of
                  Africa's economy with our platform.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center'>
                  <Button
                    size='lg'
                    className='bg-white text-secondary hover:bg-slate-50 font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105'>
                    <Sparkles className='w-5 h-5 mr-2 animate-spin' style={{ animationDuration: '3s' }} />
                    Start Your Journey
                    <ChevronRight className='w-5 h-5 ml-2' />
                  </Button>
                  <Button
                    size='lg'
                    className='bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white/20 hover:border-white font-bold px-10 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg'>
                    <Play className='w-5 h-5 mr-2' />
                    Explore Features
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

export default About;
