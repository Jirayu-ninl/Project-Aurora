/* eslint-disable react/display-name */
// import * as THREE from 'three'
import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  Environment,
  Float,
  Lightformer,
} from '@react-three/drei'

import Cube from './components/cube'
import FloorGrid from './components/floorGrid'
import Shadows from './components/shadows'

function Scene({ _dark }: { _dark: boolean }) {
  // const Color = theme.color

  const TheObj = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (TheObj.current) {
      TheObj.current.rotation.y =
        Math.sin(clock.getElapsedTime() * 0.2) / 4 - Math.PI / 1.35
    }
  })

  return (
    <>
      <FloorGrid _dark={_dark} positionY={-0.8} />
      <group ref={TheObj} position={[0, 0.5, 0]}>
        <Float floatIntensity={2} speed={2}>
          <Cube _dark={_dark} />
        </Float>
      </group>
      {/* <OrbitControls /> */}
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
      <Shadows positionY={-0.8} />
      {/* <color args={_dark ? [0x101010] : [0xffffff]} attach='background' /> */}
    </>
  )
}

export default Scene
