import { motion } from 'framer-motion'
import { RiWhatsappLine, RiMailLine, RiInstagramLine, RiChat3Line } from 'react-icons/ri'
import './Contact.css'

const CONTACTS = [
  {
    icon: <RiWhatsappLine />,
    label: 'WhatsApp',
    value: '(00) 90000-0000',
    href: 'https://wa.me/5500900000000?text=Olá,%20vim%20pelo%20site%20da%20GMK%20Digital!',
  },
  {
    icon: <RiMailLine />,
    label: 'E-mail',
    value: 'contato@gmkdigital.com.br',
    href: 'mailto:contato@gmkdigital.com.br',
  },
  {
    icon: <RiInstagramLine />,
    label: 'Instagram',
    value: '@gmkdigital',
    href: 'https://instagram.com/gmkdigital',
  },
]

export default function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="container">
        <div className="contact-top">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="label">
              <RiChat3Line aria-hidden="true" />
              Contato
            </span>
            <h2 className="contact-title">
              Vamos trabalhar
              <br />
              <em>juntos?</em>
            </h2>
            <p className="contact-sub">
              Sem formulário chato. Escolha o canal que preferir.
              Respondemos rápido.
            </p>
          </motion.div>

          <motion.a
            href="https://wa.me/5500900000000?text=Olá,%20vim%20pelo%20site%20da%20GMK%20Digital!"
            className="btn-primary contact-main-btn"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <RiWhatsappLine />
            Falar pelo WhatsApp
          </motion.a>
        </div>

        <motion.div
          className="contact-links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
        >
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link-icon">{c.icon}</span>
              <span className="contact-link-label">{c.label}</span>
              <span className="contact-link-value">{c.value}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
