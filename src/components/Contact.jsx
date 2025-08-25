import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus({ submitting: true, submitted: false, error: null })
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: null })
      // Reset form after successful submission
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after a delay
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: null })
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" ref={ref} className="py-16 md:py-24 bg-gray-300 dark:bg-dark-800 relative z-40">
      
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-lg font-semibold text-primary-500 mb-2">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Contact Me</h3>
          <p className="text-dark-500 dark:text-dark-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out using the form below or through my contact information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-8">
              <h4 className="text-xl font-semibold mb-6 dark:text-white">Send Me a Message</h4>
              
              {formStatus.submitted && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg">
                  Thank you for your message! I&apos;ll get back to you as soon as possible.
                </div>
              )}
              
              {formStatus.error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-lg">
                  {formStatus.error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-600 dark:text-dark-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-600 dark:text-dark-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-600 dark:text-dark-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-dark-600 dark:text-dark-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="input-field resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="btn-primary w-full md:w-auto"
                >
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-8 h-full">
              <h4 className="text-xl font-semibold mb-6 dark:text-white">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-dark-500 dark:text-dark-300 mb-1">Email</h5>
                    <a href="mailto:contact@example.com" className="text-dark-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      nikhilsoni1209@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center text-secondary-600 dark:text-secondary-400 mr-4">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-dark-500 dark:text-dark-300 mb-1">Location</h5>
                    <p className="text-dark-800 dark:text-white">
                      Jalgaon, Maharashtra
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center text-accent-600 dark:text-accent-400 mr-4">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-dark-500 dark:text-dark-300 mb-1">Phone</h5>
                    <a href="tel:+11234567890" className="text-dark-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      +91 7276729541
                    </a>
                  </div>
                </div>
                
                <div className="pt-6 mt-6 border-t border-gray-200 dark:border-dark-600">
                  <h5 className="text-sm font-medium text-dark-500 dark:text-dark-300 mb-4">Connect With Me</h5>
                  <div className="flex space-x-4">
                    <a 
                      href="http://github.com/Nikhil-Lathigara" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/nikhil-full-stack-developer/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-dark-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                    >
                      <FiLinkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={`whatsapp://send?text=${"Hello, I'd like to talk about..."}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      
                      className="w-10 h-10 bg-dark-800 hover:bg-blue-400 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact