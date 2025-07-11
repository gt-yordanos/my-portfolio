// src/pages/Projects.jsx
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="mb-12">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(({ id, title, description }) => (
          <ProjectCard key={id} title={title} description={description} />
        ))}
      </div>
    </section>
  );
}