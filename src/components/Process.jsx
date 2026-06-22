import { motion } from 'framer-motion'
import {
  RiFileTextLine,
  RiStackLine,
  RiRocketLine,
  RiLineChartLine,
} from 'react-icons/ri'
import { PROCESS_STEPS } from '../data/catalog'
import './Process.css'

const STEP_ICONS = {
  fileText: RiFileTextLine,
  layers: RiStackLine,
  rocket: RiRocketLine,
  chart: RiLineChartLine,
}

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Process() {
  return (
    <section className="process" id="processo" aria-labelledby="process-heading">
      <div className="container">
        <motion.header
          className="process-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
        >
          <h2 className="process-title" id="process-heading">
            Como a gente trabalha
          </h2>
          <p className="process-lead">
            Quatro passos. Você sabe o que vem antes de fechar qualquer coisa.
          </p>
        </motion.header>

        <ol className="process-steps">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = STEP_ICONS[step.icon]
            return (
              <motion.li
                className="process-step"
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fade}
                custom={i}
              >
                <span className="process-step-icon" aria-hidden="true">
                  {Icon && <Icon />}
                </span>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
