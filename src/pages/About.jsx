import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Briefcase, Globe, Award } from "lucide-react";

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
  SiHuggingface,
  SiLangchain,
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
    langchain: <SiLangchain {...iconProps} />,
    "hugging face": <SiHuggingface {...iconProps} />,
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
    { name: "Python" },
    { name: "JavaScript" },
    { name: "C++" }
  ],
  frontend: [
    { name: "ReactJS" },
    { name: "Tailwind CSS" },
  ],
  backend: [
    { name: "FastAPI" },
    { name: "NodeJS" },
    { name: "ExpressJS" },
  ],
  database: [
    // { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "MongoDB" },
  ],
  "machine learning & AI Tools": [
    { name: "scikit-learn" },
    { name: "TensorFlow" },
    { name: "LangChain" },
    { name: "Hugging Face" },
    // { name: "PyTorch" },
  ],
  devops: [
    { name: "Git" },
    { name: "GitHub" },
    { name: "GitHub Actions" },
    // { name: "GitLab" },
    // { name: "AWS" },
    { name: "Docker" },
    // { name: "Kubernetes" },
  ],
};

const experiences = [
  {
    title: "AI Training Software Engineer",
    company: "EaglePoint AI, New York (Remote)",
    period: "Jan 2026 - Present (Fulltime)",
    description:
      "Improved model training data reliability by 30% through debugging, optimization, and testing. Generated structured reasoning trajectories to strengthen LLM software engineering problem-solving performance.",
  },
  {
    title: "Fullstack Developer",
    company: "Helder Technologies, Addis Ababa",
    period: "July 2025 - Jan 2026 (Fulltime)",
    description:
      "Improved backend database performance by 25% and reduced response latency by 10% through service optimization. Integrated frontend APIs using React TanStack Query and memoization to reduce UI lag by 15%.",
  },
  {
    title: "Software Developer Intern",
    company: "Kuraz Technologies, Addis Ababa",
    period: "Jun 2024 - Feb 2025 (Internship)",
    description:
      "Led a project-phase team by delegating tasks based on individual strengths, resulting in successful delivery ahead of deadline. Supported fellow interns in understanding development tools and workflows.",
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
    <section id="about" className="py-24 px-6 lg:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-violet-400 text-sm mb-2">$ cat about.txt</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-400 to-lime-500" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="neo-brutal-card glass p-6"
          >
            <GraduationCap className="w-8 h-8 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <div className="space-y-2 text-gray-400">
              <p className="font-semibold text-white">BSc in Computer Science</p>
              <p className="text-sm">Haramaya University</p>
              <p className="text-sm">May 2022 - June 2025</p>
              <div className="flex items-center gap-2 mt-3">
                <Award className="w-4 h-4 text-violet-400" />
                <span className="font-mono text-violet-400">CGPA: 3.82/4.00</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="neo-brutal-card glass p-6"
          >
            <Briefcase className="w-8 h-8 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Current Role</h3>
            <div className="space-y-2 text-gray-400">
              <p className="font-semibold text-white">AI Training Software Engineer</p>
              <p className="text-sm">EaglePoint AI</p>
              <p className="text-sm">New York, United States (Remote)</p>
              <p className="text-sm font-mono text-violet-400 mt-3">Jan 2026 - Present</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="neo-brutal-card glass p-6"
          >
            <Globe className="w-8 h-8 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Languages</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex justify-between">
                <span>English</span>
                <span className="text-violet-400">Proficient</span>
              </div>
              <div className="flex justify-between">
                <span>Amharic</span>
                <span className="text-violet-400">Native</span>
              </div>
              <div className="flex justify-between">
                <span>Oromo</span>
                <span className="text-violet-400">Fluent</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="w-6 h-6 text-violet-400" />
            <h3 className="text-2xl font-bold">Tech Stack</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, techs], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="neo-brutal-card glass p-6"
              >
                <h4 className="font-mono text-sm text-violet-400 mb-4 uppercase tracking-wider">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techs.map(({ name }) => (
                    <div
                      key={name}
                      className="group flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 transition-all cursor-default border border-white/10"
                    >
                      <StackIcon name={name} size={18} />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-violet-400" />
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>

          <div className="space-y-4">
            {experiences.map(({ title, company, period, description }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="neo-brutal-card glass p-6 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-1 group-hover:text-violet-400 transition-colors">
                      {title}
                    </h4>
                    <p className="text-gray-400 text-sm">{company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {period.toLowerCase().includes('present') && (
                      <span className="px-2.5 py-1 bg-violet-400/10 text-violet-400 text-xs font-mono border border-violet-400/30">
                        Current
                      </span>
                    )}
                    <span className="font-mono text-sm text-gray-500 whitespace-nowrap">
                      {period}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}