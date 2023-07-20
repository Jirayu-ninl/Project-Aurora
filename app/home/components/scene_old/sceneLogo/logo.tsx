/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Logo_1: THREE.Mesh
  }
  materials: {
    ['default']: THREE.MeshStandardMaterial
    LogoShader: THREE.MeshStandardMaterial
  }
}

const IJNLogo = ({ material }: { material: THREE.MeshStandardMaterial }) => {
  const main = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material>>()
  const group = useRef<THREE.Group>(null)

  useFrame(({ clock, mouse }) => {
    if (group.current) {
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
    }
  })

  const { nodes, materials } = useGLTF(
    '/three/model/HomeLogo/Scene.gltf',
  ) as GLTFResult

  return (
    <group ref={group} dispose={null} rotation={[0, 0, 0]} position={[0, 0, 0]}>
      <mesh
        ref={main as React.MutableRefObject<THREE.Mesh>}
        position={[-1.8, -2.4, 0]}
        scale={0.42}
        geometry={nodes.Logo_1.geometry}
        material={materials.LogoShader}
      >
        <meshStandardMaterial
          {...materials.LogoShader}
          emissiveIntensity={0.05}
          // envMap={material.envMap}
        />
      </mesh>
    </group>
  )
}

export default IJNLogo
