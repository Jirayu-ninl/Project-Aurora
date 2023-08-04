import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useState, type RefObject } from 'react'

import SkillsOverlay from './skills.overlay'

const Overlay = ({
  _dark,
  $scroll,
}: {
  _dark: boolean
  $scroll: RefObject<any>
}) => {
  const [overlay, setOverlay] = useState({ skills: false })
  useFrame(() => {
    if (
      20.1 <= $scroll.current.position.y &&
      $scroll.current.position.y <= 25
    ) {
      setOverlay({ ...overlay, skills: true })
    } else {
      setOverlay({ ...overlay, skills: false })
    }
  })

  return (
    <>
      <Html
        style={{
          position: 'fixed',
          height: '100dvh',
          width: '100vw',
          pointerEvents: 'none',
        }}
      >
        <SkillsOverlay _dark={_dark} visibility={overlay.skills} />
      </Html>
    </>
  )
}

export default Overlay
