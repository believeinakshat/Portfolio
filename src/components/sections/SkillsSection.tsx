import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills, getIconComponent } from '../../data';

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-8 bg-light-100 dark:bg-dark-800">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise and proficiency across various domains.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="text-2xl font-bold text-primary-700 dark:text-primary-400 border-b border-primary-200 dark:border-primary-800 pb-2"
              >
                {category}
              </motion.h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => {
                    const IconComponent = getIconComponent(skill.icon);
                    
                    return (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (index * 0.1) }}
                        className="skill-card"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-lg bg-secondary-100 dark:bg-secondary-900/50">
                            <IconComponent className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-dark-800 dark:text-light-100">
                              {skill.name}
                            </h4>
                            
                            <div className="mt-2 flex space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-8 h-1.5 rounded-full ${
                                    i < skill.level
                                      ? 'bg-primary-500 dark:bg-primary-600'
                                      : 'bg-gray-200 dark:bg-gray-700'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;