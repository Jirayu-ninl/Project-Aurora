import { Suspense, useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  GodRays,
} from '@react-three/postprocessing'
import { KernelSize } from 'postprocessing'

import Scene from './scene'
import * as THREE from 'three'

export default function App() {
  const light = useRef(null)
  const { scene } = useThree()

  const sunMaterial = new THREE.MeshBasicMaterial({
    color: 0xffddaa,
    transparent: true,
    fog: false,
  })
  const sun2Material = new THREE.MeshBasicMaterial({
    color: 0xaacbff,
    transparent: true,
    fog: false,
  })

  const sunGeometry = new THREE.SphereGeometry(5, 16, 16)
  const Sun = new THREE.Mesh(sunGeometry, sunMaterial)
  Sun.position.set(-37, 8, -30)

  const sun2Geometry = new THREE.SphereGeometry(3, 8, 8)
  const Sun2 = new THREE.Mesh(sun2Geometry, sun2Material)
  Sun2.position.set(50, -8, -50)

  scene.add(Sun, Sun2)

  useFrame((state) => {
    light.current.position.x = state.mouse.x * 20
    light.current.position.y = state.mouse.y * 20
  })

  return (
    <>
      <fog color='#161616' attach='fog' near={8} far={30} />
      <PerspectiveCamera makeDefault position={[0, 0, 3]} fov={75}>
        <ambientLight intensity={1} />
        <pointLight
          ref={light}
          position-z={-4}
          intensity={0.05}
          color={'#fff9d4'}
        />
        {/* <group>
          <pointLight
            position={[-7, 3, -10]}
            intensity={0.5}
            color={'#3324ff'}
          />
          <pointLight position={[3, -5, -10]} intensity={1} color={'#ffdd6e'} />
        </group> */}
        <group>
          <pointLight position={[-2, 5, 10]} intensity={1} color={'#ffffff'} />
        </group>
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <EffectComposer>
        <DepthOfField
          focusDistance={0.002}
          focalLength={0.02}
          bokehScale={10}
          height={400}
        />
        <Bloom
          intensity={5}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.3}
          opacity={0.2}
          kernelSize={KernelSize.SMALL}
        />
        <Bloom
          intensity={20}
          luminanceThreshold={0.3}
          luminanceSmoothing={0.2}
          opacity={0.07}
          height={500}
          kernelSize={KernelSize.LARGE}
        />
        <Bloom
          intensity={10}
          luminanceThreshold={0}
          luminanceSmoothing={0.1}
          height={100}
          opacity={0.07}
          kernelSize={KernelSize.LARGE}
        />
        <GodRays
          sun={Sun}
          height={480}
          density={2}
          decay={0.9}
          weight={0.6}
          exposure={1}
          samples={60}
          clampMax={1}
        />
        <GodRays
          sun={Sun2}
          height={480}
          density={1}
          decay={0.9}
          weight={0.6}
          exposure={1}
          samples={60}
          clampMax={1}
        />
        <Noise opacity={0.025} />
      </EffectComposer>
    </>
  )
}
