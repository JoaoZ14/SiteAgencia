import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RiArrowRightLine } from 'react-icons/ri'
import { fadeUp } from '../utils/motion'
import './Proof.css'

const STEPS = [
  {
    num: '01',
    title: 'Conversa objetiva',
    desc: '30 minutos para mapear o problema, o prazo e o que já existe na empresa.',
  },
  {
    num: '02',
    title: 'Proposta com escopo',
    desc: 'Entregáveis, estimativa e prioridades claras — sem surpresa no meio do caminho.',
  },
  {
    num: '03',
    title: 'Primeira entrega visível',
    desc: 'Sprint inicial com algo rodando. Você valida cedo e decide o próximo passo.',
  },
]

export default function Proof() {
  return (
    <section className="proof" id="como-comecamos" aria-labelledby="proof-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-head-main">
            <motion.h2
              className="section-title"
              id="proof-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              Como começamos um projeto.
            </motion.h2>
            <motion.p
              className="section-lead"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              Cases detalhados ficam sob NDA. Aqui está o que você pode esperar
              antes de assinar: conversa direta, escopo escrito e entrega cedo.
            </motion.p>
          </div>
        </div>

        <ol className="proof-steps">
          {STEPS.map((step, i) => (
            <motion.li
              key={step.num}
              className="proof-step"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={i * 0.06}
            >
              <span className="proof-num" aria-hidden="true">{step.num}</span>
              <div>
                <h3 className="proof-title">{step.title}</h3>
                <p className="proof-desc">{step.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>

        <motion.div
          className="proof-meta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
        >
          <p>
            Base em <strong>Resende, RJ</strong>. Atendimento remoto em todo o Brasil.
            Foco atual em sistemas web, mobile, automação e hotelaria.
          </p>
          <Link to="/#contato" className="btn-primary">
            Começar pelo WhatsApp
            <RiArrowRightLine aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
