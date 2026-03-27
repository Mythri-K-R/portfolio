import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  MapPin,
  Download,
} from "lucide-react";
import { data } from "../data";
import "./Hero.css";

export default function Hero() {
  const baseUrl = import.meta.env.BASE_URL;
  const profileImageUrl = `${baseUrl}profile.jpeg`;
  const resumePath = (data.resume || "resume.pdf").replace(/^\/+/, "");
  const resumeHref = data.resume?.startsWith("http")
    ? data.resume
    : `${baseUrl}${resumePath}`;

  return (
    <section className="hero" id="about">
      <div className="hero__bg-grid" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p
            className="hero__eyebrow animate-fadeup"
            style={{ animationDelay: "0.1s" }}
          >
            <MapPin size={13} /> {data.location}
          </p>

          <h1
            className="hero__name animate-fadeup"
            style={{ animationDelay: "0.2s" }}
          >
            {data.name}
          </h1>

          <p
            className="hero__title animate-fadeup"
            style={{ animationDelay: "0.3s" }}
          >
            {data.title}
          </p>

          <p
            className="hero__tagline animate-fadeup"
            style={{ animationDelay: "0.4s" }}
          >
            {data.tagline}
          </p>

          <div
            className="hero__actions animate-fadeup"
            style={{ animationDelay: "0.5s" }}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href={resumeHref} download className="btn btn-outline">
              <Download size={15} /> Download Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>

          <div
            className="hero__social animate-fadeup"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href={data.github}
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${data.email}`}
              className="hero__social-link"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div
          className="hero__avatar animate-fadein"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="hero__avatar-ring">
            <img
              src={profileImageUrl}
              alt={`${data.name} profile`}
              className="hero__avatar-photo"
            />
          </div>
          <div className="hero__avatar-badge">
            <span className="hero__status-dot" />
            Open to opportunities
          </div>
        </div>
      </div>

      <a
        href="#education"
        className="hero__scroll animate-fadeup"
        style={{ animationDelay: "0.8s" }}
      >
        <ArrowDown size={16} />
        <span>Scroll</span>
      </a>
    </section>
  );
}
