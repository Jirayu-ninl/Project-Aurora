const Notification: tNotification[] = [
  {
    id: 'app',
    createdAt: new Date(1686999451034),
    title: 'TheIceJi Aurora',
    text: 'Redesigned and updated to NextJs 13 App-dir',
    link: '',
    isRead: false,
    userId: '0',
  },
]

export type tNotification = {
  id: string
  createdAt: Date
  isRead: boolean
  title: string
  text: string
  link: string
  userId: string
  user?: never
}

export default Notification
