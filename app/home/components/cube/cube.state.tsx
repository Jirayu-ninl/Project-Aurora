import type { RefObject } from 'react'
import { MathUtils } from 'three'
import type { Group, Mesh } from 'three'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import {
  setTheCubePositionX,
  setTheCubePositionZ,
  setTheCubeScale,
} from './cube.state.setTheCube'

const CubeState = ({
  $TheCubeRef,
  isMobile,
}: {
  $TheCubeRef: RefObject<Group | Mesh | null>
  isMobile: boolean
}) => {
  const scroll = useScroll()

  useFrame(({ mouse, clock }) => {
    if ($TheCubeRef.current) {
      const TheCube = $TheCubeRef.current
      TheCube.rotation.y =
        Math.sin(clock.getElapsedTime() * 0.2) / 4 - Math.PI / 1.35

      if (!isMobile) {
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
      }

      TheCube.position.y = MathUtils.lerp(
        TheCube.position.y,
        -(scroll.offset * (scroll.pages * 2.63)),
        1,
      )
      TheCube.position.x = MathUtils.lerp(
        TheCube.position.x,
        setTheCubePositionX(TheCube.position.x, scroll, isMobile),
        0.2,
      )
      TheCube.position.z = MathUtils.lerp(
        TheCube.position.z,
        setTheCubePositionZ(TheCube.position.z, scroll),
        0.2,
      )
      const TheCubeScale = setTheCubeScale(isMobile ? 0.7 : 1, scroll, isMobile)
      TheCube.scale.set(TheCubeScale, TheCubeScale, TheCubeScale)
    }
  })

  return null
}

export default CubeState
