import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { LayoutLogo as Scene } from 'views/assets/three/scenes'
// import { InnerWidth } from '@libs/hooks/v2/useWindowSize'

import { useEffect, useState } from 'react'
import { UI } from '@store'

export default function SceneLayout({ children }) {
  return (
    <div className='relative flex h-screen w-screen items-end justify-center bg-gradient-to-t from-black to-background-1'>
      <div className='pointer-events-none absolute z-10 flex w-full items-center justify-end'>
        {children}
      </div>
      <Home_3DScene />
    </div>
  )
}

const Home_3DScene = () => {
  const { AA, tier } = useOptimization()
  const drp: [number, number] =
    tier >= 3
      ? [1, 1]
      : tier === 2
      ? [0.7, 0.7]
      : tier === 1
      ? [0.5, 0.5]
      : [0.1, 0.1]

  return (
    <div className='absolute h-screen w-screen overflow-hidden'>
      <Canvas
        dpr={drp}
        gl={{
          powerPreference: 'high-performance',
          alpha: true,
          antialias: AA,
          stencil: false,
          depth: false,
        }}
        linear={true}
      >
        <Scene />
      </Canvas>
      <Loader />
    </div>
  )
}

const useOptimization = () => {
  const _gpuTier = UI((state) => state.gpuTier)
  const [AA, setAA] = useState(true)
  useEffect(() => {
    const pixelRatio = window.devicePixelRatio
    if (pixelRatio > 1) {
      setAA(false)
    }
  }, [])

  if (_gpuTier == null) {
    return { status: 'error, use default', AA: false, tier: 3, isMobile: false }
  }
  const { tier, isMobile } = _gpuTier

  return { status: 'done', AA: AA, tier, isMobile }
}
