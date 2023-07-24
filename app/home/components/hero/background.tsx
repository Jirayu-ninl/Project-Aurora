import { useMemo } from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import { Color as ColorUtils } from '@aurora/libs/webGL/utils'
// import { theme } from '@global/config/defineConfig'

import backgroundVertShader from './shaders/background.v.glsl'
import backgroundFragShader from './shaders/background.f.glsl'
import cpNoise21 from 'auroraGL/noise/cpNoise21.glsl'

const Background = ({ _dark }: { _dark: boolean }) => {
  const shader: THREE.Shader = useMemo(
    () => ({
      uniforms: {
        u_time: { value: 0 },
        u_mouse: { value: new THREE.Vector2() },
        u_dark: { value: _dark },
        u_color1: { value: ColorUtils.HEXtoThree('#ffb449', 1, THREE.Color) },
        u_color2: { value: ColorUtils.HEXtoThree('#afc9cf', 1, THREE.Color) },
        u_color3: { value: ColorUtils.HEXtoThree('#789fcc', 1, THREE.Color) },
      },
      vertexShader: backgroundVertShader,
      fragmentShader: `${cpNoise21} ${backgroundFragShader}`,
    }),
    [_dark],
  )

  const target = new THREE.Vector2()
  useFrame(({ mouse }) => {
    shader.uniforms.u_time.value += 0.005
    target.set((mouse.x + 1) * 0.5, (mouse.y + 1) * 0.5)
    shader.uniforms.u_mouse.value.lerp(target, 0.2)
  })

  return (
    <Plane args={[14, 8]} scale={0.8} position={[0, 0, -1.2]}>
      <shaderMaterial args={[shader]} />
    </Plane>
  )
}

export default Background
