import { motion } from "framer-motion";
import { useState } from "react";
import { RiNextjsFill, RiReactjsFill, RiNodejsFill, RiTailwindCssFill, RiHtml5Fill, RiCss3Fill, RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: "HTML", icon: <RiHtml5Fill size={72}/>, level: 95, color: "from-orange-400 to-red-500", category: "Frontend" },
    { name: "CSS", icon: <RiCss3Fill size={72}/>, level: 90, color: "from-blue-400 to-blue-600", category: "Frontend" },
    { name: "JavaScript", icon: <RiJavascriptFill size={72}/>, level: 88, color: "from-yellow-400 to-orange-500", category: "Frontend" },
    { name: "React", icon: <RiReactjsFill size={72}/>, level: 92, color: "from-cyan-400 to-blue-500", category: "Frontend" },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill size={72}/>, level: 85, color: "from-teal-400 to-cyan-500", category: "Frontend" },
    { name: "Next.js", icon: <RiNextjsFill size={72}/>, level: 80, color: "from-gray-400 to-gray-600", category: "Frontend" },
    { name: "Node.js", icon: <RiNodejsFill size={72}/>, level: 85, color: "from-green-400 to-green-600", category: "Backend" },
    { name: "Express.js", icon: <SiExpress size={72}/>, level: 82, color: "from-purple-400 to-purple-600", category: "Backend" },
    { name: "MongoDB", icon: <SiMongodb  size={72}/>
      , level: 78, color: "from-green-500 to-green-700", category: "Database" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="skills" className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-dark-800 sticky z-20 -top-[65vh] lg:-top-36 overflow-hidden">
      

      <div className="max-w-7xl mx-auto ">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            The tools and technologies I wield to craft digital experiences
          </p>
        </motion.div>

        {/* Creative floating grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="relative"
        >
          {/* Central orbit visualization */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-80 h-80 border border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute top-10 left-10 w-60 h-60 border border-blue-500/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>
          </div>

          {/* Skills grid with creative positioning */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.1, 
                  y: -15,
                  rotateY: 10,
                  zIndex: 10
                }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className={`relative group cursor-pointer ${index % 2 === 0 ? 'lg:mt-8' : ''} ${index % 3 === 0 ? 'md:mt-4' : ''}`}
              >
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: `${index * 0.5}s` }}
                  className="relative"
                >
                  {/* Card with glassmorphism effect */}
                  <div className={`relative bg-gradient-to-br ${skill.color} p-0.5 rounded-2xl overflow-hidden`}>
                    <div className="bg-slate-900/90 backdrop-blur-xl rounded-2xl p-6 h-full transition-all duration-500 group-hover:bg-slate-800/90">
                      {/* Skill icon with dynamic sizing */}
                      <div className="text-center mb-4">
                        
                          <div className="lg:ml-12 ml-6">
                          {skill.icon}
                          </div>
                        <h3 className="text-white font-bold text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">
                          {skill.name}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {skill.category}
                        </p>
                      </div>

                      {/* Hover effect particles */}
                      {hoveredSkill === skill.name && (
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-white rounded-full"
                              initial={{
                                x: "50%",
                                y: "50%",
                                opacity: 0,
                              }}
                              animate={{
                                x: `${Math.random() * 100}%`,
                                y: `${Math.random() * 100}%`,
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-50`} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};