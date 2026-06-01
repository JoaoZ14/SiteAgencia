import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import CatalogPageHero from '../components/CatalogPageHero'
import Catalog from '../components/Catalog'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'

const PAGE_TITLE = 'Catálogo de Serviços · GMK Digital · Resende, RJ'
const DEFAULT_TITLE = 'GMK Digital · Agência de Marketing Digital em Resende, RJ'
const PAGE_DESCRIPTION = 'Catálogo completo de serviços de marketing digital da GMK em Resende, RJ: tráfego pago, social media, produção audiovisual, fotografia, sites e design gráfico.'
const DEFAULT_DESCRIPTION = 'GMK Digital é uma agência de marketing digital em Resende, RJ. Especializada em produção audiovisual, fotografia, social media, tráfego pago e branding. Entre em contato.'

function setMetaDescription(content) {
  const el = document.querySelector('meta[name="description"]')
  if (el) el.setAttribute('content', content)
}

export default function CatalogPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = PAGE_TITLE
    setMetaDescription(PAGE_DESCRIPTION)
    return () => {
      document.title = DEFAULT_TITLE
      setMetaDescription(DEFAULT_DESCRIPTION)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <CatalogPageHero />
        <Catalog page />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
