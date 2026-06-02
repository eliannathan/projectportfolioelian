const JOBS = [
  {
    title: 'Back-End Developer',
    company: 'PT Treemas Solusi Utama',
    period: 'Apr 2024 – Present',
    bullets: [
      'Build and maintain production-grade backend applications using ASP.NET MVC and C#.',
      'Own database migrations and schema changes on PostgreSQL production environments.',
      'Design, build, and document RESTful APIs; support frontend developers with Postman-based API guides.',
      'Write complex SQL queries to monitor, validate, and troubleshoot live API transactions.',
      'Improve system performance through targeted debugging, refactoring, and code reviews.',
      'Maintain standards across version control, code quality, and deployment workflows.',
    ],
  },
  {
    title: 'Data Platform Engineer Intern',
    company: 'PT Kalbe Farma Tbk',
    period: '2023 – 2024',
    bullets: [
      'Built and maintained BI dashboards on Tableau Server for internal business stakeholders.',
      'Automated infrastructure monitoring pipelines using Docker, Prometheus, and Grafana.',
      'Managed SQL-based access control and user permissions in pgAdmin across enterprise BI systems.',
      'Improved Tableau report performance by consolidating data sources and optimizing extraction schedules.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section__head reveal">
        <span className="section__kicker">Experience</span>
        <h2 className="section__title">Work History</h2>
      </div>

      <div className="timeline">
        {JOBS.map((job, i) => (
          <article
            key={job.title}
            className="timeline-item reveal"
            style={{ '--reveal-index': i }}
          >
            <div className="timeline-item__meta">
              <span className="timeline-item__period">{job.period}</span>
              <span className="timeline-item__company">{job.company}</span>
            </div>
            <div className="timeline-item__body">
              <h3 className="timeline-item__title">{job.title}</h3>
              <ul className="timeline-item__bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
