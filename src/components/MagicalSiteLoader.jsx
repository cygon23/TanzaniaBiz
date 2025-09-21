import React, { useState, useEffect } from "react";
import { Building2, Sparkles, Zap, Rocket, Globe, Target } from "lucide-react";

const MagicalSiteLoader = () => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const phases = [
    {
      text: "Initializing Magic",
      icon: Sparkles,
      color: "from-blue-500 to-cyan-500",
    },
    {
      text: "Loading Innovations",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
    },
    {
      text: "Connecting Networks",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
    },
    {
      text: "Preparing Launch",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
    },
    {
      text: "Ready to Transform",
      icon: Target,
      color: "from-pink-500 to-purple-500",
    },
  ];

  useEffect(() => {
    // Check if we should show the loader (on page reload)
    const hasVisited = sessionStorage.getItem("hasVisitedThisSession");
    if (hasVisited) {
      setIsVisible(false);
      return;
    }

    const duration = 4000; // 4 seconds
    const interval = 50;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;

        // Update phase based on progress
        const phaseIndex = Math.floor((newProgress / 100) * phases.length);
        setCurrentPhase(Math.min(phaseIndex, phases.length - 1));

        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem("hasVisitedThisSession", "true");
          }, 800);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setShowContent(true);
  }, []);

  if (!isVisible) return null;

  const CurrentIcon = phases[currentPhase]?.icon || Sparkles;
  const currentColor =
    phases[currentPhase]?.color || "from-blue-500 to-purple-500";

  return (
    <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900'>
      {/* Animated Background */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Large gradient orbs */}
        <div className='absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse' />
        <div
          className='absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "1s" }}
        />
        <div
          className='absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse'
          style={{ animationDelay: "2s" }}
        />

        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-white/30 rounded-full animate-ping'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${1 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Grid overlay */}
        <div className='absolute inset-0 opacity-5'>
          <div
            className='w-full h-full'
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      {/* Main Loader Content */}
      <div
        className={`relative z-10 text-center transition-all duration-1000 ${
          showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
        {/* Animated Logo */}
        <div className='mb-12'>
          <div className='relative inline-flex items-center justify-center w-32 h-32 mx-auto mb-6'>
            {/* Rotating border */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${currentColor} rounded-3xl animate-spin opacity-80`}
              style={{ animationDuration: "3s" }}
            />
            <div
              className={`absolute inset-1 bg-gradient-to-r ${currentColor} rounded-3xl animate-spin opacity-60`}
              style={{ animationDuration: "2s", animationDirection: "reverse" }}
            />

            {/* Logo container */}
            <div className='relative bg-slate-900 w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl'>
              <Building2 className='w-12 h-12 text-white animate-pulse' />
            </div>

            {/* Floating elements around logo */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className='absolute w-3 h-3 bg-white/40 rounded-full animate-ping'
                style={{
                  top: `${20 + Math.cos((i * Math.PI) / 4) * 60}px`,
                  left: `${20 + Math.sin((i * Math.PI) / 4) * 60}px`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Brand Text */}
        <div className='mb-16'>
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-4'>
            <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse'>
              TanzaniaBiz
            </span>
          </h1>
          <p className='text-xl text-blue-200 font-medium'>
            Transforming Business Dreams into Reality
          </p>
        </div>

        {/* Progress Section */}
        <div className='max-w-md mx-auto'>
          {/* Current Phase Display */}
          <div className='flex items-center justify-center gap-4 mb-8'>
            <div
              className={`w-16 h-16 bg-gradient-to-r ${currentColor} rounded-2xl flex items-center justify-center animate-bounce`}>
              <CurrentIcon className='w-8 h-8 text-white' />
            </div>
            <div className='text-left'>
              <div className='text-white font-bold text-lg'>
                {phases[currentPhase]?.text}
              </div>
              <div className='text-blue-200 text-sm'>
                {Math.round(progress)}% Complete
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className='relative w-full h-3 bg-white/10 rounded-full overflow-hidden mb-8'>
            <div
              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${currentColor} rounded-full transition-all duration-300 ease-out shadow-lg`}
              style={{ width: `${progress}%` }}
            />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse' />
          </div>

          {/* Loading Dots */}
          <div className='flex justify-center gap-2'>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentPhase
                    ? `bg-gradient-to-r ${currentColor} scale-125`
                    : "bg-white/30"
                }`}
                style={{
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <div className='absolute bottom-12 left-1/2 transform -translate-x-1/2'>
          <p className='text-white/60 text-sm animate-pulse'>
            Powered by Innovation • Built for Tanzania
          </p>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MagicalSiteLoader;
