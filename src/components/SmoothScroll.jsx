import { createContext, useContext, useEffect, useState } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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

    instance.on('scroll', ScrollTrigger.update)

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length) {
          instance.scrollTo(value, { immediate: true })
        }
        return instance.scroll
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
    })

    const onRefresh = () => instance.resize()
    ScrollTrigger.addEventListener('refresh', onRefresh)

    const tick = (time) => {
      instance.raf(time * 1000)
    }

    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.removeEventListener('refresh', onRefresh)
      gsap.ticker.remove(tick)
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
