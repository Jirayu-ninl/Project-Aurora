'use client'

import { useEffect } from 'react'
import { State } from '@global/store'

function Page() {
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)
  const _setHomeCamera = State((state) => state.setHomeCamera)

  useEffect(() => {
    _setNavRouteActiveState({
      id: 1,
      scrollProgress: 40,
    })
    _setHomeCamera({
      position: [1, 0, 2],
      rotation: [1.8, -1.4, 1.8],
    })
  }, [_setNavRouteActiveState, _setHomeCamera])

  return (
    <main className='relative flex h-screen w-screen items-center justify-center overflow-hidden'>
      <h1 className='text-xl'>Passionate</h1>
    </main>
  )
}

export default Page
