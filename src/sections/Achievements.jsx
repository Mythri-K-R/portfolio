import { Trophy, Award, Star } from "lucide-react";
import { data } from "../data";
import "./Achievements.css";

const awardImageLinks = {
  "Top Performer": [
    { label: "View 2024", file: "mini_anveshana_2024.jpg" },
    { label: "View 2025", file: "mini_anveshana_2025.jpg" },
  ],
  "Top 5": [{ label: "View", file: "ideastorm.jpg" }],
  Participant: [{ label: "View", file: "fusion_techathon.jpg" }],
};

const certificationImages = {
  "Introduction to Machine Learning": "intro_to_ml.jpg",
  "Python for Data Science": "python_for_ds.jpg",
  "Introduction to Python": "intro_to_python.jpg",
};

export default function Achievements() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="section achievements" id="achievements">
      <div className="container">
        <p className="section-label">Recognition</p>
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">
          Awards, certifications, and competitions I've participated in.
        </p>
        <div className="divider" style={{ margin: "2rem 0 3rem" }} />

        <div className="achievements__layout">
          {/* Awards */}
          <div className="achievements__col">
            <h3 className="achievements__col-title">
              <Trophy size={16} /> Awards & Recognition
            </h3>
            <div className="achievements__list">
              {data.achievements.map((a, i) => {
                const imageLinks = (awardImageLinks[a.title] || []).map(
                  (item) => ({
                    label: item.label,
                    url: `${baseUrl}${item.file}`,
                  }),
                );

                return (
                  <div
                    className={`achievement-item ${a.highlight ? "achievement-item--highlight" : ""}`}
                    key={i}
                  >
                    <div className="achievement-item__icon">
                      {a.highlight ? <Star size={15} /> : <Award size={15} />}
                    </div>
                    <div className="achievement-item__content">
                      <p className="achievement-item__title">{a.title}</p>
                      <p className="achievement-item__detail">{a.detail}</p>
                    </div>
                    {imageLinks.length > 0 && (
                      <div className="achievement-item__media">
                        {imageLinks.map((item) => (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="achievement-item__view"
                            key={item.url}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div className="achievements__col">
            <h3 className="achievements__col-title">
              <Award size={16} /> Certifications
            </h3>
            <div className="achievements__list">
              {data.certifications.map((c, i) => {
                const imageFile = certificationImages[c.name];
                const imageUrl = imageFile ? `${baseUrl}${imageFile}` : null;

                return (
                  <div className="cert-item" key={i}>
                    <div className="cert-item__badge">
                      {c.issuer.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="cert-item__content">
                      <p className="cert-item__name">{c.name}</p>
                      <p className="cert-item__issuer">{c.issuer}</p>
                    </div>
                    {imageUrl && (
                      <div className="cert-item__media">
                        <a
                          href={imageUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="cert-item__view"
                        >
                          View
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Interests */}
            <h3
              className="achievements__col-title"
              style={{ marginTop: "2.5rem" }}
            >
              Areas of Interest
            </h3>
            <div className="interests-tags">
              {data.interests.map((t, i) => (
                <span className="interest-tag" key={i}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
