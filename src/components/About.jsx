import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  return (
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
            A GMK Digital começa agora — e é exatamente por isso que cada projeto
            importa. Sem automatismos, sem fila de espera. Você fala diretamente com
            quem vai executar o seu trabalho.
          </p>
          <p className="about-text">
            Somos uma agência focada em criação de conteúdo visual e estratégia
            digital para negócios que querem construir uma presença real na internet.
            Filmagem, fotografia, gestão de redes sociais e tráfego pago — do
            planejamento à entrega.
          </p>
          <p className="about-text">
            Atendemos todos os nichos. O que não muda é o comprometimento com a
            qualidade e a clareza nos resultados.
          </p>

          <a href="#contato" className="btn-primary about-cta">
            Agende uma conversa
          </a>
        </motion.div>
      </div>
    </section>
  )
}
