import { useState, useEffect } from "react";
import "./Navbar.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setMenuOpen(false);
    setActive(href);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <a
          href="#about"
          className="navbar__logo"
          onClick={() => handleClick("#about")}
        >
          Mythri
        </a>

        <ul className="navbar__links">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`navbar__link ${active === l.href ? "navbar__link--active" : ""}`}
                onClick={() => handleClick(l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="navbar__burger"
          onClick={() => setMenuOpen((m) => !m)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="navbar__mobile-link"
              onClick={() => handleClick(l.href)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
