import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      text: "Working with John was an absolute pleasure. His technical expertise and attention to detail resulted in a product that exceeded our expectations. He was communicative, responsive, and delivered on time."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLabs",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      text: "John helped us bring our vision to life with his exceptional development skills. His ability to understand our business needs and translate them into a functional, beautiful website was impressive."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthMedia",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      text: "The website John developed for us has significantly improved our conversion rates. His expertise in both frontend and backend development created a seamless user experience that our customers love."
    },
    {
      id: 4,
      name: "David Kim",
      role: "UX Designer",
      company: "DesignHub",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      text: "As a designer, I appreciate developers who can bring my designs to life exactly as envisioned. John did that and more, adding thoughtful interactions and ensuring the site was fully responsive."
    },
    {
      id: 5,
      name: "Olivia Taylor",
      role: "E-commerce Manager",
      company: "ShopStyle",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      text: "Our e-commerce platform needed a complete overhaul, and John delivered a solution that was not only beautiful but also significantly improved our site's performance and user experience."
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section id="testimonials" ref={ref} className="py-16 md:py-24 bg-gray-50 dark:bg-dark-900 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-lg font-semibold text-primary-500 mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Loved By Developers</h3>
          <p className="text-dark-500 dark:text-dark-300 max-w-3xl mx-auto">
            Here's what people I've worked with have to say about my services and collaboration.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Background decorative elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary-500/20 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent-500/20 rounded-full"></div>
            
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-dark-700 shadow-xl p-8 md:p-10">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: currentIndex === index ? 1 : 0,
                    x: currentIndex === index ? 0 : 100,
                    position: currentIndex === index ? 'relative' : 'absolute'
                  }}
                  transition={{ duration: 0.5 }}
                  className={`${currentIndex === index ? 'block' : 'hidden'}`}
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover rounded-full border-4 border-primary-100 dark:border-primary-900"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-lg md:text-xl text-dark-600 dark:text-dark-200 italic mb-6">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <h4 className="text-lg font-semibold dark:text-white">{testimonial.name}</h4>
                        <p className="text-dark-500 dark:text-dark-300">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white dark:bg-dark-700 shadow-md hover:bg-primary-50 dark:hover:bg-dark-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </button>
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      currentIndex === index 
                        ? 'bg-primary-600 dark:bg-primary-400' 
                        : 'bg-gray-300 dark:bg-dark-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white dark:bg-dark-700 shadow-md hover:bg-primary-50 dark:hover:bg-dark-600 transition-colors"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials