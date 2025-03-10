
import React, { useState } from 'react';
import { Play } from 'lucide-react';

const Demo = () => {
  const [activeTab, setActiveTab] = useState<'ar' | 'vr' | 'ai'>('vr');
  
  const tabContent = {
    vr: {
      title: 'Virtual Reality Learning',
      description: 'Immerse yourself in fully interactive 3D environments where complex concepts become tangible experiences. From exploring the human body to manipulating chemical compounds, our VR modules make learning memorable and intuitive.',
      features: [
        'Fully immersive 3D environments',
        'Interactive scientific models',
        'Spatial learning experiences',
        'Compatible with major VR headsets'
      ]
    },
    ar: {
      title: 'Augmented Reality Models',
      description: 'Overlay digital learning models onto your real environment. Point your device at your study space and watch as mathematical equations, scientific models, and historical scenes come to life right before your eyes.',
      features: [
        'Works on most smartphones and tablets',
        'No special equipment required',
        'AR markers for textbook integration',
        'Shareable experiences for classroom use'
      ]
    },
    ai: {
      title: 'Adaptive AI Tutoring',
      description: 'Our AI tutor analyzes your learning patterns, identifies knowledge gaps, and creates personalized learning paths. Get instant feedback, step-by-step solutions, and adaptive practice problems tailored to your progress.',
      features: [
        'Personalized learning pathways',
        'Real-time feedback and guidance',
        'Adaptive difficulty adjustment',
        'Learning style recognition'
      ]
    }
  };

  return (
    <section id="demo" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-medium text-purple uppercase tracking-wider opacity-0 animate-fade-in">Interactive Demo</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-balance opacity-0 animate-fade-in-delay-1">
            Experience Our Technology
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300 opacity-0 animate-fade-in-delay-2">
            Explore our cutting-edge AR/VR learning experiences and AI-powered adaptive tutoring system.
          </p>
        </div>
        
        {/* Demo Tabs */}
        <div className="flex justify-center mb-8 opacity-0 animate-fade-in">
          <div className="inline-flex p-1 rounded-lg bg-gray-100 dark:bg-charcoal-light/30">
            {(['vr', 'ar', 'ai'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-white dark:bg-charcoal text-purple shadow-sm' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple'
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        
        {/* Demo Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center opacity-0 animate-fade-in">
          {/* Demo Visual */}
          <div className="glass-panel relative aspect-square md:aspect-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-transparent to-cyan/10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full p-8 flex items-center justify-center">
                <div className="w-40 h-40 md:w-64 md:h-64 bg-gradient-to-br from-purple-dark to-purple rounded-2xl shadow-lg flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="mx-auto w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-4 animate-pulse-soft cursor-pointer transition-transform hover:scale-105">
                      <Play size={28} fill="white" />
                    </div>
                    <p className="font-medium">Watch Demo</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-purple/20 backdrop-blur-sm rounded-lg animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-cyan/20 backdrop-blur-sm rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
          
          {/* Demo Info */}
          <div>
            <h4 className="text-2xl font-bold mb-4">{tabContent[activeTab].title}</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {tabContent[activeTab].description}
            </p>
            
            <div className="space-y-3 mb-8">
              {tabContent[activeTab].features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 flex-shrink-0 rounded-full bg-purple/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple"></div>
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
