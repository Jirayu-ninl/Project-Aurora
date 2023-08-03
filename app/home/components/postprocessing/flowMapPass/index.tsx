/* eslint-disable react/display-name */
import * as THREE from 'three'
import { forwardRef, useMemo } from 'react'
import { ShaderMaterial } from 'three'
import { ShaderPass } from 'postprocessing'
import { useThree, useFrame } from '@react-three/fiber'

import { Simulator } from './Simulator'
import vertexShader from './vertexShader.glsl'
import fragmentShader from './fragmentShader.glsl'

export const FlowMapPass = forwardRef(() => {
  const { width, height } = useThree((state) => state.size)
  const { gl } = useThree()
  const simulator = new Simulator(gl, width, height)
  // const mouse = useThree((state) => state.mouse)

  const config = {
    power: 0.1,
    range: 0.1,
    viscosity: 0.1,
    isPixel: false,
    pixel: 20,
  }

  const passMaterial = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          tDiffuse: { value: null },
          u_motionTexture: { value: null },
          u_powar: { value: config.power },
          u_aspect: { value: width / height },
          u_pixelMode: { value: config.isPixel },
          u_pixel: { value: config.pixel },
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      }),
    [config.isPixel, config.pixel, config.power, width, height],
  )

  useFrame(({ mouse }) => {
    const centeredMousePos = new THREE.Vector2()
    centeredMousePos.set((mouse.x + 1) / 2, (mouse.y + 1) / 2)
    simulator.compute(centeredMousePos, config.range, config.viscosity)
    passMaterial.uniforms.u_motionTexture.value = simulator.texture
  })

  const flowMapPass = new ShaderPass(passMaterial, 'tDiffuse')

  return <primitive object={flowMapPass} dispose={null} />
})
