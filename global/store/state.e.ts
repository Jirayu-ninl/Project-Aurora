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
  id?: number
  scrollProgress?: number
  pages?: number
  scrollable?: boolean
  pageHeight?: number | undefined
  motionValue?: MotionValue<string> | undefined
  scrollY?: MotionValue<number> | undefined
}

export const iNavRoute: tNavRoute = [
  {
    id: 0,
    number: '01',
    title: 'INTRO',
    path: '/home/intro',
  },
  {
    id: 1,
    number: '02',
    title: 'PASSIONATE',
    path: '/home/passionate',
  },
  {
    id: 2,
    number: '03',
    title: 'SKILLs',
    path: '/home/skills',
  },
  {
    id: 3,
    number: '03',
    title: 'PROJECTS',
    path: '/home/projects',
  },
  {
    id: 4,
    number: '04',
    title: 'SERVICES',
    path: '/home/services',
  },
]

export type tNavRoute = {
  id: number
  number: string
  title: string
  path: string
}[]
