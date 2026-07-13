import { createContext, useContext, useEffect, useState } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

const LenisContext = createContext(null)

export function useLenis() {
  return useContext(LenisContext)
}

export default function SmoothScroll({ children }) {
  const [lenis, setLenis] = useState(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return undefined

    const instance = new Lenis({
      lerp: 0.06,
      wheelMultiplier: 0.82,
      touchMultiplier: 1.05,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.055,
      anchors: true,
    })

    setLenis(instance)

    let rafId
    const raf = (time) => {
      instance.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      instance.destroy()
      setLenis(null)
    }
  }, [])

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  )
}
