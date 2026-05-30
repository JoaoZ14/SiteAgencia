import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { RiMenu3Line, RiCloseLine, RiArrowRightLine } from 'react-icons/ri'
import { NAV_LINKS } from '../constants/navLinks'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const renderNavLink = (link) => {
    const isActive = link.to ? pathname === link.to : false
    const className = isActive ? 'nav-link-active' : undefined

    if (link.to) {
      return (
        <Link to={link.to} className={className} onClick={closeMenu}>
          {link.label}
        </Link>
      )
    }

    return (
      <a href={link.href} className={className} onClick={closeMenu}>
        {link.label}
      </a>
    )
  }

  return (
    <motion.nav
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="navbar-logo-crop">
            <img src="/Design sem nome (7).png" alt="GMK Digital" />
          </span>
        </Link>

        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>{renderNavLink(link)}</li>
          ))}
          <li>
            <a href="/#contato" className="navbar-cta">
              Fale com a GMK <RiArrowRightLine />
            </a>
          </li>
        </ul>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <RiMenu3Line />
        </button>
      </div>

      {createPortal(
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="navbar-mobile"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <button
                className="navbar-mobile-close"
                onClick={closeMenu}
                aria-label="Fechar menu"
              >
                <RiCloseLine />
              </button>
              <ul>
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>{renderNavLink(link)}</li>
                ))}
                <li>
                  <a href="/#contato" className="navbar-cta-mobile" onClick={closeMenu}>
                    Fale com a GMK <RiArrowRightLine />
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.nav>
  )
}
