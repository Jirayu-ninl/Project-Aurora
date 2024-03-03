/* eslint-disable react/display-name */
import * as THREE from 'three'
import { useMemo } from 'react'
import { ShaderMaterial } from 'three'
import { ShaderPass } from 'postprocessing'
import { useThree, useFrame } from '@react-three/fiber'

import { Simulator } from './Simulator'
import vertexShader from './vertexShader.glsl'
import fragmentShader from './fragmentShader.glsl'

type tFxConfig = {
  power: number
  range: number
  viscosity: number
  isPixel: boolean
  pixel: number
}

const initialFxConfig: tFxConfig = {
  power: 0.1,
  range: 0.1,
  viscosity: 0.1,
  isPixel: false,
  pixel: 20,
}

export const FlowMapPass = (fxConfig = initialFxConfig) => {
  const { width, height } = useThree((state) => state.size)
  const { gl } = useThree()
  const simulator = new Simulator(gl, width, height)

  const [flowMapPass, flowMapMaterial] = useMemo(() => {
    const flowMapMaterial = new ShaderMaterial({
      defines: { LABEL: 'value' },
      uniforms: {
        tDiffuse: { value: null },
        u_motionTexture: { value: null },
        u_powar: { value: fxConfig.power },
        u_aspect: { value: width / height },
        u_pixelMode: { value: fxConfig.isPixel },
        u_pixel: { value: fxConfig.pixel },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })
    const flowMapPass = new ShaderPass(flowMapMaterial, 'tDiffuse')
    return [flowMapPass, flowMapMaterial]
  }, [fxConfig, width, height])

  useFrame(({ pointer }) => {
    const centeredMousePos = new THREE.Vector2()
    centeredMousePos.set((pointer.x + 1) / 2, (pointer.y + 1) / 2)
    simulator.compute(centeredMousePos, fxConfig.range, fxConfig.viscosity)
    flowMapMaterial.uniforms.u_motionTexture.value = simulator.texture
  })

  return { flowMapPass, flowMapMaterial }
}
