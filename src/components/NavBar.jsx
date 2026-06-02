import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function NavBar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id) => {
    setOpen(false)
    if (location.pathname === '/') {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate(`/#${id}`)
    }
  }

  const goHome = () => {
    setOpen(false)
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner">
        <button className="navbar__brand" onClick={goHome}>
          Elian Nathaniel
        </button>

        <ul className="navbar__links">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button onClick={() => goTo(link.id)}>{link.label}</button>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`navbar__mobile ${open ? 'is-open' : ''}`}>
        {LINKS.map((link) => (
          <button key={link.id} onClick={() => goTo(link.id)}>
            {link.label}
          </button>
        ))}
      </div>
    </header>
  )
}

export default NavBar
