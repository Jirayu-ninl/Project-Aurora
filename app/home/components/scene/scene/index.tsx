import { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing'
import { State } from '@global/store'

import Scene from './scene'

export default function App({ _dark }: { _dark: boolean }) {
  const _homeCamera = State((state) => state.homeCamera)
  const animateCam = useRef<THREE.Group | null>(null)
  const userCam = useRef<THREE.PerspectiveCamera | undefined>(null)

  useFrame(({ mouse }) => {
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
      {/* <ambientLight intensity={1} /> */}
      <group ref={animateCam} position={[0, 0, 0]}>
        <PerspectiveCamera makeDefault fov={45} ref={userCam}>
          <fog attach='fog' args={[_dark ? '#101010' : 'white', 5, 10]} />
          <fog attach='fog' args={['#101010', 0, 1000]} />
        </PerspectiveCamera>
      </group>
      <Suspense fallback={null}>
        <Scene _dark={_dark} />
      </Suspense>
      <EffectComposer>
        {/* <DepthOfField
          focusDistance={0.002}
          focalLength={0.02}
          bokehScale={10}
          height={200}
        /> */}
        <Bloom luminanceThreshold={0.5} mipmapBlur />
        <Bloom luminanceThreshold={1} intensity={10} levels={9} mipmapBlur />
        <Bloom luminanceThreshold={1.5} intensity={5} levels={8} mipmapBlur />
        <Noise opacity={0.025} />
      </EffectComposer>
    </>
  )
}
