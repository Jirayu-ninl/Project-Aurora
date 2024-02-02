import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { Color, MeshStandardMaterial } from 'three'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, useScroll } from '@react-three/drei'
import CSM from 'three-custom-shader-material'
import { getInviewAnimationValue } from '@aurora/views/animations'
import { getCubeState } from './cube.state.date'

import frag from './shaders/cube.abstract.f.glsl'
import Vert from './shaders/cube.abstract.v.glsl'
import common from './shaders/cube.abstract.common.glsl'
import simplex from './shaders/cube.abstract.simplex.glsl'
import FBM from './shaders/cube.abstract.fmb'

const AbstractCube = ({ _dark }: { _dark?: boolean }) => {
  const scroll = useScroll()
  const $cube = useRef<THREE.Mesh | null>(null)

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
      uAlpha: {
        value: 1,
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
    // console.log(scroll.offset)
    const cubeState = getCubeState(scroll.pages)

    $cube.current &&
      ($cube.current.visible =
        scroll.offset <= cubeState.fadeOut.END ? true : false)

    if (
      cubeState.fadeOut.START <= scroll.offset &&
      scroll.offset <= cubeState.fadeOut.END
    ) {
      abstractShaderUniforms.uAlpha.value =
        1 -
        getInviewAnimationValue(
          [cubeState.fadeOut.START, cubeState.fadeOut.END],
          scroll.offset,
        )
    }
  })

  return (
    <>
      <RoundedBox args={[1, 1, 1]} scale={0.8} ref={$cube}>
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
