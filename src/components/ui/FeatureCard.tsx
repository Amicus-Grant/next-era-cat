
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  index?: number;
}

const FeatureCard = ({ title, description, icon, className, index = 0 }: FeatureCardProps) => {
  const delayClass = [
    'opacity-0 animate-fade-in',
    'opacity-0 animate-fade-in-delay-1',
    'opacity-0 animate-fade-in-delay-2',
    'opacity-0 animate-fade-in-delay-3',
  ][index % 4];

  return (
    <div 
      className={cn(
        'glass-panel p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        delayClass,
        className
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-purple bg-purple/10 p-3 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
