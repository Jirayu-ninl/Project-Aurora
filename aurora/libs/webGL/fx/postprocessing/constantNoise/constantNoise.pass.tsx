/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { ShaderMaterial } from 'three'
import { ShaderPass } from 'postprocessing'

import vertexShader from './vertexShader.glsl'
import fragmentShader from './fragmentShader.glsl'

type tFxConfig = {
  scale: number
}

const initialFxConfig: tFxConfig = {
  scale: 0.07,
}

export const ConstantNoisePass = (fxConfig = initialFxConfig) => {
  const [constantNoisePass, constantNoiseMaterial] = useMemo(() => {
    const constantNoiseMaterial = new ShaderMaterial({
      uniforms: {
        tDiffuse: { value: null },
        u_scale: { value: fxConfig.scale },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })
    const constantNoisePass = new ShaderPass(constantNoiseMaterial, 'tDiffuse')
    return [constantNoisePass, constantNoiseMaterial]
  }, [fxConfig])

  return { constantNoisePass, constantNoiseMaterial }
}
