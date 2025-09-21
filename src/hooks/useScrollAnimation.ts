import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const element = elementRef.current;
    if (element) {
      element.classList.add('scroll-reveal');
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return elementRef;
};

export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * speed;
        element.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
};