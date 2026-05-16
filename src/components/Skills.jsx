import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  RiNextjsFill,
  RiReactjsFill,
  RiNodejsFill,
  RiTailwindCssFill,
  RiJavascriptFill,
} from "react-icons/ri";

import {
  SiPython,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiDocker,
  SiAmazon,
  SiRedis,
  SiPostgresql,
  SiOpenai,
  SiLangchain,
  SiGithub,
  SiFigma,
  SiPostman,
  SiClaude,
} from "react-icons/si";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "FRONTEND",
      color: "#FFED00",
      bg: "bg-[#FFED00]",
      skills: [
        {
          name: "React.js",
          icon: <RiReactjsFill />,
        },
        {
          name: "Next.js",
          icon: <RiNextjsFill />,
        },
        {
          name: "JavaScript",
          icon: <RiJavascriptFill />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
        },
        {
          name: "Tailwind",
          icon: <RiTailwindCssFill />,
        },
      ],
    },

    {
      title: "BACKEND",
      color: "#00C2FF",
      bg: "bg-[#00C2FF]",
      skills: [
        {
          name: "Python",
          icon: <SiPython />,
        },
        {
          name: "Node.js",
          icon: <RiNodejsFill />,
        },
        {
          name: "Express",
          icon: <SiExpress />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql />,
        }
      ],
    },

    {
      title: "AI",
      color: "#FF90E8",
      bg: "bg-[#FF90E8]",
      skills: [
        {
          name: "OpenAI",
          icon: <SiOpenai />,
        },
        {
          name: "LangChain",
          icon: <SiLangchain />,
        },
        {
          name : "Claude",
          icon: <SiClaude />,
        }
      ],
    },

    {
      title: "TOOLS",
      color: "#00FF85",
      bg: "bg-[#00FF85]",
      skills: [
                {
          name: "Docker",
          icon: <SiDocker />,
        },
        {
          name: "GitHub",
          icon: <SiGithub />,
        },
        {
          name: "Figma",
          icon: <SiFigma />,
        },
        {
          name: "Postman",
          icon: <SiPostman />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="
        relative
        py-20
        md:py-28
        bg-[#111111]
        overflow-hidden
      "
    >
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="grid grid-cols-6 h-full">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              className="border border-white"
            />
          ))}
        </div>
      </div>

      {/* HUGE BACKGROUND TEXT */}
      <div
        className="
          absolute
          top-10
          left-0
          text-[18vw]
          font-black
          uppercase
          leading-none
          text-white/[0.03]
          whitespace-nowrap
          pointer-events-none
        "
      >
        SKILLS STACK
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={
            inView
              ? {
                opacity: 1,
                y: 0,
              }
              : {}
          }
          transition={{
            duration: 0.5,
          }}
          className="mb-16 md:mb-24"
        >
          {/* LABEL */}
          <div
            className="
              inline-block
              bg-[#00FF85]
              border-4
              border-black
              px-4
              py-2
              shadow-[6px_6px_0px_#000]
              rotate-[-2deg]
              mb-6
            "
          >
            <span
              className="
                text-black
                font-black
                uppercase
                tracking-wide
              "
            >
              MY TOOLKIT
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-black
              uppercase
              leading-[0.9]
              tracking-[-0.06em]
              text-white
              mb-6
            "
          >
            SKILLS
            <br />

            <span
              className="
                inline-block
                bg-[#FFED00]
                text-black
                px-3
                rotate-[-2deg]
              "
            >
              & STACK
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              max-w-3xl
              text-lg
              md:text-2xl
              text-white/70
              font-medium
              leading-relaxed
            "
          >
            I build modern digital products using
            full-stack technologies, AI systems,
            scalable backend architecture, and
            high-performance frontend engineering.
          </p>
        </motion.div>

        {/* CATEGORIES */}
        <div className="space-y-10">
          {skillCategories.map(
            (category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={
                  inView
                    ? {
                      opacity: 1,
                      y: 0,
                    }
                    : {}
                }
                transition={{
                  delay: categoryIndex * 0.1,
                }}
                className="
                  border-4
                  border-black
                  bg-white
                  shadow-[10px_10px_0px_#000]
                  overflow-hidden
                "
              >
                {/* TOP BAR */}
                <div
                  className={`
                    ${category.bg}
                    border-b-4
                    border-black
                    px-5
                    md:px-8
                    py-5
                  `}
                >
                  <div
                    className="
                      flex
                      flex-col
                      md:flex-row
                      md:items-center
                      md:justify-between
                      gap-3
                    "
                  >
                    <h3
                      className="
                        text-3xl
                        md:text-5xl
                        font-black
                        uppercase
                        tracking-[-0.05em]
                        text-black
                      "
                    >
                      {category.title}
                    </h3>

                    <div
                      className="
                        text-xs
                        md:text-sm
                        font-black
                        uppercase
                        tracking-[0.25em]
                        text-black/70
                      "
                    >
                      {
                        category.skills.length
                      }{" "}
                      TECHNOLOGIES
                    </div>
                  </div>
                </div>

                {/* SKILLS GRID */}
                <div
                  className="
                    grid
                    grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-5
                  "
                >
                  {category.skills.map(
                    (skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={
                          inView
                            ? {
                              opacity: 1,
                              scale: 1,
                            }
                            : {}
                        }
                        transition={{
                          delay:
                            categoryIndex * 0.1 +
                            skillIndex * 0.05,
                        }}
                        whileHover={{
                          y: -8,
                          rotate: -2,
                        }}
                        className="
                          group
                          relative
                          border-r-4
                          border-b-4
                          border-black
                          min-h-[180px]
                          md:min-h-[220px]
                          p-5
                          md:p-6
                          flex
                          flex-col
                          justify-between
                          bg-white
                          hover:bg-black
                          transition-all
                          duration-200
                        "
                      >
                        {/* NUMBER */}
                        <span
                          className="
                            absolute
                            top-3
                            right-3
                            text-[10px]
                            md:text-xs
                            font-black
                            text-black/30
                            group-hover:text-white/30
                            uppercase
                          "
                        >
                          0
                          {skillIndex + 1}
                        </span>

                        {/* ICON */}
                        <div
                          className="
                            text-5xl
                            md:text-6xl
                            text-black
                            group-hover:text-white
                            transition-colors
                            duration-200
                          "
                        >
                          {skill.icon}
                        </div>

                        {/* TEXT */}
                        <div>
                          <h4
                            className="
                              text-xl
                              md:text-2xl
                              font-black
                              uppercase
                              leading-none
                              tracking-[-0.04em]
                              text-black
                              group-hover:text-white
                              transition-colors
                              duration-200
                            "
                          >
                            {skill.name}
                          </h4>

                          {/* BAR */}
                          <div
                            className="
                              mt-4
                              w-full
                              h-[8px]
                              bg-black/10
                              overflow-hidden
                            "
                          >
                            <motion.div
                              initial={{
                                width: 0,
                              }}
                              animate={
                                inView
                                  ? {
                                    width:
                                      "100%",
                                  }
                                  : {}
                              }
                              transition={{
                                duration: 0.8,
                                delay:
                                  skillIndex *
                                  0.08,
                              }}
                              className="h-full"
                              style={{
                                background:
                                  category.color,
                              }}
                            />
                          </div>
                        </div>

                        {/* DECORATIVE BLOCK */}
                        <div
                          className="
                            absolute
                            bottom-0
                            right-0
                            w-5
                            h-5
                          "
                          style={{
                            background:
                              category.color,
                          }}
                        />
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;