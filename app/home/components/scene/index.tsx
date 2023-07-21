import { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import {
  PerspectiveCamera,
  OrthographicCamera,
  Environment,
  Float,
  Lightformer,
  OrbitControls,
  ScrollControls,
  useScroll,
  Html,
  Text,
} from '@react-three/drei'
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing'
import { State } from '@global/store'

import Cube from './cube'
import Shadows from './shadows'
import { Background } from './background'
// import { Lens } from './lens'
import { Header } from './header'

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
  const _homeCamera = State((state) => state.homeCamera)
  const animateCam = useRef<THREE.Group | null>(null)
  const userCam = useRef<THREE.PerspectiveCamera | undefined>(null)
  const TheCubeRef = useRef<THREE.Group>(null)

  const scroll = useScroll()

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
        {/* <Text
          position={[0, 0, -1]}
          font='/three/fonts/Inter-SemiBold.woff'
          fontSize={1}
        >
          TheIceJi
          <meshStandardMaterial
            color={_dark ? [2, 2, 2] : [0.3, 0.3, 0.3]}
            toneMapped={false}
            side={THREE.DoubleSide}
          />
        </Text> */}
        <Header _dark={_dark} />
        <Environments />
        <Shadows positionY={-0.8} />
        <Background _dark={_dark} />
      </Suspense>
      {/* <PostProcessing /> */}
    </>
  )
}

const Environments = () => (
  <>
    <Environment resolution={32}>
      <group rotation={[-Math.PI / 4, -0.3, 0]}>
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 5, -9]}
          scale={[10, 10, 1]}
        />
        <Lightformer
          intensity={1}
          rotation-y={Math.PI / 2}
          position={[-5, 1, -1]}
          scale={[10, 2, 1]}
        />
        <Lightformer
          intensity={1}
          rotation-y={Math.PI / 2}
          position={[-5, -1, -1]}
          scale={[10, 2, 1]}
        />
        <Lightformer
          intensity={1}
          rotation-y={-Math.PI / 2}
          position={[10, 1, 0]}
          scale={[20, 2, 1]}
        />
        <Lightformer
          type='ring'
          intensity={1}
          rotation-y={Math.PI / 2}
          position={[-0.1, -1, -5]}
          scale={10}
        />
      </group>
    </Environment>
  </>
)

const PostProcessing = () => (
  <EffectComposer>
    <Bloom luminanceThreshold={0.5} mipmapBlur />
    <Bloom luminanceThreshold={1} intensity={10} levels={9} mipmapBlur />
    <Bloom luminanceThreshold={1.5} intensity={5} levels={8} mipmapBlur />
    <Noise opacity={0.25} />
  </EffectComposer>
)
