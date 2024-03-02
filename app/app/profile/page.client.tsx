'use client'

import type { Session } from 'next-auth'
import { UserProfilePage } from '../components/profile'

const Client = ({ session }: { session: Session | null }) => {
  const user = session?.user

  return (
    <>
      <UserProfilePage user={user} />
    </>
  )
}

export { Client }
