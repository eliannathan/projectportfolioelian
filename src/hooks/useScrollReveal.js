import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Reset all reveal elements to hidden on route change
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.remove('is-visible')
    })

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'))
      return
    }

    // Small delay so the new page's DOM is fully painted before observing
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.reveal')
      if (!els.length) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
            } else {
              entry.target.classList.remove('is-visible')
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      )

      els.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }, 50)

    return () => clearTimeout(timer)
  }, [pathname])
}
