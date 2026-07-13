import { motion, useReducedMotion } from 'framer-motion'
import './HeroVisual.css'

const EASE = [0.25, 1, 0.5, 1]

export default function HeroVisual() {
  const reduce = useReducedMotion()

  const rise = (delay, extra = {}) =>
    reduce
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 24, ...extra },
          animate: { opacity: 1, y: 0, ...('rotate' in extra ? { rotate: extra.rotate } : {}) },
          transition: { duration: 0.7, delay, ease: EASE },
        }

  return (
    <div className="hv" aria-hidden="true">
      <motion.div className="hv-laptop" {...rise(0.3)}>
        <div className="hv-screen">
          <span className="hv-cam" />
          <div className="hv-screen-inner">
            <span className="hv-monogram">GMK<span className="hv-reg">®</span></span>
            <span className="hv-tagline">GO · MAKE · KNOWN</span>
          </div>
        </div>

        <div className="hv-deck">
          <span className="hv-hinge" />
          <span className="hv-trackpad" />
        </div>
      </motion.div>

      <motion.div className="hv-phone" {...rise(0.5, { rotate: -4 })}>
        <span className="hv-island" />
        <div className="hv-phone-inner">
          <span className="hv-monogram hv-monogram--sm">G<span className="hv-reg">®</span></span>
        </div>
        <span className="hv-home" />
      </motion.div>
    </div>
  )
}
