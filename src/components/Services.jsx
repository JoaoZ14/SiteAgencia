import { Link } from 'react-router-dom'
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
  RiGlobalLine,
  RiArrowRightLine,
} from 'react-icons/ri'
import { fadeUp } from '../utils/motion'
import './Services.css'

const SERVICES = [
  {
    icon: <RiGlobalLine />,
    title: 'Marketing 360',
    desc: 'Conteúdo, redes, tráfego e site no mesmo plano. Você vê o que sai e o que volta.',
    layout: 'feature',
    badge: 'Mais pedido',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: <RiVideoLine />,
    title: 'Produção de Vídeo',
    desc: 'Reels e institucionais com narrativa clara, sem cara de amador.',
    layout: 'a',
  },
  {
    icon: <RiCameraLensLine />,
    title: 'Fotografia',
    desc: 'Produto, loja e bastidor. O tipo de foto que vende antes da legenda.',
    layout: 'b',
  },
  {
    icon: <RiInstagramLine />,
    title: 'Social Media',
    desc: 'Calendário, post no ar e ajuste quando o algoritmo muda.',
    layout: 'c',
  },
  {
    icon: <RiFileTextLine />,
    title: 'Criação de Conteúdo',
    desc: 'Texto e roteiro que fazem alguém te chamar no direct.',
    layout: 'd',
  },
  {
    icon: <RiLineChartLine />,
    title: 'Tráfego Pago',
    desc: 'Meta, Google e TikTok com número na mesa: clique, lead, venda.',
    layout: 'wide',
  },
  {
    icon: <RiCodeSSlashLine />,
    title: 'Desenvolvimento',
    desc: 'Site e landing page rápidos, feitos para receber anúncio.',
    layout: 'e',
  },
  {
    icon: <RiPencilRuler2Line />,
    title: 'Design Gráfico',
    desc: 'Criativo que parece da sua marca, não de banco de imagem.',
    layout: 'f',
  },
  {
    icon: <RiRocketLine />,
    title: 'Estratégia Digital',
    desc: 'Diagnóstico honesto e plano para o tamanho real do seu negócio.',
    layout: 'bar',
  },
]

export default function Services() {
  return (
    <section className="services" id="servicos" aria-labelledby="services-heading">
      <div className="container">
        <motion.header
          className="services-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
        >
          <h2 className="services-title" id="services-heading">
            O que fazemos
          </h2>
          <p className="services-lead">
            Um time cuida do marketing, do vídeo e do site. Sem juntar
            meia dúzia de prestador.
          </p>
        </motion.header>

        <ul className="services-bento">
          {SERVICES.map((s, i) => (
            <motion.li
              className={`service-bento service-bento--${s.layout}`}
              key={s.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {s.image && (
                <div className="service-bento-media" aria-hidden="true">
                  <img src={s.image} alt="" loading="lazy" decoding="async" />
                </div>
              )}
              <div className="service-bento-content">
                {s.badge && (
                  <span className="service-bento-badge">{s.badge}</span>
                )}
                <div className="service-bento-head">
                  <span className="section-pillar-icon" aria-hidden="true">
                    {s.icon}
                  </span>
                  <h3 className="service-bento-title">{s.title}</h3>
                </div>
                <p className="service-bento-desc">{s.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.footer
          className="services-footer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="services-footer-title">
            Não sabe por onde começar?
          </h3>
          <p className="services-footer-text">
            Conta o que você vende e para quem. A proposta a gente monta.
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
