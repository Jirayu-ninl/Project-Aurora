'use client'

import { useEffect } from 'react'
import { State } from '@global/store'

function PageState() {
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

  useEffect(() => {
    _setNavRouteActiveState({
      id: 3,
      scrollProgress: 0,
    })
  }, [_setNavRouteActiveState])

  return null
}

export default PageState
