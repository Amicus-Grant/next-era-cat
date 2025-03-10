
import React from 'react';

const Mission = () => {
  return (
    <section id="mission" className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-purple/5">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-medium text-purple uppercase tracking-wider opacity-0 animate-fade-in">Our Mission</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-balance opacity-0 animate-fade-in-delay-1">
            Making Education Accessible & Engaging
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 opacity-0 animate-fade-in-left">
            <h4 className="text-2xl font-bold mb-6">Our Values</h4>
            <div className="space-y-6">
              {[
                {
                  title: 'Innovation',
                  description: 'We continuously explore cutting-edge technologies to enhance the learning experience.'
                },
                {
                  title: 'Accessibility',
                  description: 'Education should be accessible to everyone, regardless of physical abilities or learning style.'
                },
                {
                  title: 'Engagement',
                  description: 'Learning thrives when students are fully engaged and motivated by compelling experiences.'
                },
                {
                  title: 'Personalization',
                  description: 'Each learner has unique needs, strengths, and challenges that deserve individualized attention.'
                }
              ].map((value, i) => (
                <div key={i} className="glass-panel p-5 transition-all duration-300 hover:shadow-md">
                  <h5 className="font-medium text-lg mb-2">{value.title}</h5>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 opacity-0 animate-fade-in-right">
            <div className="glass-panel p-8 relative">
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-purple/20 blur-lg"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-cyan/20 blur-lg"></div>
              
              <blockquote className="relative z-10">
                <p className="text-xl italic mb-6 text-balance">
                  "We believe that learning becomes transformative when technology enhances rather than replaces human connection. Our mission is to create immersive educational experiences that spark curiosity, foster understanding, and empower learners of all backgrounds."
                </p>
                <footer className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple to-purple-light flex items-center justify-center text-white font-bold">
                    EH
                  </div>
                  <div>
                    <p className="font-medium">The EduHUB Team</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Founders & Educators</p>
                  </div>
                </footer>
              </blockquote>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-br from-purple/10 to-cyan/10 rounded-2xl">
              <h4 className="font-bold mb-4">Our Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '85%', label: 'Improvement in Understanding' },
                  { value: '90%', label: 'Student Engagement' },
                  { value: '3x', label: 'Retention Rate' },
                  { value: '100%', label: 'Accessibility' }
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 glass-panel">
                    <p className="text-2xl md:text-3xl font-bold text-purple">{stat.value}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
