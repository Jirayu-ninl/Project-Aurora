import { useRef, useState } from 'react'
import {
  PerspectiveCamera,
  Preload,
  OrbitControls,
  ScrollControls,
  Scroll,
  Text,
} from '@react-three/drei'
// import { State } from '@global/store'
import { Color } from 'three'
import { Color as ColorUtils } from '@aurora/libs/webGL/utils'

import Cube from './cube'
import Hero from './hero'
import {
  IntroSection,
  PassionSectionQuote,
  PassionSectionTitle,
  PassionSectionContent,
  MarqueeSection,
  SkillsSection,
} from './sections'
import Environments from './environments'
import PageState from './state'

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
  // const CamRef = useRef<THREE.PerspectiveCamera | undefined>(null)
  const $scroll = useRef<any>(null)
  const $background = useRef<any>(null)

  // console.log(_scrollState)
  // const { width: w, height: h } = useThree((state) => state.viewport)

  return (
    <>
      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 3]}>
        <ambientLight intensity={0.6} />
        <Environments />
      </PerspectiveCamera>
      {/* <OrbitControls enableZoom={false} /> */}
      <ScrollControls damping={0.3} distance={1} pages={16}>
        <Scroll ref={$scroll}>
          <PageState />
          <Hero _dark={_dark} />
          <Cube _dark={_dark} />
          <Scroll html style={{ width: '100%' }}>
            <IntroSection _dark={_dark} />
            <PassionSectionContent />
          </Scroll>
          <PassionSectionQuote _dark={_dark} />
          <PassionSectionTitle _dark={_dark} />
          <MarqueeSection _dark={_dark} />
          <SkillsSection _dark={_dark} scrollRef={$scroll} />
          <Text position={[0, -35, -1]}>PROJECTS</Text>
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
        ref={$background}
      />
      <Preload all />
    </>
  )
}
