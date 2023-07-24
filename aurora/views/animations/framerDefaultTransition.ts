import { Transition } from 'framer-motion'

export const springSlow: Transition = {
  type: 'spring',
  stiffness: 350,
  damping: 80,
  mass: 5,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const springMedium: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 1,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const springQuick: Transition = {
  type: 'spring',
  stiffness: 150,
  damping: 15,
  restDelta: 0.01,
  restSpeed: 0.01,
}

export const tween: Transition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.4,
}

const framerDefaultTransitions = {
  springSlow,
  springMedium,
  springQuick,
  tween,
}

export default framerDefaultTransitions
