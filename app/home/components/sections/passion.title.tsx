import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, useScroll } from '@react-three/drei'
import { getInviewAnimationValue } from '@aurora/views/animations'

function PassionSectionTitle({ _dark }: { _dark: boolean }) {
  const rTextPassionateMat = useRef<any>(null)
  const scroll = useScroll()
  useFrame(() => {
    rTextPassionateMat.current &&
      (rTextPassionateMat.current.opacity = getInviewAnimationValue(
        [
          1.82 / scroll.pages,
          2.24 / scroll.pages,
          2.95 / scroll.pages,
          3.35 / scroll.pages,
        ],
        scroll.offset,
      ))
  })

  return (
    <>
      <Text
        position={[0, -7, -1]}
        font={'/three/fonts/Inter-SemiBold.woff'}
        scale={1.2}
      >
        PASSIONATE
        <meshBasicMaterial
          color={_dark ? '#fff' : '#fafafa'}
          ref={rTextPassionateMat}
          transparent
          opacity={1}
        />
      </Text>
    </>
  )
}

export default PassionSectionTitle
