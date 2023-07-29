/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useEffect, useState, Suspense } from 'react'
import { Loader /*, useProgress, Html*/ } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { UI } from '@global/store'
import { useOptimization } from '@aurora/libs/hooks/three'
import Scene from './components'

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
    <>
      <main className='relative h-screen w-screen overflow-hidden bg-white dark:bg-[#101010]'>
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
          <Suspense fallback={null}>
            <Scene _dark={_dark} />
          </Suspense>
        </Canvas>
        <Loader />
      </main>
    </>
  )
}

// const LoaderComp = () => {
//   const { active, progress, errors, item, loaded, total } = useProgress()
//   return <Html center>{progress} % loaded</Html>
// }

export default Page
