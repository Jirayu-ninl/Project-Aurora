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
    <div className='m-container w-svw relative flex overflow-hidden'>
      <div className='absolute z-10 flex h-full w-full'>{children}</div>
      <Scene />
    </div>
  )
}

const Scene = () => {
  const _dark = UI((state) => state.dark)
  return (
    <div className='absolute h-full w-full overflow-hidden'>
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
