import { Suspense, useRef } from 'react'
import * as THREE from 'three'
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

export default function App({ _dark }: { _dark: boolean }) {
  const light = useRef<THREE.PointLight | null>(null)
  const { scene } = useThree()

  // const sunMaterial = new THREE.MeshBasicMaterial({
  //   color: 0xffddaa,
  //   transparent: true,
  //   fog: false,
  // })

  // const sunGeometry = new THREE.SphereGeometry(5, 32, 32)
  // const Sun = new THREE.Mesh(sunGeometry, sunMaterial)
  // Sun.position.set(-5, 8, -30)

  // scene.add(Sun)

  // useFrame((state) => {
  //   if (light.current) {
  //     light.current.position.x = state.mouse.x * 20
  //     light.current.position.y = state.mouse.y * 20
  //   }
  // })

  const rCam = useRef<THREE.PerspectiveCamera | undefined>(null)

  useFrame(({ clock, mouse }) => {
    if (rCam.current) {
      rCam.current.position.y = THREE.MathUtils.lerp(
        rCam.current.position.y,
        -mouse.y * Math.PI * -0.5 + 0.5,
        0.15,
      )
      rCam.current.rotation.x = THREE.MathUtils.lerp(
        rCam.current.rotation.x,
        -mouse.y * Math.PI * 0.05 - 0.3,
        0.15,
      )
      rCam.current.position.x = THREE.MathUtils.lerp(
        rCam.current.position.x,
        -mouse.x * Math.PI * -0.5,
        0.15,
      )
      rCam.current.rotation.y = THREE.MathUtils.lerp(
        rCam.current.rotation.y,
        mouse.x * Math.PI * 0.05,
        0.15,
      )
    }
  })

  return (
    <>
      <fog attach='fog' args={[_dark ? 'black' : 'white', 8, 30]} />
      <PerspectiveCamera makeDefault position={[0, 0, 3]} fov={45} ref={rCam}>
        <ambientLight intensity={1} />
        {/* <pointLight
          ref={light}
          position-z={-4}
          intensity={0.05}
          color={'#fff9d4'}
        />
        <group>
          <pointLight
            position={[3, -5, -10]}
            intensity={0.05}
            color={'#ffffff'}
          />
        </group>
        <group>
          <pointLight
            position={[-2, 5, 10]}
            intensity={0.1}
            color={'#ffffff'}
          />
        </group> */}
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <Scene _dark={_dark} />
      </Suspense>
      <EffectComposer disableNormalPass>
        {/* <DepthOfField
          focusDistance={0.002}
          focalLength={0.02}
          bokehScale={10}
          height={400}
        /> */}
        <Bloom luminanceThreshold={1} mipmapBlur />
        <Bloom
          intensity={5}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.3}
          opacity={0.1}
          kernelSize={KernelSize.MEDIUM}
        />
        <Bloom
          intensity={8}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.5}
          opacity={0.2}
          kernelSize={KernelSize.HUGE}
        />
        {/* <GodRays
          sun={Sun}
          height={480}
          density={2}
          decay={0.9}
          weight={0.6}
          exposure={1}
          samples={60}
          clampMax={1}
        /> */}
        {/* <Noise opacity={0.025} /> */}
      </EffectComposer>
    </>
  )
}
