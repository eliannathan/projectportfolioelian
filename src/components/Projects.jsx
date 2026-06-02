import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section__head reveal">
        <span className="section__kicker">Projects</span>
        <h2 className="section__title">Selected work</h2>
      </div>

      {projects.map((project, i) => (
        <article
          key={project.slug}
          className="project-card project-card--featured reveal"
          style={{ '--reveal-index': i }}
        >
          <div className="project-card__body">
            <span className="project-card__badge">Featured</span>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__desc">{project.tagline}</p>

            <ul className="tag-list">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>

            <div className="project-card__actions">
              <Link
                className="btn btn--primary"
                to={`/projects/${project.slug}`}
              >
                Details
              </Link>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Projects
