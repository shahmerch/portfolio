import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const glassSkill =
  'bg-white/10 border border-white/20 shadow-lg backdrop-blur-md text-gray-100 hover:bg-white/20 transition';
const glassSection =
  'bg-white/10 border border-white/25 shadow-2xl backdrop-blur-xl rounded-3xl p-8 relative';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nope@nope.com",
      link: "mailto:shahil.merchant@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 867-5309",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "NY || CA || OH",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/shahmerch",
      link: "https://github.com/shahmerch",
      description: "Check out my projects and contributions"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/shahil-merchant",
      link: "https://linkedin.com/in/shahil-merchant",
      description: "Connect with me professionally"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="druk-gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ios-blue-400 to-ios-blue-200 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={glassSection}>
              <h3 className="text-2xl font-bold mb-8 text-white">
                Let's Connect
              </h3>
              
              <p className="text-ios-gray-200 leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question, want to collaborate, or just want to say hello, 
                I'd love to hear from you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className={glassSkill + ' flex items-center gap-4 p-4 rounded-2xl group hover:scale-105 transition-transform duration-300'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={glassSkill + ' w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'}>
                      <info.icon size={20} className="text-ios-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-ios-gray-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={glassSection}>
              <h3 className="text-2xl font-bold mb-8 text-white">
                Socials
              </h3>

              <div className="space-y-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={glassSkill + ' flex items-center gap-4 p-6 rounded-2xl group hover:scale-105 transition-transform duration-300 items-center'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md shadow flex items-center justify-center">
                      {social.title === 'GitHub' ? (
                        <social.icon size={32} className="text-gray-800" />
                      ) : (
                        <social.icon size={32} className="text-[#0077B5]" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1 text-lg">
                        {social.title}
                      </h4>
                      <p className="text-ios-gray-300 mb-2">
                        {social.value}
                      </p>
                      <p className="text-ios-gray-400 text-sm">
                        {social.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 