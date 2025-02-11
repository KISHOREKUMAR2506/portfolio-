"use client"
import { motion } from 'framer-motion';
import { FC } from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects: FC = () => {
  const projects: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    category: string;
    pptLink: string;
  }[] = [
    {
      title: "Next-Generation SDN DDoS Mitigation",
      description:
        "Developed a system to detect and mitigate DDoS attacks using SDN's centralized control. Applied the SVM machine learning algorithm to identify abnormal traffic patterns. Improved network reliability and response time against DDoS attacks.",
      image: "/projects/DDoS.jpg",
      tags: ["SDN", "Machine Learning", "SVM Algorithm", "Network Security"],
      github:
        "https://github.com/KISHOREKUMAR2506/-Next-Generation-SDN-Solutions-for-DDoS-Detection-and-Mitigation",
      category: "Network Security",
      pptLink: "/projects/DDoS.pdf",
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
      pptLink: "/projects/Portfolio-Presentation.pdf",
    },
  ]; 

  return (
    <section id ="projects" className="relative min-h-screen bg-[#090909] py-20 overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-6 text-white">Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my journey through various technologies and solutions. Each project represents a unique challenge and a skill to grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects?.length > 0 ? (
            projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#1a1a1a] rounded-xl overflow-hidden cursor-pointer flex flex-col h-full"
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setTimeout(() => {
                    window.location.href = project.pptLink;
                  }, 500);
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  />
                  <div className="absolute inset-0 bg-[#4F46E5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 bg-[#4F46E5]/10 text-[#4F46E5] rounded-full">{tag}</span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#4F46E5] transition-colors duration-300 justify-center"
                  >
                    <FaGithub size={20} /> Explore the Code
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-3">No projects available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
