// src/pages/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32"
    >
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map(({ id, title, description, tech, link }, i) => (
          <motion.div
            key={id}
            className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-emerald-500/50 transition-all duration-300 text-left"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={projectVariants}
          >
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            {tech && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((stack, idx) => (
                  <span
                    key={idx}
                    className="bg-emerald-600/20 text-emerald-300 text-xs px-2 py-1 rounded-md font-medium"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 text-sm hover:underline"
              >
                View Project →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}