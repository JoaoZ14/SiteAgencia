import { motion } from 'framer-motion'
import { TECHNOLOGIES } from '../data/site'
import { TECH_ICONS } from '../utils/icons'
import { fadeUp } from '../utils/motion'
import './Technologies.css'

export default function Technologies() {
  return (
    <section className="tech" id="tecnologias" aria-labelledby="tech-heading">
      <div className="container">
        <div className="section-head">
          <span className="section-index">06 / STACK</span>
          <div className="section-head-main">
            <motion.h2
              className="section-title"
              id="tech-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              Stack moderna. Resultado sólido.
            </motion.h2>
            <motion.p
              className="section-lead"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              Escolhemos a ferramenta certa para cada projeto, sempre com
              foco em performance, manutenção e escalabilidade.
            </motion.p>
          </div>
        </div>

        <motion.ul
          className="tech-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.025 } } }}
        >
          {TECHNOLOGIES.map((tech) => {
            const Icon = TECH_ICONS[tech.icon]
            return (
              <motion.li key={tech.label} className="tech-item" variants={fadeUp}>
                <span className="tech-item-icon" aria-hidden="true">
                  {Icon && <Icon />}
                </span>
                {tech.label}
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
