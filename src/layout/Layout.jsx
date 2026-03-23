import React, { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["about", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 lg:px-12 xl:px-20">
        <Link to="home" smooth duration={500} className="cursor-pointer">
          <div className="flex items-center gap-2 group">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <span className="font-mono text-lg font-semibold">
              <span className="text-gray-400">~/</span>
              <span className="text-white group-hover:text-emerald-400 transition-colors">yordanos</span>
            </span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((section) => (
            <li key={section}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onSetActive={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-lg font-mono text-sm cursor-pointer transition-all duration-200 ${
                  activeSection === section
                    ? "bg-emerald-400/10 text-emerald-400"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <ul className="px-6 py-4 space-y-2">
              {navItems.map((section) => (
                <li key={section}>
                  <Link
                    to={section}
                    smooth
                    offset={-80}
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 rounded-lg font-mono text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                  >
                    {section}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <Link to="home" spy smooth offset={-80} duration={500} onSetActive={() => setActiveSection("")} style={{ display: "none" }} />
    </motion.nav>
  );
}