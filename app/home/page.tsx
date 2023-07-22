/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useEffect, useState } from 'react'
import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { UI } from '@global/store'
import { useOptimization } from '@aurora/libs/hooks/three'
import Scene from './components/scene'

function Page() {
  const _gpuTier = UI((state) => state.gpuTier)
  const _dark = UI((state) => state.dark)
  const [antialias, setAntialias] = useState(true)

  useEffect(() => {
    const pixelRatio = window.devicePixelRatio
    if (pixelRatio > 1) {
      setAntialias(false)
    }
  }, [])

  const getDRP: () => number[] = () => {
    if (_gpuTier?.fps) {
      const { drp } = useOptimization(_gpuTier.tier, 'tier')
      return drp
    }
    return [1, 1]
  }

  return (
    <main className='relative h-screen w-screen bg-white dark:bg-[#101010]'>
      <div className='absolute h-full w-full overflow-hidden'>
        <Canvas
          dpr={getDRP() as [number, number]}
          gl={{
            powerPreference: 'high-performance',
            alpha: true,
            antialias: antialias,
            stencil: false,
            depth: true,
            logarithmicDepthBuffer: true,
          }}
          linear={true}
          shadows
        >
          <Scene _dark={_dark} />
        </Canvas>
        <Loader />
      </div>
      {/* <div className='pointer-events-none absolute h-full w-full flex justify-center items-center'>
        <h1 className='text-10xl'>TheIceJi</h1>
      </div> */}
    </main>
  )
}

export default Page
