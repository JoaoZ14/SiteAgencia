import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Work from '../components/Work'
import Process from '../components/Process'
import About from '../components/About'
import Niches from '../components/Niches'
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
        <Services />
        <Work />
        <Process />
        <About />
        <Niches />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
      <MobileStickyCta />
    </>
  )
}
