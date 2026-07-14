import { lazy, Suspense } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Hospitality from '../components/Hospitality'
import Process from '../components/Process'
import Differentiators from '../components/Differentiators'
import Technologies from '../components/Technologies'
import Proof from '../components/Proof'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import MobileStickyCta from '../components/MobileStickyCta'

const Chatbot = lazy(() => import('../components/Chatbot'))

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="home-main">
        <Hero />
        <About />
        <Services />
        <Hospitality />
        <Process />
        <Differentiators />
        <Technologies />
        <Proof />
        <Contact />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
      <MobileStickyCta />
    </>
  )
}
