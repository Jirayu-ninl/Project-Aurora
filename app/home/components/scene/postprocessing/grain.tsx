/* eslint-disable react/display-name */
import { forwardRef, useMemo } from 'react'
import { ShaderMaterial } from 'three'
import { ShaderPass } from 'postprocessing'

export const GrainPass = forwardRef(() => {
  const passMaterial = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          u_grainSize: { value: 2.0 },
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
      }),
    [],
  )

  const grainPass = new ShaderPass(passMaterial, 'tDiffuse')

  return <primitive object={grainPass} dispose={null} />
})
