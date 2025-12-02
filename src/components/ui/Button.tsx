// src/components/ui/Button.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Button({ href , children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
    > 
      <Link
        href={href}
        className="
          relative inline-block px-6 py-2.5  
          font-medium text-black 
          rounded-full 
          overflow-hidden
          bg-[#F7E07D]        /* Butter base */
          shadow-[0_0_10px_#F7E07D50] /* Soft butter glow */
          transition-all duration-300
          hover:bg-[#F5C859]  /* Deeper butter on hover */
        "
      >
        {/* Glow effect */}
        <span className="
          absolute inset-0 
          bg-[#ffffff40] 
          opacity-0 
          group-hover:opacity-20 
          transition-opacity
        " />
        
        <span className="relative z-10">{children}</span>
      </Link>
    </motion.div>
  );
}