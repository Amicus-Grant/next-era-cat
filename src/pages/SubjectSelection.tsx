
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { ArrowRight } from 'lucide-react';

const SubjectSelection = () => {
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the selected grade from session storage
    const grade = sessionStorage.getItem('selectedGrade');
    if (!grade) {
      // If no grade was selected, redirect back to home
      navigate('/');
    } else {
      setSelectedGrade(grade);
    }
  }, [navigate]);

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    sessionStorage.setItem('selectedSubject', subject);
    // In a real app, this would navigate to a specific learning path
    // For now, we'll just navigate back to the home page
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold hero-text-gradient mb-6">Choose Your Subject</h1>
            {selectedGrade && (
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Selected Grade: <span className="font-semibold text-purple">{selectedGrade}</span>
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Math Option */}
            <div 
              className={`relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all hover:shadow-xl transform hover:-translate-y-1 ${
                selectedSubject === 'Math' ? 'ring-4 ring-purple' : ''
              }`}
              onClick={() => handleSubjectSelect('Math')}
            >
              <div className="bg-gradient-to-br from-purple-light to-purple p-6 h-full">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 h-full flex flex-col items-center text-white">
                  <div className="text-6xl font-bold mb-4">π</div>
                  <h3 className="text-2xl font-bold mb-4">Mathematics</h3>
                  <p className="text-center mb-6">Explore numbers, algebra, geometry, and more through interactive AR/VR experiences.</p>
                  <AnimatedButton 
                    variant="secondary" 
                    icon={<ArrowRight size={18} />}
                    className="mt-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSubjectSelect('Math');
                    }}
                  >
                    Select Math
                  </AnimatedButton>
                </div>
              </div>
            </div>

            {/* Science Option */}
            <div 
              className={`relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all hover:shadow-xl transform hover:-translate-y-1 ${
                selectedSubject === 'Science' ? 'ring-4 ring-cyan' : ''
              }`}
              onClick={() => handleSubjectSelect('Science')}
            >
              <div className="bg-gradient-to-br from-cyan to-cyan-dark p-6 h-full">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 h-full flex flex-col items-center text-white">
                  <div className="text-6xl font-bold mb-4">⚛️</div>
                  <h3 className="text-2xl font-bold mb-4">Science</h3>
                  <p className="text-center mb-6">Discover physics, chemistry, biology, and astronomy through immersive virtual experiences.</p>
                  <AnimatedButton 
                    variant="default" 
                    icon={<ArrowRight size={18} />}
                    className="mt-auto bg-purple"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSubjectSelect('Science');
                    }}
                  >
                    Select Science
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubjectSelection;
