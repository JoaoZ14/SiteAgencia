import { motion } from 'framer-motion'
import { HOSPITALITY_FEATURES } from '../data/site'
import { HOSPITALITY_ICONS } from '../utils/icons'
import { fadeUp } from '../utils/motion'
import './Hospitality.css'

export default function Hospitality() {
  return (
    <section className="hospitality" id="hotelaria" aria-labelledby="hospitality-heading">
      <div className="container">
        <div className="section-head hospitality-head">
          <span className="section-index">03 / ESPECIALIDADE</span>
          <div className="section-head-main">
            <motion.h2
              className="section-title"
              id="hospitality-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              Especialistas em hotelaria.
            </motion.h2>
            <motion.p
              className="section-lead"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              Desenvolvemos sistemas completos para hotéis: da reserva ao room
              service, com integrações e automações que simplificam a operação.
              É nosso foco estratégico, mas a mesma engenharia atende qualquer
              segmento.
            </motion.p>
          </div>
        </div>

        <motion.ul
          className="hospitality-features"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
        >
          {HOSPITALITY_FEATURES.map((feature) => {
            const Icon = HOSPITALITY_ICONS[feature.icon]
            return (
              <motion.li key={feature.label} className="hospitality-feature" variants={fadeUp}>
                <span className="hospitality-feature-icon" aria-hidden="true">
                  {Icon && <Icon />}
                </span>
                {feature.label}
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
