import { MotionValue } from 'framer-motion'

export const iHomeCamera: tHomeCamera = {
  position: [0, -0.1, 3],
  rotation: [0, 0, 0],
}

export type tHomeCamera = {
  position: [number, number, number]
  rotation: [number, number, number]
}

export const iNavRouteActiveState: tNavRouteActiveState = {
  id: 0,
  scrollProgress: 20,
  pages: 1,
  scrollable: false,
  pageHeight: undefined,
  motionValue: undefined,
  scrollY: undefined,
}

export type tNavRouteActiveState = {
  id: number
  scrollProgress?: number
  pages?: number
  scrollable?: boolean
  pageHeight?: number | undefined
  motionValue?: MotionValue<string> | string | undefined
  scrollY?: MotionValue<number> | undefined
}

export const iNavRoute: tNavRoute = [
  {
    title: 'INTRO',
    path: '/home/intro',
  },
  {
    title: 'PASSIONATE',
    path: '/home/passionate',
  },
  {
    title: 'SKILLs',
    path: '/home/skills',
  },
  {
    title: 'PROJECTS',
    path: '/home/projects',
  },
  {
    title: 'SERVICES',
    path: '/home/services',
  },
]

export type tNavRoute = {
  title: string
  path: string
}[]
