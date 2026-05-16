import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  FiMonitor,
  FiServer,
  FiDatabase,
  FiSearch,
  FiCode,
  FiCpu,
  FiArrowUpRight,
} from "react-icons/fi";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <FiMonitor />,
      title: "FULL STACK APPLICATIONS",
      description:
        "Modern responsive applications with scalable frontend architecture and robust backend solutions.",
      price: "STARTS AT $200",
      color: "#FFED00",
      bg: "bg-[#FFED00]",
      features: [
        "Frontend",
        "Backend",
        "APIs",
        "Deployment",
      ],
    },

    {
      icon: <FiCpu />,
      title: "AI SYSTEMS",
      description:
        "AI integrations, RAG pipelines, embeddings, and intelligent workflows.",
      price: "STARTS AT $150 - $500",
      color: "#FF90E8",
      bg: "bg-[#FF90E8]",
      features: [
        "OpenAI",
        "Gemini",
        "LangChain",
      ],
    },
    {
      icon: <FiSearch />,
      title: "SEO OPTIMIZATION",
      description:
        "Performance optimization and Core Web Vitals improvements.",
      price: "STARTS AT $50 - $200",
      color: "#8B5CF6",
      bg: "bg-[#8B5CF6]",
      features: [
        "Lighthouse",
        "SEO",
        "Lazy Loading",
      ],
    },
    {
      icon: <FiCode />,
      title: "CLEAN CODE",
      description:
        "Maintainable architecture with scalable engineering standards.",
      price: "INCLUDED",
      color: "#FF7A00",
      bg: "bg-[#FF7A00]",
      features: [
        "Testing",
        "DocUmentation",
        "Code Reviews"
      ],
    },
  ];

  return (
    <section
      id="services"
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
          right-0
          text-[18vw]
          leading-none
          font-black
          uppercase
          text-white/[0.03]
          whitespace-nowrap
          pointer-events-none
        "
      >
        SERVICES
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <motion.div
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
                bg-[#FFED00]
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
                WHAT I OFFER
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
              MY
              <br />

              <span
                className="
                  inline-block
                  bg-white
                  text-black
                  px-3
                  rotate-[-2deg]
                "
              >
                SERVICES
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                max-w-2xl
                text-lg
                md:text-2xl
                text-white/70
                font-medium
                leading-relaxed
              "
            >
              End-to-end development from frontend
              engineering to AI-powered backend
              systems and scalable digital products.
            </p>
          </div>

          {/* SIDE LABEL */}
          <div
            className="
              hidden
              lg:flex
              flex-col
              items-end
              gap-3
            "
          >
            <span
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/40
                font-black
              "
            >
              CREATIVE ENGINEERING
            </span>

            <div
              className="
                w-24
                h-3
                bg-[#00FF85]
                border-2
                border-black
              "
            />
          </div>
        </motion.div>

        {/* SERVICES LAYOUT */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                y: -8,
              }}
              className={`
                group
                relative
                overflow-hidden
                border-4
                border-black
                bg-white
                shadow-[10px_10px_0px_#000]
                ${index % 2 === 0
                  ? "rotate-[-1deg]"
                  : "rotate-[1deg]"
                }
              `}
            >
              {/* TOP STRIP */}
              <div
                className="h-5 border-b-4 border-black"
                style={{
                  background: service.color,
                }}
              />

              {/* NUMBER */}
              <div
                className="
                  absolute
                  top-6
                  right-5
                  text-5xl
                  font-black
                  text-black/[0.06]
                  pointer-events-none
                "
              >
                0{index + 1}
              </div>

              <div className="p-6 md:p-8">
                {/* ICON */}
                <div
                  className={`
                    ${service.bg}
                    w-16
                    h-16
                    border-4
                    border-black
                    shadow-[5px_5px_0px_#000]
                    flex
                    items-center
                    justify-center
                    text-3xl
                    text-black
                    mb-6
                    group-hover:rotate-[-8deg]
                    transition-all
                  `}
                >
                  {service.icon}
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-3xl
                    md:text-4xl
                    font-black
                    uppercase
                    leading-[0.95]
                    tracking-[-0.05em]
                    text-black
                    mb-4
                  "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-base
                    md:text-lg
                    text-black/70
                    leading-relaxed
                    font-medium
                    mb-6
                  "
                >
                  {service.description}
                </p>

                {/* FEATURES */}
                <div className="space-y-3 mb-8">
                  {service.features.map(
                    (feature) => (
                      <div
                        key={feature}
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <div
                          className="
                            w-3
                            h-3
                            border-2
                            border-black
                          "
                          style={{
                            background:
                              service.color,
                          }}
                        />

                        <span
                          className="
                            text-sm
                            md:text-base
                            font-black
                            uppercase
                            tracking-wide
                            text-black
                          "
                        >
                          {feature}
                        </span>
                      </div>
                    )
                  )}
                </div>

                {/* FOOTER */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    pt-5
                    border-t-4
                    border-black
                  "
                >
                  {/* PRICE */}
                  <div
                    className={`
                      ${service.bg}
                      border-4
                      border-black
                      px-4
                      py-2
                      text-xs
                      md:text-sm
                      font-black
                      uppercase
                      shadow-[4px_4px_0px_#000]
                    `}
                  >
                    {service.price}
                  </div>

                  {/* CTA */}
                  <motion.a
                  href="mailto:nikhillathigara.work@gmail.com"
                    whileHover={{
                      rotate: 8,
                    }}
                    className="
                      w-12
                      h-12
                      border-4
                      border-black
                      bg-black
                      text-white
                      flex
                      items-center
                      justify-center
                      hover:bg-[#FFED00]
                      hover:text-black
                      transition-all
                    "
                  >
                    <FiArrowUpRight />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BIG CTA SECTION */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="
            mt-20
            border-4
            border-black
            bg-[#FFED00]
            shadow-[12px_12px_0px_#000]
            overflow-hidden
          "
        >
          <div
            className="
              grid
              lg:grid-cols-2
            "
          >
            {/* LEFT */}
            <div
              className="
                p-8
                md:p-12
                border-b-4
                lg:border-b-0
                lg:border-r-4
                border-black
              "
            >
              <div
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  font-black
                  text-black/60
                  mb-5
                "
              >
                START A PROJECT
              </div>

              <h3
                className="
                  text-4xl
                  md:text-6xl
                  font-black
                  uppercase
                  leading-[0.9]
                  tracking-[-0.05em]
                  text-black
                  mb-6
                "
              >
                LET'S BUILD
                <br />
                SOMETHING
                <br />
                BOLD.
              </h3>

              <p
                className="
                  text-lg
                  md:text-xl
                  text-black/70
                  font-medium
                  leading-relaxed
                  max-w-lg
                "
              >
                Open for freelance work, product
                collaborations, AI integrations, and
                full-stack development projects.
              </p>
            </div>

            {/* RIGHT */}
            <div
              className="
                flex
                items-center
                justify-center
                p-8
                md:p-12
              "
            >
              <motion.a
                whileHover={{
                  x: -5,
                  y: -5,
                }}
                href="mailto:nikhillathigara.work@gmail.com"
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  w-full
                  md:w-auto
                  bg-black
                  text-white
                  border-4
                  border-black
                  px-8
                  md:px-12
                  py-5
                  text-lg
                  md:text-xl
                  font-black
                  uppercase
                  shadow-[10px_10px_0px_#fff]
                  hover:shadow-[14px_14px_0px_#fff]
                  transition-all
                "
              >
                LET'S WORK TOGETHER

                <FiArrowUpRight className="text-2xl" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;