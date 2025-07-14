// src/data/projects.js
import kt1 from "../assets/kt1.png";

const projects = [
  {
    id: 1,
    title: "KT Restaurant Delivery System",
    description: "On-campus food delivery platform for Haramaya University with integrated Chapa payment",
    details:
      "A full-functional food delivery system serving all 3 campuses of Haramaya University. Features include real-time order tracking, multiple payment options (including Chapa integration), restaurant management dashboard, and delivery personnel tracking. The system significantly improved food accessibility for students across campuses.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Chapa API", "Firebase"],
    image: kt1,
    images: [kt1, kt1, kt1, kt1],
    github: "https://github.com/yourusername/kt-delivery",
    link: "https://kt-delivery.example.com",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of project 2",
    details: "Detailed description of project 2 with all features and functionalities.",
    tech: ["Vue.js", "Django", "PostgreSQL"],
    image: kt1,
    images: [kt1, kt1],
    github: "https://github.com/yourusername/project2",
    link: "https://project2.example.com",
  },
  {
    id: 3,
    title: "Kuraz AI Based Job Matcher and Applicant Ranker",
    description:
      "Developed a system assisting applicants through the application process and ranking them on employer’s side, using Google Gemini API and rule-based ranking algorithms.",
    details:
      "Kuraz uses AI and rule-based methods to help applicants apply efficiently and ranks candidates for employers. Features resume parsing, AI chat assistance, and ranking dashboards.",
    tech: ["React", "Laravel", "Python", "Google Gemini API"],
    image: kt1,
    images: [kt1],
    github: "https://github.com/yourusername/kuraz-job-matcher",
    link: "https://kuraz-jobmatcher.example.com",
  },
  {
    id: 4,
    title: "Abbabiyo Plant Disease Detection System",
    description: "Built a corn disease detection system using CNNs, achieving 94% accuracy.",
    details:
      "Abbabiyo uses convolutional neural networks (CNNs) to detect various corn diseases with high accuracy. It provides farmers with timely alerts and disease management tips.",
    tech: ["Python", "TensorFlow", "Keras", "Flask"],
    image: kt1,
    images: [kt1],
    github: "https://github.com/yourusername/abbabiyo-plant-disease",
    link: "https://abbabiyo-disease.example.com",
  },
  {
    id: 5,
    title: "Habesha Attire / Ethiopian Traditional Clothing Detection System",
    description: "Implemented a model detecting Habesha traditional clothing vs casual attire, with 80% accuracy.",
    details:
      "This system uses image recognition to classify Habesha traditional clothing versus casual wear, supporting cultural preservation through AI-driven classification.",
    tech: ["PyTorch", "OpenCV", "FastAPI"],
    image: kt1,
    images: [kt1],
    github: "https://github.com/yourusername/habesha-attire-detector",
    link: "https://habesha-attire.example.com",
  },
];

export default projects;
