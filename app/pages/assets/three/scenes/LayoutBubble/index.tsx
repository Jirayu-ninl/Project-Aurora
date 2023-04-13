import { Suspense } from 'react'
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from '@react-three/postprocessing'
import { PerspectiveCamera } from '@react-three/drei'

import Scene from './scene'

export default function App() {
  return (
    <>
      <fog color='#161616' attach='fog' near={8} far={30} />
      <PerspectiveCamera makeDefault position={[0, 0, 3]} fov={75}>
        <pointLight position-z={2} intensity={20} color={'#463e34'} />
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.95}
          height={300}
          opacity={1}
        />
        <Noise opacity={0.025} />
        <Vignette eskil={false} offset={0.3} darkness={0.6} />
      </EffectComposer>
    </>
  )
}
