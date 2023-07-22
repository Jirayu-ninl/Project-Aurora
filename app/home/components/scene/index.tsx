import { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import {
  PerspectiveCamera,
  Float,
  // Preload,
  // OrbitControls,
  // ScrollControls,
  // useScroll,
  // Html,
  // Text,
} from '@react-three/drei'
// import { State } from '@global/store'

import Cube from './cube'
import Shadows from './shadows'
import { Background } from './background'
// import { Lens } from './lens'
import { Title } from './title'
import Environments from './environments'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      abstractShader: any
      backgroundShader: any
      textTitleShader: any
    }
  }
}

export default function App({ _dark }: { _dark: boolean }) {
  // const _homeCamera = State((state) => state.homeCamera)
  // const animateCam = useRef<THREE.Group | null>(null)
  // const userCam = useRef<THREE.PerspectiveCamera | undefined>(null)
  const TheCubeRef = useRef<THREE.Group>(null)

  // const scroll = useScroll()

  useFrame(({ mouse, clock }) => {
    //   const UserCam = userCam.current
    //   if (UserCam) {
    //     UserCam.position.y = THREE.MathUtils.lerp(
    //       UserCam.position.y,
    //       -mouse.y * Math.PI * -0.05 - 0.2,
    //       0.03,
    //     )
    //     UserCam.rotation.x = THREE.MathUtils.lerp(
    //       UserCam.rotation.x,
    //       -mouse.y * Math.PI * 0.02 - 0.05,
    //       0.03,
    //     )
    //     UserCam.position.x = THREE.MathUtils.lerp(
    //       UserCam.position.x,
    //       -mouse.x * Math.PI * -0.045,
    //       0.03,
    //     )
    //     UserCam.rotation.y = THREE.MathUtils.lerp(
    //       UserCam.rotation.y,
    //       mouse.x * Math.PI * 0.02,
    //       0.03,
    //     )
    //   }

    //   const AnimateCam = animateCam.current

    //   if (AnimateCam) {
    //     const oldAnimateCam = AnimateCam
    //     AnimateCam.position.x = THREE.MathUtils.lerp(
    //       oldAnimateCam.position.x,
    //       _homeCamera.position[0],
    //       0.03,
    //     )
    //     AnimateCam.position.y = THREE.MathUtils.lerp(
    //       oldAnimateCam.position.y,
    //       _homeCamera.position[1],
    //       0.03,
    //     )
    //     AnimateCam.position.z = THREE.MathUtils.lerp(
    //       oldAnimateCam.position.z,
    //       _homeCamera.position[2],
    //       0.03,
    //     )
    //     AnimateCam.rotation.x = THREE.MathUtils.lerp(
    //       oldAnimateCam.rotation.x,
    //       _homeCamera.rotation[0],
    //       0.03,
    //     )
    //     AnimateCam.rotation.y = THREE.MathUtils.lerp(
    //       oldAnimateCam.rotation.y,
    //       _homeCamera.rotation[1],
    //       0.03,
    //     )
    //     AnimateCam.rotation.z = THREE.MathUtils.lerp(
    //       oldAnimateCam.rotation.z,
    //       _homeCamera.rotation[2],
    //       0.03,
    //     )
    //   }

    if (TheCubeRef.current) {
      const TheCube = TheCubeRef.current
      TheCube.rotation.y =
        Math.sin(clock.getElapsedTime() * 0.2) / 4 - Math.PI / 1.35

      TheCube.position.y = THREE.MathUtils.lerp(
        TheCube.position.y,
        -mouse.y * Math.PI * -0.1,
        0.04,
      )
      TheCube.position.x = THREE.MathUtils.lerp(
        TheCube.position.x,
        -mouse.x * Math.PI * -0.1,
        0.04,
      )

      TheCube.rotation.x = THREE.MathUtils.lerp(
        TheCube.rotation.x,
        -mouse.y * Math.PI * 0.1,
        0.08,
      )
      TheCube.rotation.y = THREE.MathUtils.lerp(
        TheCube.rotation.y,
        mouse.x * Math.PI * 0.1,
        0.08,
      )
    }
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      {/* <group ref={animateCam} position={[0, 0, 3]}> */}
      <PerspectiveCamera
        makeDefault
        fov={50}
        // ref={userCam}
        position={[0, 0, 3]}
      >
        <fog attach='fog' args={[_dark ? '#101010' : 'white', 5, 10]} />
        <fog attach='fog' args={['#101010', 0, 1000]} />
      </PerspectiveCamera>
      {/* </group> */}
      {/* <OrbitControls /> */}
      <Suspense fallback={null}>
        <group ref={TheCubeRef} position={[0, 0, 0]}>
          <Float floatIntensity={1} speed={2}>
            <Cube _dark={_dark} />
          </Float>
        </group>
        <Title _dark={_dark} />
        <Environments />
        <Shadows positionY={-0.8} />
        <Background _dark={_dark} />
        {/* <Preload all /> */}
      </Suspense>
      {/* <PostProcessing /> */}
    </>
  )
}
