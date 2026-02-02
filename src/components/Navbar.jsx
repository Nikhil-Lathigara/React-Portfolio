import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState("hero");

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Services", to: "services" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-dark-900/80 backdrop-blur-lg border-b border-white/10 shadow-2xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer group flex items-center space-x-3"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ rotate: 5, scale: 1.1 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
              <img
                src="/images/project/user.png"
                alt="Logo"
                className="relative w-12 h-12 rounded-full border-2 border-white/10 object-cover"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none dark:text-white">
                DEV<span className="gradient-text">FOLIO</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-2 py-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActiveSegment(link.to)}
                className="relative px-5 py-2 text-sm font-semibold cursor-pointer transition-colors duration-300 text-white/70 hover:text-white"
              >
                {activeSegment === link.to && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href={`mailto:nikhilsoni1209@gmail.com`}
              className="bg-white text-dark-900 px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all active:scale-95 cursor-pointer"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 m-4 p-6 bg-dark-900/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-6 py-4 rounded-2xl text-lg font-bold text-white/70 hover:text-white hover:bg-white/5 transition-all"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                 <a
                  href={`mailto:nikhilsoni1209@gmail.com`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-center rounded-2xl font-bold shadow-lg"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

