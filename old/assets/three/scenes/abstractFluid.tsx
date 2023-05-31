import * as THREE from 'three'
import { Suspense, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {
  PerspectiveCamera,
  Environment,
  MeshDistortMaterial,
  ContactShadows,
} from '@react-three/drei'
import Color from 'views/theme/color'

export default function Scene() {
  const sphere = useRef(null)
  const light = useRef(null)
  const [mode, setMode] = useState(false)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    light.current.position.x = state.mouse.x * 20
    light.current.position.y = state.mouse.y * 20
    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(
        sphere.current.position.x,
        hovered ? state.mouse.x / 2 : 0,
        0.2,
      )
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 +
          (hovered ? state.mouse.y / 2 : 0),
        0.2,
      )
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
        <ambientLight intensity={0.5} />
        <pointLight
          ref={light}
          position-z={-15}
          intensity={!hovered ? 0.4 : 1}
          color={Color.Primary}
        />
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <mesh
          ref={sphere}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerUp={() => {
            setMode(!mode)
          }}
        >
          <sphereBufferGeometry args={[2.2, 64, 64]} />
          <MeshDistortMaterial
            // color={hovered ? Color.Primary : '#202020'}
            color={hovered ? '#8a7b22' : '#202020'}
            envMapIntensity={!hovered ? 0.4 : 1}
            clearcoat={!hovered ? 0.04 : 1}
            clearcoatRoughness={0}
            metalness={0.1}
          />
        </mesh>
        <Environment preset='warehouse' />
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={0.8}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        />
      </Suspense>
    </>
  )
}
