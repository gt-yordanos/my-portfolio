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
    title: "Fullstack Developer",
    company: "Helder Technologies, Addis Ababa",
    period: "July 2025 - present (Fulltime)",
    description:
      "I work On full stack SaaS and ERP projects using tech stacks such as Node.JS, FastAPI, and React.JS",
  },
  {
    title: "Fullstack Developer",
    company: "HUESA, Haramaya University",
    period: "Jan 2025 - Mar 2025 (Volunteering)",
    description:
      "Developed a responsive and functional website using React and Firebase, reducing manual workload by 70%.",
  },
  {
    title: "Software Developer & Team Lead",
    company: "Kuraz Technologies, Addis Ababa",
    period: "Jun 2024 - Sep 2024 (Internship)",
    description:
      "Delivered a project on time by engaging the team and delegating tasks according to strengths.",
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
          <div className="font-mono text-emerald-400 text-sm mb-2">$ cat about.txt</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 hover:bg-white/5 transition-all"
          >
            <GraduationCap className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <div className="space-y-2 text-gray-400">
              <p className="font-semibold text-white">BSc in Computer Science</p>
              <p className="text-sm">Haramaya University</p>
              <p className="text-sm">May 2022 - June 2025</p>
              <div className="flex items-center gap-2 mt-3">
                <Award className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-emerald-400">CGPA: 3.82/4.00</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 hover:bg-white/5 transition-all"
          >
            <Briefcase className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Current Role</h3>
            <div className="space-y-2 text-gray-400">
              <p className="font-semibold text-white">Fullstack Developer</p>
              <p className="text-sm">Helder Technologies</p>
              <p className="text-sm">Addis Ababa, Ethiopia</p>
              <p className="text-sm font-mono text-emerald-400 mt-3">July 2025 - Present</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6 hover:bg-white/5 transition-all"
          >
            <Globe className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Languages</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex justify-between">
                <span>English</span>
                <span className="text-emerald-400">Proficient</span>
              </div>
              <div className="flex justify-between">
                <span>Amharic</span>
                <span className="text-emerald-400">Native</span>
              </div>
              <div className="flex justify-between">
                <span>Oromo</span>
                <span className="text-emerald-400">Fluent</span>
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
            <Code2 className="w-6 h-6 text-emerald-400" />
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
                className="glass rounded-xl p-6"
              >
                <h4 className="font-mono text-sm text-emerald-400 mb-4 uppercase tracking-wider">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techs.map(({ name }) => (
                    <div
                      key={name}
                      className="group flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all cursor-default"
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
            <Briefcase className="w-6 h-6 text-emerald-400" />
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
                className="glass rounded-xl p-6 hover:bg-white/5 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-semibold group-hover:text-emerald-400 transition-colors">
                      {title}
                    </h4>
                    <p className="text-gray-400 text-sm">{company}</p>
                  </div>
                  <span className="font-mono text-sm text-emerald-400 mt-2 md:mt-0">{period}</span>
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