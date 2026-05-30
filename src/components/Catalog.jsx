import { motion } from 'framer-motion'
import {
  RiBookOpenLine,
  RiGlobalLine,
  RiVideoLine,
  RiCheckLine,
  RiArrowRightLine,
  RiAddLine,
} from 'react-icons/ri'
import {
  CATALOG_INTRO,
  CATALOG_PILLARS,
  SERVICE_CATEGORIES,
  PACKAGES,
  ADDONS,
  PROCESS_STEPS,
} from '../data/catalog'
import CatalogPdfButton from './CatalogPdfButton'
import './Catalog.css'

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Catalog({ page = false }) {
  return (
    <section
      className={`catalog${page ? ' catalog--page' : ''}`}
      id={page ? undefined : 'catalogo'}
      aria-label={page ? 'Conteúdo do catálogo' : undefined}
      aria-labelledby={page ? undefined : 'catalog-title'}
    >
      <div className="container">
        {!page && (
          <motion.header
            className="catalog-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <span className="label catalog-label">
              <RiBookOpenLine aria-hidden="true" />
              {CATALOG_INTRO.label}
            </span>
            <h2 className="catalog-title" id="catalog-title">
              {CATALOG_INTRO.title}
            </h2>
            <p className="catalog-lead">{CATALOG_INTRO.lead}</p>
          </motion.header>
        )}

        <motion.ul
          className="catalog-pillars"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          custom={1}
        >
          {CATALOG_PILLARS.map((p) => (
            <li key={p.id} className="catalog-pillar">
              <span className="catalog-pillar-icon" aria-hidden="true">
                {p.id === 'marketing' ? <RiGlobalLine /> : <RiVideoLine />}
              </span>
              <div>
                <h3 className="catalog-pillar-title">{p.title}</h3>
                <p className="catalog-pillar-desc">{p.desc}</p>
              </div>
            </li>
          ))}
        </motion.ul>

        {SERVICE_CATEGORIES.map((cat, ci) => (
          <motion.div
            className="catalog-category"
            key={cat.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fade}
            custom={ci}
          >
            <h3 className="catalog-category-title">{cat.title}</h3>
            <ul className="catalog-services">
              {cat.items.map((item) => (
                <li className="catalog-service" key={item.name}>
                  <div className="catalog-service-head">
                    <h4 className="catalog-service-name">{item.name}</h4>
                    <p className="catalog-service-desc">{item.desc}</p>
                  </div>
                  <ul className="catalog-service-includes">
                    {item.includes.map((inc) => (
                      <li key={inc}>
                        <RiCheckLine aria-hidden="true" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div
          className="catalog-packages-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
        >
          <div className="catalog-section-head">
            <span className="label">
              <RiBookOpenLine aria-hidden="true" />
              Pacotes
            </span>
            <h3 className="catalog-section-title">Planos mensais</h3>
            <p className="catalog-section-desc">
              Pacotes pensados para diferentes momentos da marca. Valores sob consulta,
              montados de acordo com o escopo e o nicho do seu negócio.
            </p>
          </div>

          <ul className="catalog-packages">
            {PACKAGES.map((pkg, i) => (
              <motion.li
                className={`catalog-package${pkg.highlight ? ' catalog-package--highlight' : ''}`}
                key={pkg.name}
                variants={fade}
                custom={i}
              >
                <span className="catalog-package-focus">{pkg.focus}</span>
                <h4 className="catalog-package-name">{pkg.name}</h4>
                <p className="catalog-package-tagline">{pkg.tagline}</p>
                <ul className="catalog-package-features">
                  {pkg.features.map((f) => (
                    <li key={f}>
                      <RiCheckLine aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="catalog-package-note">{pkg.note}</p>
                <p className="catalog-package-price">Sob consulta</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="catalog-addons-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
        >
          <div className="catalog-section-head">
            <span className="label">
              <RiAddLine aria-hidden="true" />
              Complementos
            </span>
            <h3 className="catalog-section-title">Serviços avulsos</h3>
            <p className="catalog-section-desc">
              Itens que podem ser contratados junto com qualquer pacote ou de forma
              pontual, conforme a necessidade do projeto.
            </p>
          </div>

          <ul className="catalog-addons">
            {ADDONS.map((addon) => (
              <li className="catalog-addon" key={addon.name}>
                <h4 className="catalog-addon-name">{addon.name}</h4>
                <p className="catalog-addon-desc">{addon.desc}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="catalog-process"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
        >
          <h3 className="catalog-section-title catalog-section-title--center">
            Como funciona
          </h3>
          <ol className="catalog-steps">
            {PROCESS_STEPS.map((s) => (
              <li className="catalog-step" key={s.step}>
                <span className="catalog-step-num">{s.step}</span>
                <h4 className="catalog-step-title">{s.title}</h4>
                <p className="catalog-step-desc">{s.desc}</p>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.footer
          className="catalog-footer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
        >
          <h3 className="catalog-footer-title">
            Quer uma proposta personalizada?
          </h3>
          <p className="catalog-footer-text">
            Conte o que sua marca precisa. Montamos um catálogo de entregas sob medida
            para marketing digital, audiovisual ou os dois juntos.
          </p>
          <div className="catalog-footer-actions">
            <CatalogPdfButton />
            <a href="/#contato" className="btn-primary">
              Solicitar proposta
              <RiArrowRightLine aria-hidden="true" />
            </a>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}
