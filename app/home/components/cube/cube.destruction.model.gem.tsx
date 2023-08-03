import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { RGBELoader } from 'three-stdlib'
import { MeshRefractionMaterial } from '@react-three/drei'
import type { tNodes } from './cube.destruction.f.d'

export const GemModel = ({ nodes }: { nodes: tNodes }) => {
  const textureUrl = [
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr',
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr',
  ]
  const texture = useLoader(RGBELoader, textureUrl[0])
  texture.mapping = THREE.EquirectangularReflectionMapping

  return (
    <>
      <group dispose={null} scale={0.4}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Gems.geometry}
          // material={material}
          position={[0.014, 0.037, 0.002]}
          scale={-3.184}
        >
          <MeshRefractionMaterial
            envMap={texture}
            ior={2.75}
            fresnel={1}
            bounces={2}
            aberrationStrength={0.01}
            toneMapped={false}
            color={[2.5, 2.5, 2.5]}
          />
        </mesh>
      </group>
    </>
  )
}
