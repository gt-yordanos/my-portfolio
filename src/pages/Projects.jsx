// src/pages/Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";
import { FiGithub, FiExternalLink, FiImage } from "react-icons/fi";
import Modal from "react-modal";

Modal.setAppElement('#root');

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Reduced delay from 0.2 to 0.1
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

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
    <section
      id="projects"
      className="bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32"
    >
       <h2 className="text-4xl font-extrabold text-center text-white mb-12">
        Projects
      </h2>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-emerald-500/50 transition-all duration-300 text-left cursor-pointer"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Reduced amount from 0.6 to 0.1 for earlier trigger
            variants={projectVariants}
            onClick={() => openModal(project)}
          >
            {project.image && (
              <div className="mb-4 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
              </div>
            )}
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            {project.tech && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((stack, idx) => (
                  <span
                    key={idx}
                    className="bg-emerald-600/20 text-emerald-300 text-xs px-2 py-1 rounded-md font-medium"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            )}
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiGithub size={20} />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiExternalLink size={20} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Details"
        className="modal bg-gray-800 rounded-lg p-6 max-w-4xl mx-auto my-12 outline-none max-h-[90vh] overflow-y-auto" // Added max-h and overflow-y-auto
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
      >
        {selectedProject && (
          <div className="text-white">
            <div className="flex justify-between items-start mb-6 sticky top-0 bg-gray-800 py-4 z-10"> {/* Made header sticky */}
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-2xl"
              >
                &times;
              </button>
            </div>
            
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-4">
                  {selectedProject.images.map((img, index) => (
                    <img 
                      key={index}
                      src={img} 
                      alt={`${selectedProject.title} screenshot ${index + 1}`}
                      className="rounded-lg object-cover h-full w-full"
                    />
                  ))}
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-gray-300">{selectedProject.details}</p>
            </div>
            
            {selectedProject.tech && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((stack, idx) => (
                    <span
                      key={idx}
                      className="bg-emerald-600/20 text-emerald-300 text-sm px-3 py-1 rounded-md font-medium"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex gap-4 sticky bottom-0 bg-gray-800 py-4"> {/* Made buttons sticky */}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg"
                >
                  <FiGithub size={18} /> View Code
                </a>
              )}
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg"
                >
                  <FiExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}