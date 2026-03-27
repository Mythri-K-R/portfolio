import {
  GraduationCap,
  MapPin,
  Calendar,
  BookOpen,
  School,
} from "lucide-react";
import { data } from "../data";
import "./Education.css";

const icons = [GraduationCap, BookOpen, School];

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <p className="section-label">Background</p>
        <h2 className="section-title">Education</h2>
        <div className="divider" style={{ marginBottom: "3rem" }} />

        <div className="edu-timeline">
          {data.education.map((edu, i) => {
            const Icon = icons[i] || GraduationCap;
            return (
              <div className="edu-card" key={i}>
                <div className="edu-card__icon">
                  <Icon size={24} />
                </div>
                <div className="edu-card__body">
                  <h3 className="edu-card__degree">{edu.degree}</h3>
                  <p className="edu-card__institution">{edu.institution}</p>
                  <div className="edu-card__meta">
                    <span>
                      <MapPin size={13} /> {edu.location}
                    </span>
                    {edu.period && (
                      <span>
                        <Calendar size={13} /> {edu.period}
                      </span>
                    )}
                    {edu.detail && <span className="tag">{edu.detail}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
