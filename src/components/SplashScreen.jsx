import { useEffect, useState, useCallback, useRef } from 'react'
import './SplashScreen.css'

const HOLD_MS = 700
const FADE_MS = 400

export default function SplashScreen({ onComplete }) {
  const [phase, setPhase] = useState('hold')
  const doneRef = useRef(false)
  const timersRef = useRef([])

  const finish = useCallback(() => {
    if (doneRef.current) return
    doneRef.current = true
    timersRef.current.forEach(clearTimeout)
    document.body.style.overflow = ''
    onComplete()
  }, [onComplete])

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    timersRef.current = [
      setTimeout(() => setPhase('fade-out'), HOLD_MS),
      setTimeout(finish, HOLD_MS + FADE_MS),
    ]

    return () => {
      timersRef.current.forEach(clearTimeout)
      document.body.style.overflow = ''
    }
  }, [finish])

  const skip = () => {
    setPhase('fade-out')
    finish()
  }

  return (
    <div
      className={`splash ${phase === 'fade-out' ? 'splash--exit' : ''}`}
      role="dialog"
      aria-label="Carregando GMK"
    >
      <button type="button" className="splash-skip" onClick={skip}>
        Pular
      </button>
      <div className="splash-inner">
        <span className="splash-logo">GMK</span>
        <span className="splash-meta">SOFTWARE HOUSE</span>
      </div>
      <span className="splash-status" aria-hidden="true">LOADING…</span>
    </div>
  )
}
