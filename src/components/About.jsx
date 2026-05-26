import { motion } from 'framer-motion'
import './About.css'

const MANIFESTO_LINES = [
  { text: 'GMK não é apenas uma sigla.',                          cls: 'l1', delay: 0.1  },
  { text: 'são as iniciais de quem transformou visão em movimento', cls: 'l2', delay: 0.18 },
  { text: 'e um manifesto simples:',                            cls: 'l3', delay: 0.26 },
  { text: 'fazer o mundo conhecer',                             cls: 'l4', delay: 0.34 },
  { text: 'o que a sua marca é capaz de construir.',            cls: 'l5', delay: 0.42 },
]

export default function About() {
  return (
    <>
      <section className="about" id="sobre">
        <div className="container about-container">
          <motion.div
            className="about-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="label">Sobre a GMK</span>
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
              A GMK Digital nasce com uma ideia simples:
              marcas bem construídas merecem ser vistas.
            </p>
            <p className="about-text">
              Cada projeto que entra aqui recebe atenção real, estratégia e execução
              próxima. Sem processos genéricos. Sem distância entre você e quem cria.
            </p>
            <p className="about-text">
              Trabalhamos com produção audiovisual, fotografia, gestão de redes sociais
              e tráfego pago para transformar presença digital em posicionamento de marca.
            </p>
            <p className="about-text">
              Atendemos diferentes nichos, mas seguimos a mesma direção em todos os
              projetos: criar algo que pareça profissional, autêntico e impossível de ignorar.
            </p>

            <a href="#contato" className="btn-primary about-cta">
              Agende uma conversa
            </a>
          </motion.div>
        </div>
      </section>

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
