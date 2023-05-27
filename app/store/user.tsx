import { create } from 'zustand'
import Notification from '@server/services/notification'
import Cart from '@server/shop/cart'

const store: tStore = (set) => ({
  user: false,
  setUser: (n) => set(() => ({ user: n })),
  notification: false,
  setNotification: (n) => set(() => ({ notification: n })),
  notificationItems: Notification,
  setNotificationItems: (n) => set(() => ({ notificationItems: n })),
  cart: false,
  setCart: (n) => set(() => ({ cart: n })),
  cartItems: Cart,
  setCartItems: (n) => set(() => ({ cartItems: n })),
})

type tStore = (set: any) => {
  user: tUser
  setUser: (n: tUser) => void
  notification: number | boolean
  setNotification: (n: number | boolean) => void
  notificationItems: tNotification[] | boolean
  setNotificationItems: (n: []) => void
  cart: number | boolean
  setCart: (n: number | boolean) => void
  cartItems: tCart[] | boolean
  setCartItems: (n: []) => void
}

type tUser =
  | {
      name: string
      email: string
      image: string
    }
  | boolean

type tNotification = {
  title: string
  description: string
  link: string
  time: string
}

type tCart = {
  title: string
  description: string
  link: string
  time: string
}

const store_User = create(store)

export default store_User
