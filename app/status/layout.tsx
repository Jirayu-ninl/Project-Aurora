'use client'

import { useEffect } from 'react'
import { State } from '@global/store'

function Layout({ children }: { children: React.ReactNode }) {
  const _setPage = State((state) => state.setPage)
  const _setNavRoute = State((state) => state.setNavRoute)
  const _setBackRoute = State((state) => state.setBackRoute)

  useEffect(() => {
    _setPage('Status')
    _setBackRoute('/status')
    _setNavRoute([
      {
        id: 0,
        number: '01',
        title: 'SERVER',
        path: '/status?section=Server',
      },
      {
        id: 1,
        number: '02',
        title: 'APP',
        path: '/status?section=App',
      },
      {
        id: 2,
        number: '03',
        title: 'WebGL',
        path: '/status?section=WebGL',
      },
    ])
  }, [_setPage, _setNavRoute, _setBackRoute])

  return (
    <div className='relative flex h-screen w-screen justify-center overflow-y-hidden px-4 pb-4 pt-28'>
      <div className='container h-full w-full overflow-hidden xxl:w-[1440px]'>
        {children}
      </div>
    </div>
  )
}

export default Layout
