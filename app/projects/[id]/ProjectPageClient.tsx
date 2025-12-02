"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    ArrowLeft,
    ExternalLink,
    Github,
    CheckCircle,
    Code,
    Layers,
    Zap,
    Shield,
    Smartphone,
    Database,
} from "lucide-react";

import Navbar from "../../../src/components/ui/Navbar";
import Footer from "../../../src/components/ui/Footer";
import { fadeInUp, staggerContainer, staggerItem } from "../../../src/lib/animation";

// ---- IMPORT YOUR PROJECT CONTENT ----
import { projects } from "../../../src/components/data/projects";

const projectContent: Record<string, any> = {
    "movie-streaming-app": {
        overview: "CinemaFlix revolutionizes the way users discover and watch movies. With cutting-edge AI technology, we provide personalized recommendations that understand your taste better than you do.",
        features: [
            { title: "AI-Powered Recommendations", description: "Machine learning algorithms analyze your viewing history to suggest content you'll love", icon: Zap },
            { title: "Multi-Device Sync", description: "Start watching on one device, continue on another seamlessly", icon: Smartphone },
            { title: "Social Features", description: "Share your favorite movies and see what friends are watching", icon: Layers },
            { title: "Offline Downloads", description: "Download content for offline viewing on the go", icon: Database },
            { title: "4K HDR Streaming", description: "Crystal-clear picture quality with HDR support", icon: Code },
            { title: "Personalized Watchlists", description: "Create and manage multiple watchlists for different moods", icon: CheckCircle }
        ],
        techStack: {
            frontend: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion"],
            backend: ["Node.js", "Express", "MongoDB", "Redis"],
            infrastructure: ["AWS Lambda", "S3", "CloudFront", "EC2"],
            other: ["Stripe API", "TMDb API", "Socket.io"]
        },
        challenges: [
            { challenge: "Video Streaming Performance", solution: "Implemented adaptive bitrate streaming with HLS protocol to ensure smooth playback across varying network conditions." },
            { challenge: "Scalability", solution: "Designed microservices architecture with auto-scaling capabilities to handle millions of concurrent users." },
            { challenge: "Recommendation Algorithm", solution: "Developed collaborative filtering system combined with content-based recommendations for accurate suggestions." }
        ]
    },
    "raider-debt-collection": {
        overview: "Raider transforms debt collection management with a mobile-first approach. Built for agencies that need real-time updates, secure data handling, and efficient debtor tracking.",
        features: [
            { title: "Real-Time Notifications", description: "Instant push notifications for payment updates and debtor responses", icon: Zap },
            { title: "Debtor Management Dashboard", description: "Comprehensive view of all debtors with filtering and search capabilities", icon: Database },
            { title: "Secure Authentication", description: "Multi-factor authentication and role-based access control", icon: Shield },
            { title: "Activity Logs", description: "Complete audit trail for compliance and reporting", icon: Code },
            { title: "Cross-Platform Support", description: "Native performance on both iOS and Android devices", icon: Smartphone },
            { title: "Automated Workflows", description: "Schedule follow-ups and automate routine collection tasks", icon: Layers }
        ],
        techStack: {
            frontend: ["React Native", "Redux Toolkit", "React Navigation"],
            backend: ["Node.js", "Express.js", "PostgreSQL", "JWT"],
            infrastructure: ["AWS", "Docker", "Nginx"],
            other: ["Twilio API", "SendGrid", "Firebase Cloud Messaging"]
        },
        challenges: [
            { challenge: "Data Security", solution: "Implemented end-to-end encryption for sensitive debtor information with AES-256 encryption." },
            { challenge: "Offline Functionality", solution: "Built robust offline-first architecture with local SQLite database and automatic sync." },
            { challenge: "Compliance Requirements", solution: "Designed system to meet FDCPA regulations with comprehensive audit logging and consent management." }
        ]
    },
    "food-delivery-platform": {
        overview: "QuickBite brings restaurant meals to your doorstep with lightning-fast delivery. Our smart routing algorithms and real-time tracking ensure your food arrives hot and fresh.",
        features: [
            { title: "Live Order Tracking", description: "Real-time GPS tracking of your delivery from restaurant to doorstep", icon: Smartphone },
            { title: "Smart Route Optimization", description: "AI-powered routing ensures fastest delivery times", icon: Zap },
            { title: "Restaurant Dashboard", description: "Comprehensive management tools for restaurant partners", icon: Database },
            { title: "Multiple Payment Options", description: "Credit card, digital wallets, and cash on delivery", icon: Shield },
            { title: "Rating System", description: "Review restaurants and delivery drivers to maintain quality", icon: CheckCircle },
            { title: "Schedule Orders", description: "Order in advance for specific delivery times", icon: Code }
        ],
        techStack: {
            frontend: ["React Native", "TypeScript", "Redux"],
            backend: ["Node.js", "Express", "MongoDB", "Socket.io"],
            infrastructure: ["AWS", "Redis", "Elasticsearch"],
            other: ["Google Maps API", "Stripe", "Twilio", "Firebase"]
        },
        challenges: [
            { challenge: "Real-Time Location Updates", solution: "Implemented WebSocket connections with fallback mechanisms for efficient location streaming." },
            { challenge: "Peak Load Management", solution: "Designed queue-based system with load balancing to handle lunch and dinner rushes." },
            { challenge: "Route Optimization", solution: "Developed custom routing algorithm considering traffic, distance, and multiple pickup points." }
        ]
    },
    "ecommerce-dashboard": {
        overview: "ShopMetrics empowers e-commerce businesses with actionable insights. Our predictive analytics help you make data-driven decisions to grow your business.",
        features: [
            { title: "Predictive Analytics", description: "Machine learning models forecast sales trends and demand", icon: Zap },
            { title: "Real-Time Reporting", description: "Live dashboard updates with WebSocket connections", icon: Database },
            { title: "Customer Segmentation", description: "Advanced clustering algorithms to identify customer groups", icon: Layers },
            { title: "Inventory Forecasting", description: "Predict stock requirements to prevent overselling", icon: Code },
            { title: "ROI Tracking", description: "Measure marketing campaign effectiveness across channels", icon: CheckCircle },
            { title: "Custom Reports", description: "Build and export custom reports with drag-and-drop interface", icon: Smartphone }
        ],
        techStack: {
            frontend: ["Next.js 14", "TypeScript", "Recharts", "TailwindCSS"],
            backend: ["Python", "FastAPI", "PostgreSQL", "Redis"],
            ml: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
            infrastructure: ["AWS", "Docker", "Kubernetes"]
        },
        challenges: [
            { challenge: "Large Dataset Processing", solution: "Implemented data streaming with Apache Kafka and batch processing with Celery for efficient analytics." },
            { challenge: "Model Accuracy", solution: "Trained ensemble models combining LSTM, ARIMA, and XGBoost for 95% forecast accuracy." },
            { challenge: "Dashboard Performance", solution: "Optimized with server-side rendering, data pagination, and intelligent caching strategies." }
        ]
    },
    "fitness-tracker": {
        overview: "FitPulse is your personal fitness companion that makes achieving your health goals easier. Track workouts, monitor nutrition, and stay motivated with our comprehensive fitness platform.",
        features: [
            { title: "Personalized Workout Plans", description: "AI-generated workout routines based on your goals and fitness level", icon: Zap },
            { title: "Nutrition Tracking", description: "Log meals with barcode scanner and extensive food database", icon: Database },
            { title: "Progress Analytics", description: "Visualize your fitness journey with detailed charts and insights", icon: Layers },
            { title: "Wearable Integration", description: "Sync with Apple Watch, Fitbit, and other fitness trackers", icon: Smartphone },
            { title: "Community Challenges", description: "Join challenges and compete with friends for motivation", icon: CheckCircle },
            { title: "Video Demonstrations", description: "HD exercise videos with proper form instructions", icon: Code }
        ],
        techStack: {
            frontend: ["Flutter", "Dart", "Provider", "FL Chart"],
            backend: ["Node.js", "Express", "MongoDB", "Socket.io"],
            infrastructure: ["AWS", "S3", "CloudFront"],
            other: ["HealthKit API", "Google Fit API", "Nutritionix API"]
        },
        challenges: [
            { challenge: "Cross-Platform Consistency", solution: "Used Flutter's widget system to maintain identical UI/UX across iOS and Android platforms." },
            { challenge: "Battery Optimization", solution: "Implemented intelligent background sync and batch API requests to minimize battery drain." },
            { challenge: "Data Accuracy", solution: "Developed data validation algorithms and integrated multiple wearable APIs for reliable health metrics." }
        ]
    },
    "creative-portfolio": {
        overview: "ArtSpace provides creative professionals with a stunning platform to showcase their work. With customizable layouts and integrated e-commerce, it's more than just a portfolio.",
        features: [
            { title: "Customizable Galleries", description: "Drag-and-drop interface to create unique portfolio layouts", icon: Layers },
            { title: "Client Proofing", description: "Share private galleries with clients for feedback and approval", icon: Shield },
            { title: "E-Commerce Integration", description: "Sell prints and digital downloads directly from your portfolio", icon: Database },
            { title: "3D Artwork Display", description: "Showcase 3D models with interactive viewer", icon: Code },
            { title: "SEO Optimization", description: "Built-in SEO tools to improve discoverability", icon: Zap },
            { title: "Engagement Analytics", description: "Track which projects get the most attention", icon: CheckCircle }
        ],
        techStack: {
            frontend: ["Vue.js 3", "TypeScript", "Three.js", "GSAP"],
            backend: ["Node.js", "Strapi CMS", "PostgreSQL"],
            infrastructure: ["Vercel", "Cloudinary", "AWS S3"],
            other: ["Stripe API", "Algolia Search", "SendGrid"]
        },
        challenges: [
            { challenge: "3D Model Performance", solution: "Implemented lazy loading, LOD (Level of Detail), and progressive enhancement for smooth 3D rendering." },
            { challenge: "Image Optimization", solution: "Used Cloudinary for automatic format conversion, responsive images, and CDN delivery." },
            { challenge: "Customization Flexibility", solution: "Built theme engine with CSS variables and JSON-based configuration for endless customization." }
        ]
    }
};

