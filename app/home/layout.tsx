'use client'

import { useEffect } from 'react'
import { State } from '@global/store'

import Scene from './components/scene'

function Layout({ children }: { children: React.ReactNode }) {
  const _setPage = State((state) => state.setPage)
  const _setNavRoute = State((state) => state.setNavRoute)
  const _setBackRoute = State((state) => state.setBackRoute)

  useEffect(() => {
    _setPage('Home')
    _setBackRoute('/home')
    _setNavRoute([
      {
        id: 0,
        number: '01',
        title: 'INTRO',
        path: '/home/intro',
      },
      {
        id: 1,
        number: '02',
        title: 'PASSIONATE',
        path: '/home/passionate',
      },
      {
        id: 2,
        number: '03',
        title: 'SKILLs',
        path: '/home/skills',
      },
      {
        id: 3,
        number: '03',
        title: 'PROJECTS',
        path: '/home/projects',
      },
      {
        id: 4,
        number: '04',
        title: 'SERVICES',
        path: '/home/services',
      },
    ])
  }, [_setPage, _setBackRoute, _setNavRoute])

  return (
    <div className='relative h-screen w-screen'>
      <div className='absolute h-full w-full'>
        <Scene />
      </div>
      <div className='pointer-events-none absolute h-full w-full'>
        {children}
      </div>
    </div>
  )
}

export default Layout
