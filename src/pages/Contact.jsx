import React from "react";
import { Mail, Linkedin, Github, Phone, MapPin, Instagram, Code } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "gt.yordanos@gmail.com",
      link: "mailto:gt.yordanos@gmail.com",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "yordanosgtefera",
      link: "https://www.linkedin.com/in/yordanosgtefera/",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "gt-yordanos",
      link: "https://github.com/gt-yordanos",
    },
    {
      icon: <Code className="w-5 h-5" />,
      label: "LeetCode",
      value: "yordanostefera",
      link: "https://leetcode.com/u/yordanostefera/",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      value: "@yarden_zion",
      link: "https://www.instagram.com/yarden_zion/",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+251 982 873 779",
      link: "tel:+251982873779",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Dire Dawa, Ethiopia",
    },
  ];

  return (
    <section id="contact" className="relative z-10 py-24 px-6 lg:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-violet-400 text-sm mb-2">$ contact --info</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-400 to-lime-500" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="neo-brutal-card glass p-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-violet-400 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-sm text-gray-400 mb-1">{item.label}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-violet-400 transition-colors break-words"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white break-words">{item.value}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Open to collaboration, freelance opportunities, and interesting projects. 
            Feel free to reach out via any platform above.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
