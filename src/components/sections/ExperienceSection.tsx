import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../../data';
import { Briefcase as BriefcaseBusiness, Calendar } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section id="experience" className="py-8 bg-light-200 dark:bg-dark-700">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and the impactful roles I've held throughout my career.
          </p>
        </motion.div>

        <div className="space-y-12 relative before:content-[''] before:absolute before:left-0 before:sm:left-1/2 before:ml-0 before:sm:-ml-[1px] before:top-0 before:h-full before:w-[2px] before:bg-primary-200 dark:before:bg-primary-800">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col sm:flex-row pl-8 sm:pl-0 ${
                index % 2 === 0 ? 'sm:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 sm:left-1/2 top-6 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-primary-500 dark:bg-primary-600 border-2 border-white dark:border-dark-700 transform -translate-x-1/2 z-10 shadow-md" />
              
              {/* Content box */}
              <div className={`sm:w-1/2 pb-12 sm:pb-0 ${
                index % 2 === 0 
                  ? 'sm:pl-16 sm:pr-8' 
                  : 'sm:pr-16 sm:pl-8'
              }`}>
                <div className="glass p-4 sm:p-6 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <BriefcaseBusiness className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                      <h3 className="text-lg sm:text-xl font-bold text-dark-800 dark:text-light-100">{experience.position}</h3>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-dark-500 dark:text-light-400 mr-2" />
                      <span className="text-sm text-dark-500 dark:text-light-400">{experience.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-base sm:text-lg font-medium text-primary-600 dark:text-primary-400 mb-3">
                    {experience.company}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary-500 dark:bg-secondary-400 mt-2 mr-2"></span>
                        <span className="text-sm sm:text-base text-dark-700 dark:text-light-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;