import { create } from 'zustand'
import Notifications from '@server/services/notifications'
import Cart from '@server/shop/cart'

const store: tStore = (set) => ({
  user: false,
  setUser: (n) => set(() => ({ user: n })),
  notifications: Notifications,
  setNotifications: (v) => set(() => ({ notifications: v })),
  addNotification: (i, state) => set(() => state.notifications.push(i)),
  cart: Cart,
  setCart: (v) => set(() => ({ cart: v })),
  addCart: (i, state) => set(() => state.cart.push(i)),
})

export type tStore = (set: any) => tStoreState

export type tStoreState = {
  user: tUser
  setUser: (n: tUser) => void
  notifications: tNotification[] | []
  setNotifications: (v: tNotification[] | []) => void
  addNotification: (i: never, state: tStoreState) => void
  cart: tCart[] | []
  setCart: (v: tCart[] | []) => void
  addCart: (i: never, state: tStoreState) => void
}

export type tUser =
  | {
      name: string
      email: string
      image: string
    }
  | boolean

export type tNotification = {
  title: string
  description: string
  link: string
  time: string
}

export type tCart = {
  title: string
  description: string
  link: string
  time: string
}

const store_User = create(store)

export default store_User
