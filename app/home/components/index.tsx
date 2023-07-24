import { Suspense } from 'react'
// import { useFrame, useThree } from '@react-three/fiber'
import {
  PerspectiveCamera,
  // Preload,
  // OrbitControls,
  ScrollControls,
  Scroll,
} from '@react-three/drei'
// import { State } from '@global/store'
import { Color as ColorUtils } from '@aurora/libs/webGL/utils'

import Cube from './cube'
import Hero from './hero'
import {
  IntroSection,
  PassionSectionTitle,
  PassionSectionContent,
} from './sections'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      abstractShader: any
      backgroundShader: any
      textTitleShader: any
    }
  }
}

export default function App({ _dark }: { _dark: boolean }) {
  // const userCam = useRef<THREE.PerspectiveCamera | undefined>(null)

  // const { width: w, height: h } = useThree((state) => state.viewport)

  return (
    <>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault fov={50} position={[0, 0, 3]}>
          <ambientLight intensity={0.6} />
        </PerspectiveCamera>
        {/* <OrbitControls /> */}
        <ScrollControls damping={0.3} distance={1} pages={16}>
          <Scroll>
            <Hero _dark={_dark} />
            <Cube _dark={_dark} />
            {/* <Preload all /> */}
          </Scroll>
          <Scroll>
            <Scroll html style={{ width: '100%' }}>
              <IntroSection />
              <PassionSectionContent />
            </Scroll>
            <PassionSectionTitle />
          </Scroll>
        </ScrollControls>
        <color
          attach='background'
          args={
            ColorUtils.HEXtoArray(_dark ? '#101010' : '#ffffff', 1) as [
              number,
              number,
              number,
            ]
          }
        />
      </Suspense>
    </>
  )
}
