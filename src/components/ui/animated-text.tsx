import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  children: ReactNode;
  variant?: 'hero' | 'title' | 'body' | 'fancy' | 'geometric';
  className?: string;
  animation?: 'fade' | 'slide' | 'shimmer' | 'typewriter';
  delay?: number;
}

export const AnimatedText = ({ 
  children, 
  variant = 'body', 
  className,
  animation = 'fade',
  delay = 0 
}: AnimatedTextProps) => {
  const baseClasses = {
    hero: 'responsive-text-hero font-bold',
    title: 'responsive-text-title font-semibold',
    body: 'responsive-text-body',
    fancy: 'fancy-text',
    geometric: 'geometric-text'
  };

  const animationClasses = {
    fade: 'animate-fade-in',
    slide: 'animate-slide-up',
    shimmer: 'text-shimmer',
    typewriter: 'text-typewriter'
  };

  return (
    <div
      className={cn(
        baseClasses[variant],
        animationClasses[animation],
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};