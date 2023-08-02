import type { RefObject } from 'react'
import { MathUtils, type Group } from 'three'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { getInviewAnimationValue } from '@aurora/views/animations'

const CubeState = ({ TheCubeRef }: { TheCubeRef: RefObject<Group | null> }) => {
  const scroll = useScroll()

  useFrame(({ mouse, clock }) => {
    const setCubePositionX = (positionX: number): number => {
      if (scroll.offset <= 2.543 / scroll.pages) {
        positionX = -Math.sin(scroll.offset * (scroll.pages * 1.2)) * 2
      } else if (
        2.543 / scroll.pages < scroll.offset &&
        scroll.offset <= 6.5 / scroll.pages
      ) {
        positionX = 0
      } else if (
        6.5 / scroll.pages < scroll.offset &&
        scroll.offset <= 7.5 / scroll.pages
      ) {
        positionX =
          -Math.sin(
            (scroll.offset - 6.5 / scroll.pages) * (scroll.pages * 1.2),
          ) * 2
      } else if (
        7.5 / scroll.pages < scroll.offset &&
        scroll.offset < 9.2 / scroll.pages
      ) {
        positionX = -2
      } else if (
        9.2 / scroll.pages < scroll.offset &&
        scroll.offset < 12 / scroll.pages
      ) {
        positionX =
          -Math.sin(
            (scroll.offset - 8.1 / scroll.pages) * (scroll.pages * 1.2),
          ) * 2
      } else if (12 / scroll.pages < scroll.offset && scroll.offset < 1) {
        positionX = 2
      } else {
        positionX =
          -Math.sin(
            (scroll.offset - 8.1 / scroll.pages) * (scroll.pages * 1.2),
          ) * 2
      }
      return positionX
    }

    const setCubePositionZ = (positionZ: number): number => {
      if (
        0 / scroll.pages < scroll.offset &&
        scroll.offset <= 4 / scroll.pages
      ) {
        positionZ =
          getInviewAnimationValue(
            [
              1.4 / scroll.pages,
              2.2 / scroll.pages,
              2.4 / scroll.pages,
              3.2 / scroll.pages,
            ],
            scroll.offset,
          ) * -1.5
      } else if (
        9.2 / scroll.pages < scroll.offset &&
        scroll.offset < 12 / scroll.pages
      ) {
        positionZ =
          getInviewAnimationValue(
            [9.2 / scroll.pages, 12 / scroll.pages],
            scroll.offset,
          ) * -0.5
      } else if (12 / scroll.pages < scroll.offset && scroll.offset < 1) {
        positionZ = -0.5
      } else {
        positionZ = 0
      }
      return positionZ
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
        setCubePositionX(TheCube.position.x),
        0.2,
      )
      TheCube.position.z = MathUtils.lerp(
        TheCube.position.z,
        setCubePositionZ(TheCube.position.z),
        0.2,
      )
    }
  })

  return null
}

export default CubeState
