import { Github, Linkedin, Mail, Heart, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6 lg:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-violet-400" />
            <span className="font-mono text-sm text-gray-400">
              <span className="text-gray-400">~/</span>
              <span className="text-white">yordanos</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-lime-500 fill-lime-500" />
            <span>using React & Tailwind</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/gt-yordanos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/yordanosgtefera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:gt.yordanos@gmail.com"
              className="text-gray-400 hover:text-violet-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center font-mono text-xs text-gray-500">
          © {new Date().getFullYear()} Yordanos G. Tefera
        </div>
      </div>
    </footer>
  );
}
