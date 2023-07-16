'use client'

import { useEffect } from 'react'
import { State } from '@global/store'
import { Title, Sidebar } from './components'

export default function Home() {
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)
  const _pageStateIndex = State((state) => state.inPageNavIndex)
  const _setPageStateIndex = State((state) => state.setInPageNavIndex)

  const sideNav = [
    {
      name: 'Introduction',
      url: '/home?title=Introduction',
    },
    {
      name: 'Adaptability',
      url: '/home?title=Adaptability',
    },
    {
      name: 'Collaboration',
      url: '/home?title=Collaboration',
    },
    {
      name: 'Creativity',
      url: '/home?title=Creativity',
    },
    {
      name: 'Problem-solving',
      url: '/home?title=Problem-solving',
    },
    {
      name: 'Enthusiasm',
      url: '/home?title=Enthusiasm',
    },
  ]

  useEffect(() => {
    _setNavRouteActiveState({
      id: 0,
      scrollProgress: _pageStateIndex,
      scrollable: false,
      pages: sideNav.length,
    })
  }, [_setNavRouteActiveState, _pageStateIndex, sideNav.length])

  return (
    <main className='relative h-screen w-screen overflow-hidden'>
      <Title />
      {/* <Sidebar
        items={sideNav}
        _pageStateIndex={_pageStateIndex}
        _setPageStateIndex={_setPageStateIndex}
      /> */}
    </main>
  )
}
