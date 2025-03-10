
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from './ui/AnimatedButton';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      const parallaxElements = heroRef.current.querySelectorAll('.parallax');
      
      parallaxElements.forEach((el: Element) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '0');
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        
        (el as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple/10 rounded-full blur-3xl parallax" data-speed="30"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan/10 rounded-full blur-3xl parallax" data-speed="20"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-purple-light/10 rounded-full blur-2xl parallax" data-speed="-20"></div>
      </div>
      
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        {/* Hero Content */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <span className="bg-purple/10 text-purple px-4 py-1.5 rounded-full w-fit text-sm font-medium opacity-0 animate-fade-in">
            Experience Learning in a New Dimension
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold hero-text-gradient leading-tight text-balance opacity-0 animate-fade-in-delay-1">
            Experience Math & Science in Immersive AR & VR
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg opacity-0 animate-fade-in-delay-2">
            Dive into a revolutionary educational experience where AI tutoring adapts to your learning style, AR/VR makes complex concepts tangible, and time-management tools keep you focused.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in-delay-3">
            <AnimatedButton size="lg" icon={<ArrowRight size={18} />}>
              Get Started
            </AnimatedButton>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative aspect-square md:aspect-auto opacity-0 animate-fade-in-delay-2">
          <div className="relative z-10 glass-panel p-6 overflow-hidden rounded-2xl h-full w-full">
            <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-purple/20 rounded-full backdrop-blur-md parallax" data-speed="10"></div>
            <div className="absolute top-10 left-10 w-16 h-16 bg-cyan/20 rounded-full backdrop-blur-md parallax" data-speed="15"></div>
            
            <div className="relative h-full w-full flex items-center justify-center animate-float">
              <div className="w-full h-full bg-gradient-to-br from-purple/20 via-purple/10 to-cyan/10 rounded-xl p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 md:w-64 md:h-64 mx-auto bg-gradient-to-br from-purple via-purple/80 to-purple-light rounded-full flex items-center justify-center text-white text-5xl font-bold animate-pulse-soft shadow-lg">
                    VR
                  </div>
                  <p className="mt-6 text-lg font-medium text-purple">Virtual Reality Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-fade-in"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
