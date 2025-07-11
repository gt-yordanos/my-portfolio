// src/components/ProjectCard.jsx
export default function ProjectCard({ title, description }) {
  return (
    <article className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </article>
  );
}