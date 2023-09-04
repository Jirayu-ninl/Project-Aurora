import { create } from 'zustand'
import { iHomeCamera, iNavRouteActiveState, iNavRoute } from './state.extend'
export type {
  tHomeCamera,
  tNavRouteActiveState,
  tNavRoute,
} from './state.extend'

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
  setNavRouteActiveState: (a) => set(() => ({ navRouteActiveState: { ...a } })),
  homeCamera: iHomeCamera,
  setHomeCamera: (c) => set(() => ({ homeCamera: c })),
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
  navRoute: typeof iNavRoute | []
  setNavRoute: (p: typeof iNavRoute | []) => void
  navRouteActiveState: typeof iNavRouteActiveState
  setNavRouteActiveState: (a: typeof iNavRouteActiveState) => void
  homeCamera: typeof iHomeCamera
  setHomeCamera: (c: typeof iHomeCamera) => void
}

const store_State = create(store)

export default store_State
