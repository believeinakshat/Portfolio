import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../../data';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-100">
              {personalInfo.title}
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-dark-800 dark:text-light-100 leading-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 text-transparent bg-clip-text">
              {personalInfo.name}
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-dark-600 dark:text-light-300 px-4"
          >
            {personalInfo.shortBio}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12 px-4"
          >
            <a
              href="#contact"
              className="btn-primary text-center"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="btn-secondary text-center"
            >
              View Projects
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex space-x-6"
          >
            {personalInfo.socialLinks.github && (
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-600 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            )}
            {personalInfo.socialLinks.linkedin && (
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-600 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            )}
            {personalInfo.socialLinks.twitter && (
              <a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-600 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            )}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-9 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <a
            href="#about"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-dark-600 shadow-md hover:shadow-lg transition-all"
            aria-label="Scroll to About section"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </motion.div>
          </a>
        </motion.div>
      </div>
      
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-light-200 to-light-100 dark:from-dark-700 dark:to-dark-800 -z-20" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-primary-400/20 dark:bg-primary-600/10 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-1/3 w-40 h-40 sm:w-80 sm:h-80 bg-secondary-400/20 dark:bg-secondary-600/10 rounded-full filter blur-3xl -z-10" />
    </section>
  );
};

export default HeroSection;