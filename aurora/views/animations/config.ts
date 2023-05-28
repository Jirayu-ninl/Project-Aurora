import type { tInitial, tAnimate, tExit } from './config.d'

const defaultV = {
  EASE: [0.43, 0.13, 0.23, 0.96],
}

const SetConfig = () => {
  return 1
}

export default SetConfig

export const defineConfig = (
  initial: tInitial,
  animate: tAnimate,
  exit: tExit,
  ease: number[],
  duration: number,
) => ({
  initial,
  animate,
  exit,
  transition: (d: number) => ({
    duration: duration,
    ease: ease || defaultV.EASE,
    delay: d,
  }),
})

export const WrongZoomIn = (
  duration = 0.6,
  ease = [0.43, 0.13, 0.23, 0.96],
) => {
  return {
    duration,
    ease,
  }
}
