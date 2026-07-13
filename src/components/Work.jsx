import { motion } from 'framer-motion'
import { RiArrowRightUpLine } from 'react-icons/ri'
import { PORTFOLIO } from '../data/site'
import { fadeUp } from '../utils/motion'
import './Work.css'

function Mockup() {
  return (
    <div className="work-mockup" aria-hidden="true">
      <div className="work-mockup-bar">
        <span className="work-mockup-crumb">app / dashboard</span>
      </div>
      <div className="work-mockup-body">
        <div className="work-mockup-side">
          <span /><span /><span /><span />
        </div>
        <div className="work-mockup-main">
          <div className="work-mockup-row work-mockup-row--head" />
          <div className="work-mockup-cards">
            <div /><div /><div />
          </div>
          <div className="work-mockup-chart">
            {[40, 70, 55, 85, 60].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section className="work" id="portfolio" aria-labelledby="work-heading">
      <div className="container">
        <div className="section-head">
          <span className="section-index">07 / PORTFÓLIO</span>
          <div className="section-head-main">
            <motion.h2
              className="section-title"
              id="work-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              Produtos que construímos.
            </motion.h2>
          </div>
        </div>

        <div className="work-grid">
          {PORTFOLIO.map((project, i) => (
            <motion.article
              key={project.title}
              className="work-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={(i % 2) * 0.06}
            >
              <Mockup />
              <div className="work-card-body">
                <div className="work-card-top">
                  <span className="work-card-category">{project.category}</span>
                  <RiArrowRightUpLine className="work-card-arrow" aria-hidden="true" />
                </div>
                <h3 className="work-card-title">{project.title}</h3>
                <p className="work-card-desc">{project.desc}</p>
                <ul className="work-card-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
