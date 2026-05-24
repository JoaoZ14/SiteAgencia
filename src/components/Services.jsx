import { motion } from 'framer-motion'
import {
  RiVideoLine,
  RiCameraLensLine,
  RiInstagramLine,
  RiFileTextLine,
  RiLineChartLine,
  RiCodeSSlashLine,
  RiPencilRuler2Line,
  RiRocketLine,
} from 'react-icons/ri'
import './Services.css'

const SERVICES = [
  {
    icon: <RiVideoLine />,
    title: 'Produção de Vídeo',
    desc: 'Reels, institucionais e campanhas para todas as plataformas.',
  },
  {
    icon: <RiCameraLensLine />,
    title: 'Fotografia',
    desc: 'Ensaios de produto, marca e lifestyle que vendem antes de qualquer texto.',
  },
  {
    icon: <RiInstagramLine />,
    title: 'Social Media',
    desc: 'Planejamento, criação e gestão completa das suas redes.',
  },
  {
    icon: <RiFileTextLine />,
    title: 'Criação de Conteúdo',
    desc: 'Copywriting, roteiros e textos que engajam e convertem.',
  },
  {
    icon: <RiLineChartLine />,
    title: 'Tráfego Pago',
    desc: 'Anúncios no Meta, Google e TikTok com foco em ROI real.',
  },
  {
    icon: <RiCodeSSlashLine />,
    title: 'Desenvolvimento',
    desc: 'Sites, landing pages, bots e aplicações sob medida para o seu negócio.',
  },
  {
    icon: <RiPencilRuler2Line />,
    title: 'Design Gráfico',
    desc: 'Peças visuais para digital e físico que comunicam de verdade.',
  },
  {
    icon: <RiRocketLine />,
    title: 'Estratégia Digital',
    desc: 'Planejamento e consultoria para construir presença digital do zero.',
  },
]

export default function Services() {
  return (
    <section className="services" id="servicos">
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="label">O que fazemos</span>
          <h2 className="services-title">Serviços</h2>
        </motion.div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <motion.div
              className="service-card"
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-name">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
