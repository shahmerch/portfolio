import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X } from 'lucide-react';

const glassSection =
  'bg-white/10 border border-white/25 shadow-2xl backdrop-blur-xl rounded-3xl p-8 relative';

const placeholderImg = 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80';

const Project = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedProject, setSelectedProject] = useState(null);

  const subsections = [
    {
      title: 'Cleveland Clinic',
      logo: '🏥',
      projects: [
        {
          name: 'SimVITRO FANUC Drivers',
          description: 'Custom drivers for FANUC robots in the SimVITRO surgical research platform.',
          image: placeholderImg,
          extra: [
            'Enabled precise robotic control for surgical simulation',
            'Integrated with SimVITRO software stack',
          ],
        },
      ],
    },
    {
      title: 'OSU App',
      logo: '📱',
      projects: [
        {
          name: 'Weather Feature',
          description: 'Live campus weather and alerts in the OSU mobile app.',
          image: placeholderImg,
          extra: [
            'Integrated real-time weather APIs',
            'Custom UI for campus-specific conditions',
          ],
        },
        {
          name: 'Athletics Feature',
          description: 'Scores, schedules, and news for OSU athletics.',
          image: placeholderImg,
          extra: [
            'Live updates for all major sports',
            'Push notifications for game results',
          ],
        },
        {
          name: 'Rec Facilities Feature',
          description: 'Real-time occupancy and hours for recreation centers.',
          image: placeholderImg,
          extra: [
            'Live facility status and capacity',
            'Integrated with campus access systems',
          ],
        },
        {
          name: 'Feedback',
          description: 'In-app feedback and support for OSU students.',
          image: placeholderImg,
          extra: [
            'Direct channel to app development team',
            'Automated ticketing and response',
          ],
        },
      ],
    },
    {
      title: 'TI',
      logo: '⚡️',
      projects: [
        {
          name: 'E-Metering Board',
          description: 'Smart metering hardware for energy monitoring.',
          image: placeholderImg,
          extra: [
            'Designed and tested PCB for accurate metering',
            'Firmware for data acquisition and transmission',
          ],
        },
        {
          name: 'Modular Power Board',
          description: 'Configurable power supply board for embedded systems.',
          image: placeholderImg,
          extra: [
            'Modular design for multiple voltage rails',
            'Overcurrent and thermal protection features',
          ],
        },
      ],
    },
    {
      title: 'Personal',
      logo: '👤',
      projects: [
        {
          name: 'Portfolio Website',
          description: 'This personal portfolio built with React and Tailwind.',
          image: placeholderImg,
          extra: [
            'Designed with glassmorphism and custom fonts',
            'Fully responsive and accessible',
          ],
        },
        {
          name: 'Home Automation',
          description: 'Smart home projects and experiments.',
          image: placeholderImg,
          extra: [
            'Built custom Alexa skills',
            'Integrated sensors and automation routines',
          ],
        },
        {
          name: 'Medicine Dispenser',
          description: 'A medicine dispenser that dispenses medicine at a set time.',
          image: placeholderImg,
          extra: [
            'Automated pill dispensing with scheduling',
            'Built with microcontroller and custom enclosure',
          ],
        },
      ],
    },
  ];

  return (
    <section id="project" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="druk-gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ios-blue-400 to-ios-blue-200 mx-auto rounded-full" />
        </motion.div>

        <div className="columns-1 md:columns-2 gap-10">
          {subsections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.1 }}
              className={glassSection + ' flex flex-col mb-10 break-inside-avoid'}
            >
              <h3 className="text-2xl font-dots text-white/90 mb-4 flex items-center gap-2">
                <span className="text-2xl">{section.logo}</span>
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.projects.map((project, pidx) => (
                  <li
                    key={project.name}
                    className="bg-white/5 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:bg-white/10 transition"
                    onClick={() => setSelectedProject({ ...project, section: section.title })}
                  >
                    <img src={project.image} alt={project.name} className="w-16 h-16 object-cover rounded-2xl flex-shrink-0" />
                    <div>
                      <div className="font-dots text-lg text-white/90">{project.name}</div>
                      <div className="text-ios-gray-300 text-sm mt-1">{project.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for expanded project view */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              className={glassSection + ' max-w-lg w-full relative p-8'}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 glass-button p-2 rounded-full z-10"
              >
                <X size={20} />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <h2 className="text-2xl font-bold mb-2 text-white">{selectedProject.name}</h2>
              <div className="text-ios-gray-300 mb-2">{selectedProject.section}</div>
              <div className="text-ios-gray-200 leading-relaxed">{selectedProject.description}</div>
              {selectedProject.extra && (
                <ul className="mt-4 list-disc list-inside text-ios-blue-100 text-sm space-y-1">
                  {selectedProject.extra.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project; 