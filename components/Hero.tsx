"use client";

import { motion } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1.2, ease: "power4.out" });
      gsap.from(".hero-subtitle", { opacity: 0, y: 30, duration: 1.5, ease: "power4.out", delay: 0.3 });
      gsap.from(".profile-pic", { scale: 0.8, opacity: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#0a0f1e] overflow-hidden"
    >
      {/* Static Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#10213e] to-[#0a0f1e] opacity-95" />
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        {/* Profile Picture with Subtle Glow */}
        <motion.div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-[#1e40af] profile-pic shadow-lg bg-white/10 ring-4 ring-[#1e40af]/50">
          <Image src="/profile3.jpg" alt="Profile" fill className="object-cover" priority />
        </motion.div>

        {/* Title & Subtitle */}
        <motion.h1 className="hero-title text-5xl md:text-7xl font-extrabold text-white mt-6 shadow-md bg-gradient-to-r from-[#1e40af] to-[#2563eb] bg-clip-text text-transparent">
          Kishore Kumar
        </motion.h1>
        <motion.p className="hero-subtitle text-lg md:text-xl text-gray-300 mt-2 shadow-sm italic tracking-wide">
          AI | IoT | SDN | Cloud | Fullstack Developer
        </motion.p>

        {/* Buttons & Social Links */}
        <motion.div className="flex gap-6 mt-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5 }}>
          <motion.a href="/resume.pdf" className="px-6 py-3 bg-gradient-to-r from-[#1e40af] to-[#2563eb] text-white font-semibold rounded-lg flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg" whileTap={{ scale: 0.95 }} target="_blank">
            <FaFileDownload className="text-lg" /> Resume
          </motion.a>
          <div className="flex gap-4">
            {[{ icon: FaGithub, url: "https://github.com/KISHOREKUMAR2506" }, { icon: FaLinkedin, url: "https://www.linkedin.com/in/kishore-kumar-i-ece/" }].map((social, index) => (
              <motion.a key={index} href={social.url} className="text-[#9CA3AF] hover:text-white text-2xl p-3 rounded-lg bg-[#10213e]/80 border border-[#1e40af]/30 transition-all duration-300 shadow-lg backdrop-blur-lg hover:scale-110" whileTap={{ scale: 0.95 }} target="_blank">
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
