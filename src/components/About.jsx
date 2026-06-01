import { motion } from 'framer-motion'
import { RiBuilding2Line, RiArrowRightLine } from 'react-icons/ri'
import Mission from './Mission'
import GmkSigla from './GmkSigla'
import './About.css'

const MANIFESTO_LINES = [
  { text: 'GMK não é só uma sigla. É identidade com propósito.', cls: 'l1', delay: 0.1  },
  { text: 'Nasceu de quem decidiu transformar intenção em presença e potencial em visibilidade de verdade.', cls: 'l2', delay: 0.18 },
  { text: 'E carrega um manifesto direto, que guia tudo o que fazemos:', cls: 'l3', delay: 0.26 },
  { text: 'fazer o mundo conhecer', cls: 'l4', delay: 0.34 },
  { text: 'o que a sua marca tem a oferecer.', cls: 'l5', delay: 0.42 },
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
              Uma agência pequena,
              <br />
              com entrega grande.
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
              Sediada em Resende, RJ, a GMK nasceu da convicção de que marcas
              bem construídas merecem visibilidade proporcional à sua qualidade,
              e que isso não deveria depender de uma grande estrutura para acontecer.
            </p>
            <p className="about-text">
              Cada cliente tem acesso direto a quem cria. Sem camadas de aprovação,
              sem terceirização, sem perda de contexto entre o briefing e a entrega.
            </p>
            <p className="about-text">
              Reunimos audiovisual, gestão de redes, criação de conteúdo e tráfego
              pago em um só time. O resultado não é só estético: é mensurável,
              rastreável e pensado para gerar negócio.
            </p>
            <p className="about-text">
              Atendemos saúde, gastronomia, moda, e-commerce, serviços locais e
              muito mais, sempre com a mesma intenção: uma presença digital que
              representa de verdade o que sua marca entrega.
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
