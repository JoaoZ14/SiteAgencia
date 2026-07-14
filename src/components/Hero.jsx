import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  RiArrowRightLine,
  RiCodeSSlashLine,
  RiSmartphoneLine,
  RiRobot2Line,
} from 'react-icons/ri'
import BrandStrip from './BrandStrip'
import './Hero.css'

const CAPS = [
  { icon: <RiCodeSSlashLine />, label: 'Web' },
  { icon: <RiSmartphoneLine />, label: 'Mobile' },
  { icon: <RiRobot2Line />, label: 'Automação' },
]

const EASE = [0.25, 1, 0.5, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE },
  }),
}

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-heading">
      <span className="hero-grid" aria-hidden="true" />
      <span className="hero-watermark" aria-hidden="true">GMK</span>

      <div className="container hero-container">
        <div className="hero-copy">
          <motion.p
            className="hero-brand"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            GMK
            <span className="hero-brand-mark">/SOFTWARE</span>
          </motion.p>

          <motion.p
            className="hero-kicker"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.04}
          >
            Software house — Resende, BR
          </motion.p>

          <motion.h1
            className="hero-title"
            id="hero-heading"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            Software que
            <br />
            impulsiona
            <br />
            <span className="hero-title-em">empresas.</span>
          </motion.h1>

          <motion.p
            className="hero-sub"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.18}
          >
            Plataformas, sistemas e apps sob medida para empresas que precisam
            crescer com tecnologia — do Sul Fluminense ao Brasil.
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.26}
          >
            <Link to="/#contato" className="btn-primary">
              Solicitar orçamento
              <RiArrowRightLine aria-hidden="true" />
            </Link>
            <Link to="/#servicos" className="btn-ghost">
              Ver soluções
            </Link>
          </motion.div>

          <motion.ul
            className="hero-caps"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.34}
          >
            {CAPS.map((cap) => (
              <li key={cap.label}>
                <span className="hero-cap-icon" aria-hidden="true">{cap.icon}</span>
                {cap.label}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      <BrandStrip />

      <div className="hero-ticker" aria-hidden="true">
        <div className="hero-ticker-track">
          {['a', 'b'].map((k) => (
            <span key={k} className="hero-ticker-group">
              <em>SaaS</em><em>Sistemas Web</em><em>Mobile</em><em>Inteligência Artificial</em>
              <em>Automação</em><em>APIs</em><em>Dashboards</em><em>Hotelaria</em><em>B2B</em>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
