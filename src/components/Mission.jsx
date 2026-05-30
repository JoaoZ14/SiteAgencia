import { motion } from 'framer-motion'
import { RiEyeLine, RiCompass3Line, RiTeamLine, RiFocus3Line } from 'react-icons/ri'
import './Mission.css'

const PILLARS = [
  {
    icon: <RiEyeLine />,
    title: 'Visibilidade',
    text: 'Colocar sua marca onde ela precisa ser vista, com conteúdo que prende atenção.',
  },
  {
    icon: <RiCompass3Line />,
    title: 'Estratégia',
    text: 'Cada entrega com propósito, do planejamento à publicação e ao resultado.',
  },
  {
    icon: <RiTeamLine />,
    title: 'Proximidade',
    text: 'Trabalho direto com quem cria, sem distância entre ideia e execução.',
  },
]

export default function Mission() {
  return (
    <section className="mission" id="missao" aria-labelledby="mission-title">
      <div className="mission-band" aria-hidden="true" />
      <div className="container mission-container">
        <motion.div
          className="mission-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="label">
            <RiFocus3Line aria-hidden="true" />
            Nossa Missão
          </span>
          <h2 className="mission-title" id="mission-title">
            Transformar presença digital em reconhecimento real.
          </h2>
          <p className="mission-lead">
            Conteúdo forte, estratégia clara e execução no mesmo time, perto de
            quem confia no nosso trabalho, sem processo engessado.
          </p>
        </motion.div>

        <motion.ul
          className="mission-pillars"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          viewport={{ once: true }}
        >
          {PILLARS.map((item) => (
            <li key={item.title} className="mission-pillar">
              <div className="pillar-heading">
                <span className="section-pillar-icon" aria-hidden="true">{item.icon}</span>
                <h3 className="mission-pillar-title">{item.title}</h3>
              </div>
              <p className="mission-pillar-text">{item.text}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
