import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import CatalogPageHero from '../components/CatalogPageHero'
import Catalog from '../components/Catalog'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'

const PAGE_TITLE = 'Catálogo · GMK Digital'
const DEFAULT_TITLE = 'GMK Digital · Agência de Marketing Digital em Resende, RJ'

export default function CatalogPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = PAGE_TITLE
    return () => { document.title = DEFAULT_TITLE }
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
