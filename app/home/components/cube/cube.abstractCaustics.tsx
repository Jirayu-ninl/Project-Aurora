// import * as THREE from 'three'
import { useMemo } from 'react'
import { Color, MeshStandardMaterial } from 'three'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import CSM from 'three-custom-shader-material'

import frag from './shaders/cube.shader.f.glsl'
import Vert from './shaders/cube.shader.v.glsl'
import common from './shaders/cube.shader.common.glsl'
import simplex from './shaders/cube.shader.simplex.glsl'
import FBM from './shaders/cube.shader.fmb'

const AbstractCube = ({ _dark }: { _dark?: boolean }) => {
  const abstractShaderUniforms = useMemo(
    () => ({
      colorMap: {
        value: [
          new Color('#ffffff'),
          new Color('#ffffff'),
          new Color(_dark ? '#ffb449' : '#789fcc'),
          new Color(_dark ? '#ffd900' : '#afc9cf'),
          new Color(_dark ? '#F86F03' : '#ffffff'),
        ].map((col) => {
          const hsl = {
            h: 0,
            s: 0,
            l: 0,
          }
          col.getHSL(hsl)
          col.setHSL(
            hsl.h, //
            hsl.s * 2,
            hsl.l * 0.75,
          )

          return col
        }),
      },
      uTime: {
        value: 0,
      },
    }),
    [_dark],
  )

  const Frag = useMemo(
    () => `
      ${common}
      ${simplex}
      ${FBM('simplex')}
      ${frag}
    `,
    [],
  )

  useFrame(() => {
    abstractShaderUniforms.uTime.value += 0.05
  })

  return (
    <>
      <RoundedBox args={[1, 1, 1]} scale={0.8}>
        <CSM
          baseMaterial={MeshStandardMaterial}
          uniforms={abstractShaderUniforms}
          fragmentShader={Frag}
          vertexShader={Vert}
        />
      </RoundedBox>
    </>
  )
}

export default AbstractCube
