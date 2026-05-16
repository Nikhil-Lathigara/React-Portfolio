import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false });

    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true });
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false });
      }, 4000);
    }, 1500);
  };

  return (
    <section id="contact" ref={ref} className="py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-black leading-tight mb-4">
            Let's<span className="text-[#FFED00]">.</span>Talk
          </h2>

          <p className="text-base md:text-lg font-bold text-black/60 max-w-lg">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* LEFT - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {formStatus.submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#00FF85] border-2 border-black p-4 mb-4"
              >
                <span className="font-black text-sm uppercase text-black">
                  ✓ Message sent successfully!
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-black text-sm uppercase text-black mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white border-2 border-black px-4 py-3 text-sm font-bold text-black placeholder:text-black/30 focus:outline-none focus:bg-[#FFED00]"
                />
              </div>

              <div>
                <label className="block font-black text-sm uppercase text-black mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white border-2 border-black px-4 py-3 text-sm font-bold text-black placeholder:text-black/30 focus:outline-none focus:bg-[#FFED00]"
                />
              </div>

              <div>
                <label className="block font-black text-sm uppercase text-black mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="w-full bg-white border-2 border-black px-4 py-3 text-sm font-bold text-black placeholder:text-black/30 focus:outline-none focus:bg-[#FFED00]"
                />
              </div>

              <div>
                <label className="block font-black text-sm uppercase text-black mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-white border-2 border-black px-4 py-3 text-sm font-bold text-black placeholder:text-black/30 resize-none focus:outline-none focus:bg-[#FFED00]"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={formStatus.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black text-white border-2 border-black px-6 py-4 text-sm font-black uppercase shadow-[4px_4px_0px_#FFED00] hover:shadow-[6px_6px_0px_#FFED00] hover:-translate-y-1 transition-all disabled:opacity-50"
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message →'}
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            {/* Contact Card */}
            <div className="bg-[#FFED00] border-2 border-black p-5">
              <h3 className="text-xl font-black uppercase text-black mb-5">Get In Touch</h3>

              <div className="space-y-4">
                <a href="mailto:nikhillathigara.work@gmail.com" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-black flex items-center justify-center">
                    <FiMail className="text-white text-lg" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase text-black/50">Email</span>
                    <span className="text-sm font-black text-black group-hover:underline">
                      nikhillathigara.work@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black flex items-center justify-center">
                    <FiMapPin className="text-white text-lg" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase text-black/50">Location</span>
                    <span className="text-sm font-black text-black">Airoli, Navi Mumbai, Maharashtra</span>
                  </div>
                </div>

                <a href="tel:+917276729541" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-black flex items-center justify-center">
                    <FiPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase text-black/50">Phone</span>
                    <span className="text-sm font-black text-black group-hover:underline">
                      +91 72767 29541
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-2 border-black p-5">
              <h3 className="text-xl font-black uppercase text-black mb-4">Connect</h3>

              <div className="grid grid-cols-3 gap-2">
                <a href="https://github.com/Nikhil-Lathigara" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-black text-white py-2.5 font-black uppercase text-xs hover:bg-[#FFED00] hover:text-black transition-colors">
                  <FiGithub className="text-sm" />GitHub
                </a>
                <a href="https://www.linkedin.com/in/nikhil-full-stack-developer/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-black text-white py-2.5 font-black uppercase text-xs hover:bg-[#FFED00] hover:text-black transition-colors">
                  <FiLinkedin className="text-sm" />LinkedIn
                </a>
                <a href="https://wa.me/917276729541" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-black text-white py-2.5 font-black uppercase text-xs hover:bg-[#FFED00] hover:text-black transition-colors">
                  <FaWhatsapp className="text-sm" />WhatsApp
                </a>
              </div>
            </div>

            {/* Quote */}
            <div className="relative pl-4 border-l-2 border-black">
              <p className="text-base font-black text-black italic">
                Every great project starts with a conversation.
              </p>
              <span className="font-mono text-xs text-black/50 mt-2 block">— Nikhil</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;