import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import { FaBrain, FaCode, FaShieldAlt } from 'react-icons/fa';
import { SiRaspberrypi } from "react-icons/si";

const About: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const highlights = [
    {
      icon: <SiRaspberrypi className="text-2xl" />, 
      title: 'IoT & Networking',
      text: 'Building scalable Software-Defined Networking (SDN), Cloud Integration, and Embedded IoT solutions.',
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: 'Cybersecurity & AI',
      text: 'Focused on AI-powered security, DDoS mitigation, and network optimization for enhanced resilience.',
    },
    {
      icon: <FaCode className="text-2xl" />,
      title: 'Web & Software Development',
      text: 'Developing responsive applications and next-gen digital solutions.',
    },
    {
      icon: <FaBrain className="text-2xl" />,
      title: 'Problem-Solving & Creative Thinking',
      text: 'I am actively developing my expertise in data structures, algorithms, and creative thinking to enhance my problem-solving abilities and innovative solutions.',
    }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-[#090909] py-20 overflow-hidden flex items-center justify-center">
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-bold mb-12 text-white"
          >
            About
          </motion.h2>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm bg-[#090909]/50 p-8 rounded-lg text-justify"
          >
            <p className="text-gray-300 leading-relaxed text-lg">
            I am a pre-final year Electronics and Communication Engineering student with a strong interest in IoT, AI-driven networking, and cloud technologies.
            I strive to develop intelligent, secure, and scalable systems while continuously exploring and innovating in the evolving technological landscape.

            </p>
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
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
