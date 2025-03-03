"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { FaArrowRight, FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated text reveal
      gsap.from(".hero-text-char", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.03,
        ease: "power4.out"
      });

      // Profile image animation
      gsap.from(".profile-image", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)"
      });

      // Terminal window animation
      gsap.from(".terminal", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

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

  // Split text for animation - fixed easing
  const heroText = "Kishore Kumar".split("").map((char, i) => (
    <motion.span
      key={i}
      className="hero-text-char inline-block"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        delay: i * 0.03, 
        duration: 1, 
        ease: "easeOut" // Changed from custom cubic-bezier to standard easing
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));

  return (
    <motion.section 
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y }}
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(79, 70, 229, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(79, 70, 229, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#4F46E5] rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: ['-100%', '100%'],
              x: [
                Math.random() * window.innerWidth - 50,
                Math.random() * window.innerWidth + 50
              ],
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

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto md:mx-0">
              {/* Glowing Effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #4F46E5, transparent, #4F46E5)',
                  opacity: 0.3,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Image Container */}
              <motion.div 
                className="relative w-full h-full rounded-full border-4 border-[#4F46E5] overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
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
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="text-left space-y-8">
            <motion.div 
              className="terminal p-6 rounded-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 border-b border-[#4F46E5]/20 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-sm text-gray-400 font-mono">profile.exe</span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#4F46E5] font-mono">&gt;</span>
                  <motion.span 
                    className="text-green-400 font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    initiating_profile.sh
                  </motion.span>
                </div>

                <motion.h1 
                  className="text-4xl md:text-6xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="bg-gradient-to-r from-[#4F46E5] via-blue-500 to-purple-500
                    bg-clip-text text-transparent">
                    Kishore Kumar
                  </span>
                </motion.h1>

                <motion.div 
                  className="font-mono text-sm space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">profile</span> = {"{"}
                  </div>
                  <div className="pl-4">
                    role: <span className="text-green-400">"IoT & Nxt-Gen Networking"</span>,
                  </div>
                  <div className="pl-4">
                    expertise: [
                    <span className="text-yellow-300">"SDN"</span>,{" "}
                    <span className="text-yellow-300">"Cloud"</span>,{" "}
                    <span className="text-yellow-300">"IoT"</span>,{" "}
                    <span className="text-yellow-300">"Fullstack"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    status: <span className="text-green-400">"Ready for Innovation"</span>
                  </div>
                  <div>{"}"}</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <motion.a
                href="/resume.pdf"
                className="group px-6 py-3 bg-[#4F46E5] text-white rounded-lg flex items-center gap-2
                  hover:bg-[#4F46E5]/90 transition-all duration-300"
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
                    className="text-[#9CA3AF] hover:text-[#4F46E5] text-2xl p-3 rounded-lg
                      bg-[#1a1a1a]/80 border border-[#4F46E5]/20 hover:border-[#4F46E5]/40
                      transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;