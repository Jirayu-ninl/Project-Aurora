import { useEffect, type RefObject } from 'react'
import type { Group, Mesh } from 'three'
import { Euler, Vector3, MathUtils } from 'three'
import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { getInviewAnimationValue } from '@aurora/views/animations'

type tUseExplodeOption = {
  distance: number
  enableRotation?: boolean
  invertX?: boolean
  invertY?: boolean
  invertZ?: boolean
  range?: [number, number] | [number, number, number, number]
}

const useExplode = (
  group: RefObject<Group>,
  {
    distance = 3,
    enableRotation = true,
    invertX = false,
    invertY = false,
    invertZ = false,
    range = [0, 1],
  }: tUseExplodeOption,
) => {
  useEffect(() => {
    const groupWorldPosition = new Vector3()
    if (group.current) {
      group.current.getWorldPosition(groupWorldPosition)

      group.current.children.forEach((mesh: any) => {
        mesh.originalPosition = mesh.position.clone()
        const meshWorldPosition = new Vector3()
        mesh.getWorldPosition(meshWorldPosition)

        mesh.directionVector = meshWorldPosition
          .clone()
          .sub(groupWorldPosition)
          .normalize()

        mesh.originalRotation = mesh.rotation.clone()
        mesh.targetRotation = new Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        )
      })
    }
  }, [group])

  useEffect(() => {
    group.current &&
      group.current.children.forEach((mesh: any) => {
        mesh.targetPosition = mesh.originalPosition
          .clone()
          .add(mesh.directionVector.clone().multiplyScalar(distance))
      })
  }, [group, distance])

  const scroll = useScroll()

  useFrame(() => {
    const scrollData = getInviewAnimationValue(range, scroll.offset, 1)

    group.current &&
      group.current.children.forEach((mesh: any) => {
        if (mesh.originalPosition && mesh.targetPosition) {
          mesh.position.x = MathUtils.lerp(
            mesh.originalPosition.x,
            invertX ? -mesh.targetPosition.x : mesh.targetPosition.x,
            scrollData,
          )
          mesh.position.y = MathUtils.lerp(
            mesh.originalPosition.y,
            invertY ? -mesh.targetPosition.y : mesh.targetPosition.y,
            scrollData,
          )
          mesh.position.z = MathUtils.lerp(
            mesh.originalPosition.z,
            invertZ ? -mesh.targetPosition.z : mesh.targetPosition.z,
            scrollData,
          )
        }

        if (enableRotation) {
          mesh.rotation.x = MathUtils.lerp(
            mesh.originalRotation.x,
            mesh.targetRotation.x,
            scrollData,
          )
          mesh.rotation.y = MathUtils.lerp(
            mesh.originalRotation.y,
            mesh.targetRotation.y,
            scrollData,
          )
          mesh.rotation.z = MathUtils.lerp(
            mesh.originalRotation.z,
            mesh.targetRotation.z,
            scrollData,
          )
        }
      })
  })
}

export default useExplode
