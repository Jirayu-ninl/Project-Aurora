import { create } from 'zustand'

const store: tStore = (set) => ({
  page: 'Home',
  setPage: (p) => set(() => ({ page: p })),
  navRoute: iNavRoute,
  setNavRoute: (r) => set(() => ({ navRoute: r })),
})

export type tStore = (set: any) => {
  page: string
  setPage: (p: string) => void
  navRoute: tNavRoute
  setNavRoute: (p: tNavRoute) => void
}

const iNavRoute = [
  {
    id: 0,
    number: '01',
    title: 'HOME',
    path: '/home',
  },
  {
    id: 1,
    number: '02',
    title: 'ABOUT',
    path: '/about',
  },
  {
    id: 2,
    number: '03',
    title: 'SKILLs',
    path: '/about/skills',
  },
  {
    id: 3,
    number: '03',
    title: 'PROJECTS',
    path: '/project',
  },
  {
    id: 4,
    number: '04',
    title: 'BLOG',
    path: '/post',
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
