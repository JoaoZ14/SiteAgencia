import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiWhatsappLine } from 'react-icons/ri'
import './MobileStickyCta.css'

const WHATSAPP_URL =
  'https://wa.me/5524981634937?text=Olá,%20vim%20pelo%20site%20da%20GMK%20e%20gostaria%20de%20falar%20sobre%20um%20projeto%20de%20software.'

export default function MobileStickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('inicio')
    if (!hero) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="mobile-sticky-cta"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={WHATSAPP_URL}
            className="mobile-sticky-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiWhatsappLine aria-hidden="true" />
            Falar com especialista
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
