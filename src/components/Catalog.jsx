import { motion } from 'framer-motion'
import {
  RiBookOpenLine,
  RiGlobalLine,
  RiVideoLine,
  RiCheckLine,
  RiArrowRightLine,
  RiAddLine,
  RiStackLine,
  RiTeamLine,
  RiFocus3Line,
  RiLineChartLine,
  RiBuilding2Line,
  RiCameraLensLine,
  RiFileTextLine,
  RiRocketLine,
} from 'react-icons/ri'
import {
  CATALOG_INTRO,
  CATALOG_PRESENTATION,
  CATALOG_DIFFERENTIALS,
  CATALOG_CASES,
  CATALOG_PILLARS,
  SERVICE_CATEGORIES,
  PACKAGES,
  ADDONS,
  PROCESS_STEPS,
} from '../data/catalog'

const PDF_ICONS = {
  layers: RiStackLine,
  team: RiTeamLine,
  focus: RiFocus3Line,
  chart: RiLineChartLine,
  building: RiBuilding2Line,
  camera: RiCameraLensLine,
  fileText: RiFileTextLine,
  rocket: RiRocketLine,
}

function CatalogIcon({ name }) {
  const Icon = PDF_ICONS[name]
  if (!Icon) return null
  return <Icon aria-hidden="true" />
}
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

        <motion.div
          className="catalog-block catalog-presentation"
          id="apresentacao"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
        >
          <div className="catalog-section-head">
            <span className="label">{CATALOG_PRESENTATION.label}</span>
            <h3 className="catalog-section-title">{CATALOG_PRESENTATION.title}</h3>
          </div>
          {CATALOG_PRESENTATION.paragraphs.map((p) => (
            <p key={p.slice(0, 20)} className="catalog-block-text">{p}</p>
          ))}
          <ul className="catalog-highlights">
            {CATALOG_PRESENTATION.highlights.map((h) => (
              <li key={h.label} className="catalog-highlight">
                <span className="catalog-pillar-icon" aria-hidden="true">
                  <CatalogIcon name={h.icon} />
                </span>
                <div>
                  <span className="catalog-highlight-label">{h.label}</span>
                  <strong className="catalog-highlight-value">{h.value}</strong>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="catalog-block catalog-diffs"
          id="diferenciais"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
        >
          <div className="catalog-section-head">
            <span className="label">Diferenciais</span>
            <h3 className="catalog-section-title">Por que escolher a GMK</h3>
          </div>
          <ul className="catalog-diffs-grid">
            {CATALOG_DIFFERENTIALS.map((d) => (
              <li key={d.title} className="catalog-diff-card">
                <span className="catalog-pillar-icon" aria-hidden="true">
                  <CatalogIcon name={d.icon} />
                </span>
                <h4 className="catalog-diff-title">{d.title}</h4>
                <p className="catalog-diff-desc">{d.desc}</p>
                <p className="catalog-diff-result">{d.result}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {SERVICE_CATEGORIES.map((cat, ci) => (
          <motion.div
            className="catalog-category"
            id={cat.pillar === 'marketing' ? 'servicos-marketing' : 'servicos-av'}
            key={cat.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fade}
            custom={ci}
          >
            <h3 className="catalog-category-title">{cat.title}</h3>
            {cat.subtitle && (
              <p className="catalog-category-subtitle">{cat.subtitle}</p>
            )}
            <ul className="catalog-services">
              {cat.items.map((item) => (
                <li className="catalog-service" key={item.name}>
                  <div className="catalog-service-head">
                    {item.benefit && (
                      <p className="catalog-service-benefit">{item.benefit}</p>
                    )}
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
          className="catalog-process"
          id="processo"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
        >
          <h3 className="catalog-section-title catalog-section-title--center">
            Como funciona
          </h3>
          <ol className="catalog-steps">
            {PROCESS_STEPS.map((step) => (
              <li className="catalog-step" key={step.step}>
                <span className="catalog-step-num">{step.step}</span>
                <h4 className="catalog-step-title">{step.title}</h4>
                <p className="catalog-step-desc">{step.desc}</p>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div
          className="catalog-block catalog-cases"
          id="cases"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
        >
          <div className="catalog-section-head">
            <span className="label">Cases</span>
            <h3 className="catalog-section-title">Onde geramos valor</h3>
            <p className="catalog-section-desc">
              Formatos de entrega e resultados por segmento, sem expor dados
              confidenciais de clientes.
            </p>
          </div>
          <ul className="catalog-cases-grid">
            {CATALOG_CASES.map((c) => (
              <li key={c.segment} className="catalog-case-card">
                <span className="catalog-pillar-icon" aria-hidden="true">
                  <CatalogIcon name={c.icon} />
                </span>
                <h4 className="catalog-case-segment">{c.segment}</h4>
                <p className="catalog-case-delivery">{c.delivery}</p>
                <p className="catalog-case-outcome">{c.outcome}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="catalog-packages-wrap"
          id="planos"
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

        <motion.footer
          className="catalog-footer"
          id="contato"
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
