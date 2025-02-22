import { motion, useInView } from 'framer-motion';
import { FC, useRef, useState } from 'react';
import { BiCodeAlt, BiData } from 'react-icons/bi';
import { FaAward, FaJava, FaNetworkWired, FaPython, FaReact, FaUserGraduate } from 'react-icons/fa';
import { GiArtificialIntelligence, GiCircuitry, GiProcessor } from 'react-icons/gi';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { SiCisco, SiCplusplus, SiJavascript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { TbCircuitCapacitor } from 'react-icons/tb';

const Skills: FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  return (
    <motion.section 
      id="skills"
      ref={ref} 
      className="py-20 bg-[#090909] relative overflow-hidden min-h-screen"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Technical Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#4F46E5 1px, transparent 1px), linear-gradient(to right, #4F46E5 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills & Achievements
          </h3>
          <motion.div
            className="h-1 w-24 bg-[#4F46E5] mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Skills Carousel with Improved Responsiveness */}
        <div className="overflow-hidden relative backdrop-blur-sm bg-[#1a1a1a]/30 rounded-2xl border border-[#4F46E5]/20 p-4 sm:p-8">
          <motion.div 
            className="flex"
            animate={{ x: `-${activeSection * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {skillSections.map((section, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <motion.div 
                  className="text-center mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-[2px] w-12 bg-[#4F46E5]" />
                    <h4 className="text-xl sm:text-2xl font-bold text-white">{section.title}</h4>
                    <div className="h-[2px] w-12 bg-[#4F46E5]" />
                  </div>

                  {/* Improved Grid Layout */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
                    {section.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/20 to-transparent 
                          rounded-xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300" 
                        />
                        <motion.div
                          className="relative p-4 sm:p-6 rounded-xl bg-[#1a1a1a] border border-[#4F46E5]/20 
                            hover:border-[#4F46E5]/40 backdrop-blur-sm transition-all duration-300
                            flex flex-col items-center justify-center h-full"
                          whileHover={{ y: -5 }}
                        >
                          <div className="flex flex-col items-center gap-3 sm:gap-4">
                            <div className="text-4xl sm:text-6xl">
                              {skill.icon}
                            </div>
                            <span className="text-sm sm:text-lg text-gray-300 font-medium text-center">
                              {skill.name}
                            </span>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-2 right-2 sm:left-4 sm:right-4">
            <motion.button
              onClick={() => setActiveSection((prev) => (prev - 1 + skillSections.length) % skillSections.length)}
              className="p-2 sm:p-3 rounded-full bg-[#1a1a1a] border border-[#4F46E5]/20 text-white
                hover:bg-[#4F46E5]/20 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdArrowBackIos className="text-xl sm:text-2xl" />
            </motion.button>

            <motion.button
              onClick={() => setActiveSection((prev) => (prev + 1) % skillSections.length)}
              className="p-2 sm:p-3 rounded-full bg-[#1a1a1a] border border-[#4F46E5]/20 text-white
                hover:bg-[#4F46E5]/20 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdArrowForwardIos className="text-xl sm:text-2xl" />
            </motion.button>
          </div>
        </div>

        {/* Achievements Section with Improved Responsiveness */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12">Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/20 to-transparent 
                  rounded-xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300" 
                />
                <motion.div
                  className="relative p-4 sm:p-6 rounded-xl bg-[#1a1a1a] border border-[#4F46E5]/20 
                    hover:border-[#4F46E5]/40 backdrop-blur-sm transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    {achievement.icon}
                    <h4 className="text-lg sm:text-xl font-bold text-white">{achievement.title}</h4>
                  </div>
                  <p className="text-sm sm:text-base text-gray-400">{achievement.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;