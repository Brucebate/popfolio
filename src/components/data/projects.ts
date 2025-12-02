//src/components/data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "movie-streaming-app",
    title: "CinemaFlix",
    description: "A modern movie streaming platform with personalized recommendations and social features.",
    longDescription: "CinemaFlix is a comprehensive movie streaming platform that combines cutting-edge technology with an intuitive user experience. Features include AI-powered recommendations, watchlist management, social sharing, and multi-device synchronization. Built with performance and accessibility in mind.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Web App"
  },
  {
    id: "raider-debt-collection",
    title: "Raider",
    description: "Mobile app for debt collection management.",
    longDescription: "Raider is a robust mobile application designed for debt collection agencies to streamline their workflows. Built with React Native for cross-platform compatibility and powered by a Node.js/Express.js backend, Raider offers real-time notifications, debtor tracking, and secure data handling.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    technologies: ["React Native", "Node.js", "Express.js"],
    liveUrl: "https://example.com/raider",
    githubUrl: "https://github.com/raider-app",
    category: "Mobile App"
  },
  {
    id: "food-delivery-platform",
    title: "QuickBite",
    description: "Real-time food delivery app with live tracking and restaurant management system.",
    longDescription: "QuickBite revolutionizes food delivery with real-time order tracking, smart route optimization, and a comprehensive restaurant dashboard. The platform handles thousands of orders daily with 99.9% uptime, featuring instant notifications and seamless payment integration.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
    technologies: ["React Native", "Firebase", "Google Maps API", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Mobile App"
  },
  {
    id: "ecommerce-dashboard",
    title: "ShopMetrics",
    description: "Analytics dashboard for e-commerce businesses with predictive insights.",
    longDescription: "ShopMetrics provides e-commerce businesses with powerful analytics and predictive insights. Track sales trends, customer behavior, inventory levels, and marketing ROI in real-time. Machine learning algorithms predict future trends and suggest optimization strategies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Dashboard"
  },
  {
    id: "fitness-tracker",
    title: "FitPulse",
    description: "Comprehensive fitness tracking app with workout plans and nutrition guidance.",
    longDescription: "FitPulse is your personal fitness companion, offering customized workout plans, nutrition tracking, progress analytics, and community challenges. Integration with wearable devices provides accurate health metrics and personalized recommendations based on your goals.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    technologies: ["Flutter", "Dart", "HealthKit", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Mobile App"
  },
  {
    id: "creative-portfolio",
    title: "ArtSpace",
    description: "Interactive portfolio platform for artists and designers to showcase work.",
    longDescription: "ArtSpace is a premium portfolio platform designed for creative professionals. Features include customizable gallery layouts, client proofing, integrated e-commerce for prints, and analytics to track engagement. Beautiful animations and responsive design ensure work looks stunning on any device.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Three.js", "GSAP", "Strapi"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Web App"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
