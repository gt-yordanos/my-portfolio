import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["about", "projects", "contact"];

  // Animation variants for the mobile menu sliding
  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  // Common styles for links with bottom border on active
  const linkBaseClasses =
    "cursor-pointer text-white transition-colors duration-300 relative";

  const activeBorderClass = "text-emerald-400";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-900 text-white sticky top-0 z-50 font-poppins shadow-lg"
    >
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer select-none">
          Yordanos<span className="text-emerald-400">.</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 font-medium">
          {navItems.map((section) => (
            <li key={section} className="relative group">
              <Link
                activeClass="text-emerald-400"
                to={section}
                spy={true}
                smooth={true}
                offset={-80} // Adjust this if your navbar height changes
                duration={500}
                className={`${linkBaseClasses} group-hover:text-emerald-400`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}

                {/* Border bottom, visible only when active or on hover */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full group-active:w-full" />

                {/* When activeClass applies, this span width should expand */}
                {/* We will control it via tailwind and react-scroll activeClass */}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden bg-gray-800 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 space-y-4 font-medium">
              {navItems.map((section) => (
                <li key={section} className="relative group">
                  <Link
                    activeClass="text-emerald-400 border-b-2 border-emerald-400"
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                    className="block cursor-pointer text-white hover:text-emerald-400 transition-colors duration-300 pb-1"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    {/* Border bottom visible only if active */}
                    {/* We apply border-bottom on activeClass */}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}