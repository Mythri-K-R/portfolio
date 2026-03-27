import { data } from '../data'
import './Skills.css'

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <p className="section-label">Expertise</p>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with across the full development stack.</p>
        <div className="divider" style={{ margin: '2rem 0 3rem' }} />

        <div className="skills-grid">
          {data.skills.map((group) => (
            <div className="skill-group" key={group.category}>
              <h4 className="skill-group__label">{group.category}</h4>
              <div className="skill-group__tags">
                {group.items.map(item => (
                  <span className="skill-tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
