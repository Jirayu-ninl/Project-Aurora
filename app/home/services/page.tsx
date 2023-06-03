'use client'

import { useEffect } from 'react'
import { State } from '@global/store'

function Page() {
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)
  const _setHomeCamera = State((state) => state.setHomeCamera)

  useEffect(() => {
    _setNavRouteActiveState({
      id: 4,
      scrollProgress: 80,
    })
    _setHomeCamera({
      position: [4, 8, -2.2],
      rotation: [-Math.PI / 2, 0, 0],
    })
  }, [_setNavRouteActiveState, _setHomeCamera])

  return (
    <main className='relative flex h-screen w-screen items-center justify-center overflow-hidden'>
      <h1 className='text-xl'>Services</h1>
    </main>
  )
}

export default Page
