import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiYoutubeLine,
  RiTiktokLine,
} from 'react-icons/ri'
import './Footer.css'

const SOCIALS = [
  { icon: <RiInstagramLine />, href: 'https://instagram.com/gmkdigital', label: 'Instagram' },
  { icon: <RiTiktokLine />, href: '#', label: 'TikTok' },
  { icon: <RiYoutubeLine />, href: '#', label: 'YouTube' },
  { icon: <RiLinkedinBoxLine />, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#inicio" className="footer-logo">
            GMK<span>Digital</span>
          </a>
          <p>Agência de marketing digital. Resende, RJ.</p>
        </div>

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

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} GMK Digital
        </p>
      </div>
    </footer>
  )
}
