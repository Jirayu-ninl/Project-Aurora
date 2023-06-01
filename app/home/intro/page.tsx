'use client'

import { useEffect } from 'react'
import { State } from '@global/store'
import { Title, Sidebar } from './components'

export default function Home() {
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

  useEffect(() => {
    _setNavRouteActiveState({
      id: 0,
      scrollProgress: 20,
    })
  }, [_setNavRouteActiveState])

  const sideNav = [
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

  return (
    <main className='relative h-screen w-screen overflow-hidden'>
      <Title />
      <Sidebar items={sideNav} />
    </main>
  )
}
