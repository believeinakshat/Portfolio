import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin } from "lucide-react";
import { personalInfo } from '../../data';

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-16 bg-light-200 dark:bg-dark-700">
      <div ref={ref} className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark-800 dark:text-light-100">Get In Touch</h2>
          <p className="mt-4 text-lg text-dark-600 dark:text-light-300">
            Have a question or want to work together? Feel free to contact me.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-9 rounded-2xl bg-white dark:bg-dark-600 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-center text-dark-800 dark:text-light-100 mb-8">
            Contact Information
          </h3>

          <div className="grid sm:grid-cols-2 gap-10">
            {/* Email */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-100 dark:bg-primary-900/50 rounded-full">
                  <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <h4 className="text-xl font-medium text-dark-800 dark:text-light-100 mb-2">Email</h4>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-dark-600 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
              >
                {personalInfo.email}
              </a>
            </div>

            

            {/* Location */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-100 dark:bg-primary-900/50 rounded-full">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <h4 className="text-xl font-medium text-dark-800 dark:text-light-100 mb-2">Location</h4>
              <p className="text-dark-600 dark:text-light-300">{personalInfo.location}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;