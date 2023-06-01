'use client'

import { useEffect } from 'react'
import { State } from '@global/store'

function Page() {
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

  useEffect(() => {
    _setNavRouteActiveState({
      id: 3,
      scrollProgress: 70,
    })
  }, [_setNavRouteActiveState])

  return (
    <main className='relative flex h-screen w-screen items-center justify-center overflow-hidden'>
      <h1 className='text-xl'>Projects</h1>
    </main>
  )
}

export default Page
