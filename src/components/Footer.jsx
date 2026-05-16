import { Link } from "react-scroll";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      items: [
        { name: "Home", to: "hero" },
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "projects" },
        { name: "Services", to: "services" },
      ],
    },
    {
      title: "Services",
      items: [
        { name: "Web Development", to: "services" },
        { name: "AI Integration", to: "services" },
        { name: "Backend Dev", to: "services" },
      ],
    },
    {
      title: "Contact",
      items: [
        { name: "nikhillathigara.work@gmail.com", url: "mailto:nikhillathigara.work@gmail.com" },
        { name: "Airoli, Navi Mumbai, Maharashtra", url: "#" },
        { name: "+91 72767 29541", url: "tel:+917276729541" },
      ],
    },
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Nikhil-Lathigara", icon: <FiGithub size={14} /> },
    { name: "LinkedIn", url: "https://linkedin.com/in/nikhil-lathigara", icon: <FiLinkedin size={14} /> },
    { name: "Email", url: "mailto:nikhillathigara.work@gmail.com", icon: <FiMail size={14} /> },
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-1/2 left-0 w-[200%] -translate-y-1/2">
          <div className="whitespace-nowrap animate-marquee">
            <span className="text-[8vw] md:text-[10vw] font-black uppercase leading-none">
              NIKHIL LATHIGARA — FULL STACK — AI ENGINEER —
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#FFED00]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 md:py-12">
        {/* Giant Text */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-none">
            <span className="text-transparent stroke-white stroke-1">Let's</span>
            <br />
            <span className="text-[#FFED00]">Connect</span>
          </h2>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-black uppercase tracking-wider mb-4 text-[#FFED00] border-b border-white/20 pb-2">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    {item.to ? (
                      <Link
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                        className="text-white/50 hover:text-[#FFED00] font-bold text-xs uppercase tracking-wide transition-colors cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        href={item.url}
                        className="text-white/50 hover:text-[#FFED00] font-bold text-xs uppercase tracking-wide transition-colors"
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-4 py-2 font-black uppercase text-xs hover:bg-[#FFED00] transition-colors"
            >
              {social.icon}
              <span className="hidden sm:inline">{social.name}</span>
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/40 font-bold text-xs uppercase tracking-wider">
              © {currentYear} DevFolio. All rights reserved.
            </p>
            <p className="text-white/40 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
              Made with <span className="text-[#FFED00]">♥</span> by <span className="text-white">Nikhil</span>
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className="bg-[#FFED00] text-black border-2 border-black px-4 py-2 font-black uppercase text-xs shadow-[3px_3px_0px_#fff] hover:shadow-[4px_4px_0px_#fff] hover:-translate-y-1 transition-all"
        >
          ↑ Top
        </Link>
      </div>
    </footer>
  );
};

export default Footer;