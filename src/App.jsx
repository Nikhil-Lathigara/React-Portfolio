import { useEffect } from 'react'
import { useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import { Skills } from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
// import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StarBackground from './components/StarBackground'

function App() {
  const { theme } = useTheme()

  useEffect(() => {
    // Apply theme class to HTML element for tailwind dark mode
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {theme === 'dark' && <StarBackground />}
      <Navbar />
      <main>
        
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App