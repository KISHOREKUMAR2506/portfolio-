import { motion, useScroll, useTransform } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { FaBrain, FaCode, FaShieldAlt } from 'react-icons/fa';
import { SiRaspberrypi } from "react-icons/si";

const About: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const highlights = [
    {
      icon: <SiRaspberrypi className="text-3xl" />, 
      title: 'IoT & Networking',
      text: 'Building scalable Software-Defined Networking (SDN), Cloud Integration, and Embedded IoT solutions.',
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'Cybersecurity & AI',
      text: 'Focused on AI-powered security, DDoS mitigation, and network optimization for enhanced resilience.',
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: 'Web & Software Development',
      text: 'Developing responsive applications and next-gen digital solutions.',
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: 'Problem-Solving & Creative Thinking',
      text: 'I am actively developing my expertise in data structures, algorithms, and creative thinking to enhance my problem-solving abilities and innovative solutions.',
    }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-[#090909] py-20 overflow-hidden">
      {/* Enhanced Spotlight Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.15), transparent 40%)`
        }}
      />

      {/* Animated Grid Pattern */}
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

      {/* Floating Tech Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#4F46E5]/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: ['-100%', '100%'],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * -10,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-7xl font-bold mb-12 text-white relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            About
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-[#4F46E5]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Terminal-style About Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm bg-[#090909]/50 p-8 rounded-lg border border-[#4F46E5]/20 relative overflow-hidden group"
          >
            {/* Animated Background Gradient */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  'linear-gradient(45deg, #4F46E5 0%, transparent 100%)',
                  'linear-gradient(45deg, transparent 0%, #4F46E5 100%)',
                  'linear-gradient(45deg, #4F46E5 0%, transparent 100%)',
                ],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Tech Lines Decoration */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#4F46E5]/20" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#4F46E5]/20" />

            {/* Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-[#4F46E5]" />
                  <h3 className="text-xl text-[#4F46E5] font-mono">About Me</h3>
                </div>

                <motion.p 
                  className="text-gray-300 leading-relaxed text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  I am a pre-final year Electronics and Communication Engineering student with a strong interest in IoT, AI-driven networking, and cloud technologies. I strive to develop intelligent, secure, and scalable systems while continuously exploring and innovating in the evolving technological landscape.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Cards with Enhanced Animations */}
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
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: 'rgba(79, 70, 229, 0.15)',
                }}
                className="p-6 rounded-lg backdrop-blur-sm bg-[#4F46E5]/5 border border-[#4F46E5]/20 
                  transition-all duration-300 hover:shadow-lg hover:shadow-[#4F46E5]/10"
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="text-[#4F46E5]"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
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
