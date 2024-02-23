'use client'

import { Marquee } from './marquee'
import { Overlay } from './overlay'
import { Canvas } from './canvas'
import { Background } from './background'

export default function NotFound() {
  return (
    <>
      <div className='relative h-dvh w-screen bg-[#1a1710]'>
        <Background />
        <Overlay />
        <Canvas />
        <Marquee />
      </div>
    </>
  )
}
