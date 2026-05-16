import { motion } from "framer-motion";

const About = () => {
  const timeline = [
    {
      year: "JAN 2026 - PRESENT",
      title: "Freelance Full-Stack Developer",
      description:
        "Building AI-powered applications and modern web solutions for clients worldwide.",
      icon: "🚀",
      color: "bg-[#FFED00]",
    },
    {
      year: "MARCH 2025 - NOV 2025",
      title: "Frontend Developer @ Macco Tech",
      description:
        `Optimized frontend performance by refactoring API calls and reducing unnecessary re-renders, decreasing Largest
Contentful Paint (LCP) from 4.2s to 1.5s and improving page load speed by 60%.
        `,
      icon: "💼",
      color: "bg-[#00C2FF]",
    },
    {
      year: "AUG 2024 - FEB 2025",
      title: "MERN Stack Trainee",
      description:
        "Developed scalable MERN applications and learned production-ready workflows.",
      icon: "💻",
      color: "bg-[#FF90E8]",
    },
    {
      year: "JUNE 2024",
      title: "Computer Science Graduate",
      description:
        "Graduated from Savitribai Phule Pune University with CGPA 7.29.",
      icon: "🎓",
      color: "bg-[#00FF85]",
    },
  ];

  const stats = [
    {
      value: "10+",
      label: "PROJECTS",
      color: "bg-[#FFED00]",
    },
    {
      value: "1.5+",
      label: "YEARS EXP",
      color: "bg-[#00C2FF]",
    },
    {
      value: "5+",
      label: "AI PROJECTS",
      color: "bg-[#FF90E8]",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-20 md:py-28 bg-[#F8F5F0] relative overflow-hidden flex flex-col items-center justify-center min-h-screen w-full"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-3 sm:grid-cols-6 h-full auto-rows-fr">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="border border-black" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Header - Centered Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-20 text-center flex flex-col items-center w-full"
        >
          <div className="inline-block bg-[#FF90E8] border-4 border-black px-4 py-1.5 sm:px-5 sm:py-2 rotate-[-2deg] shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000] mb-4 sm:mb-6">
            <span className="font-black uppercase text-xs sm:text-base text-black tracking-wide">
              WHO AM I?
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none uppercase text-black mb-4 sm:mb-6 break-words">
            ABOUT{" "}
            <span className="bg-black text-white px-2 sm:px-4 inline-block rotate-[-2deg]">
              ME
            </span>
          </h2>

          <p className="max-w-3xl text-base sm:text-xl md:text-2xl font-semibold text-black leading-relaxed mx-auto">
            Full Stack Developer crafting scalable web apps, AI-powered
            products, and modern digital experiences with performance-first
            engineering.
          </p>
        </motion.div>

        {/* Stats - Centered Grid Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-20 w-full justify-center items-center"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{
                x: -4,
                y: -4,
              }}
              className={`
                ${stat.color}
                border-4 border-black
                shadow-[6px_6px_0px_#000] sm:shadow-[8px_8px_0px_#000]
                p-6 sm:p-8
                transition-all duration-150
                w-full h-full flex flex-col justify-center items-center text-center
              `}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-1 sm:mb-2">
                {stat.value}
              </div>

              <div className="text-xs sm:text-sm md:text-base uppercase font-black tracking-widest text-black">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic Split Layout - Balanced Width Allocation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start w-full justify-center">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 sm:space-y-8 w-full"
          >
            {/* Story */}
            <div
              className="
                bg-[#FFED00]
                border-4 border-black
                shadow-[8px_8px_0px_#000] sm:shadow-[10px_10px_0px_#000]
                p-6 sm:p-8
                w-full
              "
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4 text-black">
                <span
                  className="
                    bg-white
                    px-3 py-1 sm:px-4 sm:py-2
                    border-4 border-black
                    shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000]
                    rotate-[-3deg]
                    text-base sm:text-xl
                  "
                >
                  👨‍💻
                </span>
                MY STORY
              </h3>

              <div className="space-y-4 text-black text-base sm:text-lg leading-relaxed font-medium">
                <p>
                  I'm a Full Stack Developer focused on building scalable,
                  production-ready applications using React.js, Next.js,
                  TypeScript, Node.js, and AI integrations.
                </p>

                <p>
                  I specialize in modern frontend architecture, REST APIs,
                  optimization, and AI-powered systems using OpenAI and Gemini
                  APIs.
                </p>

                <p>
                  I enjoy transforming complex ideas into high-performance
                  digital products with strong UX and bold visual identity.
                </p>
              </div>
            </div>

            {/* Expertise */}
            <div
              className="
                bg-[#00C2FF]
                border-4 border-black
                shadow-[8px_8px_0px_#000] sm:shadow-[10px_10px_0px_#000]
                p-6 sm:p-8
                w-full
              "
            >
              <h4 className="text-xl sm:text-2xl font-black uppercase mb-4 sm:mb-6 text-black">
                CORE EXPERTISE
              </h4>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "TypeScript",
                  "MongoDB",
                  "Tailwind CSS",
                  "OpenAI API",
                  "RAG Systems",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{
                      rotate: 2,
                      y: -3,
                    }}
                    className="
                      bg-white
                      border-4 border-black
                      px-3 py-1.5 sm:px-4 sm:py-2
                      text-xs sm:text-sm text-black
                      font-black
                      uppercase
                      shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000]
                      cursor-default
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* AI */}
            <div
              className="
                bg-[#FF90E8]
                border-4 border-black
                shadow-[8px_8px_0px_#000] sm:shadow-[10px_10px_0px_#000]
                p-6 sm:p-8
                rotate-0 lg:rotate-[-1deg]
                w-full
              "
            >
              <h4 className="text-xl sm:text-2xl font-black uppercase mb-4 sm:mb-6 text-black">
                AI & CLOUD
              </h4>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "Gemini API",
                  "Qdrant",
                  "Vector DB",
                  "Docker",
                  "AWS S3",
                  "LangChain",
                  "Prompt Engineering",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{
                      rotate: -2,
                      y: -3,
                    }}
                    className="
                      bg-white
                      border-4 border-black
                      px-3 py-1.5 sm:px-4 sm:py-2
                      text-xs sm:text-sm text-black
                      font-black
                      uppercase
                      shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000]
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              bg-white
              border-4 border-black
              shadow-[8px_8px_0px_#000] sm:shadow-[12px_12px_0px_#000]
              p-6 sm:p-8
              w-full
            "
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-8 sm:mb-10 flex items-center gap-3 sm:gap-4 text-black">
              <span
                className="
                  bg-black
                  text-white
                  px-3 py-1 sm:px-4 sm:py-2
                  border-4 border-black
                  shadow-[3px_3px_0px_#FFED00] sm:shadow-[4px_4px_0px_#FFED00]
                  rotate-[-2deg]
                  text-base sm:text-xl
                "
              >
                📈
              </span>
              CAREER PATH
            </h3>

            <div className="space-y-8 sm:space-y-10 pl-2">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="
                    relative
                    pl-10 sm:pl-16
                    border-l-4
                    border-black
                  "
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    className={`
                      absolute
                      -left-[22px] sm:-left-6
                      top-0
                      w-10 h-10 sm:w-12 sm:h-12
                      ${item.color}
                      border-4
                      border-black
                      shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000]
                      flex
                      items-center
                      justify-center
                      text-lg sm:text-xl
                    `}
                  >
                    {item.icon}
                  </motion.div>

                  <div className="space-y-2 sm:space-y-3">
                    <span
                      className="
                        inline-block
                        bg-black
                        text-white
                        px-2.5
                        py-0.5
                        text-xs
                        font-black
                        uppercase
                        tracking-wider
                      "
                    >
                      {item.year}
                    </span>

                    <h4 className="text-xl sm:text-2xl font-black text-black leading-tight">
                      {item.title}
                    </h4>

                    <p className="text-black/80 text-sm sm:text-base leading-relaxed font-medium">
                      {item.description}
                    </p>
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