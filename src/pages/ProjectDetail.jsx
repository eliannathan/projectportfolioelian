import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProject } from '../data/projects.js'

function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = getProject(slug)

  if (!project) {
    return (
      <div className="not-found">
        <p>Project not found.</p>
        <Link to="/" className="btn btn--ghost">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="project-detail">
      <div className="project-detail__inner">

        {/* Back nav */}
        <button className="project-detail__back" onClick={() => navigate(-1)}>
          <span className="project-detail__back-arrow" aria-hidden="true">&#8592;</span>
          Back
        </button>

        {/* Header */}
        <header className="project-detail__header reveal">
          <ul className="tag-list">
            {project.tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__tagline">{project.tagline}</p>

          <div className="project-detail__ctas">
            <a
              className="btn btn--primary"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              className="btn btn--ghost"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </header>

        {/* Screenshots */}
        <section className="project-detail__screenshots reveal">
          <h2 className="project-detail__section-title">Screenshots</h2>
          <div className="screenshots-grid">
            {project.screenshots.map((src, i) => (
              <div key={i} className="screenshot">
                <img
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  loading="lazy"
                  onError={(e) => {
                    const card = e.currentTarget.closest('.screenshot')
                    if (card) card.style.display = 'none'
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Description */}
        <section className="project-detail__about reveal">
          <h2 className="project-detail__section-title">About the Project</h2>
          <div className="project-detail__description">
            {project.description.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="project-detail__features reveal">
          <h2 className="project-detail__section-title">Key Features</h2>
          <ul className="features-list">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  )
}

export default ProjectDetail
