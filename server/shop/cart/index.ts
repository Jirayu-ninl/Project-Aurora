const Cart: tCart[] = [
  // {
  //   id: 'firstProduct',
  //   itemId: 'firstProduct',
  //   createdAt: new Date(1686999450000),
  //   updatedAt: new Date(1686999451034),
  //   name: '1,350 Mobile Lr Preset',
  //   quantity: 1,
  //   link: '',
  //   userId: '',
  // },
]

export type tCart = {
  id: string
  itemId: string
  createdAt: Date
  updatedAt: Date
  name: string
  link: string
  quantity: number
  userId: string
  user?: never
}

export default Cart
