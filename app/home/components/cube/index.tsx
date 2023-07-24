import { useRef } from 'react'
import { MathUtils, type Group } from 'three'
import { useFrame } from '@react-three/fiber'
import { Center, Float, useScroll } from '@react-three/drei'

import AbstractCube from './cube.abstractCaustics'
import TransmissionCube from './cube.transmission'

const CubeCompose = ({ _dark }: { _dark?: boolean }) => {
  const TheCubeRef = useRef<Group | null>(null)
  const scroll = useScroll()

  useFrame(({ mouse, clock }) => {
    const setCubePositionX = (): number => {
      let positionX
      if (scroll.offset <= 2.543 / scroll.pages) {
        positionX = -Math.sin(scroll.offset * (scroll.pages * 1.2)) * 2
      } else if (
        2.543 / scroll.pages < scroll.offset &&
        scroll.offset <= 6 / scroll.pages
      ) {
        positionX = 0
      } else if (scroll.offset > 6 / scroll.pages) {
        positionX =
          -Math.sin((scroll.offset - 6 / scroll.pages) * (scroll.pages * 1.2)) *
          2
      } else {
        positionX = 0
      }
      return positionX
    }

    if (TheCubeRef.current) {
      const TheCube = TheCubeRef.current
      TheCube.rotation.y =
        Math.sin(clock.getElapsedTime() * 0.2) / 4 - Math.PI / 1.35

      TheCube.position.y = MathUtils.lerp(
        TheCube.position.y,
        -mouse.y * Math.PI * -0.1 + 0.5,
        0.04,
      )
      TheCube.position.x = MathUtils.lerp(
        TheCube.position.x,
        -mouse.x * Math.PI * -0.1,
        0.04,
      )

      TheCube.rotation.x = MathUtils.lerp(
        TheCube.rotation.x,
        -mouse.y * Math.PI * 0.1,
        0.08,
      )
      TheCube.rotation.y = MathUtils.lerp(
        TheCube.rotation.y,
        mouse.x * Math.PI * 0.1,
        0.08,
      )
      TheCube.position.y = MathUtils.lerp(
        TheCube.position.y,
        -(scroll.offset * (scroll.pages * 3.1)),
        0.2,
      )
      TheCube.position.x = MathUtils.lerp(
        TheCube.position.x,
        setCubePositionX(),
        // -Math.sin(scroll.offset * (scroll.pages * 1.2)) * 2,
        // (Math.floor(scroll.offset * scroll.pages) / 2) % 2 == 0 ? -2 : 2,
        0.2,
      )
    }
  })

  return (
    <>
      <group ref={TheCubeRef} position={[0, 0, 0]}>
        <Float floatIntensity={1} speed={2}>
          <Center rotation={[0, Math.PI / 1.35, 0]} position={[0, 0, 0]}>
            <TransmissionCube _dark={_dark} />
            <AbstractCube _dark={_dark} />
          </Center>
        </Float>
      </group>
    </>
  )
}

export default CubeCompose
