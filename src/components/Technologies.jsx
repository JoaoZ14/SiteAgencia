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
          <div className="section-head-main">
            <motion.h2
              className="section-title"
              id="tech-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              Ferramentas certas para cada projeto.
            </motion.h2>
            <motion.p
              className="section-lead"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              Stack moderna quando faz sentido — sempre com foco em manutenção
              e performance no dia a dia da operação.
            </motion.p>
          </div>
        </div>

        <motion.ul
          className="tech-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.02 } } }}
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
