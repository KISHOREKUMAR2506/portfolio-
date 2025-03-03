"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaCode, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer: FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/KISHOREKUMAR2506',
      icon: FaGithub,
      color: 'hover:text-white',
      bgHover: 'hover:bg-gray-800/30'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kishore-kumar-i-ece/',
      icon: FaLinkedin,
      color: 'hover:text-blue-400',
      bgHover: 'hover:bg-blue-900/30'
    },
   
    {
      name: 'Email',
      url: 'mailto:i.kishorekumar.ece@gmail.com',
      icon: BiLogoGmail,
      color: 'hover:text-red-400',
      bgHover: 'hover:bg-red-900/30'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/KishoreKumar_I/',
      icon: SiLeetcode,
      color: 'hover:text-yellow-400',
      bgHover: 'hover:bg-yellow-900/30'
    }
  ];

  return (
    <footer className="relative py-20 mt-32">
      {/* Top Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#4F46E5] to-transparent opacity-20" />

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
            {/* Brand Section - Left Column */}
            <div className="md:col-span-5">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Logo and Name */}
                <div className="flex items-start gap-6">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] 
                      rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 blur">
                    </div>
                    <div className="relative">
                      <Image
                        src="/loading.jpg"
                        alt="Kishore Kumar"
                        width={70}
                        height={70}
                        className="rounded-full border-2 border-[#4F46E5]/20 bg-[#1a1a1a]"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#8B5CF6] 
                        bg-clip-text text-transparent">
                        Kishore Kumar
                      </h3>
                      <p className="text-base text-gray-400 mt-2">
                        Effortless Innovation & Seamless Connectivity
                      </p>
                    </div>

                    {/* Location */}
                    <motion.div
                      className="flex items-center gap-3 text-gray-400"
                      whileHover={{ x: 8 }}
                    >
                      <FaMapMarkerAlt className="text-2xl text-blue-400" />
                      <span>Chennai, India</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Connect Section - Right Column */}
            <div className="md:col-span-7 flex items-center">
              <motion.div
                className="w-full relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {/* Floating Title */}
                <div className="absolute -top-3 left-4 px-2 bg-[#090909] z-10">
                  <span className="text-xl font-medium bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#8B5CF6] 
                    bg-clip-text text-transparent">
                    Let's Connect
                  </span>
                </div>

                {/* Social Links Container */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#1a1a1a]/30 backdrop-blur-sm 
                  rounded-xl p-8 border border-[#4F46E5]/20">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 text-2xl text-gray-400 ${link.color} ${link.bgHover}
                          bg-[#1a1a1a] rounded-xl border border-[#4F46E5]/20
                          transition-all duration-300 hover:border-[#4F46E5]/40
                          flex items-center justify-center hover:scale-110 mx-auto`}
                        whileHover={{ y: -4 }}
                        style={{
                          width: '60px',
                          height: '60px'
                        }}
                      >
                        <Icon />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            className="pt-8 border-t border-[#4F46E5]/20 text-base text-gray-400
              flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p>© 2025 Kishore Kumar. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <FaCode className="text-xl text-[#4F46E5]" />
              <span>Crafted with love and sprinkle of techies❤️✨</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
