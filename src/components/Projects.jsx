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
      title: "DevInsight",
      subtitle: "AI CODEBASE INTELLIGENCE",
      description:
        "Chat with your codebase. Ask natural questions about architecture, bugs, or dependencies — DevInsight surfaces answers in seconds by indexing your entire repo with a RAG pipeline.",
      image:
        "images/project/devinsights.png",
      technologies: [
        "Next.js",
        "Node.js",
        "Redis",
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
        "Turn text into stunning visuals in real time. PhotoGen harnesses OpenAI and Gemini to generate production-ready images from a simple prompt.",
      image:
        "images/project/photogen.png",
      technologies: [
        "React.js",
        "Node.js",
        "Gemini API",
        "OpenAI API",
      ],
      category: "genai",
      liveLink: "https://photo-gen1.netlify.app/",
      accent: "#00C2FF",
    },
    {
      title: "SMS Jewellers",
      subtitle: "ECOMMERCE + GROWTH ENGINE",
      description:
        "From browse to brilliance — a luxury jewellery ecommerce platform engineered for growth. SEO, AEO, and GEO optimized with best-in-class frontend and backend practices for speed, visibility, and conversions.",
      image:
        "/images/project/jewellery.png",
      technologies: [
        "React.js",
        "MongoDB",
        "Node.js",
        "Redis",
        "SEO",
        "AEO",
        "GEO",
        "Content Writing",
        "Core Web Vitals",
        "Frontend Best Practices",
        "Backend Best Practices"
      ],
      category: "fullstack",
      liveLink:
        "https://www.sonimuljijewels.in/",
      accent: "#FF90E8",
    },



    {
      title: "RAG Chatbot",
      subtitle: "DOCUMENT Q&A SYSTEM",
      description:
        "Upload a PDF, drop a URL, ask anything. RAG Chatbot turns your documents into an intelligent Q&A system that answers with accuracy and context.",
      image:
        "/images/project/ragChatbot.png",
      technologies: [
        "Node.js",
        "Express",
        "Redis",
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
        "One chatbot, infinite personalities. AI Persona lets users switch between expert mentors — each with a unique tone and knowledge base — perfect for guided learning and dynamic conversations.",
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
        "Book your glow-up. Cloud Family Salon is a luxury brand experience with cinematic scroll animations, a stunning gallery, and seamless browsing — because every salon deserves a digital storefront as polished as its services.",
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
        "Designs don't ship themselves. Figma to Code transforms pixel-perfect Figma comps into production-ready React code — zero fidelity loss, full responsiveness, and Framer Motion polish.",
      image:
        "/images/project/ttl.png",
      technologies: [
        "React.js",
        "Tailwind",
        "Framer Motion",
      ],
      category: "frontend",
      liveLink: "https://ttl-gold.vercel.app/",
      accent: "#10B981",
    },
    {
      title: "Shrinathji Solar Enterprises",
      subtitle: "Business WEBSITE",
      description:
        "Power your business with clean energy — and a clean website. A modern, animated brand presence that shines as bright as solar technology, built to inform, inspire, and convert.",
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
  title: "Photography Portfolio",
      subtitle: "Creative Showcase",
      description:
        "Let the work speak. A minimalist, immersive portfolio that puts every pixel where it belongs — on the photography. Dynamic galleries, butter-smooth transitions, zero distractions.",
      image:
        "/images/project/photographerPortfolio.png",
      technologies: [
        "React.js",
        "Tailwind",
        "Framer Motion",
      ],
      category: "frontend",
      liveLink: "https://photographer-portfolio-brown-zeta.vercel.app/",
      accent: "#FF69B4",
}
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