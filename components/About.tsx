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

  // Skills / Areas of Learning
  const highlights = [
    {
      icon: <SiRaspberrypi className="text-3xl" />, 
      title: 'IoT & Networking',
      text: 'Currently learning SDN, cloud-based solutions, and embedded IoT systems.',
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'Cybersecurity & AI',
      text: 'Exploring AI-driven security, DDoS mitigation, and network optimization.',
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: 'Full Stack Development',
      text: 'Building high-performance, real-time digital experiences with emerging technologies.',
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: 'Problem-Solving & Innovation',
      text: 'Strengthening my expertise in algorithms, data structures, and creative problem-solving.',
    }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-[#090909] py-20 pb-12 overflow-hidden">
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

      {/* Container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* About Section Title */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <motion.h1
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#4F46E5] 
                via-blue-500 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              ABOUT ME
            </motion.h1>
          </div>
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
                  <h3 className="text-xl text-[#4F46E5] font-mono">Who am I?</h3>
                </div>

                <motion.p 
                  className="text-gray-300 leading-relaxed text-lg text-justify"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  As a pre-final year Electronics and Communication Engineering student, 
                  I am currently learning and exploring IoT, AI-driven networking, and cloud technologies.  
                  Passionate about developing innovative, scalable solutions, I enjoy tackling real-world challenges 
                  and pushing the boundaries of modern applications.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills / Learning Areas */}
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
                className="p-6 rounded-lg bg-[#4F46E5]/5 border border-[#4F46E5]/20"
              >
                <div className="flex items-center gap-4">
                  {item.icon}
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
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
