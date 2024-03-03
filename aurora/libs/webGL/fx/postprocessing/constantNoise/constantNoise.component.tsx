/* eslint-disable react/display-name */
import { forwardRef, useMemo } from 'react'
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

export const ConstantNoiseComponent = forwardRef(
  ({ fxConfig = initialFxConfig }: { fxConfig?: tFxConfig }, ref) => {
    const [constantNoisePass] = useMemo(() => {
      const passMaterial = new ShaderMaterial({
        uniforms: {
          tDiffuse: { value: null },
          u_scale: { value: fxConfig.scale },
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      })
      const constantNoisePass = new ShaderPass(passMaterial, 'tDiffuse')
      return [constantNoisePass]
    }, [])

    return <primitive object={constantNoisePass} dispose={null} ref={ref} />
  },
)
