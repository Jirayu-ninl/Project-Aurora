'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { State } from '@global/store'

function Page() {
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

  useEffect(() => {
    _setNavRouteActiveState({
      id: 99,
      scrollProgress: 0,
    })
  }, [_setNavRouteActiveState])

  return (
    <main className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden'>
      <h1 className='text-10xl font-semibold'>HOME</h1>
      <div className='pointer-events-auto flex space-x-2 uppercase'>
        <Link href='/home/intro' className='Anim AnimOpacity-40 cursor-pointer'>
          Introduction
        </Link>
        <p> | </p>
        <Link
          href='/home/passionate'
          className='Anim AnimOpacity-40 cursor-pointer'
        >
          Passionate
        </Link>
        <p> | </p>
        <Link
          href='/home/skills'
          className='Anim AnimOpacity-40 cursor-pointer'
        >
          Skills
        </Link>
        <p> | </p>
        <Link
          href='/home/projects'
          className='Anim AnimOpacity-40 cursor-pointer'
        >
          Projects
        </Link>
        <p> | </p>
        <Link
          href='/home/services'
          className='Anim AnimOpacity-40 cursor-pointer'
        >
          Services
        </Link>
      </div>
    </main>
  )
}

export default Page
