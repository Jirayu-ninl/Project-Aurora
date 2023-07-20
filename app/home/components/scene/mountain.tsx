// import * as THREE from 'three'
import { useRef } from 'react'
import { Color, Vector2 } from 'three'
import { useFrame, extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

import mountainVertShader from './shaders/mountain.v.glsl'
import mountainFragShader from './shaders/mountain.f.glsl'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mountainShader: any
    }
  }
}

function Mountain() {
  const MountainShaderRef = useRef<any>(null)
  useFrame(
    ({ clock }) =>
      MountainShaderRef.current &&
      (MountainShaderRef.current.uTime = clock.getElapsedTime()),
  )

  const sUniform = {
    uTime: 0,
    uSpeedMul: -30.0,
    uColor: new Color(1.0, 1.0, 1.0),
    uResolution: new Vector2(256, 256),
  }

  const MountainShader = shaderMaterial(
    sUniform,
    mountainVertShader,
    mountainFragShader,
  )

  extend({ MountainShader })

  return (
    <>
      <mesh scale={10} position={[0, -20, -800]}>
        <planeGeometry args={[256, 256, 256, 256]} />
        <mountainShader ref={MountainShaderRef} wireframe />
      </mesh>
    </>
  )
}

export default Mountain
