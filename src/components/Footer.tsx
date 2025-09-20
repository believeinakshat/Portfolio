import React from 'react';
import { Heart, ArrowUp, BrainCircuit, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo } from '../data';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-100 dark:bg-dark-800 border-t border-gray-200 dark:border-dark-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BrainCircuit className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
              <span className="text-xl font-bold text-dark-800 dark:text-light-100">
                Akshat<span className="text-secondary-600 dark:text-secondary-400">Sharma</span>
              </span>
            </div>
            <p className="text-dark-600 dark:text-light-300 mb-4 max-w-md">
              AI/ML Engineer passionate about creating innovative solutions through artificial intelligence and machine learning technologies.
            </p>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-primary-600 dark:text-primary-400" />
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-dark-600 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-dark-800 dark:text-light-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-dark-600 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-dark-600 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-dark-600 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-dark-600 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-dark-600 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-dark-800 dark:text-light-100 mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {personalInfo.socialLinks.github && (
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-dark-100 dark:bg-dark-600 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-dark-800 dark:text-light-100" />
                </a>
              )}
              
              {personalInfo.socialLinks.linkedin && (
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-dark-100 dark:bg-dark-600 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-dark-800 dark:text-light-100" />
                </a>
              )}
              
              {personalInfo.socialLinks.twitter && (
                <a
                  href={personalInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-dark-100 dark:bg-dark-600 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-dark-800 dark:text-light-100" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-dark-600 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-dark-600 dark:text-light-300 flex items-center">
                &copy; {currentYear} Akshat Sharma. Made with
                <Heart className="w-4 h-4 text-error-500 mx-1" />
                and React
              </p>
            </div>

            <div className="flex items-center">
              <button
                onClick={scrollToTop}
                className="p-3 rounded-full bg-primary-500 dark:bg-primary-600 text-white hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;