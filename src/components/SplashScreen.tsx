"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import PopcornKernel from "./PopCornKernel";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#201713] flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative text-center">
            {/* Animated Popcorn Container */}
            <motion.div
              className="relative mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Popcorn Bucket */}
              <div className="relative w-32 h-32 mx-auto">
                {/* Bucket Body */}
                <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-b from-[#F7E07D] to-[#F5C859] rounded-b-2xl">
                  <div className="absolute -top-1 w-full h-2 bg-gradient-to-r from-[#F7E07D] to-[#F5C859] rounded-t-full"></div>
                  <div className="absolute -top-2 w-11/12 h-1 bg-[#F7E07D] rounded-full left-1/2 transform -translate-x-1/2"></div>
                </div>
                
                {/* Bucket Rim */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gradient-to-r from-[#F7E07D] to-[#F5C859] rounded-full"></div>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-28 h-3 bg-[#140e0b] rounded-full"></div>
              </div>

              {/* Floating Popcorns */}
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${30 + (i % 3) * 20}%`,
                    top: "10%",
                  }}
                  initial={{ y: 0, opacity: 0, scale: 0 }}
                  animate={{
                    y: [-20, -60 - Math.random() * 40, -40 - Math.random() * 20],
                    x: [(i - 3) * 10, (i - 3) * 15, (i - 3) * 12],
                    opacity: [0, 1, 1],
                    scale: [0, 1.2, 1],
                    rotate: [0, Math.random() * 360, Math.random() * 180],
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + i * 0.15,
                    ease: "easeOut",
                  }}
                >
                  <PopcornKernel size={i % 2 === 0 ? "md" : "sm"} />
                </motion.div>
              ))}
            </motion.div>

            {/* Logo Text */}
            <motion.h1
              className="text-4xl md:text-5xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F7E07D] to-[#F5C859]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              PopFolio
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mt-2 text-[#c6bb9a] text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              Welcome Guys to My PopFolio
            </motion.p>

            {/* Loading Dots */}
            <motion.div
              className="flex justify-center gap-2 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#F7E07D] to-[#F5C859]"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;