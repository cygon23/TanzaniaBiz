import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Heart,
  Sparkles,
  Building2,
  Users,
  BookOpen,
  Shield,
  Award,
  Globe,
  ChevronUp,
  Send,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "AI Business Oracle", href: "#features" },
        { name: "Instant Compliance", href: "#features" },
        { name: "Smart Funding", href: "#features" },
        { name: "Elite Network", href: "#features" },
        { name: "Market Intelligence", href: "#features" },
        { name: "Success Stories", href: "#testimonials" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "For Startups", href: "#solutions" },
        { name: "For Growing Businesses", href: "#solutions" },
        { name: "For Enterprises", href: "#solutions" },
        { name: "For Investors", href: "#partnerships" },
        { name: "For Partners", href: "#partnerships" },
        { name: "API Integration", href: "#developers" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Business Guide", href: "#resources" },
        { name: "Compliance Hub", href: "#resources" },
        { name: "Market Reports", href: "#resources" },
        { name: "Webinars", href: "#resources" },
        { name: "Help Center", href: "#support" },
        { name: "Community Forum", href: "#community" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About TanzaniaBiz", href: "#about" },
        { name: "Our Mission", href: "#mission" },
        { name: "Leadership Team", href: "#team" },
        { name: "Careers", href: "#careers" },
        { name: "Press Kit", href: "#press" },
        { name: "Contact Us", href: "#contact" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/tanzaniabiz",
      color: "hover:text-blue-400",
      name: "Facebook",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/tanzaniabiz",
      color: "hover:text-sky-400",
      name: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/tanzaniabiz",
      color: "hover:text-pink-400",
      name: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/tanzaniabiz",
      color: "hover:text-blue-600",
      name: "LinkedIn",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/tanzaniabiz",
      color: "hover:text-red-500",
      name: "YouTube",
    },
  ];

  const achievements = [
    { icon: Users, number: "15,000+", label: "Active Entrepreneurs" },
    { icon: Building2, number: "26", label: "Regions Covered" },
    { icon: Award, number: "95%", label: "Success Rate" },
    { icon: Globe, number: "500M+", label: "TSh Revenue Generated" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className='relative bg-secondary overflow-hidden'>
      {/* Dynamic Background */}
      <div className='absolute inset-0'>
        {/* Subtle grid pattern */}
        <div className='absolute inset-0 opacity-5'>
          <div
            className='w-full h-full'
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Floating elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className='absolute opacity-10'
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              animationName: 'footerFloat',
              animationDuration: `${8 + Math.random() * 4}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDelay: `${i * 0.5}s`,
            }}>
            <Sparkles className='w-6 h-6 text-primary' />
          </div>
        ))}

        {/* Gradient orbs */}
        <div className='absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "2s" }}></div>
      </div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        {/* Newsletter Section - Split Layout */}
        <div className='py-16 border-b border-white/10'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left Side - Ready to Build Your Empire? */}
            <div>
              <div className='inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-primary/20'>
                <Sparkles className='w-4 h-4 text-primary animate-pulse' />
                <span className='text-white/90 font-medium text-sm'>
                  Join Africa's Business Revolution
                </span>
              </div>

              <h3 className='text-3xl md:text-5xl font-bold text-white mb-6 leading-tight'>
                Ready to Build
                <br />
                <span className='bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent'>
                  Your Empire?
                </span>
              </h3>

              <p className='text-lg text-white/80 mb-8 leading-relaxed'>
                Join 15,000+ entrepreneurs who are transforming their business
                ideas into thriving enterprises across Africa.
              </p>

              <div className='flex flex-col sm:flex-row gap-4'>
                <button className='group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105'>
                  <Rocket className='w-5 h-5 group-hover:animate-bounce' />
                  Start Your Journey
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-2 transition-transform duration-300' />
                </button>
              </div>
            </div>

            {/* Right Side - Newsletter Signup */}
            <div>
              <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8'>
                <div className='flex items-center gap-3 mb-6'>
                  <Mail className='w-6 h-6 text-primary' />
                  <h4 className='text-2xl font-bold text-white'>
                    Get Weekly Insights
                  </h4>
                </div>

                <p className='text-white/80 mb-6 leading-relaxed'>
                  Exclusive market intelligence, funding opportunities, and
                  success strategies delivered to your inbox.
                </p>

                <form onSubmit={handleNewsletterSubmit}>
                  <div className='space-y-4'>
                    <div className='relative'>
                      <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email address'
                        className='w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 backdrop-blur-sm'
                        required
                      />
                    </div>
                    <button
                      type='submit'
                      disabled={isSubscribed}
                      className='w-full px-8 py-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'>
                      {isSubscribed ? (
                        <>
                          <Heart className='w-5 h-5' />
                          Subscribed!
                        </>
                      ) : (
                        <>
                          <Send className='w-5 h-5' />
                          Subscribe Now
                        </>
                      )}
                    </button>
                    {isSubscribed && (
                      <div className='text-green-400 text-sm flex items-center justify-center gap-2'>
                        <Heart className='w-4 h-4' />
                        Welcome to the RAV community!
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className='py-16'>
          <div className='grid lg:grid-cols-6 gap-12'>
            {/* Brand Section */}
            <div className='lg:col-span-2'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-gradient-to-r from-primary to-primary/90 rounded-2xl flex items-center justify-center'>
                  <Building2 className='w-6 h-6 text-white' />
                </div>
                <div>
                  <div className='text-2xl font-bold text-white'>
                    RAV
                  </div>
                  <div className='text-white/80 text-sm'>
                    Business Revolution Platform
                  </div>
                </div>
              </div>

              <p className='text-white/80 leading-relaxed mb-8 max-w-sm'>
                Transforming Africa's business landscape through AI-powered
                tools, expert guidance, and a thriving entrepreneur community.
              </p>

              {/* Contact Info */}
              <div className='space-y-4 mb-8'>
                <div className='flex items-center gap-3'>
                  <MapPin className='w-5 h-5 text-primary flex-shrink-0' />
                  <span className='text-white/80'>Dar es Salaam, Tanzania</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Phone className='w-5 h-5 text-primary flex-shrink-0' />
                  <span className='text-white/80'>+255 123 456 789</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Mail className='w-5 h-5 text-primary flex-shrink-0' />
                  <span className='text-white/80'>hello@rav.co.tz</span>
                </div>
              </div>

              {/* Social Links */}
              <div className='flex gap-4'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center text-white/80 ${social.color} transition-all duration-300 hover:scale-110 hover:border-white/40 backdrop-blur-sm`}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.name}>
                    <social.icon className='w-5 h-5' />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className='text-lg font-bold text-white mb-6'>
                  {section.title}
                </h4>
                <ul className='space-y-4'>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className='text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group'>
                        <span>{link.name}</span>
                        <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300' />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className='py-12 border-t border-white/10 border-b border-white/10'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'>
            {achievements.map((achievement, index) => (
              <div key={index} className='group text-center'>
                <div className='w-16 h-16 mx-auto rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300'>
                  <achievement.icon className='w-8 h-8 text-primary group-hover:animate-pulse' />
                </div>
                <div className='text-2xl font-bold text-white mb-1'>
                  {achievement.number}
                </div>
                <div className='text-sm text-white/70'>{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className='py-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            <div className='flex flex-wrap items-center gap-6 text-sm text-white/70'>
              <span>© 2024 RAV. All rights reserved.</span>
              <a
                href='#privacy'
                className='hover:text-white transition-colors duration-300'>
                Privacy Policy
              </a>
              <a
                href='#terms'
                className='hover:text-white transition-colors duration-300'>
                Terms of Service
              </a>
              <a
                href='#cookies'
                className='hover:text-white transition-colors duration-300'>
                Cookie Policy
              </a>
            </div>

            <div className='flex items-center gap-2 text-sm text-white/70'>
              <span>Made with</span>
              <Heart className='w-4 h-4 text-red-400 animate-pulse' />
              <span>for African entrepreneurs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-50 backdrop-blur-sm border border-white/20'
          aria-label='Back to top'>
          <ChevronUp className='w-6 h-6' />
        </button>
      )}

      <style>{`
        @keyframes footerFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.1;
          }
          25% {
            transform: translateY(-10px) rotate(90deg) scale(1.1);
            opacity: 0.15;
          }
          50% {
            transform: translateY(-20px) rotate(180deg) scale(0.9);
            opacity: 0.2;
          }
          75% {
            transform: translateY(-10px) rotate(270deg) scale(1.1);
            opacity: 0.15;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
