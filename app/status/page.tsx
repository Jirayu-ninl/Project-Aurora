'use client'

import { useEffect } from 'react'
import { State } from '@global/store'

function Status() {
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

  useEffect(() => {
    _setNavRouteActiveState({
      id: 99,
      scrollProgress: 0,
    })
  }, [_setNavRouteActiveState])

  return (
    <div className='Anim mb-2 flex w-full items-center justify-center px-6 py-4'>
      <h6 className='text-xl font-light'>no selected</h6>
    </div>
  )
}

export default Status
