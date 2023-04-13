import * as THREE from 'three'
import { useRef, Suspense, useState } from 'react'
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import glsl from 'glslify'

const WaveShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
    noiseAmp: 0.25,
  },
  glsl`
    precision mediump float;
    varying vec2 vUv;
    varying float vWave;
    uniform float uTime;
    uniform float noiseAmp;
    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);
    void main() {
        vUv = uv;
        vec3 pos = position;
        float noiseFreq = 1.5;
        // float noiseAmp = 0.25;
        vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
        pos.z += snoise3(noisePos) * noiseAmp;
        vWave = pos.z;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  glsl`
    precision mediump float;
    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;
    varying vec2 vUv;
    varying float vWave;
    void main() {
        float wave = vWave * 0.1;
        vec3 texture = texture2D(uTexture, vUv + wave).rgb;
        gl_FragColor = vec4(texture,1.0);
        // gl_FragColor = vec4(sin(vUv.y + uTime), vUv.y, 1.0, 1.0);
    }
  `,
)

const Wave = () => {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const [image] = useLoader(THREE.TextureLoader, ['/cover.jpg'])
  useFrame(({ clock }) => {
    ref.current.uTime = clock.getElapsedTime()
    ref.current.noiseAmp = hovered ? 0.8 : 0.25
  })
  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <planeGeometry args={[0.7, 0.4, 16, 16]} />
      <waveShaderMaterial uColor='lightblue' ref={ref} uTexture={image} />
    </mesh>
  )
}

extend({ WaveShaderMaterial })

const Scene = () => {
  return (
    <Canvas camera={{ fov: 10, position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <Wave />
      </Suspense>
    </Canvas>
  )
}

export default function Glsl() {
  return <Scene />
}
