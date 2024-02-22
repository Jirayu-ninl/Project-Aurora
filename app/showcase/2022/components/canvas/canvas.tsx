/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import * as THREE from 'three'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Canvas as ThreeCanvas } from '@react-three/fiber'
import { StatsGl } from '@react-three/drei'
import { UI } from '@global/store'
import { useOptimization } from '@aurora/libs/hooks/three'
import Scene from './scene'

const Canvas = () => {
  const _gpuTier = UI((state) => state.gpuTier)
  const [antialias, setAntialias] = useState(true)
  const debug = useSearchParams().get('debug')

  const isMobile = _gpuTier?.isMobile ? _gpuTier.isMobile : false

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
    <>
      <div className='absolute h-screen w-screen overflow-hidden'>
        <ThreeCanvas
          dpr={getDRP() as [number, number]}
          gl={{
            powerPreference: 'high-performance',
            alpha: true,
            antialias: antialias,
            stencil: false,
            depth: true,
          }}
          linear
          shadows
        >
          <Scene isMobile={isMobile} />
          {debug && <StatsGl />}
        </ThreeCanvas>
      </div>
    </>
  )
}

export { Canvas }
