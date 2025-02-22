"use client"
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { FaArrowRight, FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // Parallax Effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePosition({ 
        x: (clientX - centerX) * 0.05,
        y: (clientY - centerY) * 0.05
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.section id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#090909] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Enhanced Technical Background */}
      <div className="absolute inset-0">
        {/* Circuit Grid */}
        <div className="absolute inset-0 circuit-pattern opacity-[0.03]" 
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        
        {/* Animated Gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#090909] via-[#121212] to-[#090909]"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, #4F46E5 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, #4F46E5 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, #4F46E5 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, #4F46E5 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ opacity: 0.1 }}
        />

        {/* Technical Grid */}
        <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr,1.5fr] gap-12 items-center">
          {/* Profile Image with Enhanced Technical Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto md:mx-0">
              {/* Rotating Border Effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #4F46E5, transparent)',
                  opacity: 0.3,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div 
                className="relative w-full h-full rounded-full border-4 border-[#4F46E5] tech-card overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glowing Effect */}
                <motion.div
                  className="absolute inset-0 bg-[#4F46E5]"
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <div className="absolute inset-[2px] rounded-full overflow-hidden">
                  <Image
                    src="/profile3.jpg"
                    alt="Profile"
                    fill
                    className="object-cover border-4 border-blue-500"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content with Enhanced Terminal Style */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <div className="terminal p-6 rounded-lg relative overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 border-b border-[#4F46E5]/20 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-sm text-gray-400 font-mono">profile.exe</span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-[#4F46E5] font-mono text-lg">&gt; initiating_profile.sh</span>
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold text-[#E5E7EB] mt-2 tracking-tight relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="relative z-10">Kishore Kumar</span>
                  {/* Subtle glow effect behind the text */}
                  <motion.div
                    className="absolute inset-0 bg-[#4F46E5] blur-2xl rounded-full"
                    animate={{ 
                      opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "linear" 
                    }}
                    style={{ zIndex: 0 }}
                  />
                </motion.h1>
              </motion.div>

              <motion.div 
                className="code-block mt-4 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="font-mono text-sm">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">profile</span> = {"{"}
                  <br />
                  &nbsp;&nbsp;role: <span className="text-green-400">"IoT & Nxt-Gen Networking"</span>,
                  <br />
                  &nbsp;&nbsp;expertise: [<span className="text-yellow-300">"SDN"</span>, <span className="text-yellow-300">"Cloud"</span>, <span className="text-yellow-300">"IoT"</span> <span className="text-yellow-300">"Fullstack Developer"</span> ],
                  <br />
                  &nbsp;&nbsp;status: <span className="text-green-400">"Ready for Innovation"</span>
                  <br />
                  {"}"};
                </div>
              </motion.div>
            </div>

            {/* Enhanced Action Buttons */}
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="/resume.pdf"
                className="tech-card group px-6 py-3 text-white rounded-lg flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(79, 70, 229, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
              >
                <FaFileDownload className="text-lg" />
                <span className="font-medium">Resume</span>
                <FaArrowRight className="text-lg opacity-0 group-hover:opacity-100 transition-all -ml-1 group-hover:ml-1" />
              </motion.a>

              <div className="flex gap-4">
                {[
                  { icon: FaGithub, url: "https://github.com/KISHOREKUMAR2506" },
                  { icon: FaLinkedin, url: "https://www.linkedin.com/in/kishore-kumar-i-ece/" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="tech-card text-[#9CA3AF] hover:text-[#4F46E5] text-2xl p-2 rounded-lg"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(79, 70, 229, 0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;