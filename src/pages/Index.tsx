
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Mission from '@/components/Mission';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Mission />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
