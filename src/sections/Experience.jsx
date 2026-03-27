import { Briefcase, ExternalLink, MapPin, Calendar } from 'lucide-react'
import { data } from '../data'
import './Experience.css'

export default function Experience() {
  const { internship } = data
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <p className="section-label">Work</p>
        <h2 className="section-title">Internship Experience</h2>
        <div className="divider" style={{ marginBottom: '3rem' }} />

        <div className="exp-card">
          <div className="exp-card__header">
            <div className="exp-card__icon">
              <Briefcase size={24} />
            </div>
            <div className="exp-card__title-block">
              <h3 className="exp-card__role">{internship.role}</h3>
              <a href={internship.companyUrl} target="_blank" rel="noreferrer" className="exp-card__company">{internship.company} ↗</a>
            </div>
            <div className="exp-card__meta">
              <span><MapPin size={13} /> {internship.location}</span>
              <span><Calendar size={13} /> {internship.period}</span>
            </div>
          </div>

          <ul className="exp-card__bullets">
            {internship.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          <div className="exp-card__clients">
            <p className="exp-card__clients-label">Client Projects Delivered</p>
            <div className="exp-card__client-list">
              {internship.clientProjects.map((p, i) => (
                <a key={i} href={p.url} target="_blank" rel="noreferrer" className="exp-card__client">
                  <span>{p.name}</span>
                  <ExternalLink size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
