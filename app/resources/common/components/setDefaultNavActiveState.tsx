'use client'

import { useEffect } from 'react'
import { State } from '@global/store'

function SetState() {
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

  useEffect(() => {
    _setNavRouteActiveState({
      id: 99,
      scrollProgress: 20,
      scrollable: false,
    })
  }, [_setNavRouteActiveState])
  return null
}

export default SetState
