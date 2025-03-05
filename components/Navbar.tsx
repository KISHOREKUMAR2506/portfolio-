import { AnimatePresence, motion } from 'framer-motion';
import { Montserrat, Space_Grotesk } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RiCodeLine, RiHomeLine, RiMailLine, RiStackLine, RiUserLine } from 'react-icons/ri';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

const navigationLinks = [
  { 
    name: "Home", 
    href: "home", 
    icon: <RiHomeLine className="w-5 h-5" />,
    gradient: "from-[#4F46E5] to-[#7C3AED]"
  },
  { 
    name: "About", 
    href: "about", 
    icon: <RiUserLine className="w-5 h-5" />,
    gradient: "from-[#6366F1] to-[#8B5CF6]"
  },
  { 
    name: "Projects", 
    href: "projects", 
    icon: <RiCodeLine className="w-5 h-5" />,
    gradient: "from-[#7C3AED] to-[#9333EA]"
  },
  { 
    name: "Skills", 
    href: "skills", 
    icon: <RiStackLine className="w-5 h-5" />,
    gradient: "from-[#8B5CF6] to-[#A855F7]"
  },

  // {
  //   name: "Achievements", 
  //   href: "achievements", 
  //   icon: <RiRocketFill className="w-5 h-5" />,
  //   gradient: "from-[#9333EA] to-[#C084FC]"
  // },

  { 
    name: "Contact", 
    href: "contact", 
    icon: <RiMailLine className="w-5 h-5" />,
    gradient: "from-[#9333EA] to-[#C084FC]"
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
      {/* Background with subtle blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 border-t border-b border-[#4F46E5]/30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#9333EA] opacity-20 blur-xl" />
      </div>
      
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo/Name with enhanced animation */}
        <Link href="#home">
          <motion.div 
            className="flex items-center space-x-2 group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h1 className="text-4xl font-extrabold tracking-wide relative text-outline stylish">
  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white to-white animate-gradient-glow">
    Kishore Kumar
  </span>
</h1>


          </motion.div>
        </Link>

        {/* Desktop Navigation with glass effect */}
        <div className="hidden lg:flex items-center space-x-2 rounded-full px-2 py-1 bg-black/20 backdrop-blur-md border border-white/10">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={`#${link.href}`}
              onClick={() => setActiveSection(link.href)}
            >
              <motion.div
                className={`flex items-center space-x-2 px-4 py-2 rounded-full relative
                          transition-all duration-300 ease-out group
                          ${activeSection === link.href 
                            ? 'border border-[#4F46E5] shadow-[0_0_15px_rgba(79,70,229,0.3)]' 
                            : 'hover:border hover:border-[#4F46E5]/50 hover:shadow-[0_0_10px_rgba(79,70,229,0.2)]'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={`text-[1.1rem] ${activeSection === link.href ? 'text-white' : 'text-gray-300 group-hover:text-white transition-colors'}`}>
                  {link.icon}
                </span>
                <span className={`text-sm ${montserrat.className} font-medium
                              ${activeSection === link.href ? 'text-white' : 'text-gray-400 group-hover:text-white transition-colors'}`}>
                  {link.name}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button with animation */}
        <motion.button
          className="lg:hidden relative w-10 h-10 rounded-full border border-[#4F46E5]/30 shadow-[0_0_10px_rgba(79,70,229,0.2)] backdrop-blur-sm hover:border-[#4F46E5]/50 hover:shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="flex flex-col items-center justify-center w-6 space-y-1.5"
              animate={isOpen ? "open" : "closed"}
            >
              <motion.span className="w-6 h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] origin-center transform" 
                variants={{
                  open: { rotate: 45, y: 6 },
                  closed: { rotate: 0, y: 0 }
                }}
              />
              <motion.span className="w-6 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] origin-center transform"
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 }
                }}
              />
              <motion.span className="w-6 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#9333EA] origin-center transform"
                variants={{
                  open: { rotate: -45, y: -6 },
                  closed: { rotate: 0, y: 0 }
                }}
              />
            </motion.div>
          </div>
        </motion.button>

        {/* Mobile Menu with improved animation and styling */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 border-t border-[#4F46E5]/30 bg-black/40 backdrop-blur-xl lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="p-4 space-y-2">
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
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl relative
                                ${activeSection === link.href 
                                  ? 'border border-[#4F46E5] shadow-[0_0_15px_rgba(79,70,229,0.3)]' 
                                  : 'hover:border hover:border-[#4F46E5]/50 hover:shadow-[0_0_10px_rgba(79,70,229,0.2)]'}
                                transition-all duration-300`}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className={`text-xl ${activeSection === link.href ? 'text-white' : 'text-gray-300'}`}>
                        {link.icon}
                      </span>
                      <span className={`text-base ${montserrat.className} font-medium
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
    </motion.nav>
  );
};

export default Navbar;