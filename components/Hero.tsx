"use client"
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaArrowRight, FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const [showMessage, setShowMessage] = useState(false);
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const mouseSpring = {
    x: useSpring(0, springConfig),
    y: useSpring(0, springConfig),
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseSpring.x.set((clientX - centerX) * 0.1);
      mouseSpring.y.set((clientY - centerY) * 0.1);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseSpring.x, mouseSpring.y]);

  return (
    <motion.section id ="about"
      className="relative min-h-screen flex items-center justify-center bg-[#090909] overflow-hidden"
      style={{ opacity, y }}
    >
      {/* Enhanced Dark Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#090909] via-[#121212] to-[#090909]" />
        <motion.div 
  className="absolute inset-0 opacity-[0.02]"
  style={{
    backgroundImage: `
      linear-gradient(to right, #4F46E5 1px, transparent 1px),
      linear-gradient(to bottom, #4F46E5 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
  }}
/>

      </div>

      {/* Logo - Moved down and adjusted size */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-24 left-8 z-20"
      >
        <motion.div 
          className="relative w-20 h-20 border-2 border-[#4F46E5] rounded-lg p-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image
            src="/logo.png"
            alt="IKK Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr,1.5fr] gap-12 items-center">
          {/* Profile Image Column with Single Border */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Profile Image with Single Clean Border */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto md:mx-0">
              {/* Main Container */}
              <motion.div 
                className="relative w-full h-full rounded-full border-[2px] border-[#4F46E5]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Container */}
                <div className="absolute inset-[2px] rounded-full overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src="/profile3.jpg"
                      alt="Profile"
                      fill
                      className="object-cover"
                      style={{
                        filter: 'contrast(1.05) brightness(1.02) saturate(1.1)',
                      }}
                      priority
                      sizes="(max-width: 768px) 288px, 320px"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-[#4F46E5] font-mono text-lg">Hello, I'm</span>
                <h1 className="text-5xl md:text-6xl font-bold text-[#E5E7EB] mt-2 tracking-tight">
                  Kishore Kumar 
                </h1>
              </motion.div>
              
              <motion.h2 
                className="text-2xl md:text-3xl text-[#4F46E5] font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                AI & IoT Solutions Architect
              </motion.h2>

              <motion.p 
                className="text-[#9CA3AF] text-lg leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Specializing in crafting intelligent solutions that bridge the physical and digital worlds. 
                Focused on developing innovative AI and IoT systems that drive technological advancement.
              </motion.p>
            </div>

            {/* Actions */}
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="/resume.pdf"
                className="group px-6 py-3 bg-[#4F46E5] text-white rounded-lg flex items-center gap-2 hover:bg-[#4338CA] transition-all shadow-lg shadow-[#4F46E5]/20"
                whileHover={{ scale: 1.05 }}
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
                    className="text-[#9CA3AF] hover:text-[#4F46E5] text-2xl p-2 hover:bg-[#4F46E5]/10 rounded-lg transition-all"
                    whileHover={{ scale: 1.1 }}
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