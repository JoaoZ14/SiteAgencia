import { useState, useCallback, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import SplashScreen from './components/SplashScreen'

function HashScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = hash.slice(1)
    const scroll = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    const timer = setTimeout(scroll, 80)
    return () => clearTimeout(timer)
  }, [pathname, hash])

  return null
}

export default function App() {
  const [splashDone, setSplashDone] = useState(false)
  const handleSplashComplete = useCallback(() => setSplashDone(true), [])

  return (
    <BrowserRouter>
      <HashScroll />
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
      </Routes>
    </BrowserRouter>
  )
}
