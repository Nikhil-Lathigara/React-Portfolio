import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMonitor, FiServer, FiDatabase, FiSmartphone, FiRefreshCw, FiSearch } from 'react-icons/fi'
import { useState } from 'react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [flippedIndex, setFlippedIndex] = useState(null)

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index)
  }

  const services = [
    {
      icon: <FiMonitor className="w-8 h-8" />,
      title: "Web Development",
      description: "Creating responsive and dynamic websites using modern frontend technologies like React and Next.js.",
      color: "primary"
    },
    {
      icon: <FiServer className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Express and RESTful APIs.",
      color: "secondary"
    },
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: "Database Design",
      description: "Designing efficient database structures and implementing data management solutions with MongoDB.",
      color: "accent"
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Creating websites that provide optimal viewing experience across a wide range of devices.",
      color: "green"
    },
    {
      icon: <FiRefreshCw className="w-8 h-8" />,
      title: "Website Maintenance",
      description: "Regular updates, monitoring, and maintenance to keep your website running smoothly.",
      color: "yellow"
    },
    {
      icon: <FiSearch className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Improving website speed, performance, and SEO to enhance user experience and search rankings.",
      color: "rose"
    }
  ]


  const getColorClasses = (color) => {
    const colorMap = {
      primary: "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border-primary-200 dark:border-primary-800/50",
      secondary: "bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 border-secondary-200 dark:border-secondary-800/50",
      accent: "bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 border-accent-200 dark:border-accent-800/50",
      green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800/50",
      yellow: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800/50",
      rose: "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800/50"
    }
    return colorMap[color] || colorMap.primary
  }

  return (
    <section id="services" ref={ref} className="py-4 md:py-12  bg-gray-100 dark:bg-dark-900 relative z-40">
     
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-lg font-semibold text-primary-500 mb-2">What I Offer</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">My Services</h3>
          <p className="text-dark-500 dark:text-dark-300 max-w-3xl mx-auto">
            I provide a wide range of services to help businesses and individuals establish a strong online presence. Here are the main services I offer:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-80 cursor-pointer group"
              style={{ perspective: '1000px' }}
              onClick={() => handleFlip(index)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-gpu ${
                  flippedIndex === index ? 'rotate-y-180' : ''
                }`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: flippedIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front Face */}
                <div 
                  className="absolute w-full h-full p-6 bg-white  gradient-text rounded-xl shadow-lg border border-gray-200 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className={`w-16 h-16 mb-4 rounded-lg flex items-center justify-center border-2 ${getColorClasses(service.color)} transition-transform duration-300 group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white text-center">{service.title}</h4>
                  <p className="text-sm text-gray-100 text-center opacity-75">Click to know more...</p>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                  </div>
                </div>

                {/* Back Face */}
                <div 
                  className="absolute w-full h-full p-6 bg-white dark:bg-dark-700 rounded-xl shadow-lg border border-gray-200 flex items-center justify-center"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center mx-auto ${getColorClasses(service.color)}`}>
                      {service.icon}
                    </div>
                    <p className="text-white text-center leading-relaxed">{service.description}</p>
                    <p className="text-xs text-gray-100 mt-4">Click to flip back</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  )
}



export default Services;

