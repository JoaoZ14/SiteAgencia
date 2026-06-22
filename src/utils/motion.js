import { useReducedMotion } from 'framer-motion'

export const EASE_OUT = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: EASE_OUT },
  }),
}

export function useMotionSafe() {
  const reduced = useReducedMotion()
  return {
    reduced,
    transition(props) {
      return reduced ? { duration: 0 } : props
    },
    fadeUp({ y = 24, duration = 0.6, delay = 0 } = {}) {
      if (reduced) {
        return {
          initial: false,
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0 },
        }
      }
      return {
        initial: { opacity: 0, y },
        animate: { opacity: 1, y: 0 },
        transition: { duration, delay, ease: EASE_OUT },
      }
    },
    inView({ y = 24, duration = 0.6, delay = 0, margin = '-40px' } = {}) {
      if (reduced) {
        return {
          initial: false,
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0 },
        }
      }
      return {
        initial: { opacity: 0, y },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration, delay, ease: EASE_OUT },
        viewport: { once: true, margin },
      }
    },
  }
}
