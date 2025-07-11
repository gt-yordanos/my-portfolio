import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Briefcase,
  Globe,
} from "lucide-react";

import {
  FaJava,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaCode,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDjango,
  SiGithubactions,
  SiKubernetes,
  SiTensorflow,
  SiPytorch,
  SiGo,
} from "react-icons/si";

import { HiLightningBolt } from "react-icons/hi";

function StackIcon({ name, className = "text-white", size = 24 }) {
  const iconProps = { className, size };

  const icons = {
    "c++": <SiCplusplus {...iconProps} />,
    java: <FaJava {...iconProps} />,
    python: <FaPython {...iconProps} />,
    javascript: <FaJsSquare {...iconProps} />,
    typescript: <SiTypescript {...iconProps} />,
    html5: <FaHtml5 {...iconProps} />,
    css3: <FaCss3Alt {...iconProps} />,
    reactjs: <FaReact {...iconProps} />,
    "react native": <FaReact {...iconProps} />,
    "tailwind css": <SiTailwindcss {...iconProps} />,
    nodejs: <FaNodeJs {...iconProps} />,
    expressjs: <SiExpress {...iconProps} />,
    fastapi: <HiLightningBolt {...iconProps} />,
    django: <SiDjango {...iconProps} />,
    firebase: <SiFirebase {...iconProps} />,
    postgresql: <SiPostgresql {...iconProps} />,
    mysql: <SiMysql {...iconProps} />,
    mongodb: <SiMongodb {...iconProps} />,
    golang: <SiGo {...iconProps} />,
    "scikit-learn": <FaPython {...iconProps} />,
    tensorflow: <SiTensorflow {...iconProps} />,
    pytorch: <SiPytorch {...iconProps} />,
    git: <FaGitAlt {...iconProps} />,
    github: <FaGithub {...iconProps} />,
    "github actions": <SiGithubactions {...iconProps} />,
    gitlab: <FaGitlab {...iconProps} />,
    aws: <FaAws {...iconProps} />,
    docker: <FaDocker {...iconProps} />,
    kubernetes: <SiKubernetes {...iconProps} />,
  };

  const key = name.toLowerCase();
  return icons[key] || <FaCode {...iconProps} />;
}

const skills = {
  languages: [
    { name: "C++" },
    { name: "Java" },
    { name: "Python" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Golang" },
  ],
  frontend: [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "ReactJS" },
    { name: "React Native" },
    { name: "Tailwind CSS" },
  ],
  backend: [
    { name: "NodeJS" },
    { name: "ExpressJS" },
    { name: "FastAPI" },
    { name: "Django" },
    { name: "Firebase" },
  ],
  database: [
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "MongoDB" },
  ],
  "machine learning": [
    { name: "scikit-learn" },
    { name: "TensorFlow" },
    { name: "PyTorch" },
  ],
  devops: [
    { name: "Git" },
    { name: "GitHub" },
    { name: "GitHub Actions" },
    { name: "GitLab" },
    { name: "AWS" },
    { name: "Docker" },
    { name: "Kubernetes" },
  ],
};

const experiences = [
  {
    title: "Frontend Developer & Team Lead",
    company: "Kuraz Technologies, Addis Ababa",
    period: "Jun 2024 - Sep 2024 (Internship)",
    description:
      "Delivered a project on time by engaging the team and delegating tasks according to strengths.",
  },
  {
    title: "Fullstack Web Developer",
    company: "HUESA, Haramaya University",
    period: "Jan 2025 - Mar 2025 (Volunteering)",
    description:
      "Developed a responsive and functional website using React and Firebase, reducing manual workload by 70%.",
  },
];

const timelineVariants = {
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

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32"
    >
      {/* About Me Title */}
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">
        About Me
      </h2>

      {/* Education */}
      <div className="mb-12 max-w-4xl">
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-4 text-emerald-400">
          <GraduationCap size={20} /> Education
        </h3>
        <p className="text-gray-300 leading-relaxed text-left">
          <span className="font-bold text-white">BSc in Computer Science</span>
          <br />
          Haramaya University | May 2022 - June 2025
          <br />
          <span className="font-semibold text-emerald-400">CGPA:</span> 3.82 / 4.00
        </p>
      </div>

      {/* Tech Stack */}
      <div className="mb-12 max-w-7xl">
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-6 text-emerald-400">
          <Code2 size={20} /> Tech Stack
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, techs]) => (
            <div key={category}>
              <h4 className="text-emerald-300 font-semibold mb-4 capitalize text-left">
                {category}
              </h4>
              <div className="flex flex-wrap gap-4">
                {techs.map(({ name }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center justify-center bg-gray-800 rounded-lg px-4 py-3 shadow hover:scale-105 transform transition duration-300 cursor-default w-24"
                    title={name}
                  >
                    <StackIcon name={name} size={28} />
                    <span className="mt-2 text-xs text-white font-medium text-center">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mb-20 max-w-4xl">
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-12 text-emerald-400">
          <Briefcase size={20} /> Experience
        </h3>

        <div className="relative ml-4 pl-8 border-l-2 border-emerald-500">
          {experiences.map(({ title, company, period, description }, i) => (
            <motion.div
              key={i}
              className="relative mb-12"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={timelineVariants}
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[29px] top-1 w-5 h-5 bg-emerald-500 border-4 border-gray-900 rounded-full shadow-lg" />

              {/* Content Card */}
              <div className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-emerald-500/50 transition-all duration-300 text-left">
                <h4 className="text-lg font-bold text-white">{title}</h4>
                <p className="text-sm text-gray-400 italic mb-2">
                  {company} | {period}
                </p>
                <p className="text-gray-300 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Languages I Speak */}
      <div className="max-w-xl">
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-4 text-emerald-400">
          <Globe size={20} /> Languages I Speak
        </h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-left">
          <li>
            <span className="text-white font-medium">English:</span> Proficient
          </li>
          <li>
            <span className="text-white font-medium">Amharic:</span> Native
          </li>
          <li>
            <span className="text-white font-medium">Oromo:</span> Fluent
          </li>
        </ul>
      </div>
    </section>
  );
}