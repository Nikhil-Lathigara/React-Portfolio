import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: "HOME", to: "hero", label: "01" },
    { name: "ABOUT", to: "about", label: "02" },
    { name: "SKILLS", to: "skills", label: "03" },
    { name: "PROJECTS", to: "projects", label: "04" },
    { name: "SERVICES", to: "services", label: "05" },
    { name: "CONTACT", to: "contact", label: "06" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((link) => link.to);

    const handleIntersection = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleIntersection);
    return () => window.removeEventListener("scroll", handleIntersection);
  }, []);

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          bg-white
          transition-all
          duration-200
          ${isScrolled ? "border-b-4 border-black shadow-none" : "border-b-2 border-black"}
        `}
      >
        {/* TICKER STRIP */}
        <div className="bg-black overflow-hidden border-b border-black">
          <motion.div
            className="flex items-center py-1 whitespace-nowrap"
            animate={{ x: [0, "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-[10px] font-mono text-white uppercase tracking-[0.3em] mx-8">
              ★ AVAILABLE FOR FREELANCE WORK ★ FULL STACK DEVELOPER ★ AI ENGINEER ★ BUILDING BOLD DIGITAL EXPERIENCES ★
            </span>
            <span className="text-[10px] font-mono text-white uppercase tracking-[0.3em] mx-8">
              ★ AVAILABLE FOR FREELANCE WORK ★ FULL STACK DEVELOPER ★ AI ENGINEER ★ BUILDING BOLD DIGITAL EXPERIENCES ★
            </span>
          </motion.div>
        </div>

        {/* MAIN NAVBAR - Control Panel Style */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* LOGO - Typography focused */}
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              className="group cursor-pointer flex items-center gap-4"
            >
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-black flex items-center justify-center">
                  <span className="text-white font-black text-lg lg:text-xl tracking-tighter">NL</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#FFED00] border border-black"></div>
              </div>

              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-black uppercase tracking-tight text-black leading-none">
                  Nikhil<span className="text-[#FFED00]">.</span>Lathigara
                </h1>
                <p className="text-[9px] font-mono uppercase tracking-[0.25em] text-black/60 mt-1">
                  Full Stack + AI Developer
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV - Editorial/Control Panel Style */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`
                    group
                    relative
                    cursor-pointer
                    px-4 py-2
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-wider
                    transition-all
                    duration-200
                    ${activeSection === link.to
                      ? "text-black bg-[#FFED00]"
                      : "text-black/70 hover:text-black hover:bg-gray-100"
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="font-mono text-[9px] opacity-50">{link.label}</span>
                    {link.name}
                  </span>
                  {activeSection === link.to && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 border-2 border-black"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA BUTTON */}
            <div className="hidden lg:block">
              <a
                href="mailto:nikhillathigara.work@gmail.com"
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-black
                  text-white
                  px-5
                  py-2.5
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-wider
                  hover:bg-[#FFED00]
                  hover:text-black
                  transition-colors
                  duration-150
                "
              >
                <span>Let's Talk</span>
                <span className="text-lg">→</span>
              </a>
            </div>

            {/* MOBILE BUTTON - Minimal */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="
                lg:hidden
                bg-black
                p-3
                hover:bg-[#FFED00]
                hover:text-black
                transition-colors
              "
            >
              {mobileMenuOpen ? (
                <FiX size={20} className="text-white" />
              ) : (
                <FiMenu size={20} className="text-white" />
              )}
            </button>
          </div>

          {/* Active Section Indicator - Underline */}
          {isScrolled && (
            <div className="hidden lg:block h-0.5 bg-black relative">
              <motion.div
                className="absolute h-full bg-[#FFED00]"
                initial={{ width: 0, left: 0 }}
                animate={{
                  width: "100%",
                  left: 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}
        </div>
      </header>

      {/* MOBILE MENU - Panel Style */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="
              fixed
              inset-0
              z-40
              bg-white
              pt-28
              px-6
              lg:hidden
            "
          >
            {/* Decorative Elements - Newspaper style */}
            <div className="absolute top-28 right-4 text-[80px] font-black text-black/5 leading-none">06</div>
            <div className="absolute bottom-32 left-2 text-[50px] font-black text-black/5 leading-none rotate-[-90deg]">PAGE</div>

            <div className="space-y-0 relative z-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      flex
                      items-center
                      gap-3
                      py-4
                      border-b-2
                      border-black
                      ${activeSection === link.to ? "bg-[#FFED00]" : ""}
                    `}
                  >
                    <span className="font-mono text-xs font-bold text-black/40">{link.label}</span>
                    <span className="text-lg font-black uppercase text-black">
                      {link.name}
                    </span>
                    <span className="ml-auto text-lg text-black/20">→</span>
                  </Link>
                </motion.div>
              ))}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <a
                  href="mailto:nikhillathigara.work@gmail.com"
                  onClick={() => setMobileMenuOpen(false)}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-black
                    text-white
                    py-3
                    text-sm
                    font-bold
                    uppercase
                  "
                >
                  Let's Work Together
                  <span className="text-base">→</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;