import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  effect?: 'lift' | 'glow' | 'tilt' | 'float';
  variant?: 'glass' | 'gradient' | 'solid' | 'aurora';
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const FloatingCard = ({ 
  children, 
  className,
  effect = 'lift',
  variant = 'glass',
  style,
  onClick
}: FloatingCardProps) => {
  const effectClasses = {
    lift: 'hover-lift',
    glow: 'hover-glow',
    tilt: 'hover-tilt',
    float: 'animate-float'
  };

  const variantClasses = {
    glass: 'glass-effect',
    gradient: 'bg-gradient-card',
    solid: 'bg-card border border-border/50',
    aurora: 'aurora-gradient'
  };

  return (
    <div
      className={cn(
        'rounded-xl p-6 cursor-pointer transition-all duration-300',
        variantClasses[variant],
        effectClasses[effect],
        className
      )}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};