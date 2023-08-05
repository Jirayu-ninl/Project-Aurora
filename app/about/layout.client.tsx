'use client'

import { Suspense } from 'react'
import { Loader, OrthographicCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Background from './components/scene'
import { UI } from '@global/store'

export default function SceneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='relative flex h-screen w-screen items-center justify-center bg-gradient-to-r from-background-2 to-background-1'>
      <div className='absolute z-10 flex w-full items-center justify-end'>
        {children}
      </div>
      <Scene />
    </div>
  )
}

const Scene = () => {
  const _dark = UI((state) => state.dark)
  return (
    <div className='absolute hidden h-screen w-screen overflow-hidden xl:block'>
      <Canvas
        gl={{
          powerPreference: 'high-performance',
          alpha: true,
          antialias: true,
          stencil: false,
          depth: false,
        }}
        linear={true}
      >
        <Suspense fallback={null}>
          <OrthographicCamera makeDefault position={[0, 0, 0]} zoom={230} />
          <Background _dark={_dark} />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  )
}
