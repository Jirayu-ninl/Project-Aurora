import { useRef, useState } from 'react'
import {
  PerspectiveCamera,
  Preload,
  // OrbitControls,
  ScrollControls,
  Scroll,
  Text,
} from '@react-three/drei'
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
  ProjectsSection,
  ContactSection,
  Footer,
} from './sections'
import Overlay from './overlay'
import Environments from './environments'
import PageState from './state'
import PostProcessing from './postprocessing'

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
  const $scroll = useRef<any>(null)
  const $background = useRef<any>(null)

  const [projectHover, setProjectHover] = useState<number>(0)

  return (
    <>
      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 3]}>
        <ambientLight intensity={0.6} />
        <Environments />
        <Overlay _dark={_dark} $scroll={$scroll} />
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
            <ProjectsSection.HTML
              _dark={_dark}
              setProjectHover={setProjectHover}
            />
            <ContactSection.HTML />
          </Scroll>
          <PassionSectionQuote _dark={_dark} />
          <PassionSectionTitle _dark={_dark} />
          <MarqueeSection _dark={_dark} />
          <SkillsSection _dark={_dark} scrollRef={$scroll} />
          <ProjectsSection.R3F projectHover={projectHover} $scroll={$scroll} />
          <ContactSection.R3F _dark={_dark} />
          <Footer.R3F _dark={_dark} />
        </Scroll>
      </ScrollControls>
      <PostProcessing />
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
