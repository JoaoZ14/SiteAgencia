import { motion } from 'framer-motion'
import { RiArrowRightLine, RiArrowDownLine, RiGlobalLine, RiCheckLine } from 'react-icons/ri'
import './Hero.css'

const line = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
}

const TRUST_POINTS = [
  'Resposta em até 24h úteis',
  'Você fala com quem executa',
  'Marketing e audiovisual no mesmo time',
]

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="https://images.unsplash.com/photo-1492691527719-9d1e07f534bf?auto=format&fit=crop&w=800&q=80"
          />
          <img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231bb04?auto=format&fit=crop&w=1920&q=80"
            alt=""
            aria-hidden="true"
          />
        </picture>
        <div className="hero-overlay" />
      </div>

      <div className="container hero-container">

        <motion.div
          className="hero-top"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <span className="hero-eyebrow">
            <RiGlobalLine aria-hidden="true" />
            Go Make Known · GMK Digital
          </span>
          <span className="hero-region">Resende, RJ · todo o Brasil</span>
        </motion.div>

        <h1 className="hero-title" aria-label="Agência de marketing digital em Resende, RJ. Da criação ao resultado.">
          <span className="sr-only">Agência de marketing digital em Resende, RJ</span>
          <motion.span className="hero-line" custom={1} variants={line} initial="hidden" animate="visible">
            Da criação
          </motion.span>
          <motion.span className="hero-line hero-line--accent" custom={2} variants={line} initial="hidden" animate="visible">
            ao resultado.
          </motion.span>
        </h1>

        <motion.p
          className="hero-sub"
          custom={3}
          variants={line}
          initial="hidden"
          animate="visible"
        >
          Sites, campanhas e conteúdo para quem quer vender mais.
          Presencial no Sul Fluminense ou remoto em todo o Brasil.
        </motion.p>

        <motion.ul
          className="hero-trust"
          custom={4}
          variants={line}
          initial="hidden"
          animate="visible"
          aria-label="Diferenciais da GMK Digital"
        >
          {TRUST_POINTS.map((point) => (
            <li key={point}>
              <RiCheckLine aria-hidden="true" />
              {point}
            </li>
          ))}
        </motion.ul>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="hero-divider" />
          <div className="hero-cta">
            <a href="#contato" className="btn-primary">
              Solicitar proposta <RiArrowRightLine />
            </a>
            <a href="#trabalhos" className="btn-ghost">
              Ver trabalhos
            </a>
          </div>
        </motion.div>

      </div>

      <a href="#servicos" className="hero-scroll" aria-label="Rolar para baixo">
        <RiArrowDownLine />
      </a>
    </section>
  )
}
