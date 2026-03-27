import { Trophy, Award, Star } from 'lucide-react'
import { data } from '../data'
import './Achievements.css'

export default function Achievements() {
  return (
    <section className="section achievements" id="achievements">
      <div className="container">
        <p className="section-label">Recognition</p>
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">Awards, certifications, and competitions I've participated in.</p>
        <div className="divider" style={{ margin: '2rem 0 3rem' }} />

        <div className="achievements__layout">
          {/* Awards */}
          <div className="achievements__col">
            <h3 className="achievements__col-title">
              <Trophy size={16} /> Awards & Recognition
            </h3>
            <div className="achievements__list">
              {data.achievements.map((a, i) => (
                <div className={`achievement-item ${a.highlight ? 'achievement-item--highlight' : ''}`} key={i}>
                  <div className="achievement-item__icon">
                    {a.highlight ? <Star size={15} /> : <Award size={15} />}
                  </div>
                  <div>
                    <p className="achievement-item__title">{a.title}</p>
                    <p className="achievement-item__detail">{a.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="achievements__col">
            <h3 className="achievements__col-title">
              <Award size={16} /> Certifications
            </h3>
            <div className="achievements__list">
              {data.certifications.map((c, i) => (
                <div className="cert-item" key={i}>
                  <div className="cert-item__badge">{c.issuer.slice(0, 2).toUpperCase()}</div>
                  <div>
                    <p className="cert-item__name">{c.name}</p>
                    <p className="cert-item__issuer">{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interests */}
            <h3 className="achievements__col-title" style={{ marginTop: '2.5rem' }}>
              Areas of Interest
            </h3>
            <div className="interests-tags">
              {data.interests.map((t, i) => (
                <span className="interest-tag" key={i}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
