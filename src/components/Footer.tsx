
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-charcoal-light/20 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold hero-text-gradient mb-4 inline-block">
              EduVerse
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xs">
              Transforming education through immersive AR/VR experiences and adaptive AI learning.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter size={18} />, href: '#' },
                { icon: <Instagram size={18} />, href: '#' },
                { icon: <Linkedin size={18} />, href: '#' },
                { icon: <Github size={18} />, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-gray-100 dark:bg-charcoal-light flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-purple hover:text-white transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Features', href: '#features' },
                { label: 'Mission', href: '#mission' },
                { label: 'Demo', href: '#demo' },
                { label: 'Pricing', href: '#' },
                { label: 'Contact Us', href: '#' },
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-purple transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: 'Help Center', href: '#' },
                { label: 'Developer API', href: '#' },
                { label: 'Blog', href: '#' },
                { label: 'Case Studies', href: '#' },
                { label: 'Community', href: '#' },
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-purple transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: 'Terms of Service', href: '#' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Cookie Policy', href: '#' },
                { label: 'Data Processing', href: '#' },
                { label: 'Accessibility', href: '#' },
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-purple transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 dark:border-charcoal-light flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} EduVerse. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-purple transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-purple transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-purple transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
