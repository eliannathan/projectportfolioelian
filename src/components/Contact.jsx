function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact__inner reveal">
        <span className="section__kicker">Contact</span>
        <h2 className="section__title">Let&apos;s Work Together</h2>
        <p className="contact__line">
          Open to freelance projects and collaborations.
        </p>

        <div className="contact__actions">
          <a className="btn btn--primary" href="mailto:eliannathaniel4@gmail.com">
            Email Me
          </a>
          <a
            className="btn btn--ghost"
            href="https://linkedin.com/in/elian-nathaniel-593808252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn btn--ghost"
            href="https://github.com/eliannathan"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
