import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        relative
        overflow-hidden
        bg-[#F8F5F0]
        pt-32
        pb-20
        md:pt-40
        md:pb-28
      "
    >
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-6 h-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="border border-black" />
          ))}
        </div>
      </div>

      {/* Decorative Floating Blocks */}
      <div className="absolute top-24 right-12 w-24 h-24 bg-[#FFED00] border-4 border-black rotate-12 hidden lg:block shadow-[8px_8px_0px_#000]" />

      <div className="absolute bottom-20 left-10 w-16 h-16 bg-[#FF90E8] border-4 border-black -rotate-12 hidden lg:block shadow-[6px_6px_0px_#000]" />

      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-[#00C2FF] border-4 border-black rotate-6 hidden lg:block shadow-[4px_4px_0px_#000]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
              animate={{ opacity: 1, rotate: -3, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="
                inline-block
                bg-[#FF90E8]
                border-4
                border-black
                px-5
                py-2
                shadow-[6px_6px_0px_#000]
              "
            >
              <span className="font-black uppercase tracking-wide text-black">
                HELLO, I AM
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="
                  text-6xl
                  md:text-5xl
                  lg:text-[5rem]
                  leading-[0.9]
                  font-black
                  uppercase
                  tracking-[-0.05em]
                  text-black
                  typewriter
                "
              >
                NIKHIL
                <br />

                <span
                  className="
                    inline-block
                    bg-black
                    text-white
                    px-4
                    rotate-[-2deg]
                    typewriter
                  "
                >
                  LATHIGARA
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="
                  inline-block
                  bg-[#00C2FF]
                  border-4
                  border-black
                  px-5
                  py-3
                  shadow-[6px_6px_0px_#000]
                  rotate-[1deg]
                "
              >
                <h3
                  className="
                    text-lg
                    md:text-2xl
                    font-black
                    uppercase
                    text-black
                  "
                >
                  FULL STACK DEVELOPER + AI ENGINEER
                </h3>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="
                max-w-2xl
                text-lg
                md:text-xl
                leading-relaxed
                text-black
                font-semibold
              "
            >
              I build high-performance web applications, AI-powered products,
              scalable backend systems, and bold digital experiences that stand
              out from boring modern interfaces.
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {[
                {
                  text: "🚀 AVAILABLE FOR WORK",
                  color: "bg-[#00FF85]",
                },
                {
                  text: "🤖 AI SYSTEMS",
                  color: "bg-[#FFED00]",
                },
                {
                  text: "⚡ FULL STACK",
                  color: "bg-[#FF90E8]",
                },
              ].map((tag) => (
                <motion.div
                  key={tag.text}
                  whileHover={{
                    rotate: 2,
                    y: -4,
                  }}
                  className={`
                    ${tag.color}
                    border-4
                    border-black
                    px-4
                    py-2
                    shadow-[5px_5px_0px_#000]
                    font-black
                    uppercase
                    text-black
                    text-sm
                    cursor-default
                  `}
                >
                  {tag.text}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-5 pt-2"
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="
                  group
                  flex
                  items-center
                  bg-black
                  text-white
                  border-4
                  border-black
                  px-7
                  py-4
                  text-lg
                  font-black
                  uppercase
                  cursor-pointer
                  shadow-[8px_8px_0px_#FFED00]
                  hover:-translate-x-1
                  hover:-translate-y-1
                  hover:shadow-[12px_12px_0px_#FFED00]
                  transition-all
                  duration-150
                "
              >
                VIEW PROJECTS

                <FiArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="https://drive.google.com/file/d/1QRQZRCLKJd7VQWZ6i6spunQmRW1pss49/view?usp=sharing"
                download
                className="
                  flex
                  items-center
                  bg-white
                  text-black
                  border-4
                  border-black
                  px-7
                  py-4
                  text-lg
                  font-black
                  uppercase
                  shadow-[8px_8px_0px_#000]
                  hover:-translate-x-1
                  hover:-translate-y-1
                  hover:shadow-[12px_12px_0px_#000]
                  transition-all
                  duration-150
                "
              >
                DOWNLOAD CV

                <FiDownload className="ml-3" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Main Card */}
            <motion.div
              initial={{ scale: 0.9, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4 }}
              className="
                relative
                bg-white
                border-4
                border-black
                shadow-[14px_14px_0px_#000]
                p-5
              "
            >
              {/* Inner Frame */}
              <div
                className="
                  bg-[#FFED00]
                  border-4
                  border-black
                  h-[350px]
                  md:h-[500px]
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                "
              >
                <DotLottieReact
                  src="https://lottie.host/89bc1fa2-55e0-469a-9314-840d93414eb2/4XlKBs7tOJ.lottie"
                  loop
                  autoplay
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                whileHover={{
                  rotate: 3,
                  scale: 1.05,
                }}
                className="
                  absolute
                  -top-6
                  -left-6
                  bg-[#FF90E8]
                  border-4
                  border-black
                  px-5
                  py-3
                  shadow-[6px_6px_0px_#000]
                  font-black
                  uppercase
                  text-black
                "
              >
                10+ PROJECTS
              </motion.div>

              <motion.div
                whileHover={{
                  rotate: -3,
                  scale: 1.05,
                }}
                className="
                  absolute
                  -bottom-6
                  -right-6
                  bg-[#00FF85]
                  border-4
                  border-black
                  px-5
                  py-3
                  shadow-[6px_6px_0px_#000]
                  font-black
                  uppercase
                  text-black
                "
              >
                1.5+ YEARS
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;