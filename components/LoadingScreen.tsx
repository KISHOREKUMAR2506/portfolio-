"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

const LoadingScreen: FC<{ onComplete?: () => void }> = ({ onComplete = () => {} }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            onComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <motion.div
          className="relative w-32 h-32 mb-12"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <Image
            src="/logo.png"
            alt="IKK Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-64 relative">
          {/* Progress Track */}
          <div className="h-0.5 bg-neutral-800 rounded-full overflow-hidden">
            {/* Progress Bar */}
            <motion.div
              className="h-full bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>

          {/* Progress Percentage */}
          <motion.div 
            className="absolute -right-8 -top-6 text-sm text-neutral-500 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {progress}%
          </motion.div>
        </div>

        {/* Scan Line */}
        <motion.div
          className="absolute inset-0 bg-white/5"
          style={{ height: '1px' }}
          animate={{
            y: ['0%', '100%']
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Bottom Progress Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px]"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: progress / 100,
            opacity: 0.2
          }}
          style={{
            background: 'linear-gradient(to right, transparent, white, transparent)',
            transformOrigin: 'left'
          }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;