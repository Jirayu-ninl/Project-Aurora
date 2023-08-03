/* eslint-disable react/display-name */
// import * as THREE from 'three'
import { forwardRef, useMemo } from 'react'
import { ShaderMaterial } from 'three'
import { ShaderPass } from 'postprocessing'

import vertexShader from './vertexShader.glsl'
import fragmentShader from './fragmentShader.glsl'

export const VeilPass = forwardRef(() => {
  const passMaterial = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          tDiffuse: { value: null },
          u_progress: { value: 0 },
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      }),
    [],
  )

  const veilPass = new ShaderPass(passMaterial, 'tDiffuse')

  return <primitive object={veilPass} dispose={null} />
})
