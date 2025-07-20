import {
  Mail,
  Linkedin,
  Github,
  Phone,
  MapPin,
  Instagram,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";

const contactVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "gt.yordanos@gmail.com",
      link: "mailto:gt.yordanos@gmail.com",
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      value: "linkedin.com/in/yordanosgtefera",
      link: "https://www.linkedin.com/in/yordanosgtefera/",
    },
    {
      icon: <Github size={18} />,
      label: "GitHub",
      value: "github.com/yordanosgtefera",
      link: "https://github.com/gt-yordanos",
    },
    {
      icon: <Code size={18} />,
      label: "LeetCode",
      value: "leetcode.com/u/yordanostefera",
      link: "https://leetcode.com/u/yordanostefera/",
    },
    {
      icon: <Instagram size={18} />,
      label: "Instagram",
      value: "@yordanosgtefera",
      link: "https://instagram.com/yordanosgtefera",
    },
    {
      icon: <Phone size={18} />,
      label: "Phone",
      value: "+251 982 873 779",
      link: "tel:+251982873779",
    },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: "Dire Dawa, Ethiopia",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32"
    >
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">
        Contact Me
      </h2>

      <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-center leading-relaxed">
        Feel free to reach out via email or connect on any platform below.
        I'm always open to collaboration, feedback, or just a friendly chat!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
        {contactInfo.map((item, i) => (
          <motion.div
            key={item.label}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={contactVariants}
            className="flex items-start gap-4"
          >
            <div className="text-emerald-400 mt-1">{item.icon}</div>
            <div>
              <p className="font-semibold text-white">{item.label}:</p>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:underline text-sm"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-300 text-sm">{item.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
