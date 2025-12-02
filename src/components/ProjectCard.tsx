// src/components/ProjectCard.tsx
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Button from "./ui/Button";
import { Project } from "./data/projects";
import { cardHover } from "../lib/animation";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    return (
        <motion.div
            variants={cardHover}
            initial="initial"
            whileHover="hover"
            className="group relative bg-card rounded-2xl overflow-hidden border border-border bg-[#201713] border-[#F7E07D]"
        >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

                {/* Category badge */}
                <motion.span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium bg-gradient-to-r from-[#F7E07D] to-[#F5C859]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                >
                    {project.category}
                </motion.span>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#F7E07D] to-[#F5C859]">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="text-[#c6bb9a]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* CTA */}

                <Button href={`/projects/${project.id}`}>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>

            </div>

            {/* Hover glow effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                    background: "linear-gradient(135deg, hsl(45 92% 62% / 0.1) 0%, transparent 50%)",
                }}
            />
        </motion.div>
    );
};

export default ProjectCard;
