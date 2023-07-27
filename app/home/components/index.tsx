import {
  PerspectiveCamera,
  Preload,
  // OrbitControls,
  ScrollControls,
  Scroll,
  Text,
} from '@react-three/drei'
// import { State } from '@global/store'
import { Color as ColorUtils } from '@aurora/libs/webGL/utils'

import Cube from './cube'
import Hero from './hero'
import {
  IntroSection,
  PassionSectionTitle,
  PassionSectionContent,
  MarqueeSection,
  SkillsSection,
} from './sections'
import Environments from './environments'

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
      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 3]}>
        <ambientLight intensity={0.6} />
        <Environments />
      </PerspectiveCamera>
      {/* <OrbitControls /> */}
      <ScrollControls damping={0.3} distance={1} pages={16}>
        <Scroll>
          <Hero _dark={_dark} />
          <Cube _dark={_dark} />
        </Scroll>
        <Scroll>
          <Scroll html style={{ width: '100%' }}>
            <IntroSection />
            <PassionSectionContent />
          </Scroll>
          <PassionSectionTitle _dark={_dark} />
          <MarqueeSection _dark={_dark} />
          <SkillsSection _dark={_dark} />
          <Text position={[0, -18, -1]}>Skill 2</Text>
          <Text position={[0, -27, -1]}>Projects</Text>
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
      <Preload all />
    </>
  )
}
