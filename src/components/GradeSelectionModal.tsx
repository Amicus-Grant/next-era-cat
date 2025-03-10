
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

interface GradeSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GradeSelectionModal = ({ isOpen, onClose }: GradeSelectionModalProps) => {
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const navigate = useNavigate();

  const grades = [
    'K-2nd Grade',
    '3rd-5th Grade',
    '6th-8th Grade',
    '9th-12th Grade',
    'College/University'
  ];

  const handleGradeSelect = (grade: string) => {
    setSelectedGrade(grade);
    // Store the selected grade in session storage
    sessionStorage.setItem('selectedGrade', grade);
    // Navigate to subject selection page
    navigate('/subject-selection');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-charcoal rounded-2xl shadow-xl max-w-md w-full p-6 animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold hero-text-gradient">Select Your Grade Level</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-col gap-3">
          {grades.map((grade) => (
            <button
              key={grade}
              onClick={() => handleGradeSelect(grade)}
              className={`p-4 rounded-lg text-left border-2 transition-all ${
                selectedGrade === grade 
                  ? 'border-purple bg-purple/10' 
                  : 'border-gray-200 hover:border-purple/50 hover:bg-purple/5'
              }`}
            >
              {grade}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradeSelectionModal;
