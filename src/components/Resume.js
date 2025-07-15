import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Calendar, MapPin, Briefcase, GraduationCap, School, Album, Dumbbell, Clapperboard, Cpu, Hammer, Gamepad, Spade, Headphones, X } from 'lucide-react';

const glassSkill =
  'bg-white/10 border border-white/20 shadow-lg backdrop-blur-md text-gray-100 hover:bg-white/20 transition';
const glassSection =
  'bg-white/10 border border-white/25 shadow-2xl backdrop-blur-xl rounded-3xl p-8 relative';

const hobbies = [
  { 
    icon: Dumbbell, 
    label: 'Gym',
    description: 'Powerlifting and strength training. Currently working on improving my deadlift and bench press.',
    details: 'Focus on compound movements and progressive overload. Training 4-5 times per week.'
  },
  { 
    icon: Clapperboard, 
    label: 'Movies',
    movies: [
      { title: 'Past Lives', cover: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg' },
      { title: 'American Psycho', cover: 'https://image.tmdb.org/t/p/w300/9uGHEgsiUXjCNq8wdq4r49YL8A1.jpg' },
      { title: 'Ratatouille', cover: 'https://image.tmdb.org/t/p/w300/npHNjldbeTHdKKw28bJKs7lzqzj.jpg' }
    ],
    shows: [
      { title: 'The X-Files', cover: 'https://image.tmdb.org/t/p/w300/5BD0kiTGnDxONqdrsswTewnk6WH.jpg' },
      { title: 'House M.D.', cover: 'https://image.tmdb.org/t/p/w300/3Cz7ySOQJmqiuTdrc6CY0r65yDI.jpg' },
      { title: 'Breaking Bad', cover: 'https://image.tmdb.org/t/p/w300/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg' }
    ]
  },
  { 
    icon: Cpu, 
    label: 'Tech',
    description: 'Always exploring new technologies, building side projects, and trying to stay updated with industry trends.',
    details: 'Currently experimenting with AI/ML, IoT projects, and learning new programming languages.'
  },
  { 
    icon: Hammer, 
    label: 'DIY Projects',
    description: 'Building and fixing things around the house. From electronics to furniture and home automation.',
    details: 'Recent projects include smart home integration, LOTS ofcustom LED setups, and finishing my basement'
  },
  { 
    icon: Gamepad, 
    label: 'Gaming',
    description: 'Love a lot of different games, mostly nintendo though. Occasional sport game.',
    details: 'Currently playing Stardew Valley.',
    games: [
      { title: 'Legend of Zelda: Twilight Princess', cover: 'https://upload.wikimedia.org/wikipedia/en/0/0e/The_Legend_of_Zelda_Twilight_Princess_Game_Cover.jpg' },
      { title: 'Pokemon Fire Red', cover: 'https://assets-prd.ignimgs.com/2022/01/31/pokemon-firered-button-crop-1643616703712.jpg' },
      { title: 'Plants vs Zombies', cover: 'https://upload.wikimedia.org/wikipedia/en/9/9c/PlantsvsZombiesCoverArt.jpg' }
    ]
  },
  { 
    icon: Spade, 
    label: 'Card Games',
    description: 'Poker, Euchre, and Solitaire. I wrote the book on Euchre Theory',
    details: 'I will beat you at any of these.'
  },
  { 
    icon: Headphones, 
    label: 'Music',
    description: 'Mostly rap. Listen to some hindi music too.',
    albums: [
      { title: '4 Your Eyez Only', artist: 'J. Cole', cover: 'https://upload.wikimedia.org/wikipedia/en/b/bb/J._Cole_%E2%80%94_4_Your_Eyez_Only_album_cover.jpg' },
      { title: 'More Life', artist: 'Drake', cover: 'https://upload.wikimedia.org/wikipedia/en/7/70/Drake_-_More_Life_cover.jpg' },
      { title: 'good kid, m.A.A.d city', artist: 'Kendrick Lamar', cover: 'https://upload.wikimedia.org/wikipedia/en/9/93/KendrickGKMC.jpg' }
    ]
  },
];

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedHobby, setSelectedHobby] = useState(null);

  const experience = [
    {
      title: "Student Applications Developer",
      company: "The Ohio State University OTDI",
      period: "Aug 2023 – Present",
      location: "Columbus, OH",
      description: "Envisioned and implemented new features for the OSU App/student web portal (recreation center availability, weather, sports schedules, etc.) and on-prem migrations cutting costs by up to 70%. Designed and developed backend using AWS SAM services (S3, Lambda, DynamoDB, CloudWatch, API Gateway). Released to 55k+ daily users, 66M+ yearly screen views, 1M+ feature views. Achieved 0% downtime over 1yr and 50% lower costs compared to similar features.",
      achievements: [
        "Shipped features to 55k+ daily users and 66M+ yearly screen views",
        "Cut costs by up to 70% with on-prem migrations",
        "Achieved 0% downtime over 1 year and 50% lower costs than similar features"
      ]
    },
    {
      title: "Field Applications Engineering Intern",
      company: "Texas Instruments",
      period: "May 2024 – Aug 2024",
      location: "Boston, MA",
      description: "Developed and tested modular power board solutions and energy metrology solutions for smart home and energy management customers. Analyzed board share of competitors' ICs and pitched system-level solutions to TI VP of America Sales.",
      achievements: [
        "Developed modular power board and energy metrology solutions for multi-million TAM customers",
        "Analyzed competitors and drove account strategy across multiple products",
        "Pitched system-level solution to TI VP of America Sales"
      ]
    },
    {
      title: "BioRobotics Research Intern",
      company: "Cleveland Clinic BioRobotics Lab",
      period: "May 2023 – Aug 2023",
      location: "Cleveland, OH",
      description: "Designed and developed drivers to enable Fanuc robot compatibility with SimVITRO biomechanical testing software. Implemented high-speed velocity control and robot data acquisition at 8ms loop speed over TCP. Enabled sale of $200,000 system and expanded SimVITRO product scope.",
      achievements: [
        "Enabled Fanuc robot compatibility with SimVITRO software",
        "Implemented high-speed velocity control and data acquisition",
        "Contributed to $200,000 system sale and product expansion"
      ]
    }
  ];

  const education = [
    {
      degree: "B.S. in Electrical & Computer Engineering, Minor in Entrepreneurship and Innovation",
      school: "The Ohio State University",
      period: "Aug 2021 – May 2025",
      location: "Columbus, OH",
      description: "GPA: 3.9 | Summa Cum Laude"
    },
    {
      degree: "High School Diploma",
      school: "Brecksville Broadview Heights High School",
      period: "Aug 2017 – May 2021",
      location: "Brecksville, OH",
      description: "GPA 4.4 | Outstanding Senior Leadership Award"
    }
  ];

  const skills = {
    "Technical": [
      "Java", "C++", "JavaScript", "MATLAB", "LabVIEW", "Python", "Bash", "Powershell", "GitHub", "GitLab", "Jenkins", "CloudWatch", "Node.js", "SolidWorks", "Fusion 360", "Altium", "easyEDA", "LTspice", "VHDL", "Quartus", "MSP430 Assembly", "Arduino"
    ],
    "Tools": ["AWS", "S3", "Lambda", "DynamoDB", "CloudWatch", "API Gateway", "SAM", "ESP32", "WS2812B", "Arduino", "ESP-01S", "ACS712", "TMC2208", "IRFZ44N", "NEMA17"],
    "Other": ["REST APIs", "Microservices", "CI/CD", "Agile"]
  };

  const awards = [
    "Dean's List (AU21, SP22, AU22, SP23, AU24)",
    "BBHHS Outstanding Senior Leadership Award (SP21)"
  ];

  const languages = [
    "English (fluent)",
    "Conversational Spanish",
    "Conversational Hindi"
  ];

  const handleDownload = () => {
    if (navigator.vibrate) navigator.vibrate(10);
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Shahil_Merchant_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-dots">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full mb-8" />
          <motion.button
            onClick={handleDownload}
            className="glass-button px-8 py-4 rounded-2xl text-xl font-dots flex items-center gap-3 mx-auto group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Download size={20} className="group-hover:animate-bounce" />
            Download PDF
          </motion.button>
        </motion.div>
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto relative">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 min-w-0 lg:mr-8 relative"
          >
            <div className={glassSection}>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 font-dots">
                <Briefcase className="text-gray-400" size={28} />
                Experience
              </h3>
              <div className="space-y-10">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="relative"
                  >
                    {index < experience.length - 1 && (
                      <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-ios-blue-400/50 to-transparent" />
                    )}
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 glass-button rounded-full flex items-center justify-center flex-shrink-0">
                        <Briefcase size={20} className="text-ios-blue-400" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-1">
                          {job.title}
                        </h4>
                        <p className="text-ios-blue-400 font-medium mb-2">
                          {job.company}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-ios-gray-300 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {job.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {job.location}
                          </span>
                        </div>
                        
                        <p className="text-ios-gray-200 mb-4 leading-relaxed">
                          {job.description}
                        </p>
                        
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-ios-gray-200 text-sm">
                              <div className="w-1.5 h-1.5 bg-ios-blue-400 rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          {/* Skills, Education, Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:max-w-[26rem] mx-auto flex flex-col relative"
          >
            {/* Skills */}
            <div className={glassSection + ' p-6'}>
              <h3 className="text-2xl font-bold flex items-center gap-3 font-dots">
                <Album className="text-gray-400" size={24} />
                Skills
              </h3>
              <div className="space-y-6 mt-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="text-lg font-semibold mb-3 text-ios-blue-400">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className={glassSkill + ' px-3 py-1 rounded-full text-sm'}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Education Timeline Style */}
            <div className={glassSection + ' p-6'} style={{ marginTop: '2rem' }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-dots">
                <School className="text-gray-400" size={24} />
                Education
              </h3>
              <div className="space-y-10">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="relative"
                  >
                    {index < education.length - 1 && (
                      <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-ios-blue-400/50 to-transparent" />
                    )}
                    <div className="flex gap-4">
                      <div className="w-12 h-12 glass-button rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap size={20} className="text-ios-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-ios-blue-400 font-medium mb-2">
                          {edu.school}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-ios-gray-300 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {edu.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {edu.location}
                          </span>
                        </div>
                        <p className="text-ios-gray-200 text-sm leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Hobbies */}
            <div className={glassSection + ' p-6 flex flex-col items-center mt-[2rem]'}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-dots">
                Hobbies
              </h3>
              <div className="flex gap-6 flex-wrap justify-center">
                {hobbies.map(({ icon: Icon, label, description, details, movies, shows, games, albums }, idx) => (
                  <div key={label} className="relative">
                    <div 
                      className={glassSkill + ' w-14 h-14 flex items-center justify-center rounded-full relative group cursor-pointer hover:scale-110 transition-transform duration-200'}
                      onClick={() => setSelectedHobby({ icon: Icon, label, description, details, movies, shows, games, albums })}
                    >
                      <Icon size={28} />
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full bg-black/80 text-gray-100 text-xs font-dots px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-20 shadow-lg">
                        {label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hobby Modal */}
      <AnimatePresence>
        {selectedHobby && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedHobby(null)}
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
                onClick={() => setSelectedHobby(null)}
                className="absolute top-4 right-4 glass-button p-2 rounded-full z-10"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center justify-center mb-6">
                <div className={glassSkill + ' w-20 h-20 flex items-center justify-center rounded-full'}>
                  <selectedHobby.icon size={40} className="text-ios-blue-400" />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-white text-center">{selectedHobby.label}</h2>
              <div className="text-ios-gray-200 leading-relaxed mb-6 text-center">
                {selectedHobby.description}
              </div>
              
              {selectedHobby.label === 'Movies' ? (
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4 text-center">Top 3 Movies</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedHobby.movies?.map((movie, idx) => (
                        <div key={idx} className="text-center">
                          <img 
                            src={movie.cover} 
                            alt={movie.title}
                            className="w-full h-32 object-cover rounded-lg mb-2 shadow-lg"
                          />
                          <p className="text-ios-gray-200 text-sm">{movie.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 text-center">Top 3 TV Shows</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedHobby.shows?.map((show, idx) => (
                        <div key={idx} className="text-center">
                          <img 
                            src={show.cover} 
                            alt={show.title}
                            className="w-full h-32 object-cover rounded-lg mb-2 shadow-lg"
                          />
                          <p className="text-ios-gray-200 text-sm">{show.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedHobby.label === 'Gaming' ? (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">Top 3 Games</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedHobby.games?.map((game, idx) => (
                      <div key={idx} className="text-center">
                        <img 
                          src={game.cover} 
                          alt={game.title}
                          className="w-full h-32 object-cover rounded-lg mb-2 shadow-lg"
                        />
                        <p className="text-ios-gray-200 text-sm">{game.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : selectedHobby.label === 'Music' ? (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">Top 3 Albums</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedHobby.albums?.map((album, idx) => (
                      <div key={idx} className="text-center">
                        <img 
                          src={album.cover} 
                          alt={album.title}
                          className="w-full h-32 object-cover rounded-lg mb-2 shadow-lg"
                        />
                        <p className="text-ios-gray-200 text-sm font-medium">{album.title}</p>
                        <p className="text-ios-gray-300 text-xs">{album.artist}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-ios-gray-300 text-sm leading-relaxed text-center">
                  {selectedHobby.details}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Resume; 