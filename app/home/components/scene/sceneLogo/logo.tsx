import * as THREE from 'three'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

function Logo({ material }) {
  const main = useRef()
  const group = useRef<THREE.Group>()
  const { nodes } = useGLTF('three/model/ver1.glb')

  useFrame(({ clock, mouse }) => {
    group.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.05
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouse.y * Math.PI * -0.1,
      0.02,
    )
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      mouse.x * Math.PI * 0.3 + 0.5,
      0.02,
    )
  })

  return (
    <group
      ref={group}
      dispose={null}
      rotation={[0, 0, 0]}
      position={[-1.5, 0, 0]}
    >
      <mesh
        geometry={nodes.Logo.geometry}
        ref={main}
        position={[-2.5, -2.4, 0]}
        scale={-0.44}
        rotation={[-Math.PI / 2, -0.01, Math.PI]}
      >
        <meshStandardMaterial
          envMap={material.envMap}
          bumpMap={material.bumpMap}
          color={'#ffd60a'}
          roughness={0.1}
          metalness={1}
        />
      </mesh>
    </group>
  )
}

export default Logo
