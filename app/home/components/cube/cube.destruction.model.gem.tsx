import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
// import CSM from 'three-custom-shader-material/vanilla'
import { RGBELoader } from 'three-stdlib'
import { MeshRefractionMaterial } from '@react-three/drei'
import type { tNodes } from './cube.destruction.d'

// import {
//   shaderStructs,
//   shaderIntersectFunction,
//   MeshBVHUniformStruct,
// } from 'three-mesh-bvh/build/index.module'
// import gemVertShader from './shaders/destruction.gem.v.glsl'
// import gemFragShader from './shaders/destruction.gem.f.glsl'

export const GemModel = ({ nodes }: { nodes: tNodes }) => {
  const textureUrl = [
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr',
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr',
  ]
  const texture = useLoader(RGBELoader, textureUrl[0])
  texture.mapping = THREE.EquirectangularReflectionMapping

  // const gemShader = useMemo(
  //   () => ({
  //     baseMaterial: THREE.ShaderMaterial,
  //     silent: true,
  //     uniforms: {
  //       u_time: {
  //         value: 0,
  //       },
  //       envMap: {
  //         value: texture,
  //       },
  //       bounces: {
  //         value: 2,
  //       },
  //       ior: {
  //         value: 2.75,
  //       },
  //       aberrationStrength: {
  //         value: 0.01,
  //       },
  //       fresnel: {
  //         value: 1,
  //       },
  //       correctMips: {
  //         value: true,
  //       },
  //       bvh: { value: new MeshBVHUniformStruct() },
  //       color: { value: new THREE.Color('white') },
  //       resolution: { value: new THREE.Vector2() },
  //       viewMatrixInverse: { value: new THREE.Matrix4() },
  //       projectionMatrixInverse: { value: new THREE.Matrix4() },
  //     },
  //     vertexShader: gemVertShader,
  //     fragmentShader: `
  //     ${shaderStructs}
  //     ${shaderIntersectFunction}
  //     ${gemFragShader}
  //     `,
  //   }),
  //   [texture],
  // )

  // const material = new CSM(GemShader(texture))

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
