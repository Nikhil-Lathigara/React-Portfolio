import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
  <Navbar />

  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Services />
    <Contact />
  </main>

  <Footer />
</div>
  )
}

export default App