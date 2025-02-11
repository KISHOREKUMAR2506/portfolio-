"use client"
import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import { FaBrain, FaCode, FaRobot } from 'react-icons/fa';
import { Si365Datascience } from 'react-icons/si';

const About: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  const highlights = [
    {
      icon: <Si365Datascience className="text-2xl" />,
      title: 'Data Science',
      text: 'Enthusiast exploring the world of data analytics and insights'
    },
    {
      icon: <FaRobot className="text-2xl" />,
      title: 'Robotics',
      text: 'Passionate about building and programming robots'
    },
    {
      icon: <FaCode className="text-2xl" />,
      title: 'Web Development',
      text: 'Creating responsive and dynamic web applications'
    },
    {
      icon: <FaBrain className="text-2xl" />,
      title: 'Problem Solving',
      text: 'Strong foundation in DSA and analytical thinking'
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#090909] py-20 overflow-hidden">
      {/* Spotlight Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.15), transparent 40%)`
        }}
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#4F46E5 1px, transparent 1px), linear-gradient(to right, #4F46E5 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      {/* Animated Dots */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#4F46E5]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-7xl font-bold mb-6 text-white">
              About
            </h2>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl text-[#4F46E5] mb-4"
            >
            </motion.div>
          </motion.div>
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 backdrop-blur-sm bg-[#090909]/50 p-6 rounded-lg"
            >
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  I'm a pre-final year student pursuing my bachelor's in Electronics and 
                  Communication Engineering. Ready to learn, re-learn and unlearn.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[#4F46E5] mt-1">🌞</span>
                    <p className="text-gray-300">
                      Data science enthusiast and roboticist, working currently on the related tech.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#4F46E5] mt-1">🎯</span>
                    <p className="text-gray-300">
                      Keen interest in web development, machine learning, and robotics.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#4F46E5] mt-1">💻</span>
                    <p className="text-gray-300">
                      Strong interest in DSA and problem solving, analytical thinking.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Right Column - Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg backdrop-blur-sm bg-[#4F46E5]/5 border border-[#4F46E5]/20 
                    hover:bg-[#4F46E5]/10 transition-all duration-300
                    hover:shadow-lg hover:shadow-[#4F46E5]/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-[#4F46E5]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;