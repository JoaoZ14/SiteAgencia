import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { RiMenu3Line, RiCloseLine, RiArrowRightLine } from 'react-icons/ri'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <motion.nav
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-inner">
        <a href="#inicio" className="navbar-logo" onClick={closeMenu}>
          GMK<span>Digital</span>
        </a>

        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#contato" className="navbar-cta">
              Fale Conosco <RiArrowRightLine />
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
                  <li key={link.label}>
                    <a href={link.href} onClick={closeMenu}>
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#contato" className="navbar-cta-mobile" onClick={closeMenu}>
                    Fale Conosco <RiArrowRightLine />
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
