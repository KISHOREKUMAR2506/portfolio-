"use client";
import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import { FaCloud, FaCode, FaDesktop, FaServer } from 'react-icons/fa';
import {
  SiC,
  SiDocker,
  SiFlask,
  SiFramer,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss
} from 'react-icons/si';

const Skills: FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const categories = [
    {
      id: 'development',
      name: 'Development',
      icon: FaCode,
      color: "#4F46E5",
      gradient: "from-[#4F46E5] to-[#A78BFA]",
      skills: [
        { name: "Python", icon: SiPython },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Java", icon: SiJavascript },
        { name: "C", icon: SiC }
      ]
    },
    {
      id: 'frontend',
      name: 'Frontend',
      icon: FaDesktop,
      color: "#06B6D4",
      gradient: "from-[#06B6D4] to-[#3B82F6]",
      skills: [
        { name: "React.js", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TailwindCSS", icon: SiTailwindcss },
        { name: "Framer Motion", icon: SiFramer }
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: FaServer,
      color: "#8B5CF6",
      gradient: "from-[#8B5CF6] to-[#EC4899]",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Flask", icon: SiFlask },
        { name: "MySQL", icon: SiMysql },
        { name: "MongoDB", icon: SiMongodb }
      ]
    },
    {
      id: 'deployment',
      name: 'Deployment',
      icon: FaCloud,
      color: "#F97316",
      gradient: "from-[#F97316] to-[#FACC15]",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "Docker", icon: SiDocker },
        { name: "Google Cloud", icon: SiGooglecloud },
        { name: "GitHub", icon: SiGithub }
      ]
    }
  ];

  return (
    <section className="relative min-h-screen py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[#090909]">
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#4F46E5 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <motion.h1 className="text-6xl md:text-8xl font-bold">
            <span className="bg-gradient-to-r from-[#4F46E5] via-blue-500 to-purple-500 bg-clip-text text-transparent">
              My Tech Stack
            </span>
          </motion.h1>
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            const isHovered = hoveredCard === category.id;
            
            return (
              <motion.div
                key={category.id}
                className="relative h-[400px] group"
                onHoverStart={() => setHoveredCard(category.id)}
                onHoverEnd={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="h-full bg-[#1a1a1a]/30 backdrop-blur-sm rounded-xl overflow-hidden
                  border border-[#4F46E5]/20 group-hover:border-[#4F46E5]/40 
                  transition-all duration-500 relative">
                  {/* Front Content (Logo) */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center p-8"
                    animate={{
                      opacity: isHovered ? 0 : 1,
                      scale: isHovered ? 0.8 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="p-8 rounded-full bg-gradient-to-br mb-6"
                      style={{ 
                        background: `linear-gradient(45deg, ${category.color}20, transparent)`
                      }}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Icon className="text-6xl" style={{ color: category.color }} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </motion.div>

                  {/* Skills Content (Revealed on Hover) */}
                  <motion.div
                    className="absolute inset-0 p-8"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-xl font-bold text-white mb-6 text-center">
                      {category.name} Skills
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {category.skills.map((skill, index) => {
                        const SkillIcon = skill.icon;
                        return (
                          <motion.div
                            key={skill.name}
                            className="flex items-center gap-3 bg-white/5 p-4 rounded-xl
                              hover:bg-white/10 transition-colors duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                              opacity: isHovered ? 1 : 0,
                              x: isHovered ? 0 : -20 
                            }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <SkillIcon 
                              className="text-2xl" 
                              style={{ color: category.color }} 
                            />
                            <span className="text-gray-300 font-medium">
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(45deg, ${category.color}10, transparent)`
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
