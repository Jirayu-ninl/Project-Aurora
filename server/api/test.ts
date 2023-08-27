import { initTRPC } from '@trpc/server'
import { z } from 'zod'

const t = initTRPC.create()

interface User {
  id: string
  name: string
}
const userList: User[] = [
  {
    id: '1',
    name: 'IceJi',
  },
  {
    id: '2',
    name: 'Foo',
  },
]

export const appRouter = t.router({
  userById: t.procedure.input(z.number()).query((req) => {
    const { input } = req
    return userList.find((u) => parseInt(u.id) === input)
  }),
})

export type AppRouter = typeof appRouter
