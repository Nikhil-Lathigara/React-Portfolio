import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-20 pb-12 md:pt-32 md:pb-20 bg-gray-100 dark:bg-dark-800 overflow-hidden relative z-40"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      <div className="section-container relative z-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <motion.h2
                className="text-lg md:text-xl font-medium text-primary-600 dark:text-primary-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Hello, I am
              </motion.h2>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 2.5 }}
              >
                <span className="gradient-text">Nikhil</span>{" "}
                <span className="dark:text-white">Lathigara</span>
              </motion.h1>
              <motion.h3
                className="text-2xl md:text-3xl text-dark-600 dark:text-dark-200 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Full-Stack Web Developer
              </motion.h3>
            </div>

            <motion.p
              className="text-lg text-dark-500 dark:text-dark-300 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              MERN stack wizard fusing{" "}
              <span className="gradient-text">
                React.js, Next.js, Tailwind Css, Node.js and MongoDB
              </span>{" "}
              into sleek, high-performing apps, from E-commerce powerhouses,
              admin dashboards to chat apps with real-time punch.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-primary cursor-pointer text-sm font-medium"
              >
                View Projects <FiArrowRight className="ml-2" />
              </Link>
              <a href="https://drive.google.com/file/d/1xTnK6CR-8zjq-lYzMEpzJ6o9EE-NuNCD/view?usp=drivesdk" className="btn-secondary" download>
                Download Resume <FiDownload className="ml-2" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative z-50">
              <motion.div
                className="w-full h-80 md:h-96 lg:h-[500px] rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 overflow-hidden flex items-center justify-center"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 1.0 }}
              >
                <DotLottieReact
                  src="https://lottie.host/89bc1fa2-55e0-469a-9314-840d93414eb2/4XlKBs7tOJ.lottie"
                  loop
                  autoplay
                  alt="Developer Profile"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800/50 to-transparent"></div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 0.4, 0.7],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -top-6 -left-6 w-40 h-40 bg-accent-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.4, 0.7],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
