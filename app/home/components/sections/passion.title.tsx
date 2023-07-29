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
          2.7 / scroll.pages,
          3.4 / scroll.pages,
          3.9 / scroll.pages,
          4.3 / scroll.pages,
        ],
        scroll.offset,
      ))
  })

  return (
    <>
      <Text
        position={[0, -9.4, -1]}
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
