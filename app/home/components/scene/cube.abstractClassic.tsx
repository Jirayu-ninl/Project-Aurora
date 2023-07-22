// import * as THREE from 'three'
import { useMemo } from 'react'
import { Color, Vector2 } from 'three'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import { Color as ColorUtils } from '@aurora/libs/webGL/utils'
// import { theme } from '@global/config/defineConfig'

import abstractVertShader from './shaders/abstract.v.glsl'
import abstractFragShader from './shaders/abstract.f.glsl'

const AbstractCube = () => {
  const abstractShader = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: ColorUtils.HEXtoThree('#cc78c1', 1, Color) },
        uResolution: { value: new Vector2(256, 256) },
      },
      vertexShader: abstractVertShader,
      fragmentShader: abstractFragShader,
    }),
    [],
  )

  useFrame(() => (abstractShader.uniforms.uTime.value += 0.05))

  return (
    <>
      <RoundedBox args={[1, 1, 1]} scale={0.8} steps={20}>
        <shaderMaterial args={[abstractShader]} />
      </RoundedBox>
    </>
  )
}

export default AbstractCube
