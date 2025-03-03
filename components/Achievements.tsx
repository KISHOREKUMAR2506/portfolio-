"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { FC, useRef } from 'react';
import { FaAward, FaTrophy } from 'react-icons/fa';

interface Achievement {
  title: string;
  organization?: string;
  position: string;
  icon: React.ElementType;
  color: string;
  date: string;
  gradient: string;
}

const Achievements: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const achievements: Achievement[] = [
    {
      title: "SSN Envision Hackathon",
      position: "Runner-Up",
      icon: FaTrophy,
      color: "#4F46E5",
      gradient: "from-[#4F46E5] to-[#A78BFA]",
      date: "Feb 2025"
    },
    {
      title: "Best Project Award (IETE)",
      position: "Winner",
      icon: FaTrophy,
      color: "#06B6D4",
      gradient: "from-[#06B6D4] to-[#3B82F6]",
      date: "Feb 2024"
    },
    {
      title: "Paper Presentation (IETE)",
      position: "Runner-Up",
      icon: FaTrophy,
      color: "#8B5CF6",
      gradient: "from-[#8B5CF6] to-[#EC4899]",
      date: "Jul 2024"
    },
    {
      title: "Best Student Volunteer Award - IETE",
      position: "Vice Chair Person",
      icon: FaAward,
      color: "#EC4899",
      gradient: "from-[#EC4899] to-[#F43F5E]",
      date: "2023 & 2024"
    }
  ];

  return (
    <section className="relative py-20 mb-20" ref={containerRef}>
      {/* Enhanced Background */}
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

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ y }}
      >
        {/* Title */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <motion.h1 className="text-6xl md:text-8xl font-bold">
            <span className="bg-gradient-to-r from-[#4F46E5] via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Achievements
            </span>
          </motion.h1>
        </motion.div>
        {/* Timeline Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* Animated Timeline Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 h-full w-px"
            style={{
              background: 'linear-gradient(to bottom, transparent, #4F46E5, #06B6D4, #8B5CF6, transparent)'
            }}
            animate={{
              backgroundPosition: ["0px 0px", "0px 100px"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                className={`relative mb-16 ${
                  isEven ? 'md:pr-[51%]' : 'md:pl-[51%] md:ml-auto'
                }`}
                initial={{ opacity: 0, y: 30, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Enhanced Timeline Node */}
                <motion.div
                  className="absolute left-8 md:left-1/2 top-10 w-3 h-3 rounded-full 
                    border-4 border-[#090909] z-20"
                  style={{ 
                    background: `linear-gradient(45deg, ${achievement.color}, transparent)`,
                    transform: 'translate(-50%, -50%)',
                    boxShadow: `0 0 20px ${achievement.color}40`
                  }}
                  whileHover={{ scale: 1.5 }}
                  animate={{
                    boxShadow: [
                      `0 0 20px ${achievement.color}40`,
                      `0 0 30px ${achievement.color}60`,
                      `0 0 20px ${achievement.color}40`
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Achievement Card */}
                <motion.div
                  className={`relative ml-16 md:ml-0 group ${
                    isEven ? 'md:mr-8' : 'md:ml-8'
                  }`}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-[#1a1a1a]/30 backdrop-blur-sm rounded-xl overflow-hidden
                    relative group-hover:shadow-2xl transition-all duration-500">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r p-[1px] rounded-xl opacity-40
                      group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`bg-gradient-to-r ${achievement.gradient} h-full w-full rounded-xl`} />
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 p-6 bg-[#1a1a1a]/95 rounded-xl">
                      {/* Interactive Glow Effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 
                          transition-all duration-500"
                        style={{
                          background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), 
                            ${achievement.color}15, transparent 40%)`
                        }}
                      />

                      <div className="flex items-start gap-5">
                        {/* Enhanced Icon */}
                        <motion.div 
                          className="p-4 rounded-xl shrink-0 relative overflow-hidden"
                          style={{ 
                            background: `linear-gradient(45deg, ${achievement.color}20, transparent)`
                          }}
                          whileHover={{ scale: 1.1, rotate: 10 }}
                        >
                          <Icon 
                            className="text-2xl relative z-10"
                            style={{ color: achievement.color }}
                          />
                          <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100
                              transition-all duration-300"
                            animate={{
                              background: [
                                `radial-gradient(circle at 30% 30%, ${achievement.color}30, transparent)`,
                                `radial-gradient(circle at 70% 70%, ${achievement.color}30, transparent)`,
                                `radial-gradient(circle at 30% 30%, ${achievement.color}30, transparent)`
                              ]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                          />
                        </motion.div>

                        {/* Enhanced Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <motion.h3 
                              className="text-xl font-bold text-white/90 group-hover:text-white
                                transition-colors duration-300"
                              whileHover={{ scale: 1.02 }}
                            >
                              {achievement.title}
                            </motion.h3>
                            <motion.span 
                              className="text-sm font-medium text-gray-400 whitespace-nowrap 
                                shrink-0 px-3 py-1 rounded-full"
                              style={{
                                background: `linear-gradient(45deg, ${achievement.color}20, transparent)`
                              }}
                            >
                              {achievement.date}
                            </motion.span>
                          </div>

                          {achievement.organization && (
                            <motion.p 
                              className="text-sm text-gray-400 mb-3 font-medium"
                              initial={{ opacity: 0.8 }}
                              whileHover={{ opacity: 1 }}
                            >
                              {achievement.organization}
                            </motion.p>
                          )}

                          <motion.div
                            className="inline-block text-sm font-medium px-4 py-1.5 rounded-full
                              relative overflow-hidden"
                            style={{ 
                              background: `linear-gradient(45deg, ${achievement.color}30, ${achievement.color}10)`,
                              color: achievement.color 
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="relative z-10">{achievement.position}</span>
                            <motion.div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100"
                              animate={{
                                background: [
                                  `linear-gradient(45deg, ${achievement.color}40, transparent)`,
                                  `linear-gradient(45deg, transparent, ${achievement.color}40)`,
                                  `linear-gradient(45deg, ${achievement.color}40, transparent)`
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements; 