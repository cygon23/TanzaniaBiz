import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Globe,
  Building2,
  User,
  LogIn,
  ArrowRight,
  Search,
  Bell,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/", active: true },
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleDemoLogin = () => {
    window.location.href = "/auth";
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
            : "bg-transparent"
        }`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20'>
            {/* Logo Section */}
            <div className='flex items-center space-x-4'>
              <div className='relative group cursor-pointer'>
                <img src="/logo.png" alt="TanzaniaBiz" className="h-12 w-auto" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-1'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                    item.active
                      ? isScrolled
                        ? "text-blue-600 bg-blue-50"
                        : "text-white bg-white/20"
                      : isScrolled
                      ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}>
                  <span className='relative z-10'>{item.name}</span>
                  {item.active && (
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-xl' />
                  )}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className='hidden lg:flex items-center space-x-4'>
              <button
                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}>
                <Globe className='w-4 h-4 mr-2' />
                EN
              </button>

              <button
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}>
                <Search className='w-5 h-5' />
              </button>

              <button
                className={`relative p-2 rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}>
                <Bell className='w-5 h-5' />
                <div className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse' />
              </button>

              <button
                onClick={handleDemoLogin}
                className='group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300' />
                <div className='relative flex items-center'>
                  <LogIn className='w-4 h-4 mr-2' />
                  Get Started
                  <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200' />
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}>
              {isMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}>
          <div className='bg-white/95 backdrop-blur-md border-t border-gray-200/50'>
            <div className='px-4 py-6 space-y-4'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 ${
                    item.active ? "bg-blue-50 text-blue-600" : ""
                  }`}>
                  {item.name}
                </a>
              ))}

              <div className='pt-4 border-t border-gray-200 space-y-4'>
                <div className='flex items-center justify-between'>
                  <button className='flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200'>
                    <Globe className='w-4 h-4 mr-2' />
                    English
                  </button>
                  <div className='flex gap-2'>
                    <button className='p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200'>
                      <Search className='w-5 h-5' />
                    </button>
                    <button className='relative p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200'>
                      <Bell className='w-5 h-5' />
                      <div className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse' />
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleDemoLogin}
                  className='w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center'>
                  <LogIn className='w-5 h-5 mr-2' />
                  Get Started
                  <ArrowRight className='w-5 h-5 ml-2' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
