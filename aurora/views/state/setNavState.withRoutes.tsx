'use client'

import { useEffect } from 'react'
import { State } from '@global/store'

export const SetNavStateWithRoutes = ({
  Page,
  Pages,
  id,
  Routes,
}: {
  Page: number
  Pages: number
  id: number
  Routes: string[]
}) => {
  const _setPage = State((state) => state.setPage)
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

  useEffect(() => {
    _setNavRouteActiveState({
      id: id,
    })
    const setState = (title: string, page: number) => {
      _setPage(title)
      _setNavRouteActiveState({
        id: id,
        scrollProgress: page,
        pages: Pages,
      })
    }

    Routes.map((v, i) => Page === i && setState(v, i))
  }, [Page, Pages, _setPage, _setNavRouteActiveState, Routes, id])
  return null
}
