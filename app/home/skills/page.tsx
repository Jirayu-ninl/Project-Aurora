'use client'

import { useEffect } from 'react'
import { State } from '@global/store'

function Page() {
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)
  const _setHomeCamera = State((state) => state.setHomeCamera)

  useEffect(() => {
    _setNavRouteActiveState({
      id: 2,
      scrollProgress: 40,
    })
    _setHomeCamera({
      position: [1, 1, 1],
      rotation: [0, Math.PI / 1.1, Math.PI /2],
    })
  }, [_setNavRouteActiveState, _setHomeCamera])

  return (
    <main className='relative flex h-screen w-screen items-center justify-center overflow-hidden'>
      <h1 className='text-xl'>Skills</h1>
    </main>
  )
}

export default Page
