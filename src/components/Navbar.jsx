import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { RiArrowRightLine } from 'react-icons/ri'
import { NAV_LINKS } from '../constants/navLinks'
import { EASE_OUT } from '../utils/motion'
import './Navbar.css'

const navEnter = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: EASE_OUT } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: EASE_OUT } },
}

const linkStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
}

const linkItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
}

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
  const toggleMenu = () => setMenuOpen((open) => !open)

  const renderNavLink = (link) => {
    const isActive = pathname === link.to
    const className = isActive ? 'nav-link-active' : undefined

    return (
      <Link to={link.to} className={className} onClick={closeMenu}>
        {link.label}
      </Link>
    )
  }

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
              <Link to="/#contato" className="navbar-cta">
                Fale com a GMK <RiArrowRightLine aria-hidden="true" />
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className={`navbar-toggle${menuOpen ? ' is-open' : ''}`}
            onClick={toggleMenu}
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
                      Fale com a GMK <RiArrowRightLine aria-hidden="true" />
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
