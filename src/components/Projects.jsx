import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Built an interactive, modern and responsive frontend for a full-featured e-commerce solution. Worked as a team with product manager to design and develop a fully functional e-commerce website.",
      image: "/images/project/E-commerce.png",
      technologies: [
        "React.js",
        "Tailwind Css",
        "Node.js",
        "MongoDB",
        "API Integration",
      ],
      category: "frontend",
      liveLink: "https://userweb-zeta.vercel.app/",
      githubLink: "#",
    },
    {
      id: 2,
      title: "E-commerce Admin Panel",
      description:
        "Designed a dynamic and visually engaging admin dashboard with charts and analytics",
      image: "/images/project/AdminPanel_HomePage.png",
      technologies: ["React.js", "ChartJs", "Tailwind Css", "API Integration"],
      category: "frontend",
      liveLink: "https://adminpanelecommerce.vercel.app",
      githubLink: "#",
    },
    {
      id: 3,
      title: "MaccoTech Digital Marketing Website",
      description:
        "Our company website in which I worked as a frontend developer to develope a fast, animated, and SEO-friendly marketing website.",
      image: "/images/project/MaccoTech.png",
      technologies: [
        "NextJs",
        "Tailwind CSS",
        "Framer Motion",
        "API Integration",
      ],
      category: "frontend",
      liveLink: "https://maccotech.in",
      githubLink: "#",
    },
    {
      id: 4,
      title: "GapShap",
      description:
        "Created a real-time chat app with private messaging using React, Node.js, and Socket.io.",
      image: "../images/project/ChatApp.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "fullstack",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      title: "Kitaab",
      description:
        "Designed RESTful API to manage books and developed a responsive React app for a book collection using React, Node.js, and MongoDB.",
      image:
        "../images/project/Kitaab.png",
      technologies: ["React","Node.js", "MongoDB", "API Integration"],
      category: "fullstack",
      liveLink: "https://book-collection-seven-mu.vercel.app/",
      githubLink: "https://github.com/Nikhil-Lathigara/BookCollection",
    },
    {
      id: 6,
      title: "Short URL Service",
      description:
        "Developed a backend service to shorten URL's and handle redirection using Express and MongoDB, practicing API design and MongoDB operations.",
      image:
        "../images/project/ShortUrl.png",
      technologies: ["Node.js", "MongoDB", "JWT"],
      category: "backend",
      liveLink: "#",
      githubLink: "https://github.com/Nikhil-Lathigara/url_shortner",
    },
    {
      id: 7,
      title: "Currency Converter",
      description:
        "I made this app when I started learning React. This app use an external API to fetch live currency rates, An appealing currency converter with beautiful UI.",
      image:
        "../images/project/CurrencyConverter.png",
      technologies: ["React", "Tailwind Css", "API Integration"],
      category: "backend",
      liveLink: "https://currency-converter-delta-ten.vercel.app/",
      githubLink: "https://github.com/Nikhil-Lathigara/currencyConverter",
    },
    {
      id: 8,
      title: "Password Generator",
      description:
        "Developed a customizable password generator in React with real-time strength indicators using external logic APIs.",
      image:
        "../images/project/PasswordGenerator.png",
      technologies: ["React", "Tailwind Css"],
      category: "backend",
      liveLink: "https://password-generator-sepia-seven.vercel.app/",
      githubLink: "https://github.com/Nikhil-Lathigara/passwordGenerator",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-4 md:py-12 bg-gray-100 dark:bg-dark-900 relative z-40 "
    >
      <div className="section-container ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-lg font-semibold text-primary-500 mb-2">
            My Work
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Recent Projects
          </h3>
          <p className="text-dark-500 dark:text-dark-300 max-w-3xl mx-auto">
            Here are some of my recent projects. Each project represents my
            skills and experience in different areas of web development.
          </p>
        </motion.div>

        <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 bg-gray-100 dark:bg-dark-700 rounded-lg">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === "all"
                  ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10  border border-purple-500/20 text-primary-600 dark:text-primary-400 shadow-sm"
                  : "text-dark-500 dark:text-dark-300 hover:text-dark-800 dark:hover:text-white"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("fullstack")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === "fullstack"
                  ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10  border border-purple-500/20 text-primary-600 dark:text-primary-400 shadow-sm"
                  : "text-dark-500 dark:text-dark-300 hover:text-dark-800 dark:hover:text-white"
              }`}
            >
              Full Stack
            </button>
            <button
              onClick={() => setFilter("frontend")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === "frontend"
                  ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10  border border-purple-500/20 text-primary-600 dark:text-primary-400 shadow-sm"
                  : "text-dark-500 dark:text-dark-300 hover:text-dark-800 dark:hover:text-white"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setFilter("backend")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === "backend"
                  ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10  border border-purple-500/20 text-primary-600 dark:text-primary-400 shadow-sm"
                  : "text-dark-500 dark:text-dark-300 hover:text-dark-800 dark:hover:text-white"
              }`}
            >
              Backend
            </button>
            
          </div>
        </motion.div>
        </AnimatePresence>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-dark-700 rounded-xl shadow-md overflow-hidden group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="space-x-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 bg-dark-800/80 hover:bg-primary-600 rounded-full text-white transition-colors duration-300"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 bg-dark-800/80 hover:bg-accent-600 rounded-full text-white transition-colors duration-300"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-dark-500 dark:text-dark-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 ">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-6 border border-purple-500/20"
                    >
                      <FiCode className="w-3 h-3 mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
