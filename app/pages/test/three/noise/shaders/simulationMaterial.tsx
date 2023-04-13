import * as THREE from 'three'
import { extend } from '@react-three/fiber'
// import glsl from 'babel-plugin-glsl/macro'

// import Shader from './mat2.glsl'
import { SimMat } from './mat.glsl'

function getPoint(v, size, data, offset) {
  v.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1)
  if (v.length() > 1) return getPoint(v, size, data, offset)
  return v.normalize().multiplyScalar(size).toArray(data, offset)
}

function getSphere(count, size, p = new THREE.Vector3()) {
  const data = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i += 3) getPoint(p, size, data, i)
  return data
}

class SimulationMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      vertexShader: `varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
      // fragmentShader: glsl``,
      fragmentShader: SimMat,
      uniforms: {
        positions: {
          value: new THREE.DataTexture(
            getSphere(512 * 512, 128),
            512,
            512,
            THREE.RGBAFormat,
            THREE.FloatType,
          ),
        },
        uTime: { value: 0 },
        uCurlFreq: { value: 0.25 },
      },
    })
  }
}

extend({ SimulationMaterial })
