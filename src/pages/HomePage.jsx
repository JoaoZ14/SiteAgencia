import { useCallback, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Niches from '../components/Niches'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'
import SplashScreen from '../components/SplashScreen'

export default function HomePage() {
  const [splashDone, setSplashDone] = useState(false)
  const handleSplashComplete = useCallback(() => setSplashDone(true), [])

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Niches />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
