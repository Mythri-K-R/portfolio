import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { data } from "../data";
import "./Projects.css";

const filters = ["All", "Full Stack", "Web App", "Mobile", "ML / AI"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? data.projects
      : data.projects.filter((p) => p.type === active);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <p className="section-label">Work</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of things I've built — from full-stack platforms to mobile
          apps and ML models.
        </p>
        <div className="divider" style={{ margin: "2rem 0 2rem" }} />

        <div className="projects__filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${active === f ? "filter-btn--active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project) => (
            <div className="project-card" key={project.name}>
              <div className="project-card__top">
                <div className="project-card__meta">
                  <span className="tag">{project.type}</span>
                  <span className="project-card__period">{project.period}</span>
                </div>
                <div className="project-card__links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__icon-link"
                    aria-label="GitHub"
                  >
                    <Github size={16} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__icon-link"
                      aria-label="Live"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-card__name">{project.name}</h3>
              <p className="project-card__subtitle">{project.subtitle}</p>

              <ul className="project-card__bullets">
                {project.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="project-card__stack">
                {project.stack.slice(0, 4).map((s) => (
                  <span className="project-card__stack-tag" key={s}>
                    {s}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className="project-card__stack-tag project-card__stack-more">
                    +{project.stack.length - 4}
                  </span>
                )}
              </div>

              <div className="project-card__actions">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__action-btn"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__action-btn"
                  >
                    View Code <Github size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
