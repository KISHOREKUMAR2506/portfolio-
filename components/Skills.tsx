"use client"
import { motion, useInView } from 'framer-motion';
import { FC, useRef, useState } from 'react';
import { BiCodeAlt, BiData } from 'react-icons/bi';
import { FaAward, FaJava, FaNetworkWired, FaPython, FaReact, FaUserGraduate } from 'react-icons/fa';
import { GiArtificialIntelligence, GiCircuitry, GiProcessor } from 'react-icons/gi';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { SiCisco, SiCplusplus, SiJavascript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { TbCircuitCapacitor } from 'react-icons/tb';

const Skills: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeSection, setActiveSection] = useState(0);

  const skillSections = [
    {
      title: "Programming & Database",
      color: "from-purple-500 to-blue-500",
      skills: [
        { name: "C++", icon: <SiCplusplus className="text-6xl text-blue-400 transition-all duration-300" /> },
        { name: "Python", icon: <FaPython className="text-6xl text-yellow-400 transition-all duration-300" /> },
        { name: "Java", icon: <FaJava className="text-6xl text-red-400 transition-all duration-300" /> },
        { name: "SQL", icon: <BiData className="text-6xl text-cyan-400 transition-all duration-300" /> }
      ]
    },
    {
      title: "Frontend & Backend",
      color: "from-purple-500 to-blue-500",
      skills: [
        { name: "React.js", icon: <FaReact className="text-6xl text-cyan-400 transition-all duration-300" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-6xl text-white transition-all duration-300" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-6xl text-yellow-400 transition-all duration-300" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-6xl text-sky-400 transition-all duration-300" /> }
      ]
    },
    {
      title: "Network & Cloud",
      color: "from-purple-500 to-blue-500",
      skills: [
        { name: "Network Design", icon: <FaNetworkWired className="text-6xl text-blue-400 transition-all duration-300" /> },
        { name: "SDN", icon: <GiProcessor className="text-6xl text-purple-400 transition-all duration-300" /> },
        { name: "SD-WAN", icon: <BiCodeAlt className="text-6xl text-green-400 transition-all duration-300" /> },
        { name: "Cloud Integration", icon: <GiArtificialIntelligence className="text-6xl text-red-400 transition-all duration-300" /> }
      ]
    },
    {
      title: "Simulation",
      color: "from-purple-500 to-blue-500",
      skills: [
        { name: "Pspice", icon: <TbCircuitCapacitor className="text-6xl text-orange-400 transition-all duration-300" /> },
        { name: "LTspice", icon: <GiCircuitry className="text-6xl text-blue-400 transition-all duration-300" /> },
        { name: "Packet Tracer", icon: <SiCisco className="text-6xl text-blue-500 transition-all duration-300" /> },
        { name: "MATLAB", icon: <GiArtificialIntelligence className="text-6xl text-orange-400 transition-all duration-300" /> }
      ]
    }
  ];

  const achievements = [
    { title: "Best Project Award", description: "IETE Project Presentation (Feb 2024)", icon: <FaAward className="text-3xl mr-4 text-blue-500" /> },
    { title: "Runner-Up", description: "IETE Paper Presentation (Jul 2024)", icon: <FaAward className="text-3xl mr-4 text-blue-500" /> },
    { title: "Best Student Volunteer Award", description: "IETE (2023 & 2024)", icon: <FaUserGraduate className="text-3xl mr-4 text-green-500" /> }
  ];

  const nextSection = () => {
    setActiveSection((prev) => (prev + 1) % skillSections.length);
  };

  const prevSection = () => {
    setActiveSection((prev) => (prev - 1 + skillSections.length) % skillSections.length);
  };

  return (
    <motion.section id = "skills"
      ref={ref} 
      className="py-20 bg-[#090909] relative overflow-hidden min-h-screen"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-center text-white mb-8"> Technical Skills & Achievements</h3>
        <div className="overflow-hidden relative">
          <motion.div 
            className="flex"
            animate={{ x: `-${activeSection * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {skillSections.map((section, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-white mb-4">{section.title}</h4>
                  <motion.div 
                    className={`h-1 w-32 mx-auto bg-gradient-to-r ${section.color}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center mt-4">
                    {section.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="group flex flex-col items-center gap-4 w-full"
                      >
                        <motion.div
                          className="p-8 bg-white/5 rounded-2xl hover:bg-white/10 
                            w-full flex justify-center
                            hover:shadow-lg hover:shadow-current/20 group-hover:border-current/20
                            border border-transparent"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                        >
                          {skill.icon}
                        </motion.div>
                        <span className="text-lg text-gray-300 text-center font-semibold group-hover:text-white">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button onClick={prevSection} className="p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition-colors">
              <MdArrowBackIos className="text-2xl" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button onClick={nextSection} className="p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition-colors">
              <MdArrowForwardIos className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-white mb-8">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="p-6 border-2 border-gray-700 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:border-blue-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  {achievement.icon}
                  <h4 className="text-xl font-bold whitespace-nowrap">{achievement.title}</h4>
                </div>
                <p className="text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;