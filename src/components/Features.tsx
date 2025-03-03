
import React from 'react';
import { Brain, Clock, Glasses, Accessibility } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const Features = () => {
  const features = [
    {
      title: 'AR/VR Learning',
      description: 'Experience immersive 3D models and interactive virtual labs that make complex science and math concepts tangible and engaging.',
      icon: <Glasses size={24} />,
    },
    {
      title: 'Adaptive AI Tutoring',
      description: 'Our AI adapts to your learning style, offering personalized guidance, detailed explanations, and targeted practice questions.',
      icon: <Brain size={24} />,
    },
    {
      title: 'Time Management',
      description: 'Stay focused with smart scheduling, productivity tracking, and study reminders that optimize your learning sessions.',
      icon: <Clock size={24} />,
    },
    {
      title: 'Accessibility',
      description: 'Inclusive design with adjustable fonts, high-contrast mode, and screen reader compatibility ensures learning for all abilities.',
      icon: <Accessibility size={24} />,
    },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium text-purple uppercase tracking-wider opacity-0 animate-fade-in">Features</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-balance opacity-0 animate-fade-in-delay-1">
            Transforming How You Learn
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300 opacity-0 animate-fade-in-delay-2">
            Our platform combines cutting-edge technology with proven educational methods to create a unique learning environment that adapts to your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
        
        {/* Feature Highlight */}
        <div className="mt-20 glass-panel p-8 grid md:grid-cols-2 gap-8 items-center opacity-0 animate-fade-in">
          <div>
            <h3 className="text-2xl font-bold mb-4">Experience AR/VR Learning</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our AR/VR modules bring abstract concepts to life, allowing you to manipulate 3D models, conduct virtual experiments, and explore immersive environments that reinforce learning through experience.
            </p>
            <ul className="space-y-2">
              {[
                'Interactive 3D molecular structures',
                'Virtual physics laboratories',
                'Immersive historical environments',
                'Spatial geometry explorations',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-purple mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square bg-gradient-to-br from-purple/20 via-purple/10 to-transparent rounded-xl p-8 flex items-center justify-center overflow-hidden">
            <div className="absolute -z-10 inset-0">
              <div className="absolute top-10 right-10 w-40 h-40 bg-purple/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan/20 rounded-full blur-xl"></div>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-dark to-purple opacity-60"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                  <Glasses size={48} className="mb-4" />
                  <p className="text-lg font-medium">Virtual Lab</p>
                  <p className="text-sm mt-2">Experience hands-on learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
