/* eslint-disable react/display-name */
import { forwardRef, useMemo } from 'react'
import { ShaderMaterial } from 'three'
import { ShaderPass } from 'postprocessing'

import vertexShader from './vertexShader.glsl'
import fragmentShader from './fragmentShader.glsl'

export const ConstantNoisePass = forwardRef(() => {
  const passMaterial = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          tDiffuse: { value: null },
          u_scale: { value: 0.07 },
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      }),
    [],
  )

  const constantNoisePass = new ShaderPass(passMaterial, 'tDiffuse')

  return <primitive object={constantNoisePass} dispose={null} />
})
