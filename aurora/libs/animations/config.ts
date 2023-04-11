export const WrongZoomIn = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
}

export const footerAnimation = {
  Init: { visibility: 'hidden', y: 100 },
  Animated: { visibility: 'visible', y: 0 },
  transition: (delay: number) => ({ delay: delay }),
}

export const yUp = {
  Init: { visibility: 'hidden', y: 100 },
  Animated: { visibility: 'visible', y: 0 },
  transition: (delay: number) => ({ delay: delay }),
}

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
