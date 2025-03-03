import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    isVisible && (
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 2.5 }}
      >
        <motion.div
          className="relative w-28 h-28 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute w-full h-full border-4 border-gray-300 rounded-full animate-spin"
            style={{ borderTopColor: "transparent" }}
          ></motion.div>
          <motion.div
            className="absolute w-16 h-16 border-4 border-gray-500 rounded-full animate-spin"
            style={{ borderTopColor: "transparent", animationDuration: "1.5s" }}
          ></motion.div>
          <Image
            src="/loading.jpg"
            alt="Logo"
            className="absolute"
            width={90} // Set a fixed width
            height={90} // Set a fixed height
            priority
          />
        </motion.div>
      </motion.div>
    )
  );
}
