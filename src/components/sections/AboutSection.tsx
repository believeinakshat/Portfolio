import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, education } from '../../data';
import { MapPin, Mail } from 'lucide-react';
import myImage from "../../assets/mypic.jpeg";

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="about" className="py-8 bg-light-200 dark:bg-dark-700">
      <div ref={ref} className="section-container">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="text-center mb-8"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know my background and what drives my passion for AI and machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Professional Photo */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            className="lg:col-span-1 flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={myImage}
                  alt="Akshat Sharma - Professional Photo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-400/20 dark:bg-primary-600/20 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-400/20 dark:bg-secondary-600/20 rounded-full filter blur-xl"></div>
            </div>
          </motion.div>

          {/* Bio and Contact Section */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-2xl font-bold text-dark-800 dark:text-light-100">
              My Journey
            </h3>
            
            <div className="prose prose-lg dark:prose-invert">
              {personalInfo.longBio.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-dark-600 dark:text-light-300 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                <span className="text-dark-700 dark:text-light-200">
                  {personalInfo.email}
                </span>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                <span className="text-dark-700 dark:text-light-200">
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-dark-800 dark:text-light-100 mb-6">
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((item) => (
                  <motion.div
                    key={item.id}
                    className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-secondary-500 before:z-10 before:shadow-md"
                  >
                    <div className="absolute left-[7px] top-6 bottom-0 w-[2px] bg-secondary-200 dark:bg-secondary-800"></div>
                    <h4 className="text-xl font-bold text-dark-800 dark:text-light-100">
                      {item.degree}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {item.institution}
                    </p>
                    <p className="text-dark-500 dark:text-light-400 text-sm mb-2">
                      {item.duration}
                    </p>
                    <p className="text-dark-600 dark:text-light-300">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;