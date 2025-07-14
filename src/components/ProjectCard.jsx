// src/components/ProjectCard.jsx
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-emerald-500/50 transition-all duration-300 text-left cursor-pointer h-full"
      onClick={onClick}
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
      <p className="text-gray-300 mb-4">{project.description}</p>
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
    </div>
  );
};

export default ProjectCard;