import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import useScrollReveal from './hooks/useScrollReveal.js'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const attempt = () => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      // Small delay so the page has painted before scrolling
      const t = setTimeout(attempt, 80)
      return () => clearTimeout(t)
    }
  }, [location.hash])

  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  )
}

function App() {
  useScrollReveal()

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
