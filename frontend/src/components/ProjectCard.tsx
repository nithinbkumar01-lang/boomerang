import React from "react";
import { motion } from "motion/react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: React.Key;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-ink cursor-none"
    >
      <motion.img
        src={project.image}
        alt={project.title}
        referrerPolicy="no-referrer"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 p-8 md:p-10">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: (index * 0.1) + 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 uppercase tracking-tighter">
            {project.title.split(' ')[0]}
            <span className="font-light opacity-70 ml-1">{project.title.split(' ').slice(1).join(' ')}</span>
          </h3>
          <p className="text-sm md:text-base text-brand font-medium tracking-widest uppercase">
            {project.category}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
