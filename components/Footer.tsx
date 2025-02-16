"use client";
import { motion } from 'framer-motion';
import { Montserrat, Poppins, Space_Grotesk } from 'next/font/google';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

// Font configurations
const montserrat = Montserrat({ subsets: ['latin'] });
const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin']
});
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

const navigationLinks = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Skills", href: "skills" },
  { name: "Contact", href: "contact" }
] as const;

const socialLinks = [
  { 
    icon: <FaGithub className="text-2xl" />, 
    href: 'https://github.com/KISHOREKUMAR2506', 
    label: 'GitHub',
    color: 'hover:text-gray-400',
    hoverGradient: 'hover:from-gray-500 hover:to-gray-700'
  },
  { 
    icon: <FaLinkedin className="text-2xl" />, 
    href: 'https://www.linkedin.com/in/kishore-kumar-i-ece/', 
    label: 'LinkedIn',
    color: 'hover:text-blue-500',
    hoverGradient: 'hover:from-blue-500 hover:to-blue-700'
  },
  { 
    icon: <BiLogoGmail className="text-2xl" />, 
    href: 'mailto:i.kishorekumar.ece@gmail.com', 
    label: 'Gmail',
    color: 'hover:text-red-500',
    hoverGradient: 'hover:from-red-500 hover:to-red-700'
  },
  { 
    icon: <SiLeetcode className="text-2xl" />, 
    href: 'https://leetcode.com/u/KishoreKumar_I/', 
    label: 'LeetCode',
    color: 'hover:text-yellow-500',
    hoverGradient: 'hover:from-yellow-500 hover:to-yellow-700'
  }
] as const;

const Footer: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#090909] via-[#111] to-black text-white mt-auto">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-[2px]" />
      </div>

      {/* Main Content - Reduced font sizes */}
      <div className="relative z-10 container mx-auto px-6 py-8">
        <motion.div id ="contact" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 backdrop-blur-sm 
                              bg-white/[0.02] rounded-2xl border border-white/10 p-6">
          
          {/* Brand Section - Reduced font sizes */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div className="h-full p-6 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent
                                  border border-white/[0.05] hover:border-white/10">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <Link href="#home" onClick={(e) => handleScroll(e, 'home')}>
                    <motion.h2
                      className={`text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500
                              bg-clip-text text-transparent inline-block mb-3 ${spaceGrotesk.className}`}
                      whileHover={{ scale: 1.02 }}
                    >
                      Kishore Kumar
                    </motion.h2>
                  </Link>
                  <p className={`text-lg text-gray-400 leading-relaxed mb-4 ${montserrat.className}`}>
                  Effortless Innovation & Seamless Connectivity
                  </p>
                </div>
                
                {/* Social Links - Smaller icons */}
                <div className="grid grid-cols-4 gap-3">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-gradient-to-br from-white/[0.05] to-transparent
                                ${link.color} flex items-center justify-center group
                                border border-white/[0.05] hover:border-white/20`}
                      whileHover={{ y: -5, scale: 1.1 }}
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links - Reduced font sizes */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="h-full p-6 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent
                           border border-white/[0.05] hover:border-white/10">
              <h3 className={`text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400
                           bg-clip-text text-transparent mb-4 ${spaceGrotesk.className}`}>
                Quick Links
              </h3>
              <div className="grid grid-cols-1 gap-4">
  {navigationLinks.map((link) => (
    <a
      key={link.name}
      href={`#${link.href}`} // Keeps anchor functionality
      onClick={(e) => {
        e.preventDefault();
        const targetSection = document.getElementById(link.href);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }} // Smooth scrolling function
      className="group relative w-fit cursor-pointer"
    >
      <motion.span
        className={`text-base ${poppins.className} ${
          activeSection === link.href ? "text-white" : "text-gray-400"
        } hover:text-white transition-colors duration-300`}
        whileHover={{ x: 10 }}
      >
        {link.name}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"/>
      </motion.span>
    </a>
  ))}
              </div>
            </div>
          </div>

          {/* Contact Info - Reduced font sizes */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="h-full p-6 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent
                           border border-white/[0.05] hover:border-white/10">
              <h3 className={`text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400
                           bg-clip-text text-transparent mb-4 ${spaceGrotesk.className}`}>
                Contact
              </h3>
              <motion.div className={`space-y-4 ${montserrat.className}`}>
                <motion.a 
                  href="mailto:i.kishorekumar.ece@gmail.com"
                  className="block group hover:bg-white/5 p-3 rounded-lg
                           transition-all duration-300 border border-transparent
                           hover:border-white/10 overflow-hidden"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 p-2 bg-white/5 rounded-full group-hover:bg-red-500/10">
                      <BiLogoGmail className="text-lg group-hover:text-red-400" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-l text-gray-500 group-hover:text-gray-400">Email</span>
                      <span className="text-sm group-hover:text-white truncate">
                      i.kishorekumar.ece@gmail.com

                      </span>
                    </div>
                  </div>
                </motion.a>

                <motion.div 
                  className="block group hover:bg-white/5 p-3 rounded-lg
                           transition-all duration-300 border border-transparent
                           hover:border-white/10"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 p-2 bg-white/5 rounded-full group-hover:bg-blue-500/10">
                      <FaMapMarkerAlt className="text-lg group-hover:text-blue-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 group-hover:text-gray-400">Location</span>
                      <span className="text-sm group-hover:text-white">
                        Chennai, India
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Copyright - Smaller text */}
          <div className="lg:col-span-12">
            <motion.div className={`text-center pt-3 border-t border-white/[0.05] ${poppins.className}`}>
              <p className="text-gray-400 text-xs">
                © {new Date().getFullYear()} Kishore Kumar. All rights reserved.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
