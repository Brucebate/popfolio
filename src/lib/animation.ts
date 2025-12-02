import { Variants } from "framer-motion";

// Page transition variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

// Fade in variants
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Stagger children variants
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Popcorn pop animation
export const popcornPop: Variants = {
  initial: {
    scale: 0,
    y: 100,
    opacity: 0,
  },
  animate: (custom: number) => ({
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      delay: custom * 0.1,
    },
  }),
};

// Float animation
export const floatVariants: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Scale on hover
export const scaleOnHover: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.98,
  },
};

// Card hover variants
export const cardHover: Variants = {
  initial: {
    y: 0,
    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)",
  },
  hover: {
    y: -10,
    boxShadow: "0 30px 60px -20px rgba(245, 213, 71, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Nav link hover
export const navLinkHover: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
  },
};

// Hero text reveal
export const heroTextReveal: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Kernel float animation
export const kernelFloat: Variants = {
  initial: (custom: { x: number; delay: number }) => ({
    x: custom.x,
    y: -100,
    rotate: 0,
    opacity: 0,
  }),
  animate: (custom: { x: number; delay: number; duration: number }) => ({
    y: "100vh",
    rotate: 720,
    opacity: [0, 1, 1, 0],
    transition: {
      duration: custom.duration,
      repeat: Infinity,
      delay: custom.delay,
      ease: "linear",
    },
  }),
};

// Button variants
export const buttonVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 30px -10px rgba(245, 213, 71, 0.5)",
  },
  tap: {
    scale: 0.95,
  },
};

// Form input focus
export const inputFocus: Variants = {
  initial: {
    scale: 1,
    borderColor: "hsl(var(--border))",
  },
  focus: {
    scale: 1.02,
    borderColor: "hsl(var(--primary))",
    transition: {
      duration: 0.2,
    },
  },
};



