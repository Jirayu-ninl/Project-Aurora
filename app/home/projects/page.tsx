'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

import { State } from '@global/store'
import { aHeaderSkewUp } from '@global/config/defineAnimationConfig'

function Page() {
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)
  const _setHomeCamera = State((state) => state.setHomeCamera)

  useEffect(() => {
    _setNavRouteActiveState({
      id: 3,
      scrollProgress: 70,
    })
    _setHomeCamera({
      position: [-5, 5, 8],
      rotation: [-Math.PI / 6, 0, 0],
    })
  }, [_setNavRouteActiveState, _setHomeCamera])

  return (
    <main className='relative flex h-screen w-screen items-start justify-center overflow-hidden'>
      <motion.h1
        className='pt-32 text-3xl font-bold uppercase md:pt-56 md:text-8xl xl:text-8xl el:pt-64 el:text-10xl'
        initial={aHeaderSkewUp.initial}
        animate={aHeaderSkewUp.animate}
        transition={aHeaderSkewUp.transition(0)}
      >
        <span className='text-primary-0'>"</span>Projects
        <span className='text-primary-0'>"</span>
      </motion.h1>
    </main>
  )
}

export default Page
