// src/pages/Contact.jsx
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="mb-16">
      <SectionTitle>Contact Me</SectionTitle>

      <p className="mb-6 text-gray-700">
        Feel free to reach out via email or connect on LinkedIn and GitHub!
      </p>

      <ul className="space-y-3 text-gray-700">
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
            your.email@example.com
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://linkedin.com/in/yourlinkedin" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/yourlinkedin
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/yourgithub" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            github.com/yourgithub
          </a>
        </li>
        <li>
          <strong>Phone:</strong> +251 982 873 779
        </li>
        <li>
          <strong>Location:</strong> Dire Dawa, Ethiopia
        </li>
      </ul>
    </section>
  );
}