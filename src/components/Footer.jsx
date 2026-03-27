import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { data } from '../data'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__logo">MKR</span>
          <p className="footer__copy">
            Built with <Heart size={12} className="footer__heart" /> by Mythri K R · {new Date().getFullYear()}
          </p>
        </div>
        <div className="footer__socials">
          <a href={data.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href={data.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <a href={`mailto:${data.email}`} aria-label="Email"><Mail size={17} /></a>
        </div>
      </div>
    </footer>
  )
}
