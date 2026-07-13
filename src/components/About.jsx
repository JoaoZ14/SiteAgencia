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
    desc: 'Sistemas pensados para crescer. Microserviços, APIs bem definidas e código que outro time consegue manter.',
  },
  {
    icon: <RiBarChartBoxLine />,
    title: 'Escalabilidade',
    desc: 'Infraestrutura cloud, bancos otimizados e deploy automatizado para suportar milhares de usuários.',
  },
  {
    icon: <RiShieldCheckLine />,
    title: 'Qualidade',
    desc: 'Testes, revisões de código e monitoramento contínuo. Software que funciona em produção, não só em demo.',
  },
]

export default function About() {
  return (
    <section className="about" id="sobre" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-head">
          <span className="section-index">01 / QUEM SOMOS</span>
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
              aplicações que transformam processos em software escalável.
            </p>
            <p className="about-text">
              Não vendemos código. Construímos negócios através de engenharia
              de software com arquitetura moderna, performance e segurança.
              Estamos em Resende, RJ, e atendemos empresas em todo o Brasil.
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
