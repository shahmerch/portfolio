import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';

const glassSection =
  'bg-white/10 border border-white/25 shadow-2xl backdrop-blur-xl rounded-full p-2 relative';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-black">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center pointer-events-none">
        <motion.div 
          className={glassSection + " mx-4 mt-4 px-6 py-4 max-w-4xl w-full flex items-center justify-between pointer-events-auto"}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            SM
          </motion.h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="glass-button px-4 py-2 rounded-xl text-sm">
              About
            </a>
            <a href="#project" className="glass-button px-4 py-2 rounded-xl text-sm">
              Project
            </a>
            <a href="#resume" className="glass-button px-4 py-2 rounded-xl text-sm">
              Resume
            </a>
            <a href="#contact" className="glass-button px-4 py-2 rounded-xl text-sm">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden glass-button p-3 rounded-xl"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass-panel rounded-2xl p-6">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#about" 
                  className="glass-button px-4 py-3 rounded-xl text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#project" 
                  className="glass-button px-4 py-3 rounded-xl text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Project
                </a>
                <a 
                  href="#resume" 
                  className="glass-button px-4 py-3 rounded-xl text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resume
                </a>
                <a 
                  href="#contact" 
                  className="glass-button px-4 py-3 rounded-xl text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pb-16">
        <Hero />
        <About />
        <Project />
        <Resume />
        <Contact />
      </main>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 glass-button p-4 rounded-full z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </motion.button>
    </div>
  );
}

export default App; 