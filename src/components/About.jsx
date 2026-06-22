import { motion } from 'framer-motion'
import { RiBuilding2Line, RiArrowRightLine } from 'react-icons/ri'
import './About.css'

const MANIFESTO_LINES = [
  { text: 'GMK é sigla e nome. Significa Go Make Known.', cls: 'l1', delay: 0.1 },
  { text: 'Nasceu da ideia de que marca boa merece ser vista.', cls: 'l2', delay: 0.18 },
  { text: 'O que guia o trabalho:', cls: 'l3', delay: 0.26 },
  { text: 'fazer o mundo conhecer', cls: 'l4', delay: 0.34 },
  { text: 'o que você vende.', cls: 'l5', delay: 0.42 },
]

export default function About() {
  return (
    <>
      <section className="about" id="sobre">
        <div className="container about-container">
          <motion.div
            className="about-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="label">
              <RiBuilding2Line aria-hidden="true" />
              Sobre a GMK
            </span>
            <h2 className="about-title">
              Uma agência pequena,
              <br />
              com entrega grande.
            </h2>
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <p className="about-text large">
              Estamos em Resende e montamos um time que faz vídeo, rede social,
              conteúdo e tráfego pago junto. Quem briefa fala com quem executa.
            </p>
            <p className="about-text">
              Atendemos hotel, restaurante, loja online e negócio local em todo
              o Brasil. A entrega tem que servir o negócio, não só ficar bonita
              no feed.
            </p>

            <a href="#contato" className="btn-primary about-cta">
              Vamos conversar
              <RiArrowRightLine aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="gmk-meaning" id="go-make-known">
        <div className="container gmk-meaning-container">
          <motion.img
            className="gmk-image"
            src="/Design sem nome (8).png"
            alt="Go Make Known"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          <div className="gmk-manifesto">
            {MANIFESTO_LINES.map(({ text, cls, delay }) => (
              <motion.span
                key={cls}
                className={`gmk-manifesto-line ${cls}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay }}
                viewport={{ once: true }}
              >
                {text}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
