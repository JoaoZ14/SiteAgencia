import { motion } from 'framer-motion'
import { RiArrowRightUpLine } from 'react-icons/ri'
import { SERVICES } from '../data/site'
import { SERVICE_ICONS } from '../utils/icons'
import { fadeUp } from '../utils/motion'
import './Services.css'

export default function Services() {
  return (
    <section className="services" id="servicos" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-head">
          <span className="section-index">02 / SOLUÇÕES</span>
          <div className="section-head-main">
            <motion.h2
              className="section-title"
              id="services-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              Tecnologia para cada etapa do negócio.
            </motion.h2>
            <motion.p
              className="section-lead"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              Do MVP ao sistema enterprise. Cada projeto com arquitetura
              pensada para escalar e evoluir com a empresa.
            </motion.p>
          </div>
        </div>

        <ul className="services-grid">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.icon]
            return (
              <motion.li
                key={service.title}
                className="service-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                custom={(i % 4) * 0.05}
              >
                <div className="service-top">
                  <span className="icon-chip service-icon" aria-hidden="true">
                    {Icon && <Icon />}
                  </span>
                  <span className="service-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <RiArrowRightUpLine className="service-arrow" aria-hidden="true" />
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
