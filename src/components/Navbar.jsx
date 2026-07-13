import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { RiArrowRightLine } from 'react-icons/ri'
import { NAV_LINKS } from '../constants/navLinks'
import { EASE_OUT } from '../utils/motion'
import './Navbar.css'

const navEnter = {
  hidden: { y: -16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: EASE_OUT } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: EASE_OUT } },
}

const linkStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.06 } },
}

const linkItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE_OUT },
  },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const renderNavLink = (link) => (
    <Link to={link.to} onClick={closeMenu}>
      {link.label}
    </Link>
  )

  return (
    <>
      <motion.nav
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        variants={navEnter}
        initial="hidden"
        animate="visible"
        aria-label="Navegação principal"
      >
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo" onClick={closeMenu} aria-label="GMK — início">
            GMK
            <span className="navbar-logo-mark" aria-hidden="true">/SOFTWARE</span>
          </Link>

          <ul className="navbar-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>{renderNavLink(link)}</li>
            ))}
            <li>
              <Link to="/#contato" className="navbar-cta">
                Orçamento <RiArrowRightLine aria-hidden="true" />
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className={`navbar-toggle${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <span className="navbar-toggle-bar" />
            <span className="navbar-toggle-bar" />
            <span className="navbar-toggle-bar" />
          </button>
        </div>
      </motion.nav>

      {createPortal(
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="navbar-mobile"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="navbar-mobile-backdrop" onClick={closeMenu} aria-hidden="true" />
              <motion.nav
                className="navbar-mobile-panel"
                variants={linkStagger}
                initial="hidden"
                animate="visible"
                aria-label="Menu mobile"
              >
                <ul>
                  {NAV_LINKS.map((link) => (
                    <motion.li key={link.label} variants={linkItem}>
                      {renderNavLink(link)}
                    </motion.li>
                  ))}
                  <motion.li variants={linkItem}>
                    <Link to="/#contato" className="navbar-cta-mobile" onClick={closeMenu}>
                      Solicitar orçamento <RiArrowRightLine aria-hidden="true" />
                    </Link>
                  </motion.li>
                </ul>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
