const EDUCATION = [
  {
    degree: 'Bachelor of Information Systems',
    school: 'BINUS University',
    period: '2020 – 2024',
    details: [
      'Stream: Applied Database',
      'GPA: 3.68 — High Merit',
      'Certified Internship at PT Kalbe Farma Tbk as Data Engineer (Feb 2023 – Feb 2024)',
    ],
  },
]

function Education() {
  return (
    <section id="education" className="section education">
      <div className="section__head reveal">
        <span className="section__kicker">Education</span>
        <h2 className="section__title">Academic Background</h2>
      </div>

      <div className="timeline">
        {EDUCATION.map((edu, i) => (
          <article
            key={edu.degree}
            className="timeline-item timeline-item--education reveal"
            style={{ '--reveal-index': i }}
          >
            <div className="timeline-item__meta">
              <span className="timeline-item__period">{edu.period}</span>
              <span className="timeline-item__company">{edu.school}</span>
            </div>
            <div className="timeline-item__body">
              <h3 className="timeline-item__title">{edu.degree}</h3>
              <ul className="timeline-item__bullets">
                {edu.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
