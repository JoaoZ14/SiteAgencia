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
  RiLayoutGridLine,
  RiArrowRightLine,
} from 'react-icons/ri'
import './Services.css'

const SERVICES = [
  {
    icon: <RiVideoLine />,
    title: 'Produção de Vídeo',
    desc: 'Reels, institucionais e campanhas, feitos para rodar onde sua marca precisa aparecer.',
    scope: 'Reels · Institucional · Campanhas',
  },
  {
    icon: <RiCameraLensLine />,
    title: 'Fotografia',
    desc: 'Fotos de produto, marca e lifestyle que comunicam antes mesmo da legenda.',
    scope: 'Produto · Marca · Lifestyle',
  },
  {
    icon: <RiInstagramLine />,
    title: 'Social Media',
    desc: 'Planejamos, criamos e cuidamos das suas redes, do calendário ao post no ar.',
    scope: 'Calendário · Criação · Gestão',
  },
  {
    icon: <RiFileTextLine />,
    title: 'Criação de Conteúdo',
    desc: 'Textos, roteiros e copy que engajam e ajudam a converter.',
    scope: 'Copy · Roteiros · Conversão',
  },
  {
    icon: <RiLineChartLine />,
    title: 'Tráfego Pago',
    desc: 'Anúncios no Meta, Google e TikTok, com foco em retorno que dá para medir.',
    scope: 'Meta Ads · Google · TikTok',
  },
  {
    icon: <RiCodeSSlashLine />,
    title: 'Desenvolvimento',
    desc: 'Sites, landing pages e bots feitos sob medida para o seu negócio.',
    scope: 'Sites · Landing pages · Bots',
  },
  {
    icon: <RiPencilRuler2Line />,
    title: 'Design Gráfico',
    desc: 'Peças visuais, digitais ou impressas, que falam a língua da sua marca.',
    scope: 'Digital · Impresso · Branding',
  },
  {
    icon: <RiRocketLine />,
    title: 'Estratégia Digital',
    desc: 'Planejamento e consultoria para quem está montando presença digital do zero.',
    scope: 'Planejamento · Consultoria · Posicionamento',
  },
]

export default function Services() {
  return (
    <section className="services" id="servicos">
      <div className="container services-container">
        <motion.div
          className="services-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="label">
            <RiLayoutGridLine aria-hidden="true" />
            O que fazemos
          </span>
          <h2 className="services-title">Serviços</h2>
          <p className="services-intro">
            Do vídeo ao site, passando por redes e tráfego: tudo o que a GMK faz
            para a sua marca ganhar presença e resultado, em um só lugar.
          </p>
          <a href="#contato" className="btn-primary services-cta">
            Vamos montar sua proposta
            <RiArrowRightLine aria-hidden="true" />
          </a>
        </motion.div>

        <motion.ul
          className="services-list"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {SERVICES.map((s, i) => (
            <motion.li
              className="service-row"
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <span className="service-row-icon" aria-hidden="true">
                {s.icon}
              </span>
              <div className="service-row-body">
                <h3 className="service-row-name">{s.title}</h3>
                <p className="service-row-desc">{s.desc}</p>
                <span className="service-row-scope">{s.scope}</span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
