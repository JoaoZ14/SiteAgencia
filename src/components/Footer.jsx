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
import './Footer.css'

const SOCIALS = [
  { icon: <RiInstagramLine />, href: 'https://instagram.com/gmkdigital', label: 'Instagram' },
  { icon: <RiTiktokLine />,    href: '#', label: 'TikTok' },
  { icon: <RiYoutubeLine />,   href: '#', label: 'YouTube' },
  { icon: <RiLinkedinBoxLine />, href: '#', label: 'LinkedIn' },
]

const NAV_LINKS = [
  { label: 'Início',    href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre',    href: '#sobre' },
  { label: 'Contato',  href: '#contato' },
]

const SERVICES = [
  'Produção de Vídeo',
  'Fotografia',
  'Social Media',
  'Tráfego Pago',
  'Design Gráfico',
  'Estratégia Digital',
]

const CONTACT = [
  { icon: <RiWhatsappLine />, label: '(24) 99999-9999', href: 'https://wa.me/5524999999999' },
  { icon: <RiMailLine />,     label: 'contato@gmkdigital.com.br', href: 'mailto:contato@gmkdigital.com.br' },
  { icon: <RiInstagramLine />, label: '@gmkdigital', href: 'https://instagram.com/gmkdigital' },
  { icon: <RiMapPinLine />,   label: 'Resende, RJ', href: null },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#inicio" className="footer-logo-wrap">
              <span className="footer-logo-crop">
                <img src="/Design sem nome (7).png" alt="GMK Digital" />
              </span>
            </a>
            <p className="footer-desc">
              Conteúdo visual, estratégia e performance para marcas
              que querem ser vistas, de Resende, RJ, para onde precisar.
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

          {/* Navigation */}
          <div className="footer-col">
            <span className="footer-col-title">Navegação</span>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <span className="footer-col-title">Serviços</span>
            <ul>
              {SERVICES.map((s) => (
                <li key={s}><a href="#servicos">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
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
            <a href="#contato" className="footer-cta">
              Fale com a equipe <RiArrowRightUpLine />
            </a>
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
