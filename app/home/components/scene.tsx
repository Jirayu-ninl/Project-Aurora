import { useRef, useState } from 'react'
import {
  PerspectiveCamera,
  Preload,
  // OrbitControls,
  ScrollControls,
  Scroll,
} from '@react-three/drei'
import { Color as ColorUtils } from '@aurora/libs/webGL/utils'

import Cube from './cube'
import Hero from './hero'
import {
  IntroSection,
  PassionSectionQuote,
  PassionSection,
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
    interface IntrinsicAttributes {
      style?: any
    }
  }
}

export default function App({
  _dark,
  isMobile,
}: {
  _dark: boolean
  isMobile: boolean
}) {
  const $scroll = useRef<any>(null)
  const $background = useRef<any>(null)

  const [projectHover, setProjectHover] = useState<number>(0)

  return (
    <>
      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 3]}>
        <ambientLight intensity={0.6} />
        <Environments isMobile={isMobile} />
        <Overlay _dark={_dark} $scroll={$scroll} />
      </PerspectiveCamera>
      {/* <OrbitControls enableZoom={false} /> */}
      <ScrollControls damping={0.3} distance={1} pages={16}>
        <Scroll ref={$scroll}>
          <PageState />
          <Hero _dark={_dark} isMobile={isMobile} />
          <Cube _dark={_dark} isMobile={isMobile} />
          <Scroll html style={{ width: '100%' }}>
            <IntroSection _dark={_dark} isMobile={isMobile} />
            <PassionSection.HTML />
            <ProjectsSection.HTML
              _dark={_dark}
              setProjectHover={setProjectHover}
            />
            <ContactSection.HTML />
            <Footer.HTML />
          </Scroll>
          <PassionSectionQuote _dark={_dark} isMobile={isMobile} />
          <PassionSection.R3F _dark={_dark} isMobile={isMobile} />
          <MarqueeSection _dark={_dark} />
          <SkillsSection.R3F
            _dark={_dark}
            scrollRef={$scroll}
            isMobile={isMobile}
          />
          <ProjectsSection.R3F projectHover={projectHover} $scroll={$scroll} />
          <ContactSection.R3F _dark={_dark} isMobile={isMobile} />
          <Footer.R3F _dark={_dark} isMobile={isMobile} />
        </Scroll>
      </ScrollControls>
      <PostProcessing />
      <color
        attach='background'
        args={
          ColorUtils.HEXtoArray(_dark ? '#101010' : '#fefbea', 1) as [
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
