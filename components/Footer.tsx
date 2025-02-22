"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Montserrat, Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const montserrat = Montserrat({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

const Footer: FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <motion.footer 
      className="relative bg-gradient-to-b from-[#090909] to-black text-white"
      style={{ opacity }}
    >
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F46E5] to-transparent" />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            {/* Brand Section */}
            <div className="md:col-span-5">
              <Link href="#home">
                <div className="flex items-center gap-4 mb-6 group">
                  {/* Custom Logo Container */}
                  <motion.div
                    className="relative bg-[#1a1a1a] p-3 rounded-xl border border-[#4F46E5]/20
                      overflow-hidden group-hover:border-[#4F46E5]/40 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 opacity-20"
                      animate={{
                        background: [
                          'radial-gradient(circle at 50% 50%, #4F46E5, transparent)',
                          'radial-gradient(circle at 0% 100%, #4F46E5, transparent)',
                          'radial-gradient(circle at 100% 0%, #4F46E5, transparent)',
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    
                    {/* Your Custom Logo */}
                    <div className="relative w-12 h-12">
                      <Image
                        src="/logo.png"  // Make sure to put your logo file in the public folder
                        alt="IKK Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </motion.div>

                  {/* Name with Enhanced Styling */}
                  <div>
                    <h2 className={`text-4xl font-bold relative group-hover:scale-105 
                      transition-transform duration-300 ${spaceGrotesk.className}`}>
                      <span className="bg-gradient-to-r from-[#4F46E5] via-blue-500 to-purple-500
                        bg-clip-text text-transparent">
                        Kishore Kumar
                      </span>
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r 
                          from-[#4F46E5] via-blue-500 to-purple-500"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </h2>
                  </div>
                </div>
              </Link>
              <p className={`text-gray-400 text-lg mb-6 ${montserrat.className}`}>
                Effortless Innovation & Seamless Connectivity
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-3">
              <h3 className={`text-xl font-semibold text-white mb-6 ${spaceGrotesk.className}`}>
                Navigation
              </h3>
              <div className="space-y-4">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-base text-gray-400 hover:text-white transition-all duration-300 w-fit"
                    whileHover={{ x: 8 }}
                  >
                    <span className="relative group">
                      {item}
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#4F46E5] 
                        group-hover:w-full transition-all duration-300" />
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact & Connect Section */}
            <div className="md:col-span-4 space-y-8">
              {/* Contact Info */}
              <div>
                <h3 className={`text-xl font-semibold text-white mb-6 ${spaceGrotesk.className}`}>
                  Contact
                </h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:i.kishorekumar.ece@gmail.com"
                    className="block group"
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-center gap-3 text-gray-400 group-hover:text-white transition-colors duration-300">
                      <BiLogoGmail className="text-xl text-red-400" />
                      <span className="text-base">i.kishorekumar.ece@gmail.com</span>
                    </div>
                  </motion.a>
                  <motion.div
                    className="flex items-center gap-3 text-gray-400"
                    whileHover={{ x: 8 }}
                  >
                    <FaMapMarkerAlt className="text-xl text-blue-400" />
                    <span className="text-base">Chennai, India</span>
                  </motion.div>
                </div>
              </div>

              {/* Connect Section */}
              <div>
                <h3 className={`text-xl font-semibold text-white mb-6 ${spaceGrotesk.className}`}>
                  Connect
                </h3>
                <div className="flex gap-4">
                  {[
                    { icon: <FaGithub />, href: 'https://github.com/KISHOREKUMAR2506', color: 'hover:text-white', bg: 'hover:bg-gray-800/30' },
                    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/kishore-kumar-i-ece/', color: 'hover:text-blue-400', bg: 'hover:bg-blue-900/30' },
                    { icon: <BiLogoGmail />, href: 'mailto:i.kishorekumar.ece@gmail.com', color: 'hover:text-red-400', bg: 'hover:bg-red-900/30' },
                    { icon: <SiLeetcode />, href: 'https://leetcode.com/u/KishoreKumar_I/', color: 'hover:text-yellow-400', bg: 'hover:bg-yellow-900/30' }
                  ].map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 text-2xl text-gray-400 ${link.color} ${link.bg}
                        bg-[#1a1a1a] rounded-xl border border-[#4F46E5]/20
                        transition-all duration-300 hover:border-[#4F46E5]/40
                        hover:scale-110`}
                      whileHover={{ y: -4 }}
                      style={{
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="relative mt-16 pt-8">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r 
              from-transparent via-[#4F46E5]/20 to-transparent" />
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className={`text-gray-400 text-base ${montserrat.className}`}>
                © {new Date().getFullYear()} Kishore Kumar | All rights reserved
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r 
        from-transparent via-[#4F46E5] to-transparent" />
    </motion.footer>
  );
};

export default Footer;
