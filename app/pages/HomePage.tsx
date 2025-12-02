//src/pages/HomePage.tsx
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Palette, Rocket } from "lucide-react";
import HeroSection from "../../src/components/ui/HeroComponent";
import { fadeInUp, staggerContainer, staggerItem } from "../../src/lib/animation";
import ProjectCard from "../../src/components/ProjectCard";
import Button from "../../src/components/ui/Button";
import { projects } from "../../src/components/data/projects";

const features = [
    {
        icon: Code,
        title: "Clean Code",
        description: "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Palette,
        title: "Creative Design",
        description: "Bringing ideas to life with stunning visuals and intuitive UX.",
    },
    {
        icon: Rocket,
        title: "Fast Delivery",
        description: "Efficient workflows that deliver results without compromising quality.",
    },
];


export default function HomePage() {
    const featuredProjects = projects.slice(0, 3);
    return (
        <div>
            <HeroSection />
            <section className="py-24 relative bg-[#201713]">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
                            What I{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F7E07D] to-[#F5C859]">
                                Bring
                            </span>{" "}
                            to the Table
                        </h2>
                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#F7E07D] to-[#F5C859]">
                            Like the perfect batch of popcorn, great projects require the right ingredients and timing.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 "
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                variants={staggerItem}
                                className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors bg-[#140e0b] border-[#F7E07D]"
                            >
                                <motion.div
                                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors bg-gradient-to-r from-[#F7E07D] to-[#F5C859]"
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <feature.icon className="w-7 h-7 text-primary" />
                                </motion.div>
                                <h3 className="font-display text-xl font-bold mb-3 text-foreground text-white">
                                    {feature.title}
                                </h3>
                                <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#F7E07D] to-[#F5C859]">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-24 bg-[#140e0b]">
                <div className="container mx-auto px-4 ">
                    <motion.div
                        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display text-white font-bold mb-2">
                                Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F7E07D] to-[#F5C859]">Projects</span>
                            </h2>
                            <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#F7E07D] to-[#F5C859]">
                                A selection of my favorite work
                            </p>
                        </div>

                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 201713"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {projects.map((project, index) => (
                            <motion.div key={project.id} variants={staggerItem}>
                                <ProjectCard project={project} index={index} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(90deg, #2A2011, #201713, #140E0B)",
                        backgroundSize: "300% 300%",
                    }}
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="max-w-3xl mx-auto text-center"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
                            Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F7E07D] to-[#F5C859]">Pop</span> Some Ideas?
                        </h2>

                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#F7E07D] to-[#F5C859] mb-5">
                            Let's collaborate and create something amazing together.
                            Every great project starts with a conversation.
                        </p>

                        <Button href="/contact">Get In Touch</Button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}