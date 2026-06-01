import { Link } from 'react-router-dom'
import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiYoutubeLine,
  RiTiktokLine,
  RiWhatsappLine,
  RiMailLine,
  RiMapPinLine,
  RiArrowRightUpLine,
} from 'react-icons/ri'
import { FOOTER_NAV_LINKS } from '../constants/navLinks'
import './Footer.css'

const SOCIALS = [
  { icon: <RiInstagramLine />, href: 'https://instagram.com/gmk.agencia', label: 'Instagram' },
  { icon: <RiTiktokLine />,    href: '#', label: 'TikTok' },
  { icon: <RiYoutubeLine />,   href: '#', label: 'YouTube' },
  { icon: <RiLinkedinBoxLine />, href: '#', label: 'LinkedIn' },
]

const SERVICES = [
  'Marketing 360',
  'Produção de Vídeo',
  'Fotografia',
  'Social Media',
  'Tráfego Pago',
  'Design Gráfico',
  'Estratégia Digital',
]

const CONTACT = [
  { icon: <RiWhatsappLine />, label: '(24) 99999-9999', href: 'https://wa.me/5524999999999' },
  { icon: <RiMailLine />,     label: 'contato@gmkagency.com', href: 'mailto:contato@gmkagency.com' },
  { icon: <RiInstagramLine />, label: '@gmk.agencia', href: 'https://instagram.com/gmk.agencia' },
  { icon: <RiMapPinLine />,   label: 'Resende, RJ', href: null },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-top">

          <div className="footer-brand">
            <Link to="/" className="footer-logo-wrap">
              <span className="footer-logo-crop">
                <img src="/Design sem nome (7).png" alt="GMK Digital" />
              </span>
            </Link>
            <p className="footer-desc">
              Marketing digital e produção audiovisual para marcas que
              querem crescer. Baseados em Resende, RJ. Atendimento em
              todo o Brasil.
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
            <span className="footer-col-title">Serviços</span>
            <ul>
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link to="/catalogo">{s}</Link>
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
              Fale com a equipe <RiArrowRightUpLine />
            </Link>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} GMK Digital. Todos os direitos reservados.
          </p>
          <p className="footer-tagline">Go Make Known</p>
        </div>

      </div>
    </footer>
  )
}
