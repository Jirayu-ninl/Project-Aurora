/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { ShaderMaterial } from 'three'
import { ShaderPass } from 'postprocessing'

type tFxConfig = {
  grainSize: number
}

const initialFxConfig: tFxConfig = {
  grainSize: 2.0,
}

export const GrainPass = (fxConfig = initialFxConfig) => {
  const [grainPass, grainMaterial] = useMemo(() => {
    const grainMaterial = new ShaderMaterial({
      uniforms: {
        u_grainSize: { value: fxConfig.grainSize },
      },
      vertexShader: /*glsl*/ `
        void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
        `,
      fragmentShader: /*glsl*/ `
        uniform u_grainSize;
        #pragma glslify: grain = require(glsl-film-grain) 
 
        void main() {
            float grainSize = 2.0;
            float g = grain(texCoord, resolution / grainSize);
            vec3 color = vec3(g);
            gl_FragColor = vec4(color, 1.0);
        }
        `,
    })
    const grainPass = new ShaderPass(grainMaterial, 'tDiffuse')
    return [grainPass, grainMaterial]
  }, [fxConfig])

  return { grainPass, grainMaterial }
}
