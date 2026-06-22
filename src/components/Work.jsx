import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiArrowRightLine, RiImageLine } from 'react-icons/ri'
import { CATALOG_CASES } from '../data/catalog'
import './Work.css'

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Work() {
  const [featured, ...rest] = CATALOG_CASES

  return (
    <section className="work" id="trabalhos" aria-labelledby="work-heading">
      <div className="container">
        <motion.header
          className="work-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fade}
        >
          <h2 className="work-title" id="work-heading">
            Trabalho por segmento
          </h2>
          <p className="work-lead">
            Exemplos do que entregamos. Não expomos cliente, mas você vê o
            tipo de material e o resultado que buscamos.
          </p>
        </motion.header>

        <div className="work-grid">
          <motion.article
            className="work-card work-card--featured"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fade}
            custom={0}
          >
            <div className="work-card-media">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="work-card-body">
              <span className="work-card-segment">{featured.segment}</span>
              <p className="work-card-delivery">{featured.delivery}</p>
              <p className="work-card-outcome">{featured.outcome}</p>
            </div>
          </motion.article>

          {rest.map((item, i) => (
            <motion.article
              className="work-card"
              key={item.segment}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fade}
              custom={i + 1}
            >
              <div className="work-card-media">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="work-card-body">
                <span className="work-card-segment">{item.segment}</span>
                <p className="work-card-delivery">{item.delivery}</p>
                <p className="work-card-outcome">{item.outcome}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.footer
          className="work-footer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
        >
          <Link to="/catalogo#cases" className="btn-ghost">
            <RiImageLine aria-hidden="true" />
            Ver catálogo completo
            <RiArrowRightLine aria-hidden="true" />
          </Link>
        </motion.footer>
      </div>
    </section>
  )
}
