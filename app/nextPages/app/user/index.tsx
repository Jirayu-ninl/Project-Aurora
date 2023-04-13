import React from 'react'
import { useSession } from 'next-auth/react'

export default function Profile() {
  const { data: session } = useSession()
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-r from-indigo-600 to-indigo-400'>
      {session && (
        <>
          <h2 className='text-5xl font-bold'>Hello, {session.user.name}</h2>
          <p className='opacity-60'>This function coming soon</p>
        </>
      )}
    </div>
  )
}
