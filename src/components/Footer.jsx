function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__name">Elian Nathaniel</span>
        <span className="footer__copy">
          &copy; {year} — Built with React &amp; Vite
        </span>
      </div>
    </footer>
  )
}

export default Footer
