import { motion } from 'framer-motion'
import './BrandStrip.css'

export default function BrandStrip() {
  return (
    <aside className="brand-strip" aria-hidden="true">
      <motion.p
        className="brand-strip-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      >
        <span className="brand-strip-em">G</span>o{' '}
        <span className="brand-strip-em">M</span>ake{' '}
        <span className="brand-strip-em">K</span>nown
      </motion.p>
    </aside>
  )
}