export default function ProjectPageClient({ project }: any) {
    const router = useRouter();
    if (!project) {
        return (
            <div className="min-h-screen bg-[#140e0b] flex flex-col">
                <Navbar />

                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Project Not Found
                        </h1>
                        <p className="text-[#c6bb9a] mb-6">
                            The project you're looking for doesn't exist.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F7E07D] to-[#F5C859] text-black rounded-full font-medium hover:shadow-lg transition-all"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }

    const content = projectContent[project.id];

    return (
        <div className="min-h-screen bg-[#140e0b]">
            <Navbar />

            <main className="pt-24 pb-16">
                <section className="relative py-16 bg-[#201713] overflow-hidden">
                    <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.15 }}
                        transition={{ duration: 1 }}
                        style={{
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "blur(20px)",
                        }}
                    />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8"
                        >
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 text-[#F7E07D] hover:text-[#F5C859] transition-colors"
                                onClick={() => router.push("/projects")}
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Projects
                            </Link>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left */}
                            <motion.div variants={fadeInUp} initial="initial" animate="animate">

                                <motion.span
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#F7E07D] to-[#F5C859] text-black text-sm font-medium mb-4"
                                >
                                    {project.category}
                                </motion.span>

                                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
                                    {project.title}
                                </h1>

                                <p className="text-lg text-[#c6bb9a] mb-8 leading-relaxed">
                                    {content.overview}
                                </p>
                            </motion.div>

                            {/* Right (image) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="relative rounded-2xl overflow-hidden border-2 border-[#F7E07D] shadow-2xl">
                                    <img src={project.image} alt={project.title} />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ---------------- FEATURES SECTION ---------------- */}
                <section className="py-24 bg-[#140e0b]">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
                                Key{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F7E07D] to-[#F5C859]">
                                    Features
                                </span>
                            </h2>
                            <p className="text-[#c6bb9a]">Powerful features that make this project stand out</p>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {content.features.map((feature: any, i: number) => (
                                <motion.div
                                    key={i}
                                    variants={staggerItem}
                                    className="p-6 bg-[#201713] rounded-xl border border-[#F7E07D]"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#F7E07D] to-[#F5C859] flex items-center justify-center mb-4">
                                        <feature.icon className="w-6 h-6 text-black" />
                                    </div>
                                    <h3 className="text-white text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-[#c6bb9a]">{feature.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ---------------- CTA SECTION ---------------- */}
                <section className="py-24 relative overflow-hidden">
                    <motion.div
                        className="absolute inset-0"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
                        style={{
                            background: "linear-gradient(90deg, #2A2011, #201713, #140E0B)",
                            backgroundSize: "300% 300%",
                        }}
                    />

                    <div className="relative container mx-auto px-4 z-10 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-white text-4xl md:text-5xl font-display font-bold mb-6"
                        >
                            Like What You See?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-[#c6bb9a] mb-8"
                        >
                            Let's collaborate and build something amazing.
                        </motion.p>

                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F7E07D] to-[#F5C859] text-black rounded-full text-lg font-medium"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            View More Projects
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
