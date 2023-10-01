/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useEffect, useState /*, Suspense*/ } from 'react'
import { useSearchParams } from 'next/navigation'
import { StatsGl, Html, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { UI } from '@global/store'
import { useOptimization } from '@aurora/libs/hooks/three'
import Scene from './scene'

function CanvasApp() {
  const _gpuTier = UI((state) => state.gpuTier)
  const _dark = UI((state) => state.dark)
  const [antialias, setAntialias] = useState(true)

  const debug = useSearchParams().get('debug')

  useEffect(() => {
    const pixelRatio = window.devicePixelRatio
    if (pixelRatio > 1) {
      setAntialias(false)
    }
  }, [])

  const isMobile = _gpuTier?.isMobile ? _gpuTier.isMobile : false

  const getDRP: () => number[] = () => {
    if (_gpuTier?.fps) {
      const { drp } = useOptimization(_gpuTier.tier, 'tier')
      return drp
    }
    return [1, 1]
  }

  return (
    <>
      <Canvas
        dpr={getDRP() as [number, number]}
        gl={{
          powerPreference: 'high-performance',
          alpha: true,
          antialias: antialias,
          stencil: false,
          depth: true,
          // logarithmicDepthBuffer: true,
        }}
        linear={true}
        shadows
      >
        {/* <Suspense fallback={<LoaderComp />}> */}
        <Scene _dark={_dark} isMobile={isMobile} />
        {debug && <StatsGl />}
        {/* </Suspense> */}
      </Canvas>
    </>
  )
}

const LoaderComp = () => {
  const { progress /*, active, errors, item, loaded, total*/ } = useProgress()
  return (
    <Html center>
      <div className='flex w-48 flex-col items-center'>
        <h6 className=''>Compiling WebGL</h6>
        <div className='relative mb-3 mt-5 h-[10px] w-full rounded-md'>
          <div
            className='absolute m-0.5 h-[4px] rounded-md bg-primary-0'
            style={{ width: progress.toFixed(2) + '%' }}
          />
          <div className='absolute m-0.5 h-[4px] w-full rounded-md bg-primary-0/10' />
        </div>
        <p className='w-full text-center text-xs'>{progress.toFixed(2)} %</p>
      </div>
    </Html>
  )
}

export default CanvasApp
