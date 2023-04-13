/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

// type GLTFResult = GLTF & {
//   nodes: {
//     Logo: THREE.Mesh
//   }
//   materials: {
//     ['default']: THREE.MeshStandardMaterial
//   }
// }

const IJNLogo = ({ material }) => {
  const main = useRef<THREE.Mesh>()
  const group = useRef<THREE.Group>()

  useFrame(({ clock, mouse }) => {
    group.current.rotation.z = 0.05 + Math.sin(clock.getElapsedTime()) * 0.05
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

  const { nodes, materials } = useGLTF('three/model/HomeLogo/Scene.gltf')

  return (
    <group
      ref={group}
      dispose={null}
      rotation={[0, 0, 0]}
      position={[-1.5, 0, 0]}
    >
      <mesh
        ref={main}
        position={[-1.8, -2.4, 0]}
        scale={0.42}
        geometry={nodes.Logo_1.geometry}
        material={materials.LogoShader}
      >
        <meshStandardMaterial
          {...materials.LogoShader}
          emissiveIntensity={0.15}
          envMap={material.envMap}
        />
      </mesh>
    </group>
  )
}

export default IJNLogo
