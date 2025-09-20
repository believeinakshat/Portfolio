import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-12 h-12 rounded-full focus:outline-none"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
        className="absolute"
      >
        {theme === 'dark' ? (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
          >
            <Sun className="w-6 h-6 text-warning-400" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
          >
            <Moon className="w-6 h-6 text-secondary-600" />
          </motion.div>
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;