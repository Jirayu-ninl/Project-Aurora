'use client'

import { useEffect } from 'react'
import { State } from '@global/store'

export const SetNavState = ({ title, id }: { title: string; id: number }) => {
  const _setPage = State((state) => state.setPage)
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

  useEffect(() => {
    _setNavRouteActiveState({
      id: id,
    })
    _setPage(title)
  }, [_setPage, _setNavRouteActiveState, title, id])
  return null
}
