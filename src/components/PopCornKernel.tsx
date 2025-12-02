// src/components/PopcornKernel.tsx
import { motion } from "framer-motion";
import { useMemo } from "react";

interface PopcornKernelProps {
  delay?: number;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

const PopcornKernel = ({ delay = 0, size = "md", style }: PopcornKernelProps) => {
  const sizeClasses = {
    sm: "w-4 h-5",
    md: "w-6 h-7",
    lg: "w-8 h-9",
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} relative`}
      style={style}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay,
      }}
    >
      {/* Popcorn kernel shape */}
      <svg viewBox="0 0 24 28" fill="none" className="w-full h-full drop-shadow-lg">
        <ellipse cx="12" cy="14" rx="10" ry="12" fill="hsl(40, 100%, 97%)" />
        <ellipse cx="8" cy="10" rx="6" ry="7" fill="hsl(45, 92%, 85%)" />
        <ellipse cx="16" cy="12" rx="5" ry="6" fill="hsl(40, 100%, 97%)" />
        <ellipse cx="10" cy="18" rx="5" ry="5" fill="hsl(45, 92%, 90%)" />
        <ellipse cx="14" cy="8" rx="4" ry="5" fill="hsl(40, 100%, 97%)" />
        {/* Highlight */}
        <ellipse cx="7" cy="8" rx="2" ry="2.5" fill="white" opacity="0.6" />
      </svg>
    </motion.div>
  );
};

// Floating popcorn background component
export const FloatingPopcorn = () => {
  const kernels = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 6,
      size: ["sm", "md", "lg"][Math.floor(Math.random() * 3)] as "sm" | "md" | "lg",
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {kernels.map((kernel) => (
        <motion.div
          key={kernel.id}
          className="absolute"
          style={{ left: `${kernel.x}%` }}
          initial={{ y: "-10%", opacity: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            opacity: [0, 0.7, 0.7, 0],
            rotate: 720,
          }}
          transition={{
            duration: kernel.duration,
            repeat: Infinity,
            delay: kernel.delay,
            ease: "linear",
          }}
        >
          <PopcornKernel size={kernel.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default PopcornKernel;
