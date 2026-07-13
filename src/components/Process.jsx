import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '../data/site'
import { PROCESS_ICONS } from '../utils/icons'
import { fadeUp } from '../utils/motion'
import './Process.css'

export default function Process() {
  return (
    <section className="process" id="processo" aria-labelledby="process-heading">
      <div className="container">
        <div className="section-head">
          <span className="section-index">04 / PROCESSO</span>
          <div className="section-head-main">
            <motion.h2
              className="section-title"
              id="process-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              Do problema à solução em produção.
            </motion.h2>
          </div>
        </div>

        <ol className="process-steps">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = PROCESS_ICONS[step.icon]
            return (
              <motion.li
                key={step.num}
                className="process-step"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                custom={i * 0.04}
              >
                <span className="process-num">{step.num}</span>
                <span className="icon-chip process-icon" aria-hidden="true">
                  {Icon && <Icon />}
                </span>
                <div className="process-body">
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-desc">{step.desc}</p>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
