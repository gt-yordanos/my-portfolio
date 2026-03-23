import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";
import { Github, ExternalLink, X } from "lucide-react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section id="projects" className="relative z-10 py-24 px-6 lg:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-violet-400 text-sm mb-2">$ ls projects/</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Work</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-400 to-lime-500" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => openModal(project)}
              className="group neo-brutal-card glass overflow-hidden cursor-pointer"
            >
              <div className="aspect-video overflow-hidden bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-violet-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs px-2 py-1 bg-violet-400/10 text-violet-400 border border-violet-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="font-mono text-xs px-2 py-1 bg-white/5 text-gray-400 border border-white/10">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          {selectedProject && (
            <div className="glass max-w-4xl mx-auto max-h-[90vh] overflow-y-auto border-2 border-white/20">
              <div className="sticky top-0 glass border-b border-white/10 p-6 flex justify-between items-start z-10">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs px-2 py-1 bg-violet-400/10 text-violet-400 border border-violet-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-white/10 transition-colors border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-mono text-violet-400 text-sm mb-2">OVERVIEW</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.details}</p>
                </div>

                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div>
                    <h3 className="font-mono text-violet-400 text-sm mb-4">SCREENSHOTS</h3>
                    <div className="space-y-4">
                      {selectedProject.images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${selectedProject.title} screenshot ${index + 1}`}
                          className="w-full border-2 border-white/10"
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-brutal flex items-center gap-2 px-6 py-3 bg-lime-500 text-black font-medium"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-brutal flex items-center gap-2 px-6 py-3 glass"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}