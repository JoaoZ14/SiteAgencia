import { useState, useCallback, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import './App.css'
import HomePage from './pages/HomePage'
import SplashScreen from './components/SplashScreen'
import SmoothScroll, { useLenis } from './components/SmoothScroll'

function HashScroll() {
  const { pathname, hash } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!hash) {
      if (lenis && !reduced) {
        lenis.scrollTo(0, { duration: 1.3 })
      } else {
        window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
      }
      return
    }

    const id = hash.slice(1)
    const timer = setTimeout(() => {
      const el = document.getElementById(id)
      if (!el) return

      if (lenis && !reduced) {
        lenis.scrollTo(el, { offset: -96, duration: 1.4 })
      } else {
        el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
      }
    }, 80)

    return () => clearTimeout(timer)
  }, [pathname, hash, lenis])

  return null
}

export default function App() {
  const [splashDone, setSplashDone] = useState(false)
  const handleSplashComplete = useCallback(() => setSplashDone(true), [])

  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <SmoothScroll>
          <HashScroll />
          {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogo" element={<Navigate to="/#portfolio" replace />} />
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </MotionConfig>
  )
}
