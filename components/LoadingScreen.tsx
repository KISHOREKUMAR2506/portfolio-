"use client";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative w-48 h-48">
        {/* Outer rotating ring */}
        <motion.div
          className="absolute inset-0"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full rounded-full border-2 border-transparent border-t-blue-500 border-r-purple-500" />
        </motion.div>

        {/* Inner rotating ring */}
        <motion.div
          className="absolute inset-4"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full rounded-full border-2 border-transparent border-t-purple-500 border-l-blue-500" />
        </motion.div>

        {/* Center logo container */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-24 h-24">
            {/* Glowing effect behind logo */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
            
            {/* Logo */}
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-full object-contain relative z-10"
            />
          </div>
        </motion.div>

        {/* Scanning line effect */}
        <motion.div
          className="absolute inset-0"
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm" />
        </motion.div>

        {/* Corner decorations */}
        {[0, 90, 180, 270].map((rotation) => (
          <motion.div
            key={rotation}
            className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-500"
            style={{ 
              transform: `rotate(${rotation}deg)`,
              transformOrigin: rotation === 0 || rotation === 180 ? "0 0" : "100% 100%"
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: rotation / 1000 }}
          />
        ))}

        {/* Loading text */}
        <motion.div
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-blue-500 font-mono text-sm tracking-wider">
            INITIALIZING
          </div>
          {/* Loading dots */}
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Binary code background effect */}
        <div className="absolute -z-10 inset-0 overflow-hidden opacity-20">
          <motion.div
            className="text-[8px] text-blue-500 font-mono whitespace-nowrap"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Array(20).fill("01").join(" ")}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
