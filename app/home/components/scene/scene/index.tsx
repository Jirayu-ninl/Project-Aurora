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
import { State } from '@global/store'

import Scene from './scene'

export default function App({ _dark }: { _dark: boolean }) {
  const _homeCamera = State((state) => state.homeCamera)
  // const light = useRef<THREE.PointLight | null>(null)
  // const { scene } = useThree()

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

  const animateCam = useRef<THREE.Group | null>(null)
  const userCam = useRef<THREE.PerspectiveCamera | undefined>(null)

  useFrame(({ clock, mouse }) => {
    const UserCam = userCam.current
    if (UserCam) {
      UserCam.position.y = THREE.MathUtils.lerp(
        UserCam.position.y,
        -mouse.y * Math.PI * -0.05 - 0.2,
        0.03,
      )
      UserCam.rotation.x = THREE.MathUtils.lerp(
        UserCam.rotation.x,
        -mouse.y * Math.PI * 0.02 - 0.05,
        0.03,
      )
      UserCam.position.x = THREE.MathUtils.lerp(
        UserCam.position.x,
        -mouse.x * Math.PI * -0.045,
        0.03,
      )
      UserCam.rotation.y = THREE.MathUtils.lerp(
        UserCam.rotation.y,
        mouse.x * Math.PI * 0.02,
        0.03,
      )
    }

    const AnimateCam = animateCam.current

    if (AnimateCam) {
      const oldAnimateCam = AnimateCam
      AnimateCam.position.x = THREE.MathUtils.lerp(
        oldAnimateCam.position.x,
        _homeCamera.position[0],
        0.03,
      )
      AnimateCam.position.y = THREE.MathUtils.lerp(
        oldAnimateCam.position.y,
        _homeCamera.position[1],
        0.03,
      )
      AnimateCam.position.z = THREE.MathUtils.lerp(
        oldAnimateCam.position.z,
        _homeCamera.position[2],
        0.03,
      )
      AnimateCam.rotation.x = THREE.MathUtils.lerp(
        oldAnimateCam.rotation.x,
        _homeCamera.rotation[0],
        0.03,
      )
      AnimateCam.rotation.y = THREE.MathUtils.lerp(
        oldAnimateCam.rotation.y,
        _homeCamera.rotation[1],
        0.03,
      )
      AnimateCam.rotation.z = THREE.MathUtils.lerp(
        oldAnimateCam.rotation.z,
        _homeCamera.rotation[2],
        0.03,
      )
    }
  })

  return (
    <>
      <ambientLight intensity={1} />
      <group ref={animateCam} position={[0, 0, 0]}>
        <PerspectiveCamera makeDefault fov={45} ref={userCam}>
          {/* <fog attach='fog' args={[_dark ? '#101010' : 'white', 5, 10]} /> */}
        </PerspectiveCamera>
      </group>
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
      <Suspense fallback={null}>
        <Scene _dark={_dark} />
      </Suspense>
      <EffectComposer disableNormalPass>
        {/* <DepthOfField
          focusDistance={0.002}
          focalLength={0.02}
          bokehScale={10}
          height={200}
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
