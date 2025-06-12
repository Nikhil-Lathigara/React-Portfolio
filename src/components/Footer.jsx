import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    { title: "Links", items: [
      { name: "Home", to: "hero" },
      { name: "About", to: "about" },
      { name: "Skills", to: "skills" },
      { name: "Projects", to: "projects" },
      { name: "Contact", to: "contact" }
    ]},
    { title: "Services", items: [
      { name: "Web Development", to: "services" },
      { name: "Backend Development", to: "services" },
      { name: "Database Design", to: "services" },
      { name: "Responsive Design", to: "services" },
      { name: "Performance Optimization", to: "services" }
    ]},
    { title: "Contact", items: [
      { name: "Email: nikhilsoni1209@gmail.com", url: "mailto:nikhilsoni1209@gmail.com" },
      { name: "Jalgaon, Maharashtra", url: "#" },
      { name: "Phone: +91 72767-29541", url: "+917276729541" }
    ]}
  ]

  return (
    <footer className="bg-neutral-200 dark:bg-dark-900 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link 
              to="hero" 
              spy={true} 
              smooth={true} 
              duration={500} 
              className="cursor-pointer"
            >
              <div className="text-2xl font-bold mb-4 flex items-center">
                <span className="gradient-text">Dev</span>
                <span className="dark:text-white">Folio</span>
              </div>
            </Link>
            <p className="text-dark-500 dark:text-dark-300 mb-6">
              Creating beautiful, functional, and user-friendly digital experiences through clean code and modern design.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold mb-4 dark:text-white">{column.title}</h3>
              <ul className="space-y-2">
                {column.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    {item.to ? (
                      <Link
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a 
                        href={item.url} 
                        className="text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
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
        
        <div className="pt-8 border-t border-gray-200 dark:border-dark-700 text-center">
          <p className="text-dark-500 dark:text-dark-400 text-sm">
            © {currentYear} DevFolio. All rights reserved. Made with <FiHeart className="w-4 h-4 inline text-accent-500" /> by Nikhil Lathigara
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer