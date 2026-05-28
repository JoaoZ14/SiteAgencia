import { motion } from 'framer-motion'
import { RiBuilding2Line, RiArrowRightLine } from 'react-icons/ri'
import Mission from './Mission'
import GmkSigla from './GmkSigla'
import './About.css'

const MANIFESTO_LINES = [
  { text: 'GMK não é só uma sigla. É identidade com propósito.', cls: 'l1', delay: 0.1  },
  { text: 'São as iniciais de quem transformou visão em movimento e ideia em presença de verdade.', cls: 'l2', delay: 0.18 },
  { text: 'E um manifesto simples, que guia o que fazemos:', cls: 'l3', delay: 0.26 },
  { text: 'fazer o mundo conhecer',                             cls: 'l4', delay: 0.34 },
  { text: 'o que a sua marca é capaz de construir.',            cls: 'l5', delay: 0.42 },
]

export default function About() {
  return (
    <>
      <Mission />

      <section className="about" id="sobre">
        <div className="container about-container">
          <motion.div
            className="about-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="label">
              <RiBuilding2Line aria-hidden="true" />
              Sobre a GMK
            </span>
            <h2 className="about-title">
              Diretos ao ponto,
              <br />
              desde o início.
            </h2>
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <p className="about-text large">
              A GMK nasceu com uma ideia simples: se a sua marca é bem construída,
              ela merece ser vista.
            </p>
            <p className="about-text">
              Aqui, cada projeto recebe atenção de verdade: estratégia e execução
              perto de você. Nada de processo engessado, nada de distância entre
              quem pede e quem cria.
            </p>
            <p className="about-text">
              Fazemos audiovisual, foto, redes sociais e tráfego pago para transformar
              presença digital em posicionamento de marca, com resultado que dá para sentir.
            </p>
            <p className="about-text">
              Atendemos nichos diferentes, mas com a mesma intenção: entregar algo
              profissional, autêntico e difícil de ignorar.
            </p>

            <a href="#contato" className="btn-primary about-cta">
              Vamos conversar
              <RiArrowRightLine aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>

      <GmkSigla />

      <section className="gmk-meaning" id="go-make-known">
        <div className="container gmk-meaning-container">
          <motion.img
            className="gmk-image"
            src="/Design sem nome (8).png"
            alt="Go Make Known"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          <div className="gmk-manifesto">
            {MANIFESTO_LINES.map(({ text, cls, delay }) => (
              <motion.span
                key={cls}
                className={`gmk-manifesto-line ${cls}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay }}
                viewport={{ once: true }}
              >
                {text}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
