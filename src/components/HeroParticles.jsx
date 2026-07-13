import { useEffect, useRef } from 'react'

const COUNT = 36

function createParticle(w, h) {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.2 + 0.3,
    opacity: Math.random() * 0.25 + 0.08,
    speedX: (Math.random() - 0.5) * 0.15,
    speedY: (Math.random() - 0.5) * 0.12,
    pulse: Math.random() * Math.PI * 2,
  }
}

export default function HeroParticles() {
  const canvasRef = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let particles = []
    let w = 0
    let h = 0

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      w = parent.clientWidth
      h = parent.clientHeight
      canvas.width = w
      canvas.height = h
      particles = Array.from({ length: COUNT }, () => createParticle(w, h))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.speedX
        p.y += p.speedY
        p.pulse += 0.008

        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        const alpha = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(240, 240, 240, ${alpha})`
        ctx.fill()
      }

      frameRef.current = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const observer = new ResizeObserver(resize)
    observer.observe(canvas.parentElement)

    return () => {
      observer.disconnect()
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero__particles" aria-hidden="true" />
}
