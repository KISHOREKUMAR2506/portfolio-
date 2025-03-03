"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1.2, ease: "power4.out" });
      gsap.from(".hero-subtitle", { opacity: 0, y: 30, duration: 1.5, ease: "power4.out", delay: 0.3 });
      gsap.from(".profile-pic", { scale: 0.8, opacity: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" });
      gsap.from(".social-links", { opacity: 0, x: -30, duration: 1, ease: "power3.out", delay: 0.6 });
    }, containerRef);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#090909] overflow-hidden"
    >
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />

      {/* Mouse Follow Effect - Moderately Enhanced */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(700px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.12), transparent 45%)`
        }}
      />

      {/* Enhanced Grid Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #3B82F6 0.8px, transparent 0.8px),
            linear-gradient(#3B82F6 0.8px, transparent 0.8px)
          `,
          backgroundSize: '50px 50px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px']
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1"
            style={{
              background: 'radial-gradient(circle, #3B82F6 50%, transparent)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.15, 0.4, 0.15],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Enhanced Corner Decorations */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-15">
        <motion.div
          className="w-full h-full"
          style={{
            borderRight: '1.5px solid #3B82F6',
            borderTop: '1.5px solid #3B82F6'
          }}
          animate={{
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40 opacity-15">
        <motion.div
          className="w-full h-full"
          style={{
            borderLeft: '1.5px solid #3B82F6',
            borderBottom: '1.5px solid #3B82F6'
          }}
          animate={{
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl backdrop-blur-[2px]">
        <motion.div 
          className="relative w-40 h-40 md:w-52 md:h-52 profile-pic"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 p-1 animate-spin-slow">
            <div className="bg-[#090909] w-full h-full rounded-full p-2">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-r from-blue-600/10 via-blue-500/10 to-indigo-500/10">
                <Image 
                  src="/profile3.jpg" 
                  alt="Profile" 
                  fill 
                  className="object-cover rounded-full"
                  priority 
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="mt-8 space-y-4">
          <motion.h1 
            className="hero-title text-5xl md:text-7xl font-bold text-white"
          >
            Kishore Kumar
          </motion.h1>

          <motion.div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-10 bg-blue-600/50" />
            <motion.p 
            className="hero-subtitle text-xl text-[#4F46E5] font-mono uppercase"
              // className="hero-subtitle text-lg md:text-xl text-blue-500 font-medium tracking-wider uppercase"
            >
              AI | IoT | SDN | Cloud | Fullstack
            </motion.p>
            <div className="h-[1px] w-10 bg-blue-600/50" />
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row gap-6 mt-10 social-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a 
            href="/Kishore_resume.pdf"
           className="flex items-center gap-3 px-6 py-3 rounded-lg bg-[#4F46E5] 
                          text-white hover:bg-[#4F46E5]/90 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
          >
            <FaFileDownload className="text-lg" />
            Download CV
          </motion.a>

          <div className="flex gap-4">
            {[
              { icon: FaGithub, url: "https://github.com/KISHOREKUMAR2506" },
              { icon: FaLinkedin, url: "https://www.linkedin.com/in/kishore-kumar-i-ece/" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl p-4 rounded-full bg-blue-600/5 border border-blue-400/20 text-blue-400 
                  hover:text-white hover:bg-blue-600/90 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
