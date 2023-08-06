'use client'

import { useEffect } from 'react'
import { State } from '@global/store'

export const SetNavStateDefault = ({ pageTitle }: { pageTitle: string }) => {
  const _setPage = State((state) => state.setPage)
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

  useEffect(() => {
    _setPage(pageTitle)
    _setNavRouteActiveState({
      id: 99,
    })
  }, [_setPage, _setNavRouteActiveState, pageTitle])
  return null
}
