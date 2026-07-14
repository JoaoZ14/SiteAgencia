import { motion } from 'framer-motion'
import { DIFFERENTIALS } from '../data/site'
import { DIFFERENTIAL_ICONS } from '../utils/icons'
import { fadeUp } from '../utils/motion'
import './Differentiators.css'

export default function Differentiators() {
  return (
    <section className="diffs" id="diferenciais" aria-labelledby="diffs-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-head-main">
            <motion.h2
              className="section-title"
              id="diffs-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              Engenharia que entrega resultado.
            </motion.h2>
          </div>
        </div>

        <motion.ul
          className="diffs-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {DIFFERENTIALS.map((item) => {
            const Icon = DIFFERENTIAL_ICONS[item.icon]
            return (
              <motion.li key={item.title} className="diffs-item" variants={fadeUp}>
                <span className="icon-chip diffs-item-icon" aria-hidden="true">
                  {Icon && <Icon />}
                </span>
                <div>
                  <h3 className="diffs-item-title">{item.title}</h3>
                  <p className="diffs-item-desc">{item.desc}</p>
                </div>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
