
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import AnimatedButton from './ui/AnimatedButton';
import GradeSelectionModal from './GradeSelectionModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const openGradeModal = () => {
    setIsGradeModalOpen(true);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Mission', href: '#mission' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 dark:bg-charcoal/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold flex items-center gap-1 hero-text-gradient"
          >
            <span className="opacity-0 animate-fade-in">EduHUB</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-gray-700 dark:text-gray-200 hover:text-purple transition-colors duration-300 opacity-0 animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <AnimatedButton
              size="sm"
              icon={<ChevronRight size={16} />}
              className="opacity-0 animate-fade-in-delay-3"
              onClick={openGradeModal}
            >
              Get Started
            </AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-charcoal absolute top-full left-0 right-0 shadow-lg animate-fade-in">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 dark:text-gray-200 py-2 hover:text-purple transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <AnimatedButton 
                icon={<ChevronRight size={16} />}
                onClick={openGradeModal}
              >
                Get Started
              </AnimatedButton>
            </div>
          </div>
        )}
      </nav>
      
      <GradeSelectionModal isOpen={isGradeModalOpen} onClose={() => setIsGradeModalOpen(false)} />
    </>
  );
};

export default Navbar;
