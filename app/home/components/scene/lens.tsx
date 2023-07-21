import { useRef } from 'react'
import * as THREE from 'three'
import { Circle, useTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export const Lens = () => {
  const ref = useRef<THREE.Mesh>(null)
  const texture = useTexture('cursor/lens.png')
  const { aspect } = useThree(({ viewport }) => viewport)

  const target = new THREE.Vector3()
  useFrame(({ mouse }) => {
    target.set(mouse.x * 1.36 * aspect, mouse.y * 1.36, 0.1)
    ref.current!.position.lerp(target, 0.1)
  })

  return (
    <Circle
      ref={ref}
      args={[0.23, 50]}
      position-z={0.01}
      //   scale={[1 / aspect, 1, 1]}
    >
      <meshBasicMaterial map={texture} transparent />
    </Circle>
  )
}
