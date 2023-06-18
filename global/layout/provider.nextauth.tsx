// import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { api } from '@aurora/utils/server/trpc.api'

const NextAuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default api.withTRPC(NextAuthProvider)
