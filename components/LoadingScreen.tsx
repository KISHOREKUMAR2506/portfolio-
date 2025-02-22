"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete = () => {} }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            onComplete();
          }, 500);
          return 100;
        }
        return oldProgress + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#090909] relative overflow-hidden">
      {/* Matrix-like Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="matrix-bg" />
      </motion.div>

      <div className="relative text-center z-10 w-full max-w-md px-4">
        {/* Terminal-like Container */}
        <motion.div
          className="bg-black/50 p-8 rounded-lg border border-green-500/30 backdrop-blur-sm"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Logo */}
          <motion.div
            className="relative w-24 h-24 mx-auto mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
          </motion.div>

          {/* Terminal Text */}
          <motion.div
            className="font-mono text-sm text-green-500 mb-4 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >

            <p>&gt; Loading assets and modules...</p>
            <p>&gt; Establishing connection...</p>
          </motion.div>

          {/* Progress Bar */}
          <div className="relative h-2 bg-black/50 rounded-full overflow-hidden border border-green-500/30">
            <motion.div
              className="absolute h-full bg-green-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>

          {/* Percentage */}
          <motion.div
            className="text-sm text-green-500 mt-2 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {`System Load: ${progress}%`}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
