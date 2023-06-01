'use client'

import { useEffect } from 'react'
import { State } from '@global/store'

function Page() {
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

  useEffect(() => {
    _setNavRouteActiveState({
      id: 2,
      scrollProgress: 40,
    })
  }, [_setNavRouteActiveState])

  return (
    <main className='relative flex h-screen w-screen items-center justify-center overflow-hidden'>
      <h1 className='text-xl'>Skills</h1>
    </main>
  )
}

export default Page
