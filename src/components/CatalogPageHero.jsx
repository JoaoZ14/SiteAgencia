import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiBookOpenLine, RiArrowRightLine } from 'react-icons/ri'
import { CATALOG_INTRO } from '../data/catalog'
import CatalogPdfButton from './CatalogPdfButton'
import './CatalogPageHero.css'

export default function CatalogPageHero() {
  return (
    <header className="catalog-page-hero">
      <div className="container catalog-page-hero-inner">
        <motion.nav
          className="catalog-breadcrumb"
          aria-label="Navegação"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">Início</Link>
          <RiArrowRightLine aria-hidden="true" />
          <span aria-current="page">Catálogo</span>
        </motion.nav>

        <motion.div
          className="catalog-page-hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <span className="label catalog-page-label">
            <RiBookOpenLine aria-hidden="true" />
            {CATALOG_INTRO.label}
          </span>
          <h1 className="catalog-page-title">{CATALOG_INTRO.title}</h1>
          <p className="catalog-page-lead">{CATALOG_INTRO.lead}</p>
          <CatalogPdfButton className="catalog-pdf-btn--ghost" />
        </motion.div>
      </div>
    </header>
  )
}
