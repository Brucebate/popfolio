"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FloatingPopcorn } from "../PopCornKernel";

export default function HeroSection() {

  const router = useRouter();

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#projects');
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
        

      {/* Background Gradient (Behind all content) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, hsl(20 30% 6%) 0%, hsl(0 65% 20%) 100%)",
        }}
      />
      <FloatingPopcorn />

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Welcome to my creative space
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 mb-6">
              Fresh Ideas,<br />
              <span className="text-white">Popping Results</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            I'm a creative developer who transforms concepts into captivating
            digital experiences. Like perfectly popped corn, every project is
            crafted with care and attention to detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="#projects"
              onClick={scrollToProjects}
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity shadow-md"
            >
              View My Work
            </Link>

            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-black hover:bg-opacity-10 transition-colors shadow-md"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
