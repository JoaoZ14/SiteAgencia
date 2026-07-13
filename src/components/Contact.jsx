import { motion } from 'framer-motion'
import { RiWhatsappLine, RiMailLine, RiArrowRightUpLine } from 'react-icons/ri'
import { fadeUp } from '../utils/motion'
import './Contact.css'

const WA_URL =
  'https://wa.me/5524981634937?text=Olá,%20vim%20pelo%20site%20da%20GMK%20e%20gostaria%20de%20falar%20sobre%20um%20projeto%20de%20software.'

export default function Contact() {
  return (
    <section className="contact" id="contato">
      <span className="contact-watermark" aria-hidden="true">GMK</span>

      <div className="container contact-inner">
        <motion.p
          className="contact-kicker"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
        >
          08 / VAMOS CONSTRUIR
        </motion.p>

        <motion.h2
          className="contact-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
        >
          Vamos construir seu
          <br />
          próximo software.
        </motion.h2>

        <motion.p
          className="contact-sub"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
        >
          Toda empresa possui processos. Nós transformamos processos em software.
        </motion.p>

        <motion.div
          className="contact-actions"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
        >
          <a href={WA_URL} className="btn-primary contact-btn" target="_blank" rel="noopener noreferrer">
            <RiWhatsappLine aria-hidden="true" />
            Falar com especialista
          </a>
          <a href="mailto:contato@gmkagency.com" className="btn-ghost contact-btn">
            <RiMailLine aria-hidden="true" />
            contato@gmkagency.com
          </a>
        </motion.div>

        <motion.a
          href={WA_URL}
          className="contact-phone"
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
        >
          WHATSAPP — (24) 98163-4937
          <RiArrowRightUpLine aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  )
}
