import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  RiLayoutGridLine,
  RiVideoLine,
  RiCameraLensLine,
  RiInstagramLine,
  RiFileTextLine,
  RiLineChartLine,
  RiCodeSSlashLine,
  RiPencilRuler2Line,
  RiRocketLine,
  RiGlobalLine,
  RiArrowRightLine,
} from 'react-icons/ri'
import './Services.css'

const SERVICES = [
  {
    icon: <RiGlobalLine />,
    title: 'Marketing 360',
    desc: 'Integramos conteúdo, redes, tráfego e presença digital em um plano único, com visão completa da marca, do visual ao resultado.',
  },
  {
    icon: <RiVideoLine />,
    title: 'Produção de Vídeo',
    desc: 'Reels, institucionais e campanhas com narrativa clara e estética profissional, com conteúdo que prende atenção e reforça autoridade da marca.',
  },
  {
    icon: <RiCameraLensLine />,
    title: 'Fotografia',
    desc: 'Produto, marca e lifestyle: imagens que comunicam antes da legenda e elevam o padrão visual do que você mostra ao mundo.',
  },
  {
    icon: <RiInstagramLine />,
    title: 'Social Media',
    desc: 'Gestão estratégica e criativa das redes, do calendário ao post no ar, para presença consistente e engajamento que constrói relacionamento com o público.',
  },
  {
    icon: <RiFileTextLine />,
    title: 'Criação de Conteúdo',
    desc: 'Textos, roteiros e copy que explicam o que você vende, geram interesse e ajudam a transformar visita em conversa.',
  },
  {
    icon: <RiLineChartLine />,
    title: 'Tráfego Pago',
    desc: 'Campanhas em Meta, Google e TikTok, orientadas por dados e otimizadas para cliques qualificados, leads e vendas que dá para medir.',
  },
  {
    icon: <RiCodeSSlashLine />,
    title: 'Desenvolvimento',
    desc: 'Sites, landing pages e bots sob medida, rápidos, objetivos e preparados para receber tráfego e converter quem chega.',
  },
  {
    icon: <RiPencilRuler2Line />,
    title: 'Design Gráfico',
    desc: 'Criativos digitais alinhados à identidade da sua marca para que cada publicação, anúncio e campanha reforce o posicionamento que você quer ocupar.',
  },
  {
    icon: <RiRocketLine />,
    title: 'Estratégia Digital',
    desc: 'Diagnóstico e planejamento para montar ou evoluir sua presença digital com método, com um plano que faz sentido para o tamanho e o momento do seu negócio.',
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Services() {
  return (
    <section className="services" id="servicos" aria-labelledby="services-heading">
      <div className="container">
        <motion.header
          className="services-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="label services-label">
            <RiLayoutGridLine aria-hidden="true" />
            O que fazemos
          </span>
          <h2 className="services-title" id="services-heading">
            Nossos Serviços
          </h2>
        </motion.header>

        <ul className="services-grid">
          {SERVICES.map((s, i) => (
            <motion.li
              className="service-item"
              key={s.title}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <div className="service-item-head">
                <span className="section-pillar-icon" aria-hidden="true">
                  {s.icon}
                </span>
                <h3 className="service-item-title">{s.title}</h3>
              </div>
              <p className="service-item-desc">{s.desc}</p>
            </motion.li>
          ))}
        </ul>

        <motion.footer
          className="services-footer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="services-footer-title">
            Encontre o serviço certo para o seu momento.
          </h3>
          <p className="services-footer-text">
            Cada negócio tem um ponto de partida diferente. Conte onde você está
            e onde quer chegar. A proposta é nossa.
          </p>
          <div className="services-footer-actions">
            <Link to="/catalogo" className="btn-ghost">
              Ver catálogo completo
              <RiArrowRightLine aria-hidden="true" />
            </Link>
            <a href="#contato" className="btn-primary">
              Vamos conversar
              <RiArrowRightLine aria-hidden="true" />
            </a>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}
