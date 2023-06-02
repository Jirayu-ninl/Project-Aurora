import React, { useState, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Icosahedron } from '@react-three/drei'
import Logo from './logo'

function Instances({ material }: { material: THREE.MeshStandardMaterial }) {
  const [sphereRefs] = useState<
    Array<THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>>
  >(() => [])
  const initialPositions = useMemo(
    () => [
      [-4, 20, -12],
      [-10, 12, -4],
      [-11, -12, -23],
      [-16, -6, -10],
      [12, -2, -3],
      [35, 4, -12],
      [14, -2, -23],
      [30, 4, -4],
      [8, 10, -20],
    ],
    [],
  )
  useFrame(() => {
    sphereRefs.forEach((el) => {
      // el.position.y -= 0.02
      // if (el.position.y < -18) el.position.y = 19
      el.position.x -= 0.05
      if (el.position.x < -50) el.position.x = 40
      el.rotation.x += 0.01
      el.rotation.y += 0.01
      el.rotation.z += 0.005
    })
  })
  return (
    <>
      <Logo material={material} />
      {initialPositions.map((pos, i) => (
        <Icosahedron
          args={[1, 4]}
          position={[pos[0], pos[1], pos[2]]}
          material={material}
          key={i}
          // ref={(ref) => (sphereRefs[i] = ref)}
          ref={(ref) =>
            (sphereRefs[i] = ref as THREE.Mesh<
              THREE.BufferGeometry,
              THREE.MeshStandardMaterial
            >)
          }
        />
      ))}
    </>
  )
}

export default Instances
