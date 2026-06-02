function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__orb hero__orb--1" />
        <span className="hero__orb hero__orb--2" />
        <span className="hero__grid" />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">Full-Stack Developer</p>
        <h1 className="hero__name">Elian Nathaniel</h1>
        <p className="hero__tagline">
          I build full-stack web apps and AI-powered products — from database to polished interface.
        </p>

        <div className="hero__actions">
          <button className="btn btn--primary" onClick={() => scrollTo('projects')}>
            View My Work
          </button>
          <button className="btn btn--ghost" onClick={() => scrollTo('contact')}>
            Contact Me
          </button>
          <a
            className="btn btn--ghost"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Résumé
          </a>
        </div>
      </div>

      <button
        className="hero__scroll-cue"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About"
      >
        <span className="hero__scroll-label">Scroll</span>
        <span className="hero__scroll-line" />
      </button>
    </section>
  )
}

export default Hero
