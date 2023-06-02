'use client'

import { useEffect, useState } from 'react'
import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { UI } from '@global/store'
import { useOptimization } from '@aurora/libs/hooks/three'
import SceneLogo from './sceneLogo'
// import { InnerWidth } from '@libs/hooks/v2/useWindowSize'

const Scene = () => {
  const _gpuTier = UI((state) => state.gpuTier)
  const [antialias, setAntialias] = useState(true)

  useEffect(() => {
    const pixelRatio = window.devicePixelRatio
    if (pixelRatio > 1) {
      setAntialias(false)
    }
  }, [])

  const { drp } = useOptimization(_gpuTier == null ? 3 : _gpuTier.tier)

  return (
    <div className='absolute h-screen w-screen overflow-hidden'>
      <Canvas
        dpr={drp}
        gl={{
          powerPreference: 'high-performance',
          alpha: true,
          antialias: antialias,
          stencil: false,
          depth: false,
        }}
        linear={true}
      >
        <SceneLogo />
      </Canvas>
      <Loader />
    </div>
  )
}

export default Scene
