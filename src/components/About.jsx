const SKILLS = [
  'C#',
  'ASP.NET MVC',
  'PostgreSQL',
  'SQL',
  'REST APIs',
  'Docker',
  'Git',
  'Java',
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="section__head reveal">
        <span className="section__kicker">About</span>
        <h2 className="section__title">A bit about me</h2>
      </div>

      <div className="about__grid">
        <div className="about__text reveal">
          <p>
            Back-End Developer with hands-on experience designing and
            maintaining applications using ASP.NET MVC in C#, and managing
            relational database systems. I specialize in PostgreSQL, database
            migrations, and building RESTful APIs that are well-documented and
            production-ready.
          </p>
          <p>
            I hold a Bachelor of Information Systems from BINUS University,
            where I specialized in Applied Database, graduating with a GPA of
            3.68 and High Merit predicate. I am eager to learn and grow in the
            modern technology industry as a reliable, versatile developer.
          </p>
        </div>

        <div className="about__skills">
          <h3 className="about__skills-title">Skills &amp; Tools</h3>
          <ul className="skills-grid">
            {SKILLS.map((skill, i) => (
              <li
                key={skill}
                className="skill reveal"
                style={{ '--reveal-index': i }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
