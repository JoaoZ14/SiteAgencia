import { useEffect, useState } from 'react'
import './SplashScreen.css'

const LOGO_SRC = '/Design sem nome (7).png'
const HOLD_MS = 1200
const LOGO_FADE_MS = 1600
const OVERLAY_FADE_MS = 600

export default function SplashScreen({ onComplete }) {
  const [phase, setPhase] = useState('hold')

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const fadeLogo = setTimeout(() => setPhase('fade-logo'), HOLD_MS)
    const fadeOverlay = setTimeout(
      () => setPhase('fade-out'),
      HOLD_MS + LOGO_FADE_MS
    )
    const done = setTimeout(
      () => onComplete(),
      HOLD_MS + LOGO_FADE_MS + OVERLAY_FADE_MS
    )

    return () => {
      clearTimeout(fadeLogo)
      clearTimeout(fadeOverlay)
      clearTimeout(done)
      document.body.style.overflow = ''
    }
  }, [onComplete])

  return (
    <div
      className={`splash ${phase === 'fade-out' ? 'splash--exit' : ''}`}
      aria-hidden="true"
    >
      <img
        src={LOGO_SRC}
        alt=""
        className={`splash-logo ${phase !== 'hold' ? 'splash-logo--fade' : ''}`}
      />
    </div>
  )
}
