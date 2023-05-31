import {
  defineConfig as setAnimationConfig,
  defineStaggerConfig as setAnimationStaggerConfig,
} from '@aurora/views/animations/config'

const WrongCurve: number[] = [0.43, 0.13, 0.23, 0.96]

export const aNav = (_showNav: boolean) =>
  setAnimationConfig(
    { y: '-100%' },
    { y: _showNav ? 0 : '-100%' },
    { y: '-100%' },
    WrongCurve,
    0.8,
  )
export const aNavChildren = setAnimationConfig(
  { y: '-100%', visibility: 'hidden' },
  { y: 0, visibility: 'visible' },
  { y: '-100%', visibility: 'hidden' },
  WrongCurve,
  0.2,
)

export const aFooter = setAnimationConfig(
  { visibility: 'hidden', y: 100 },
  { visibility: 'visible', y: 0 },
  { visibility: 'hidden', y: 100 },
  WrongCurve,
  0.5,
)

export const aFooterSocialIcon = setAnimationConfig(
  { visibility: 'hidden', y: 100 },
  { visibility: 'visible', y: 0 },
  { visibility: 'hidden', y: 100 },
  WrongCurve,
  0.5,
)

export const aHomeTitle = setAnimationConfig(
  { visibility: 'hidden', y: 200 },
  { visibility: 'visible', y: 0 },
  { visibility: 'hidden', y: 200 },
  WrongCurve,
  0.2,
)

export const aXA = setAnimationStaggerConfig(
  { visibility: 'hidden', y: 50, opacity: 0 },
  { visibility: 'visible', y: 0 },
  { visibility: 'hidden', y: 50, opacity: 0 },
  WrongCurve,
  0.3,
)

// **! OTHERS

export const stagger_yUp_O = {
  parent: (delay: number) => ({
    hidden: { visibility: 'hidden', y: 50, opacity: 0 },
    show: {
      visibility: 'visible',
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  }),
  children: {
    hidden: { visibility: 'hidden', y: 50, opacity: 0 },
    show: { visibility: 'visible', y: 0, opacity: 1 },
  },
}

export const stagger_yUp = {
  parent: (delay: number) => ({
    hidden: { visibility: 'hidden', y: 100 },
    show: {
      visibility: 'visible',
      y: 0,
      transition: {
        staggerChildren: delay,
      },
    },
  }),
  children: {
    hidden: { visibility: 'hidden', y: 100 },
    show: { visibility: 'visible', y: 0 },
  },
}

export const stagger_xLeft_O = {
  parent: (delay: number) => ({
    hidden: { visibility: 'hidden', x: 100, opacity: 0 },
    show: {
      visibility: 'visible',
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
    exit: { visibility: 'hidden', x: 100, opacity: 0 },
  }),
  children: {
    hidden: { visibility: 'hidden', x: 100, opacity: 0 },
    show: { visibility: 'visible', x: 0, opacity: 1 },
  },
}

export const stagger_xRight_O = {
  parent: (delay: number) => ({
    hidden: { visibility: 'hidden', x: -100, opacity: 0 },
    show: {
      visibility: 'visible',
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  }),
  children: {
    hidden: { visibility: 'hidden', x: -100, opacity: 0 },
    show: { visibility: 'visible', x: 0, opacity: 1 },
  },
}

export const stagger_xRight = {
  parent: (delay: number) => ({
    hidden: { visibility: 'hidden', x: -150 },
    show: {
      visibility: 'visible',
      x: 0,
      transition: {
        staggerChildren: delay,
      },
    },
  }),
  children: {
    hidden: { visibility: 'hidden', x: -150 },
    show: { visibility: 'visible', x: 0 },
  },
}
