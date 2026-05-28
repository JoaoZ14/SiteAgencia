import { motion } from 'framer-motion'
import {
  RiMegaphoneLine,
  RiBarChartGroupedLine,
  RiFundsLine,
  RiLightbulbFlashLine,
} from 'react-icons/ri'
import './Mission.css'
import './GmkSigla.css'

const LETTERS = [
  {
    glyph: 'G',
    icon: <RiMegaphoneLine />,
    title: 'Gestão · growth',
    text: 'Atrair as pessoas certas com tráfego pago e posicionamento no Google.',
  },
  {
    glyph: 'M',
    icon: <RiBarChartGroupedLine />,
    title: 'Métrica',
    text: 'Analisar dados, otimizar campanhas e entender o comportamento do consumidor.',
  },
  {
    glyph: 'K',
    icon: <RiFundsLine />,
    title: 'KPI e conversão',
    text: 'Foco em resultado, lucro e retorno sobre o investimento (ROI).',
  },
]

export default function GmkSigla() {
  return (
    <section className="mission" id="gmk-sigla" aria-labelledby="gmk-sigla-title">
      <div className="mission-band" aria-hidden="true" />
      <div className="container mission-container">
        <motion.div
          className="mission-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="label">
            <RiLightbulbFlashLine aria-hidden="true" />
            A sigla
          </span>
          <h2 className="mission-title" id="gmk-sigla-title">
            Gestão, métrica e conversão em cada entrega.
          </h2>
          <p className="mission-lead">
            GMK também traduz o método: crescer com estratégia, medir o que importa
            e converter presença em resultado para o seu negócio.
          </p>
        </motion.div>

        <motion.ul
          className="mission-pillars mission-pillars--letters"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          viewport={{ once: true }}
        >
          {LETTERS.map((item, i) => (
            <li key={item.glyph} className={`mission-pillar gmk-pillar gmk-pillar--${i + 1}`}>
              <span className="gmk-pillar-bg" aria-hidden="true">
                {item.glyph}
              </span>
              <div className="gmk-pillar-content">
                <span className="section-pillar-icon" aria-hidden="true">{item.icon}</span>
                <h3 className="mission-pillar-title">{item.title}</h3>
                <p className="mission-pillar-text">{item.text}</p>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
