import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiArrowUpRight,
  FiGithub,
} from "react-icons/fi";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState("all");

  const projects = [

    {
      title: "SMS Jewellers",
      subtitle: "PREMIUM ECOMMERCE",
      description:
        "Luxury jewellery ecommerce platform with authentication and admin dashboard.",
      image:
        "/images/project/jewellery.png",
      technologies: [
        "React.js",
        "MongoDB",
        "Node.js",
      ],
      category: "fullstack",
      liveLink:
        "https://sms-jewellery-house.vercel.app/",
      accent: "#FF90E8",
    },



    {
      title: "RAG Chatbot",
      subtitle: "DOCUMENT Q&A SYSTEM",
      description:
        "AI-powered document chatbot using RAG pipeline for accurate query responses from PDFs and URLs.",
      image:
        "/images/project/ragChatbot.png",
      technologies: [
        "Node.js",
        "Express",
        "Qdrant",
        "OpenAI",
      ],
      category: "genai",
      liveLink: "https://rag-chat-bot-self.vercel.app/",
      accent: "#8B5CF6",
    },

    {
      title: "AI Persona",
      subtitle: "MULTI-PERSONA CHATBOT",
      description:
        "Multi-persona AI chatbot with persona-specific response behavior and dynamic switching.",
      image:
        "/images/project/mentors-persona.jpg",
      technologies: [
        "React.js",
        "Node.js",
        "OpenAI",
      ],
      category: "genai",
      liveLink: "https://persona-bay-pi.vercel.app/",
      accent: "#F97316",
    },

    {
      title: "Cloud Family Salon",
      subtitle: "LUXURY SALON WEBSITE",
      description:
        "Full-featured luxury salon website with scroll-triggered animations and responsive image gallery.",
      image:
        "/images/project/salon.png",
      technologies: [
        "Next.js",
        "Tailwind",
        "AOS",
      ],
      category: "frontend",
      liveLink: "https://cloud-family-salon.vercel.app/",
      accent: "#FFD700",
    },
    {
      title: "Figma to Code",
      subtitle: "UI IMPLEMENTATION",
      description:
        "Pixel-perfect conversion of complex Figma designs to production-quality React.js code.",
      image:
        "/images/project/ttl.png",
      technologies: [
        "React.js",
        "Tailwind",
        "Framer Motion",
      ],
      category: "frontend",
      liveLink: "https://ttl-gold.vercel.app/",
      accent: "#06B6D4",
    },
    {
      title: "Shrinathji Solar Enterprises",
      subtitle: "Business WEBSITE",
      description:
        "Modern, responsive business website with custom animations and interactive features.",
      image:
        "/images/project/solar.png",
      technologies: [
        "React.js",
        "Tailwind",
        "Framer Motion",
      ],
      category: "frontend",
      liveLink: "https://shrinathji-solar.vercel.app/",
      accent: "#06B6D4",
    },
    {
      title: "DevInsight",
      subtitle: "AI CODEBASE INTELLIGENCE",
      description:
        "Full-stack AI platform with RAG pipeline for analyzing codebases using natural language queries.",
      image:
        "",
      technologies: [
        "Next.js",
        "Node.js",
        "OpenAI",
        "Qdrant",
      ],
      category: "genai",
      liveLink: "#",
      accent: "#FFED00",
    },

    {
      title: "PhotoGen",
      subtitle: "AI IMAGE GENERATION",
      description:
        "Real-time AI image generation platform using OpenAI and Gemini APIs.",
      image:
        "",
      technologies: [
        "React.js",
        "Node.js",
        "Express",
      ],
      category: "genai",
      liveLink: "#",
      accent: "#00C2FF",
    },
  ];

  const filters = [
    {
      name: "ALL",
      value: "all",
    },
    {
      name: "GEN AI",
      value: "genai",
    },
    {
      name: "FULL STACK",
      value: "fullstack",
    },
    {
      name: "FRONTEND",
      value: "frontend",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (p) => p.category === filter
        );

  return (
    <section
      ref={ref}
      className="
        relative
        py-20
        md:py-28
        bg-[#F8F5F0]
        overflow-hidden
      "
      id="projects"
    >
      {/* BACKGROUND TEXT */}
      <div
        className="
          absolute
          top-10
          left-0
          text-[18vw]
          leading-none
          font-black
          uppercase
          text-black/[0.04]
          whitespace-nowrap
          pointer-events-none
        "
      >
        SELECTED WORK
      </div>

      {/* DECORATIVE BLOCKS */}
      <div
        className="
          absolute
          top-32
          right-10
          w-20
          h-20
          bg-[#FFED00]
          border-4
          border-black
          rotate-12
          hidden
          lg:block
        "
      />

      <div
        className="
          absolute
          bottom-20
          left-10
          w-14
          h-14
          bg-[#00C2FF]
          border-4
          border-black
          -rotate-12
          hidden
          lg:block
        "
      />

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
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-10
            mb-16
          "
        >
          {/* LEFT */}
          <div className="max-w-3xl">
            {/* LABEL */}
            <div
              className="
                inline-block
                bg-[#FF90E8]
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
                FEATURED PROJECTS
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
                text-black
                mb-6
              "
            >
              SELECTED
              <br />

              <span
                className="
                  inline-block
                  bg-black
                  text-white
                  px-3
                  rotate-[-2deg]
                "
              >
                WORK
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                max-w-2xl
                text-lg
                md:text-2xl
                text-black/70
                font-medium
                leading-relaxed
              "
            >
              A collection of full-stack
              applications, AI products, and
              interactive digital experiences built
              with performance and bold visual
              identity in mind.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() =>
                  setFilter(f.value)
                }
                className={`
                  px-5
                  py-3
                  border-4
                  border-black
                  font-black
                  uppercase
                  text-sm
                  tracking-wide
                  transition-all
                  duration-150
                  ${
                    filter === f.value
                      ? "bg-black text-white shadow-[5px_5px_0px_#FFED00]"
                      : "bg-white text-black hover:bg-[#FFED00]"
                  }
                `}
              >
                {f.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* PROJECT GRID */}
<div
  className="
    grid
    grid-cols-1
    lg:grid-cols-2
    gap-6
    lg:gap-8
  "
>
  {filteredProjects.map((project, index) => (
    <motion.div
      key={project.id}
      initial={{
        opacity: 0,
        y: 40,
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
        delay: index * 0.08,
      }}
      whileHover={{
        y: -6,
      }}
      className={`
        group
        relative
        border-4
        border-black
        bg-white
        overflow-hidden
        shadow-[8px_8px_0px_#000]
        transition-all
        duration-200
        ${
          index % 2 === 0
            ? "lg:rotate-[-1deg]"
            : "lg:rotate-[1deg]"
        }
      `}
    >
      {/* PROJECT NUMBER */}
      <div
        className="
          absolute
          top-2
          right-3
          text-4xl
          md:text-6xl
          font-black
          text-black/[0.06]
          leading-none
          pointer-events-none
          z-10
        "
      >
        {project.id}
      </div>

      {/* IMAGE */}
      <div
        className="
          relative
          h-[180px]
          sm:h-[220px]
          md:h-[260px]
          overflow-hidden
          border-b-4
          border-black
        "
      >
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* CATEGORY BADGE */}
        <div
          className="
            absolute
            top-3
            left-3
            border-4
            border-black
            px-3
            py-1
            text-[10px]
            md:text-xs
            font-black
            uppercase
            shadow-[4px_4px_0px_#000]
          "
          style={{
            background: project.accent,
          }}
        >
          {project.subtitle}
        </div>

      </div>

      {/* CONTENT */}
      <div className="p-4 md:p-6">
        {/* TITLE */}
        <h3
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-black
            uppercase
            leading-[0.95]
            tracking-[-0.05em]
            text-black
            mb-3
          "
        >
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            text-sm
            md:text-base
            text-black/70
            leading-relaxed
            font-medium
            mb-5
            line-clamp-3
          "
        >
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                bg-black
                text-white
                px-2
                md:px-3
                py-1
                text-[10px]
                md:text-xs
                font-black
                uppercase
                tracking-wide
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* FOOTER */}
        <div
          className="
            flex
            items-center
            justify-between
            pt-4
            border-t-4
            border-black
          "
        >
          <span
            className="
              text-[10px]
              md:text-xs
              uppercase
              tracking-[0.25em]
              font-black
              text-black/40
            "
          >
           LIVE LINK
          </span>

          <div className="flex gap-2">
            <motion.a
              whileHover={{
                rotate: 5,
              }}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10
                h-10
                md:w-12
                md:h-12
                border-4
                border-black
                flex
                items-center
                justify-center
                bg-[#FFED00]
                text-black
                hover:bg-black
                hover:text-white
                transition-all
              "
            >
              <FiArrowUpRight />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Projects;