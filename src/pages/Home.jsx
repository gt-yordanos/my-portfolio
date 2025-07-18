import React from "react";
import { Download, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import myImage from "../assets/myImage.jpg";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 overflow-hidden"
    >
      {/* Left: Text Content */}
      <motion.div
        className="text-center max-w-xl space-y-5"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xl font-semibold text-gray-400">Hi, I am</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
          Yordanos Tefera
        </h1>
        <p className="text-lg sm:text-2xl font-bold text-gray-300">
          Software Engineer
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/YordanosTefera'sResume.pdf"
            download
            className="flex items-center gap-2 bg-emerald-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
          >
            <Download size={18} />
            Download Resume
          </a>

          <a
            href="https://linkedin.com/in/yordanosgtefera"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0077B5] text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </motion.div>

      {/* Right: Image with animated border */}
      <motion.div
        className="relative mt-10 md:mt-0 md:ml-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 p-[3px] animate-pulse">
          <img
            src={myImage}
            alt="Yordanos Tefera"
            className="w-full h-full object-cover rounded-full shadow-xl"
          />
        </div>
      </motion.div>
    </section>
  );
}
