/* eslint-disable react/display-name */
// import * as THREE from 'three'
import { useRef, memo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import {
  useTexture,
  Grid,
  OrbitControls,
  Environment,
  Reflector,
  AccumulativeShadows,
  RandomizedLight,
  Float,
} from '@react-three/drei'

import Cube from './components/cube'

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
      {/* <Ground /> */}
      <group ref={TheObj} position={[0, 1.3, 0]}>
        <Float floatIntensity={2} speed={2}>
          <Cube _dark={_dark} />
        </Float>
      </group>
      <Grid
        renderOrder={-1}
        position={[0, 0, 0]}
        infiniteGrid={true}
        cellSize={0.6}
        cellThickness={0.6}
        cellColor={_dark ? '#888888' : '#f5f5f5'}
        sectionSize={3.3}
        sectionThickness={1}
        sectionColor={_dark ? '#04C2A2' : '#4300FF'}
        fadeDistance={25}
        fadeStrength={1.2}
      />
      {/* <OrbitControls /> */}
      <Environment preset='city' blur={0.8} />
    </>
  )
}

const Ground = () => {
  return (
    <>
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <planeBufferGeometry attach='geometry' args={[25, 15]} />
        <meshStandardMaterial
          attach='material'
          color='#0a0a0a'
          roughness={0.2}
          metalness={0.2}
          // bumpScale={0.02}
          // clearcoat={1}
          // clearcoatRoughness={1}
          // radius={1.2}
          // distort={0.4}
        />
      </mesh>
    </>
  )
}

function WetGround() {
  const [floor, normal] = useTexture([
    '/three/floor/roughness_floor.jpeg',
    '/three/floor/normal_floor.jpeg',
  ])

  return (
    <Reflector
      resolution={1024}
      args={[25, 25]}
      mirror={1}
      mixBlur={50}
      mixStrength={1.8}
      position={[0, -1.5, 0]}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      blur={[300, 120]}
      minDepthThreshold={0.5}
      maxDepthThreshold={2}
      depthScale={2}
    >
      {(Material: any, props) => (
        <Material
          color='#f0f0f0'
          metalness={0}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[0.6, 0.6]}
          {...props}
        />
      )}
    </Reflector>
  )
}

const Shadows = memo(() => (
  <AccumulativeShadows
    temporal
    frames={100}
    color='#9d4b4b'
    colorBlend={0.5}
    alphaTest={0.9}
    scale={20}
  >
    <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
  </AccumulativeShadows>
))

export default Scene
