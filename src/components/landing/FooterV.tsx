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
    <footer className='relative bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden'>
      {/* Dynamic Background */}
      <div className='absolute inset-0'>
        {/* Subtle grid pattern */}
        <div className='absolute inset-0 opacity-5'>
          <div
            className='w-full h-full'
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
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
              animation: `footerFloat ${
                8 + Math.random() * 4
              }s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}>
            <Sparkles className='w-6 h-6 text-blue-400' />
          </div>
        ))}

        {/* Gradient orbs */}
        <div className='absolute top-20 left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-20 right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "2s" }}></div>
      </div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        {/* Newsletter Section */}
        <div className='py-16 border-b border-white/10'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-blue-500/20'>
              <Mail className='w-5 h-5 text-blue-400 animate-pulse' />
              <span className='text-blue-200 font-medium'>
                Stay Connected with Tanzania's Business Revolution
              </span>
            </div>

            <h3 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Get Weekly Business Insights
            </h3>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Join 15,000+ entrepreneurs receiving exclusive market
              intelligence, funding opportunities, and success strategies.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className='max-w-md mx-auto'>
              <div className='flex gap-4'>
                <div className='flex-1 relative'>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email address'
                    className='w-full px-6 py-4 bg-slate-800/50 border border-white/20 rounded-2xl text-white placeholder-blue-300 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 backdrop-blur-sm'
                    required
                  />
                </div>
                <button
                  type='submit'
                  disabled={isSubscribed}
                  className='px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'>
                  {isSubscribed ? (
                    <>
                      <Heart className='w-5 h-5' />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <Send className='w-5 h-5' />
                      Subscribe
                    </>
                  )}
                </button>
              </div>
              {isSubscribed && (
                <div className='mt-4 text-green-400 text-sm flex items-center justify-center gap-2'>
                  <Heart className='w-4 h-4' />
                  Welcome to the TanzaniaBiz community!
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className='py-16'>
          <div className='grid lg:grid-cols-6 gap-12'>
            {/* Brand Section */}
            <div className='lg:col-span-2'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center'>
                  <Building2 className='w-6 h-6 text-white' />
                </div>
                <div>
                  <div className='text-2xl font-bold text-white'>
                    TanzaniaBiz
                  </div>
                  <div className='text-blue-300 text-sm'>
                    Business Revolution Platform
                  </div>
                </div>
              </div>

              <p className='text-blue-100 leading-relaxed mb-8 max-w-sm'>
                Transforming Tanzania's business landscape through AI-powered
                tools, expert guidance, and a thriving entrepreneur community.
              </p>

              {/* Contact Info */}
              <div className='space-y-4 mb-8'>
                <div className='flex items-center gap-3'>
                  <MapPin className='w-5 h-5 text-blue-400 flex-shrink-0' />
                  <span className='text-blue-200'>Dar es Salaam, Tanzania</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Phone className='w-5 h-5 text-blue-400 flex-shrink-0' />
                  <span className='text-blue-200'>+255 123 456 789</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Mail className='w-5 h-5 text-blue-400 flex-shrink-0' />
                  <span className='text-blue-200'>hello@tanzaniabiz.co.tz</span>
                </div>
              </div>

              {/* Social Links */}
              <div className='flex gap-4'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-slate-800/50 border border-white/20 rounded-2xl flex items-center justify-center text-blue-300 ${social.color} transition-all duration-300 hover:scale-110 hover:border-white/40 backdrop-blur-sm`}
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
                        className='text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group'>
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
                <div className='w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-blue-400/50 transition-all duration-300'>
                  <achievement.icon className='w-8 h-8 text-blue-400 group-hover:animate-pulse' />
                </div>
                <div className='text-2xl font-bold text-white mb-1'>
                  {achievement.number}
                </div>
                <div className='text-sm text-blue-300'>{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className='py-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            <div className='flex flex-wrap items-center gap-6 text-sm text-blue-300'>
              <span>© 2024 TanzaniaBiz. All rights reserved.</span>
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

            <div className='flex items-center gap-2 text-sm text-blue-300'>
              <span>Made with</span>
              <Heart className='w-4 h-4 text-red-400 animate-pulse' />
              <span>for Tanzanian entrepreneurs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-50 backdrop-blur-sm border border-white/20'
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
