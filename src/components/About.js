import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Router, Box, Users, Cpu, Bot, CircuitBoard} from 'lucide-react';

const glassSkill =
  'bg-white/10 border border-white/20 shadow-lg backdrop-blur-md text-gray-100 hover:bg-white/20 transition';
const glassSection =
  'bg-white/10 border border-white/25 shadow-2xl backdrop-blur-xl rounded-3xl p-8 relative';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Electronics', icon: CircuitBoard, description: 'PCB Design, Circuit Design/Sim, MSP, Arduino' },
    { name: 'Embedded Development', icon: Cpu, description: 'C, C++, Assembly, VHDL, PCB Design' },
    { name: 'Backend Development', icon: Code, description: 'AWS, Node.js, Python, Step-Functions' },
    { name: '3D Design', icon: Box, description: 'Fusion 360, Solidworks, Blender' },
    { name: 'Robotics', icon: Bot, description: 'Odometry, ROS, Path Planning' },    
    { name: 'IoT', icon: Router, description: 'ESP32, Smart Home, IFTTT, Home Assistant' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="druk-gradient-text">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ios-blue-400 to-ios-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={glassSection}>
              <p className="text-lg md:text-xl text-ios-gray-200 leading-relaxed mb-6">
                Hi, I'm Shahil Merchant—a passionate engineer and developer with a love for building impactful technology. I'm just finished my B.S. in Electrical & Computer Engineering (Summa Cum Laude) at The Ohio State University, with a minor in Entrepreneurship and Innovation.
              </p>
              <p className="text-lg md:text-xl text-ios-gray-200 leading-relaxed mb-6">
                My experience spans full-stack development, embedded systems, and cloud architecture. I've shipped features to 55k+ daily users at OSU, engineered solutions at Texas Instruments, and contributed to robotics research at Cleveland Clinic. I thrive on solving real-world problems and making tech accessible.
              </p>
              <p className="text-lg md:text-xl text-ios-gray-200 leading-relaxed">
                Outside of work, I enjoy designing electronics, building side projects, and exploring new tech. I'm always eager to collaborate, learn, and create something meaningful.
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={glassSkill + ' p-6 rounded-2xl text-center group'}
              >
                <div className={glassSkill + ' w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'}>
                  <skill.icon size={28} className="text-ios-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {skill.name}
                </h3>
                <p className="text-ios-gray-300 text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        
      </div>
    </section>
  );
};

export default About; 