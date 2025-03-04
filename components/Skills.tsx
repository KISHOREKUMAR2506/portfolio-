"use client";
import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { FaCloud, FaCode, FaDesktop, FaJava, FaNetworkWired, FaServer } from 'react-icons/fa';
import {
  SiC,
  SiDocker,
  SiFlask,
  SiFramer,
  SiGit,
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
  const [isMobile, setIsMobile] = useState(false);
  const [clickedCard, setClickedCard] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleCard = (id: string) => {
    setClickedCard(clickedCard === id ? null : id);
  };

  const categories = [
    {
      id: 'development',
      name: 'Programming',
      icon: FaCode,
      color: "#4F46E5",
      skills: [
        { name: "C", icon: SiC },
        { name: "Python", icon: SiPython },
        { name: "Java", icon: FaJava},
        { name: "JavaScript", icon: SiJavascript }
        
      ]
    },
    {
      id: 'frontend',
      name: 'Frontend',
      icon: FaDesktop,
      color: "#06B6D4",
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
      skills: [
        { name: "Git", icon: SiGit },
        { name: "Docker", icon: SiDocker },
        { name: "Google Cloud", icon: SiGooglecloud },
        { name: "Cisco PacketTracer", icon: FaNetworkWired }
      ]
    }
  ];

  return (
    <section className="relative min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16">
          <motion.h1 className="text-6xl md:text-8xl font-bold">
            <span className="bg-gradient-to-r from-[#4F46E5] via-blue-500 to-purple-500 bg-clip-text text-transparent">
              My Tech Stack
            </span>
          </motion.h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            const isHovered = hoveredCard === category.id;
            const isClicked = clickedCard === category.id;

            return (
              <motion.div
                key={category.id}
                className="relative h-[400px] group cursor-pointer"
                onMouseEnter={() => !isMobile && setHoveredCard(category.id)}
                onMouseLeave={() => !isMobile && setHoveredCard(null)}
                onClick={() => isMobile && toggleCard(category.id)}
              >
                <div className="h-full bg-[#1a1a1a]/30 backdrop-blur-sm rounded-xl overflow-hidden border border-[#4F46E5]/20 group-hover:border-[#4F46E5]/40 transition-all duration-500 relative">
                  
                  {/* Front Content (Logo) */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center p-8"
                    animate={{
                      opacity: isHovered || isClicked ? 0 : 1,
                      scale: isHovered || isClicked ? 0.8 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div className="p-8 rounded-full bg-white/10">
                      <Icon className="text-6xl" style={{ color: category.color }} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </motion.div>

                  {/* Skills Content */}
                  <motion.div
                    className="absolute inset-0 p-8"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isHovered || isClicked ? 1 : 0,
                      y: isHovered || isClicked ? 0 : 20
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
                            className="flex items-center gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: isHovered || isClicked ? 1 : 0, x: isHovered || isClicked ? 0 : -20 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <SkillIcon className="text-2xl" style={{ color: category.color }} />
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(45deg, ${category.color}10, transparent)` }}
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
