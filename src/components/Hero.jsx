import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  RiArrowRightLine,
  RiCodeSSlashLine,
  RiSmartphoneLine,
  RiRobot2Line,
  RiCloudLine,
} from 'react-icons/ri'
import HeroVisual from './HeroVisual'
import BrandStrip from './BrandStrip'
import './Hero.css'

const CAPS = [
  { icon: <RiCodeSSlashLine />, label: 'Web' },
  { icon: <RiSmartphoneLine />, label: 'Mobile' },
  { icon: <RiRobot2Line />, label: 'IA' },
  { icon: <RiCloudLine />, label: 'Cloud' },
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
            className="hero-kicker"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            SOFTWARE HOUSE — RESENDE, BR
          </motion.p>

          <motion.h1
            className="hero-title"
            id="hero-heading"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.08}
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
            custom={0.16}
          >
            Desenvolvemos plataformas, sistemas e aplicações sob medida
            para empresas que precisam crescer através da tecnologia.
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.24}
          >
            <Link to="/#servicos" className="btn-primary">
              Conhecer soluções
              <RiArrowRightLine aria-hidden="true" />
            </Link>
            <Link to="/#contato" className="btn-ghost">
              Solicitar orçamento
            </Link>
          </motion.div>

          <motion.ul
            className="hero-caps"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.32}
          >
            {CAPS.map((cap) => (
              <li key={cap.label}>
                <span className="hero-cap-icon" aria-hidden="true">{cap.icon}</span>
                {cap.label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="hero-visual-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
        >
          <HeroVisual />
        </motion.div>
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
