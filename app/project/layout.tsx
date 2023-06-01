'use client'

import { useEffect } from 'react'
import { State } from '@global/store'

function Layout({ children }: { children: React.ReactNode }) {
  const _setPage = State((state) => state.setPage)
  const _setNavRoute = State((state) => state.setNavRoute)
  const _setBackRoute = State((state) => state.setBackRoute)

  useEffect(() => {
    _setPage('Project')
    _setBackRoute('/project')
    _setNavRoute([
      {
        id: 0,
        number: '01',
        title: 'HIGHLIGHT',
        path: '/project/highlight',
      },
      {
        id: 1,
        number: '02',
        title: 'CATEGORIES',
        path: '/project/categories',
      },
    ])
  }, [_setPage, _setNavRoute, _setBackRoute])

  return <div className='relative h-screen w-screen'>{children}</div>
}

export default Layout
