// import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { Color, Vector2 } from 'three'
import { useFrame, extend } from '@react-three/fiber'
import { RoundedBox, shaderMaterial } from '@react-three/drei'
import { Color as ColorUtils } from '@aurora/libs/webGL/utils'
import { theme } from '@global/config/defineConfig'

import abstractVertShader from './shaders/abstract.v.glsl'
import abstractFragShader from './shaders/abstract.f.glsl'

const AbstractCube = () => {
  const abstractShaderRef = useRef<any>(null)
  useFrame(
    ({ clock }) =>
      abstractShaderRef.current &&
      // (abstractShaderRef.current.uTime = clock.getElapsedTime()),
      (abstractShaderRef.current.uTime += 0.005),
  )

  const PrimaryColorArray = ColorUtils.HEXtoArray(
    theme.color.primary[0],
    1,
  ) as [number, number, number]

  const sUniform = {
    uTime: 0,
    uColor: new Color(
      PrimaryColorArray[0],
      PrimaryColorArray[1],
      PrimaryColorArray[2],
    ),
    uResolution: new Vector2(256, 256),
  }

  //   const AbstractShader = shaderMaterial(sUniform, sAbstractVert, sAbstractFrag)
  const AbstractShader = useMemo(
    () => shaderMaterial(sUniform, abstractVertShader, abstractFragShader),
    [],
  )

  extend({ AbstractShader })

  return (
    <>
      <RoundedBox args={[1, 1, 1]} scale={0.8} steps={20}>
        <abstractShader ref={abstractShaderRef} />
      </RoundedBox>
    </>
  )
}

export default AbstractCube
