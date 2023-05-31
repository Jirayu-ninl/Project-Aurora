import { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
} from '@react-three/postprocessing'
import { PerspectiveCamera } from '@react-three/drei'

import Scene from './scene'

export default function App() {
  const light = useRef(null)

  useFrame((state) => {
    light.current.position.x = state.mouse.x * 20
    light.current.position.y = state.mouse.y * 20
  })

  return (
    <>
      <fog color='#161616' attach='fog' near={8} far={30} />
      <PerspectiveCamera makeDefault position={[0, 0, 3]} fov={75}>
        <pointLight
          ref={light}
          position-z={2}
          intensity={20}
          color={'#463e34'}
        />
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={400}
        />
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.95}
          height={300}
          opacity={1}
        />
        <Noise opacity={0.025} />
      </EffectComposer>
    </>
  )
}
