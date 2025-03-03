
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const AnimatedButton = ({
  variant = 'default',
  size = 'default',
  children,
  className,
  icon,
  iconPosition = 'right',
  ...props
}: AnimatedButtonProps) => {
  const variantClasses = {
    default: 'bg-purple hover:bg-purple-dark text-white',
    secondary: 'bg-cyan hover:bg-cyan-dark text-charcoal',
    outline: 'bg-transparent border-2 border-purple text-purple hover:bg-purple/10',
    ghost: 'bg-transparent hover:bg-purple/10 text-purple',
  };

  const sizeClasses = {
    sm: 'py-1.5 px-3 text-sm',
    default: 'py-2.5 px-5',
    lg: 'py-3 px-6 text-lg',
  };

  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-purple/50',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {icon && iconPosition === 'left' && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-r from-purple-dark via-purple to-purple-light opacity-0 transition-opacity duration-300 hover:opacity-100" />
    </button>
  );
};

export default AnimatedButton;
