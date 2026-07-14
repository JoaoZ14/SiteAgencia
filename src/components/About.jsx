import { motion } from 'framer-motion'
import {
  RiArrowRightLine,
  RiLayoutGridLine,
  RiBarChartBoxLine,
  RiShieldCheckLine,
} from 'react-icons/ri'
import { fadeUp } from '../utils/motion'
import './About.css'

const PILLARS = [
  {
    icon: <RiLayoutGridLine />,
    title: 'Arquitetura',
    desc: 'Sistemas pensados para crescer: APIs bem definidas e código que outro time consegue manter.',
  },
  {
    icon: <RiBarChartBoxLine />,
    title: 'Escalabilidade',
    desc: 'Infraestrutura cloud, banco bem modelado e deploy previsível conforme o uso aumenta.',
  },
  {
    icon: <RiShieldCheckLine />,
    title: 'Qualidade',
    desc: 'Testes, revisões e monitoramento. Software que aguenta produção, não só a demo.',
  },
]

export default function About() {
  return (
    <section className="about" id="sobre" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-head-main">
            <motion.h2
              className="section-title"
              id="about-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              Uma software house que resolve problemas reais.
            </motion.h2>
          </div>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <p className="about-lead">
              A GMK desenvolve tecnologia sob medida para empresas que precisam
              de mais do que um site. Construímos plataformas, sistemas e
              aplicações que transformam processos em software.
            </p>
            <p className="about-text">
              Não vendemos código solto. Entregamos sistemas com arquitetura
              sólida, performance e segurança. Base em Resende, RJ — atendimento
              em todo o Brasil.
            </p>
            <a href="#contato" className="btn-primary about-cta">
              Falar com especialista
              <RiArrowRightLine aria-hidden="true" />
            </a>
          </motion.div>

          <motion.ul
            className="about-pillars"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {PILLARS.map((p) => (
              <motion.li key={p.title} className="about-pillar" variants={fadeUp}>
                <span className="icon-chip about-pillar-icon" aria-hidden="true">{p.icon}</span>
                <div>
                  <h3 className="about-pillar-title">{p.title}</h3>
                  <p className="about-pillar-desc">{p.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
