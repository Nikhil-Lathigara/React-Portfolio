import { motion } from "framer-motion";
import { Code, Coffee, Zap } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "March 2025 - Present",
      title: "Frontend Developer",
      description: "Building modern, responsive user interfaces with React.js and Next.js, collaborating with cross-functional teams, and integrating RESTful APIs for seamless functionality.",
      icon: "🚀"
    },
    {
      year: "Aug 2024 - Feb 2025",
      title: "MERN stack Trainee",
      description: "Learned MERN stack development and Developed multiple full-stack web applications using React.js and Node.js.",
      icon: "💻"
    },
    {
      year: "June 2024",
      title: "Computer Science Graduate",
      description: "Graduated Savitribai Phule Pune University, mastering the concepts of software development.",
      icon: "🎓"
    },
    {
      year: "Jan 2023 - March 2023",
      title: "Full-stack Developer Intern",
      description: "Worked on a full-stack project using HTML, CSS, JS, PHP and MySQL.",
      icon: "🎨"
    },
  ];

  const stats = [
    { value: "10+", label: "Projects Completed", icon: Code },
    { value: "2+", label: "Years Experience", icon: Zap },
    { value: "1000+", label: "Cups of Chai", icon: Coffee },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-300 dark:bg-dark-900 relative z-40">
      

      <div className="max-w-7xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-primary-400  mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="dark:text-gray-400 text-black text-lg max-w-2xl mx-auto">
            Get to know more about my journey, experience, and passion for development
          </p>
        </motion.div>

        {/* Enhanced stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-16 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="bg-black/70 dark:bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 text-center group hover:border-purple-400/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <IconComponent className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold dark:text-white text-primary-400  mb-1">{stat.value}</div>
                <div className="text-white dark:text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-black/70 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 group hover:border-purple-400/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                <span className="text-3xl">👨‍💻</span>
                My Story
              </h3>
              <div className="space-y-4 text-white dark:text-gray-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  I&apos;m a passionate full-stack developer with over 2+ years of experience creating 
                  digital solutions that make a difference. My journey began with a curiosity about 
                  how websites work, which quickly evolved into a love for crafting beautiful and 
                  functional web experiences.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  I specialize in modern web technologies, with a focus on React.js, Next.js, Node.js, and 
                  database design. I believe in writing clean, maintainable code and staying 
                  up-to-date with the latest industry trends and best practices.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community through 
                  blog posts and mentoring.
                </motion.p>
              </div>
            </div>

            {/* Skills highlight */}
            <motion.div
              className="dark:bg-gradient-to-r dark:from-purple-500/10 dark:to-blue-500/10 bg-gradient-to-r from-purple-500/40 to-blue-500/30 rounded-2xl p-6 border border-purple-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-black dark:text-purple-300 mb-3">Core Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Node.js", "Next.js", "JavaScript", "MongoDB",  "Tailwind Css"].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-purple-500/20 text-gray-800 dark:text-purple-200 rounded-full text-sm border border-purple-500/30"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="dark:bg-gradient-to-r dark:from-purple-500/10 dark:to-blue-500/10 bg-gradient-to-r from-purple-500/40 to-blue-500/30 rounded-2xl p-6 border border-purple-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-black dark:text-purple-300 mb-3">Exploring Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {["GenAI","Typescript", "Docker", "Kubernetes", "AWS"].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-purple-500/20 text-gray-800 dark:text-purple-200 rounded-full text-sm border border-purple-500/30"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black/70 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-8 flex items-center gap-3">
              <span className="text-3xl">📈</span>
              Experience Timeline
            </h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: index * 0.3 }}
                  className="relative pl-12 border-l-2 border-purple-500/30 last:border-l-0 group"
                >
                  <motion.div 
                    className="absolute -left-6 top-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-xl border-4 border-slate-800"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.7 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="space-y-2 group-hover:translate-x-2 transition-transform duration-300">
                    <div className="text-purple-400 font-semibold text-lg">{item.year}</div>
                    <h4 className="dark:text-white text-primary-400  font-medium text-xl">{item.title}</h4>
                    <p className="dark:text-gray-400 text-white">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
