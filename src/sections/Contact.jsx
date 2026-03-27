import { Mail, Github, Linkedin, Phone, MapPin, Send } from 'lucide-react'
import { data } from '../data'
import './Contact.css'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <p className="section-label">Say Hello</p>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm currently open to internship extensions, full-time roles, and freelance projects.
          Feel free to reach out!
        </p>
        <div className="divider" style={{ margin: '2rem 0 3rem' }} />

        <div className="contact__layout">
          {/* Info */}
          <div className="contact__info">
            <div className="contact__info-list">
              <a href={`mailto:${data.email}`} className="contact__info-item">
                <div className="contact__info-icon"><Mail size={18} /></div>
                <div>
                  <p className="contact__info-label">Email</p>
                  <p className="contact__info-value">{data.email}</p>
                </div>
              </a>
              <a href={`tel:${data.phone}`} className="contact__info-item">
                <div className="contact__info-icon"><Phone size={18} /></div>
                <div>
                  <p className="contact__info-label">Phone</p>
                  <p className="contact__info-value">{data.phone}</p>
                </div>
              </a>
              <div className="contact__info-item">
                <div className="contact__info-icon"><MapPin size={18} /></div>
                <div>
                  <p className="contact__info-label">Location</p>
                  <p className="contact__info-value">{data.location}</p>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              <a href={data.github} target="_blank" rel="noreferrer" className="contact__social">
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a href={data.linkedin} target="_blank" rel="noreferrer" className="contact__social">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            className="contact__form"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.target
              const name = form.name.value
              const email = form.email.value
              const message = form.message.value
              window.location.href = `mailto:${data.email}?subject=Hello from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${email}`
            }}
          >
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" type="text" placeholder="Mythri K R" required />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Your Email</label>
                <input id="email" name="email" type="email" placeholder="you@email.com" required />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Hi Mythri, I'd love to connect..." required />
            </div>
            <button type="submit" className="btn btn-primary contact__submit">
              <Send size={15} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
