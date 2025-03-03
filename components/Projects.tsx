"use client";
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { FC, useState } from 'react';
import { FaGithub, FaLink, FaTimes } from 'react-icons/fa';
import { HiChip } from 'react-icons/hi';

const Projects: FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const projects = [
    {
      title: "Next-Generation SDN DDoS Mitigation",
      description: "Developed a system to detect and mitigate DDoS attacks using SDN's centralized control. Applied the SVM machine learning algorithm to identify abnormal traffic patterns.",
      image: "/projects/DDoS.jpg",
      tags: ["SDN", "Machine Learning", "SVM Algorithm", "Network Security"],
      github: "https://github.com/KISHOREKUMAR2506/-Next-Generation-SDN-Solutions-for-DDoS-Detection-and-Mitigation",
      pptLink: "/projects/DDoS.pdf",
      category: "Network Security",
    },
    {
      title: "AI-Based Railway Track Defect Detection",
      description:
        "Designed a real-time railway track inspection system utilizing acoustic sensors for defect detection. Implemented the Isolation Forest algorithm to detect structural anomalies and crack formations. Integrated GPS for precise localization and automated cloud-based alerts to enhance predictive maintenance.",
      image: "/projects/Rail_crack_detection.jpg",
      tags: ["Acoustic Sensors", "Isolation Forest", "GPS", "Cloud Integration"],
      github: "https://github.com/KISHOREKUMAR2506/RAIL_CRACK_DETECTION",
      category: "AI & IoT",
      pptLink: "/projects/Rail_crack_detection.pdf",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Built a modern, responsive portfolio website using Next.js and Framer Motion for smooth animations and interactive UI. Optimized for fast performance, accessibility, and easy navigation across devices.",
      image: "/projects/portfolio.jpg", 
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/KISHOREKUMAR2506/portfolio-",
      category: "Web Development",
      pptLink: "ikktech.vercel.app",
    },
  ]; 

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-[#090909]">
        <div className="absolute inset-0">
          {/* Animated Grid */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(90deg, #4F46E5 1px, transparent 1px),
                linear-gradient(#4F46E5 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '40px 40px']
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Floating Elements */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1"
              style={{
                background: 'radial-gradient(circle, #4F46E5 60%, transparent)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Title Section */}
          <div className="mb-20">
            <div className="relative">
              {/* Animated Background Lines */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute -top-20 -left-20 w-60 h-60"
                  style={{
                    background: `
                      linear-gradient(90deg, #4F46E5 1px, transparent 1px),
                      linear-gradient(#4F46E5 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                    opacity: 0.1
                  }}
                  animate={{
                    rotate: [0, 90],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Main Title Content */}
              <div className="relative z-10">
                <motion.div
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {/* Decorative Line */}
                  <motion.div
                    className="w-20 h-1 bg-gradient-to-r from-[#4F46E5] via-blue-500 to-purple-500 
                      rounded-full mb-8"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  />

                  {/* Main Title */}
                  <div className="relative">
                    <motion.h1
                      className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#4F46E5] 
                        via-blue-500 to-purple-500 bg-clip-text text-transparent"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      PROJECTS
                    </motion.h1>
                  </div>

                  {/* Subtitle */}
        <motion.div
                    className="mt-8 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="h-[1px] w-10 bg-[#4F46E5]" />
                      <p className="text-[#4F46E5] font-medium uppercase tracking-wider text-sm">
                        Innovation & Technology
                      </p>
                      <div className="h-[1px] w-10 bg-[#4F46E5]" />
                    </div>
                  </motion.div>
        </motion.div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
                <motion.div
                  className="w-full h-full"
                  style={{
                    borderRight: '2px solid #4F46E5',
                    borderTop: '2px solid #4F46E5'
                  }}
                  animate={{
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="absolute bottom-0 left-0 w-20 h-20 opacity-20">
                <motion.div
                  className="w-full h-full"
                  style={{
                    borderLeft: '2px solid #4F46E5',
                    borderBottom: '2px solid #4F46E5'
                  }}
                  animate={{
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </div>

          {/* Projects Showcase */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative"
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                {/* Project Card */}
                <motion.div 
                  className="grid md:grid-cols-[1fr,1.2fr] gap-8 items-center p-6 rounded-2xl
                    bg-[#1a1a1a]/50 backdrop-blur-sm border border-[#4F46E5]/20
                    hover:border-[#4F46E5]/40 transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  {/* Content Section */}
                  <div className="space-y-6">
                    <div>
                      <motion.div 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                          bg-[#4F46E5]/10 border border-[#4F46E5]/20 mb-4"
                      >
                        <HiChip className="text-[#4F46E5]" />
                        <span className="text-sm text-[#4F46E5]">{project.category}</span>
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span 
                          key={tag}
                          className="px-4 py-2 rounded-full text-sm bg-[#4F46E5]/10 
                            text-[#4F46E5] border border-[#4F46E5]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4F46E5] 
                          text-white hover:bg-[#4F46E5]/90 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub size={20} />
                        <span>View Code</span>
                      </motion.a>
                      <motion.a
                        href={project.pptLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg
                          border border-[#4F46E5] text-[#4F46E5] 
                          hover:bg-[#4F46E5]/10 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaLink size={16} />
                        <span>Learn More</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="relative h-[300px] rounded-xl overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-transparent"
                      animate={{ opacity: hoveredProject === index ? 0.3 : 0.5 }}
                    />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{ 
                        scale: hoveredProject === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                </div>
                </motion.div>

                {/* Technical Decoration */}
                <motion.div
                  className="absolute -inset-[1px] bg-gradient-to-r from-[#4F46E5]/20 to-transparent
                    rounded-2xl -z-10 opacity-0 group-hover:opacity-100 blur-sm"
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl bg-[#1a1a1a] rounded-xl overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50
                    text-white hover:bg-black/70 transition-colors duration-300"
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes />
                </button>

                <div className="grid md:grid-cols-[1fr,1.5fr]">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-full">
                    <motion.img
                      src={projects[selectedProject].image}
                      alt={projects[selectedProject].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-8 space-y-6">
                    <h3 className="text-2xl font-bold text-white">
                      {projects[selectedProject].title}
                    </h3>
                    <p className="text-gray-400">
                      {projects[selectedProject].description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {projects[selectedProject].tags.map(tag => (
                        <motion.span 
                          key={tag}
                          className="px-4 py-2 rounded-full text-sm bg-[#4F46E5]/10 
                            text-[#4F46E5] border border-[#4F46E5]/20"
                          whileHover={{ y: -2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6 pt-4">
                      <motion.a
                        href={projects[selectedProject].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 rounded-lg bg-[#4F46E5] 
                          text-white hover:bg-[#4F46E5]/90 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub size={20} />
                        <span>View Code</span>
                      </motion.a>
                      <motion.a
                        href={projects[selectedProject].pptLink}
                    target="_blank"
                    rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 rounded-lg border border-[#4F46E5]
                          text-[#4F46E5] hover:bg-[#4F46E5]/10 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaLink size={16} />
                        <span>Learn More</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
