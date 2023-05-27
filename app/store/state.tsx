import { create } from 'zustand'

const store: tStore = (set) => ({
  page: 'Home',
  setPage: (p) => set(() => ({ page: p })),
})

type tStore = (set: any) => {
  page: string
  setPage: (p: string) => void
}

const store_State = create(store)

export default store_State
