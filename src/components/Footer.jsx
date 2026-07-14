import { Link } from 'react-router-dom'
import {
  RiInstagramLine,
  RiWhatsappLine,
  RiMailLine,
  RiMapPinLine,
  RiArrowRightUpLine,
} from 'react-icons/ri'
import { FOOTER_NAV_LINKS } from '../constants/navLinks'
import { SERVICES } from '../data/site'
import './Footer.css'

const SOCIALS = [
  { icon: <RiInstagramLine />, href: 'https://instagram.com/gmk.agencia', label: 'Instagram' },
]

const CONTACT = [
  { icon: <RiWhatsappLine />, label: '(24) 98163-4937', href: 'https://wa.me/5524981634937' },
  { icon: <RiMailLine />, label: 'contato@gmkagency.com', href: 'mailto:contato@gmkagency.com' },
  { icon: <RiMapPinLine />, label: 'Resende, RJ', href: null },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">GMK<span>®</span></Link>
            <p className="footer-desc">
              Software house especializada em desenvolvimento sob medida.
              Construímos negócios através de tecnologia.
            </p>
            <div className="footer-socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer-social"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Navegação</span>
            <ul>
              {FOOTER_NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Soluções</span>
            <ul>
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <Link to="/#servicos">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Contato</span>
            <ul className="footer-contact-list">
              {CONTACT.map((c) => (
                <li key={c.label}>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer">
                      {c.icon} {c.label}
                    </a>
                  ) : (
                    <span>{c.icon} {c.label}</span>
                  )}
                </li>
              ))}
            </ul>
            <Link to="/#contato" className="footer-cta">
              Falar com especialista <RiArrowRightUpLine aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} GMK. Todos os direitos reservados.
          </p>
          <span className="footer-sign" aria-hidden="true">
            <span className="footer-sign-em">G</span>o{' '}
            <span className="footer-sign-em">M</span>ake{' '}
            <span className="footer-sign-em">K</span>nown
          </span>
        </div>
      </div>
    </footer>
  )
}
