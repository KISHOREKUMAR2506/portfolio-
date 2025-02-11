"use client"
import { AnimatePresence, motion } from 'framer-motion';
import { Montserrat, Space_Grotesk } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RiCodeLine, RiHomeLine, RiMailLine, RiStackLine, RiUserLine } from 'react-icons/ri';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
<nav className="fixed top-0 w-full bg-black text-white p-4 flex justify-center space-x-6">
  <a href="#about" className="hover:text-blue-400">About</a>
  <a href="#projects" className="hover:text-blue-400">Projects</a>
  <a href="#skills" className="hover:text-blue-400">Skills</a>
  <a href="#contact" className="hover:text-blue-400">Contact</a>
</nav>

const navigationLinks = [
  { 
    name: "Home", 
    href: "home", 
    icon: <RiHomeLine className="w-5 h-5" />,
    gradient: "from-blue-400 to-blue-600"
  },
  { 
    name: "About", 
    href: "about", 
    icon: <RiUserLine className="w-5 h-5" />,
    gradient: "from-indigo-400 to-indigo-600"
  },
  { 
    name: "Projects", 
    href: "projects", 
    icon: <RiCodeLine className="w-5 h-5" />,
    gradient: "from-violet-400 to-violet-600"
  },
  { 
    name: "Skills", 
    href: "skills", 
    icon: <RiStackLine className="w-5 h-5" />,
    gradient: "from-purple-400 to-purple-600"
  },
  { 
    name: "Contact", 
    href: "contact", 
    icon: <RiMailLine className="w-5 h-5" />,
    gradient: "from-fuchsia-400 to-fuchsia-600"
  }
] as const;

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: 1,
        y: isVisible ? 0 : -100
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      {/* Background with blur */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Content Container */}
      <div className="relative mx-auto px-8 py-4 flex justify-between items-center">
        {/* Name instead of Logo */}
        <Link href="#home">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h1 className={`text-xl font-bold text-white ${spaceGrotesk.className}`}>
              <span className="text-[#4F46E5]">K</span>ishore <span className="text-[#4F46E5]">K</span>umar
            </h1>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={`#${link.href}`}
              onClick={() => setActiveSection(link.href)}
            >
              <motion.div
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg
                          transition-colors duration-300
                          ${activeSection === link.href 
                            ? 'bg-white/10' 
                            : 'hover:bg-white/5'}`}
                whileHover={{ x: 4 }}
              >
                <span className="text-[1.1rem] text-gray-300">{link.icon}</span>
                <span className={`text-sm ${montserrat.className}
                              ${activeSection === link.href ? 'text-white' : 'text-gray-400'}`}>
                  {link.name}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current" />
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-black/80 backdrop-blur-md lg:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4 space-y-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={`#${link.href}`}
                    onClick={() => {
                      setActiveSection(link.href);
                      setIsOpen(false);
                    }}
                  >
                    <motion.div
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg
                                ${activeSection === link.href 
                                  ? 'bg-white/10' 
                                  : 'hover:bg-white/5'}
                                transition-colors duration-300`}
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-[1.1rem] text-gray-300">{link.icon}</span>
                      <span className={`text-sm ${montserrat.className}
                                    ${activeSection === link.href ? 'text-white' : 'text-gray-400'}`}>
                        {link.name}
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10" />
    </motion.nav>
  );
};

export default Navbar;