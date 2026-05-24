import { motion } from 'framer-motion'
import { RiArrowRightLine, RiArrowDownLine } from 'react-icons/ri'
import './Hero.css'

const line = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80"
          />
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
            alt=""
            aria-hidden="true"
          />
        </picture>
        <div className="hero-overlay" />
      </div>

      <div className="container hero-container">

        {/* Label + tags */}
        <motion.div
          className="hero-top"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <span className="hero-eyebrow">GMK Digital — Agência de Marketing</span>
        </motion.div>

        {/* Main headline — each line animates independently */}
        <h1 className="hero-title" aria-label="Da criação ao resultado.">
          <motion.span className="hero-line" custom={1} variants={line} initial="hidden" animate="visible">
            Da criação
          </motion.span>
          <motion.span className="hero-line hero-line--accent" custom={2} variants={line} initial="hidden" animate="visible">
            ao resultado.
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="hero-sub"
          custom={3}
          variants={line}
          initial="hidden"
          animate="visible"
        >
          Conteúdo visual e estratégia digital para marcas
          que querem crescer de verdade.
        </motion.p>

        {/* Divider + CTAs */}
        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="hero-divider" />
          <div className="hero-cta">
            <a href="#contato" className="btn-primary">
              Fale com a gente <RiArrowRightLine />
            </a>
            <a href="#servicos" className="btn-ghost">
              Ver serviços
            </a>
          </div>
        </motion.div>

      </div>

      {/* Location tag — bottom right */}
      <motion.span
        className="hero-location"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Resende, RJ
      </motion.span>

      <a href="#servicos" className="hero-scroll" aria-label="Rolar para baixo">
        <RiArrowDownLine />
      </a>
    </section>
  )
}
