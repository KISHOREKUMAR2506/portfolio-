"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ResumeModal from './ResumeModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <motion.section 
      className="min-h-screen flex flex-col items-center justify-center text-center 
        bg-black text-white relative overflow-hidden px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Background Effects - removed gradient */}
      <motion.div
        className="absolute w-full h-full opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <div className="absolute inset-0" />
      </motion.div>

      {/* Logo */}
      <motion.div
        className="absolute top-8 left-8 z-50"
        initial={{ 
          scale: 0.5,
          opacity: 0,
          y: -20
        }}
        animate={{ 
          scale: 1,
          opacity: 1,
          y: 0
        }}
        transition={{ 
          duration: 1,
          delay: 0.3,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <Image 
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          priority
          className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
          onError={(e) => {
            // Add error handling for image load failures
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = '/fallback-logo.png'; // Make sure to add a fallback image
          }}
        />
      </motion.div>

      {/* Main Content Container */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Profile Image */}
        <motion.div
          className="relative w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-white/90"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <Image 
            src="/profile3.jpg"
            alt="Profile Picture"
            fill
            className="object-cover"
            priority
            onError={(e) => {
              // Add error handling for image load failures
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/fallback-profile.png'; // Make sure to add a fallback image
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0" />
        </motion.div>

        {/* Rest of the content with staggered animations */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mt-8 tracking-wider bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent bg-300% animate-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          Hello!
        </motion.h1>

        {/* Typewriter section */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            I am a{" "}
            <span className="text-white font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              <Typewriter 
                words={["AI Engineer ✨", "Software Developer 💻", "Tech Innovator 🚀", "Creative Thinker 🎯"]} 
                loop={true}
                cursor
                cursorStyle="_" 
                typeSpeed={100} 
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </p>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.4, 0, 0.2, 1] }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 text-base md:text-lg 
            bg-black
            border border-[0.5px] border-white/50
            hover:border-white
            transition-colors duration-300 
            rounded-none
            tracking-wide font-medium"
            aria-label="View Resume"
          >
            <span className="flex items-center gap-2">
              View My Resume
              <svg 
                className="w-5 h-5 transition-transform duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Resume Modal */}
      {isModalOpen && (
        <ResumeModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </motion.section>
  );
};

export default Hero;