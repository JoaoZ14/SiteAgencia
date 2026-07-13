import { useEffect, useState } from 'react'
import './SplashScreen.css'

const HOLD_MS = 900
const FADE_MS = 550

export default function SplashScreen({ onComplete }) {
  const [phase, setPhase] = useState('hold')

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const fade = setTimeout(() => setPhase('fade-out'), HOLD_MS)
    const done = setTimeout(() => onComplete(), HOLD_MS + FADE_MS)

    return () => {
      clearTimeout(fade)
      clearTimeout(done)
      document.body.style.overflow = ''
    }
  }, [onComplete])

  return (
    <div className={`splash ${phase === 'fade-out' ? 'splash--exit' : ''}`} aria-hidden="true">
      <div className="splash-inner">
        <span className="splash-logo">GMK</span>
        <span className="splash-meta">SOFTWARE HOUSE</span>
      </div>
      <span className="splash-status">LOADING…</span>
    </div>
  )
}
