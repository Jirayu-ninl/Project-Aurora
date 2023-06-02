// import * as THREE from 'three'
import { useRef } from 'react'
import type { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'
import {
  useCubeTexture,
  useTexture,
  MeshDistortMaterial,
  Stars,
} from '@react-three/drei'

import { theme } from '@global/config/defineConfig'
import { useResource } from '@aurora/libs/hooks/three'
import Instances from './instances'

function Scene() {
  const Color = theme.color

  const bumpMap = useTexture('/three/blob/alphaMap.jpg')
  const envMap = useCubeTexture(
    ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
    { path: '/three/blob/cube/' },
  )

  const [setMaterial, material] = useResource(false)

  const r_Star = useRef<(typeof Stars & Mesh) | null>(null)
  useFrame(() => {
    if (r_Star.current) {
      r_Star.current.rotation.y += 0.0005
    }
  })

  return (
    <>
      <MeshDistortMaterial
        ref={setMaterial}
        envMap={envMap}
        bumpMap={bumpMap}
        color={Color.background[1]}
        roughness={0.1}
        metalness={1}
        bumpScale={0.02}
        clearcoat={1}
        clearcoatRoughness={1}
        radius={1.2}
        distort={0.4}
      />
      {material && <Instances material={material} />}
      <group rotation={[0, 0, 0]}>
        <Stars
          ref={r_Star}
          radius={100}
          depth={50}
          count={5000}
          factor={3}
          saturation={0}
          fade
        />
      </group>
    </>
  )
}

export default Scene
