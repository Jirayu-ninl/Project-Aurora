'use client'

import type { Session } from 'next-auth'
import { SetupProfile } from './setup.profile'

const Client = ({ session }: { session: Session }) => {
  return (
    <>
      <h2 className='text-xl font-bold uppercase text-quaternary-2 dark:text-primary-0'>
        Setup Profile
      </h2>
      <SetupProfile session={session} />
    </>
  )
}

export { Client }
