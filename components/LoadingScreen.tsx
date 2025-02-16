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
    <div className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Logo & Progress Bar */}
      <div className="relative text-center z-10 w-full max-w-md px-4">
        <motion.div
          className="relative w-24 h-24 mx-auto mb-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image src="/logo.png" alt="IKK Logo" fill className="object-contain" priority />
        </motion.div>

        {/* Progress Bar */}
        <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden shadow-md">
          <motion.div
            className="absolute h-full bg-blue-500 shadow-blue-500/50 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
          {/* Moving Highlight */}
          <motion.div
            className="absolute h-full bg-gradient-to-r from-blue-300 via-blue-500 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            style={{ width: "40%", opacity: 0.7 }}
          />
        </div>

        {/* Percentage Display */}
        <motion.div
          className="text-sm text-gray-400 mt-2 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {progress}%
        </motion.div>
      </div>

      {/* Fade-Out Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
};
export default LoadingScreen;
