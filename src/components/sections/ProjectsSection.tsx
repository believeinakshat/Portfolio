import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../../data';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-8 bg-light-100 dark:bg-dark-800">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Explore a selection of my recent projects and technical contributions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card bg-white dark:bg-dark-700 rounded-xl shadow-lg overflow-hidden"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="group relative overflow-hidden">
                {/* Project image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on hover - Hidden on mobile */}
                <div className={`hidden md:block absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-800/70 to-transparent transition-opacity duration-300 ${
                  activeProject === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                    <h3 className="text-lg lg:text-xl font-bold text-light-100 mb-2">
                      {project.title}
                    </h3>
                    
                    <div className="text-light-300 mb-3 text-sm lg:text-base">
                      {project.description.map((item, idx) => (
                        <p key={idx} className="mb-1 text-xs lg:text-sm">
                          • {item}
                        </p>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-1 lg:gap-2 mb-3 lg:mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-secondary-800/50 text-secondary-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3 lg:space-x-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-light-100 hover:text-primary-400 transition-colors text-sm lg:text-base"
                        >
                          <Github className="w-4 h-4 lg:w-5 lg:h-5 mr-1" />
                          <span>Code</span>
                        </a>
                      )}
                      
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-light-100 hover:text-primary-400 transition-colors text-sm lg:text-base"
                        >
                          <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5 mr-1" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile content - Always visible */}
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-bold text-dark-800 dark:text-light-100">
                  {project.title}
                </h3>
                
                {/* Mobile description */}
                <div className="mt-3 mb-4 md:hidden">
                  {project.description.map((item, idx) => (
                    <p key={idx} className="mb-1 text-sm text-dark-600 dark:text-light-300">
                      • {item}
                    </p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Mobile links */}
                <div className="flex space-x-4 mt-4 md:hidden">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-sm"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      <span>View Code</span>
                    </a>
                  )}
                  
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;