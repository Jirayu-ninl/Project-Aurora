import { create } from 'zustand'

const store: tStore = (set) => ({
  page: 'Home',
  setPage: (p) => set(() => ({ page: p })),
  inPageNav: 'none',
  setInPageNav: (p) => set(() => ({ pageState: p })),
  inPageNavIndex: 0,
  setInPageNavIndex: (id) => set(() => ({ inPageNavIndex: id })),
  backRoute: '/home',
  setBackRoute: (r) => set(() => ({ backRoute: r })),
  navRoute: iNavRoute,
  setNavRoute: (r) => set(() => ({ navRoute: r })),
  navRouteActiveState: iNavRouteActiveState,
  setNavRouteActiveState: (a) => set(() => ({ navRouteActiveState: a })),
})

export type tStore = (set: any) => {
  page: string
  setPage: (p: string) => void
  inPageNav: string
  setInPageNav: (p: string) => void
  inPageNavIndex: number
  setInPageNavIndex: (p: number) => void
  backRoute: string
  setBackRoute: (r: string) => void
  navRoute: tNavRoute
  setNavRoute: (p: tNavRoute) => void
  navRouteActiveState: tNavRouteActiveState
  setNavRouteActiveState: (a: tNavRouteActiveState) => void
}

const iNavRouteActiveState = {
  id: 0,
  scrollProgress: 20,
}

type tNavRouteActiveState = {
  id: number
  scrollProgress: number
}

const iNavRoute = [
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

const store_State = create(store)

export default store_State
