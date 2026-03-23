import React, { useState, useEffect } from "react";
import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import myImage from "../assets/myImage.jpg";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Software & AI Engineer";

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let loopTimeout;

    const type = () => {
      if (!isDeleting && index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
        loopTimeout = setTimeout(type, 80);
      } else if (!isDeleting && index > fullText.length) {
        // Wait 4 seconds before starting to delete
        loopTimeout = setTimeout(() => {
          isDeleting = true;
          type();
        }, 4000);
      } else if (isDeleting && index > 0) {
        setText(fullText.slice(0, index - 1));
        index--;
        loopTimeout = setTimeout(type, 50);
      } else if (isDeleting && index === 0) {
        // Wait 1 second before starting to type again
        isDeleting = false;
        loopTimeout = setTimeout(type, 1000);
      }
    };

    type();
    return () => clearTimeout(loopTimeout);
  }, []);

  return (
    <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6 lg:px-12 xl:px-20 pt-20">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center lg:text-left space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-violet-400 text-sm"
            >
              $ whoami
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white from-0% via-violet-300 via-50% to-violet-400 to-100% bg-clip-text text-transparent">
                Yordanos G. Tefera
              </span>
            </h1>

            <div className="font-mono text-xl text-gray-400 h-8">
              {text}
              <span className="cursor-blink">_</span>
            </div>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Building scalable systems and AI solutions. Passionate about clean code, 
            modern architecture, and solving complex problems.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="/YordanosTefera'sCV.pdf"
              download
              className="neo-brutal flex items-center gap-2 px-6 py-3 bg-lime-500 text-black font-medium"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>

            <a
              href="https://github.com/gt-yordanos"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-brutal flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm hover:bg-white/10"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yordanosgtefera"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-brutal flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm hover:bg-white/10"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-500 font-mono">
            <Mail className="w-4 h-4" />
            <a href="mailto:gt.yordanos@gmail.com" className="hover:text-violet-400 transition-colors">
              gt.yordanos@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex-shrink-0 relative"
        >
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-tr from-violet-400 to-lime-500 p-[3px] animate-pulse">
            <img
              src={myImage}
              alt="Yordanos Tefera"
              className="w-full h-full object-cover rounded-full shadow-xl"
            />
          </div>
          
          {/* Open to Work Badge - 2026 Minimal Floating Style */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="neo-brutal-card flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
              </span>
              <span className="text-sm text-white font-medium">
                Open to work
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
