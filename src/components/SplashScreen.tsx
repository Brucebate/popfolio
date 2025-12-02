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
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            {/* Popcorn bucket */}
            <motion.div
              className="relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Bucket SVG */}
              <svg
                viewBox="0 0 120 100"
                className="w-32 h-28"
                fill="none"
              >
                {/* Bucket body */}
                <path
                  d="M20 30 L10 95 C10 98 12 100 15 100 L105 100 C108 100 110 98 110 95 L100 30 Z"
                  fill="hsl(0, 65%, 51%)"
                />
                {/* Stripes */}
                <path d="M30 30 L22 100" stroke="hsl(45, 92%, 62%)" strokeWidth="8" />
                <path d="M50 30 L44 100" stroke="hsl(45, 92%, 62%)" strokeWidth="8" />
                <path d="M70 30 L66 100" stroke="hsl(45, 92%, 62%)" strokeWidth="8" />
                <path d="M90 30 L88 100" stroke="hsl(45, 92%, 62%)" strokeWidth="8" />
                {/* Rim */}
                <ellipse cx="60" cy="30" rx="42" ry="8" fill="hsl(0, 65%, 45%)" />
              </svg>

              {/* Popping popcorn */}
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${30 + (i % 3) * 25}%`,
                    top: "0%",
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

            {/* Logo text */}
            <motion.h1
              className="text-3xl font-display font-bold text-gradient-popcorn text-center mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              PopFolio
            </motion.h1>

            {/* Loading indicator */}
            <motion.div
              className="flex justify-center gap-1 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.15,
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
