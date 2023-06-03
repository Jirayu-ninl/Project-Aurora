/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useEffect, useState } from 'react'
import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { UI } from '@global/store'
import { useOptimization } from '@aurora/libs/hooks/three'
import Scene from './scene'
// import { InnerWidth } from '@libs/hooks/v2/useWindowSize'

const SceneRoot = () => {
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
    <div className='absolute h-screen w-screen overflow-hidden'>
      <Canvas
        dpr={getDRP() as [number, number]}
        // dpr={[1, 1]}
        gl={{
          powerPreference: 'high-performance',
          alpha: true,
          antialias: antialias,
          stencil: false,
          depth: false,
          logarithmicDepthBuffer: true,
        }}
        linear={true}
        shadows
      >
        <Scene _dark={_dark} />
      </Canvas>
      <Loader />
    </div>
  )
}

export default SceneRoot
