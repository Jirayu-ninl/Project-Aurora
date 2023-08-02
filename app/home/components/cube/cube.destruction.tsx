import {
  //   Color,
  MeshStandardMaterial,
  //   EquirectangularReflectionMapping,
} from 'three'
import { useMemo } from 'react'

import CSM from 'three-custom-shader-material/vanilla'
// import { useLoader } from '@react-three/fiber'
// import { RGBELoader } from 'three-stdlib'

import Model from './cube.destruction.model'
import fractalVertShader from './shaders/destruction.fractal.v.glsl'
import fractalFragShader from './shaders/destruction.fractal.f.glsl'
// import gemVertShader from './shaders/destruction.gem.v.glsl'
// import gemFragShader from './shaders/destruction.gem.f.glsl'

const DestructionCube = () => {

  const fractalShader = useMemo(
    () => ({
      baseMaterial: MeshStandardMaterial,
      vertexShader: fractalVertShader,
      fragmentShader: fractalFragShader,
      silent: true,
      uniforms: {
        u_time: {
          value: 0,
        },
      },
    }),
    [],
  )

  //   const gemShader = useMemo(
  //     () => ({
  //       baseMaterial: MeshRefractionMaterial,
  //       silent: true,
  //       uniforms: {
  //         u_time: {
  //           value: 0,
  //         },
  //         envMap: {
  //           value: new Texture(),
  //         },
  //         bounces: {
  //           value: 2,
  //         },
  //         ior: {
  //           value: 2.75,
  //         },
  //         aberrationStrength: {
  //           value: 0.01,
  //         },
  //         fresnel: {
  //           value: 1,
  //         },
  //       },
  //     }),
  //     [MeshRefractionMaterial],
  //   )

  const fractalMaterial = new CSM(fractalShader)
  //   const gemMaterial = new CSM(gemShader)

  const materials = {
    fractalMaterial,
    // gemMaterial,
  }

  return (
    <>
      <Model materials={materials} />
    </>
  )
}

export default DestructionCube
