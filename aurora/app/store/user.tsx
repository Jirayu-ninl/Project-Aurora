import create from 'zustand'
import Notification from '@services/notification'

const store: tStore = (set) => ({
  user: false,
  setUser: (n) => set(() => ({ user: n })),
  notification: false,
  setNotification: (n) => set(() => ({ notification: n })),
  notificationItems: [...Notification],
  setNotificationItems: (n) => set(() => ({ notificationItems: n })),
  cart: false,
  setCart: (n) => set(() => ({ cart: n })),
  cartItems: [
    // {
    //   title: '1,350 Mobile Lr Preset',
    //   description: '59$',
    //   link: '',
    //   time: 'Apr 10, 2022',
    // },
  ],
  setCartItems: (n) => set(() => ({ cartItems: n })),
})

type tStore = (set: any) => {
  user: oUser
  setUser: (n: oUser) => void
  notification: number | boolean
  setNotification: (n: number | boolean) => void
  notificationItems: oNotification[] | boolean
  setNotificationItems: (n: []) => void
  cart: number | boolean
  setCart: (n: number | boolean) => void
  cartItems: oCart[] | boolean
  setCartItems: (n: []) => void
}

type oUser =
  | {
      name: string
      email: string
      image: string
    }
  | boolean

type oNotification = {
  title: string
  description: string
  link: string
  time: string
}

type oCart = {
  title: string
  description: string
  link: string
  time: string
}

const store_User = create(store)

export default store_User
