import { useRef } from 'react'
import { MeshStandardMaterial, EquirectangularReflectionMapping } from 'three'
import type { Mesh, Group } from 'three'
import { useLoader } from '@react-three/fiber'
import CSM from 'three-custom-shader-material/vanilla'
import { GLTF, RGBELoader } from 'three-stdlib'
import { useExplode } from '@aurora/libs/webGL/hooks'

import { useGLTF, MeshRefractionMaterial } from '@react-three/drei'

type GLTFResult = GLTF & {
  nodes: tNodes
  materials?: {
    mat21: typeof MeshStandardMaterial
    Material: typeof MeshStandardMaterial
  }
}

type tNodes = {
  Gems: Mesh
  Cube_cell301: Mesh
  Cube_cell302: Mesh
  Cube_cell303: Mesh
  Cube_cell304: Mesh
  Cube_cell305: Mesh
  Cube_cell306: Mesh
  Cube_cell307: Mesh
  Cube_cell201: Mesh
  Cube_cell205: Mesh
  Cube_cell206: Mesh
  Cube_cell207: Mesh
  Cube_cell208: Mesh
  Cube_cell203: Mesh
  Cube_cell202: Mesh
  Cube_cell204: Mesh
  Cube_cell101: Mesh
  Cube_cell102: Mesh
  Cube_cell103: Mesh
  Cube_cell104: Mesh
  Cube_cell105: Mesh
  Cube_cell106: Mesh
  Cube_cell107: Mesh
  Cube_cell108: Mesh
}

type tMaterials = {
  fractalMaterial?: CSM<typeof MeshStandardMaterial>
  gemMaterial?: CSM<typeof MeshStandardMaterial>
}

const Model = ({ materials }: { materials: tMaterials }) => {
  const { nodes /*, materials*/ } = useGLTF(
    '/three/model/desCube/model.glb',
  ) as GLTFResult

  const { fractalMaterial, gemMaterial } = materials

  return (
    <>
      <GemModel nodes={nodes} material={gemMaterial} />
      {/* <FractalModel nodes={nodes} material={fractalMaterial} /> */}
    </>
  )
}

const GemModel = ({
  nodes,
  material,
}: {
  nodes: tNodes
  material: CSM<typeof MeshStandardMaterial> | undefined
}) => {
  const textureUrl = [
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr',
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr',
  ]
  const texture = useLoader(RGBELoader, textureUrl[0])
  texture.mapping = EquirectangularReflectionMapping

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
          />
        </mesh>
      </group>
    </>
  )
}

const FractalModel = ({
  nodes,
  material,
}: {
  nodes: tNodes
  material: CSM<typeof MeshStandardMaterial> | undefined
}) => {
  const $destructionCube = useRef<Group | null>(null)

  useExplode($destructionCube, {
    distance: 32,
    enableRotation: false,
    invertX: true,
    invertZ: true,
  })

  return (
    <>
      <group dispose={null} scale={0.4} ref={$destructionCube}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell301.geometry}
          material={material}
          position={[-0.07, 0.076, -0.622]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell302.geometry}
          material={material}
          position={[-0.897, 0.329, -0.869]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell303.geometry}
          material={material}
          position={[-0.911, -0.133, -0.577]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell304.geometry}
          material={material}
          position={[-0.014, -0.322, -0.485]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell305.geometry}
          material={material}
          position={[0.012, -0.855, -0.529]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell306.geometry}
          material={material}
          position={[-0.546, -0.468, -0.432]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell307.geometry}
          material={material}
          position={[-0.189, -0.552, -0.058]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell201.geometry}
          material={material}
          position={[0.782, 0.016, -0.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell205.geometry}
          material={material}
          position={[0.821, 0.628, 0.513]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell206.geometry}
          material={material}
          position={[-0.561, -0.828, 0.813]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell207.geometry}
          material={material}
          position={[0.343, -0.222, 0.446]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell208.geometry}
          material={material}
          position={[0.79, 0.118, 0.541]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell203.geometry}
          material={material}
          position={[-0.461, -0.926, 0.409]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell202.geometry}
          material={material}
          position={[0.171, -0.601, 0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell204.geometry}
          material={material}
          position={[0.414, -0.222, 0.021]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell101.geometry}
          material={material}
          position={[0.14, -0.06, -0.207]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell102.geometry}
          material={material}
          position={[-0.441, -0.504, 0.241]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell103.geometry}
          material={material}
          position={[-0.696, 0.188, 0.345]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell104.geometry}
          material={material}
          position={[-0.169, 0.386, -0.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell105.geometry}
          material={material}
          position={[0.017, 0.155, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell106.geometry}
          material={material}
          position={[0.872, 0.684, -0.24]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell107.geometry}
          material={material}
          position={[0.434, 0.696, -0.502]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell108.geometry}
          material={material}
          position={[0.881, 0.948, -0.174]}
        />
      </group>
    </>
  )
}

useGLTF.preload('/three/model/desCube/model.glb')
export default Model
