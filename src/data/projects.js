import kt1 from "../assets/ktDelivery/1.png";
import kt2 from "../assets/ktDelivery/2.png";
import kt3 from "../assets/ktDelivery/3.png";
import kt4 from "../assets/ktDelivery/4.png";

import kuraz1 from "../assets/kurazJob/1.png";
import kuraz2 from "../assets/kurazJob/2.png";
import kuraz3 from "../assets/kurazJob/3.png";
import kuraz4 from "../assets/kurazJob/4.png";
import kuraz5 from "../assets/kurazJob/5.png";
import kuraz6 from "../assets/kurazJob/6.png";

import huesa1 from "../assets/huesa/1.png";
import huesa2 from "../assets/huesa/2.png";
import huesa3 from "../assets/huesa/3.png";
import huesa4 from "../assets/huesa/4.png";

import abba1 from "../assets/abbaBiyyo/1.png";
import abba2 from "../assets/abbaBiyyo/2.png";

const projects = [
  {
    id: 1,
    title: "Kuraz AI-Based Job Matcher and Applicant Ranker",
    description:
      "An intelligent hiring platform using AI chatbot, ranking algorithms, and job matching.",
    details:
      "Kuraz is an AI-powered job-matching system that includes an integrated chatbot to assist applicants, a resume parsing engine, a leaderboard for applicant rankings, and a dashboard for job postings. It uses Google Gemini API to help applicants and rule-based algorithms for employer-side filtering. Built using the MERN stack, the platform supports advanced AI-driven features for modern job recruiting.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Google Gemini API"],
    image: kuraz1,
    images: [kuraz1, kuraz2, kuraz3, kuraz4, kuraz5, kuraz6],
    github: "https://github.com/yourusername/kuraz-job-matcher",
    link: "https://kuraz-jobmatcher.example.com",
  },
  {
    id: 2,
    title: "KT Restaurant Delivery System",
    description:
      "Full-stack food delivery platform for all campuses of Haramaya University with Chapa payment.",
    details:
      "KT Delivery is a complete food delivery system designed to serve all three campuses of Haramaya University. It offers real-time order tracking, Chapa payment integration, a dashboard for restaurant owners, and a delivery personnel management system. The system improves student access to meals with modern delivery and payment features.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Firebase", "Chapa API"],
    image: kt1,
    images: [kt1, kt2, kt3, kt4],
    github: "https://github.com/yourusername/kt-delivery",
    link: "https://kt-delivery.example.com",
  },
  {
    id: 3,
    title: "HUESA Official Website",
    description: "Dynamic website for Haramaya University Economics Student Association (HUESA).",
    details:
      "I developed the official website for the Haramaya University Economics Student Association (HUESA) while I was a student. The website features a dynamic homepage that showcases current executives, founding members, office location, opening hours, and more. Admins can manage content including member registrations, event posting, and registration status (open/closed). The system also supports filtering and exporting member data as Excel files and automatic certificate generation.",
    tech: ["React.js", "Firebase", "Vercel"],
    image: huesa1,
    images: [huesa1, huesa2, huesa3, huesa4],
    github: "https://github.com/yourusername/huesa-website",
    link: "https://huesa-website.vercel.app",
  },
  {
    id: 4,
    title: "Abbabiyo Plant Disease Detection System",
    description: "Smart agriculture system detecting corn diseases using deep learning.",
    details:
      "Abbabiyo is a plant disease detection system that uses Convolutional Neural Networks (CNNs) to identify corn diseases from leaf images. It provides farmers with early warnings, diagnosis, and guidance for disease treatment. The backend was developed using FastAPI and TensorFlow, and the frontend with React. Hugging Face was used for model management and deployment.",
    tech: ["Python", "FastAPI", "TensorFlow", "React", "Hugging Face"],
    image: abba1,
    images: [abba1, abba2],
    github: "https://github.com/yourusername/abbabiyo-plant-disease",
    link: "https://abbabiyo-disease.example.com",
  },
  {
    id: 5,
    title: "HUESA Official Website",
    description: "Dynamic website for Haramaya University Economics Student Association (HUESA).",
    details:
      "I developed the official website for the Haramaya University Economics Student Association (HUESA) while I was a student. The website features a dynamic homepage that showcases current executives, founding members, office location, opening hours, and more. Admins can manage content including member registrations, event posting, and registration status (open/closed). The system also supports filtering and exporting member data as Excel files and automatic certificate generation.",
    tech: ["React.js", "Firebase", "Vercel"],
    image: huesa1,
    images: [huesa1, huesa2, huesa3, huesa4],
    github: "https://github.com/yourusername/huesa-website",
    link: "https://huesa-website.vercel.app",
  },
];

export default projects;