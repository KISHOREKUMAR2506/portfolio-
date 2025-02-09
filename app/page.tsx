"use client"
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import LoadingScreen from '../components/LoadingScreen';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Increased slightly for smoother transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="absolute inset-0 z-50"
            exit={{ 
              opacity: 0,
              transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
              }
            }}
          >
            <LoadingScreen />
          </motion.div>
        ) : (
          <motion.div
            key="hero"
            className="absolute inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.2
              }
            }}
          >
            <Hero />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}