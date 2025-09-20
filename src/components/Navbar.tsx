import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { Menu, X, Navigation2 } from 'lucide-react';
import { navLinks } from '../data';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close menu when clicking on a link (mobile)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-dark-700/95 backdrop-blur-lg shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <Navigation2 className="w-6 h-6 sm:w-8 sm:h-8 text-secondary-600 dark:text-secondary-400" />
            <span className="text-lg sm:text-xl font-bold text-dark-800 dark:text-light-100">
              Akshat<span className="text-secondary-600 dark:text-secondary-400">Sharma</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                className="nav-item text-sm lg:text-base"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="ml-2 sm:ml-4 md:hidden flex items-center p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-dark-800 dark:text-light-100" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-dark-800 dark:text-light-100" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 dark:bg-dark-700/95 backdrop-blur-lg border-t border-gray-200 dark:border-dark-600"
        >
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.path}
                  className="text-lg font-medium text-dark-800 dark:text-light-100 hover:text-primary-600 dark:hover:text-primary-400 py-2 transition-colors"
                  onClick={handleLinkClick}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;