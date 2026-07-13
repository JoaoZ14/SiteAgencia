import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Hospitality from '../components/Hospitality'
import Process from '../components/Process'
import Differentiators from '../components/Differentiators'
import Technologies from '../components/Technologies'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'
import MobileStickyCta from '../components/MobileStickyCta'

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
        <Work />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
      <MobileStickyCta />
    </>
  )
}
