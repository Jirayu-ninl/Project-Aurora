import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text, useGLTF, AdaptiveDpr, Loader } from '@react-three/drei'
import { EffectComposer, SSAO, Bloom } from '@react-three/postprocessing'
import { KernelSize, BlendFunction } from 'postprocessing'
import {
  RectAreaLightUniformsLib,
  // FlakesTexture
} from 'three-stdlib'

import { FlakesTexture } from './textures/FlakesTexture'

// This demo shows how to use react-three-fibers regression system
// When call call state.regress() nothing really will happen, all it
// does is setting a flag. But parts of the scene graph can now respond
// to it in whatever way the want. Here we cause regression on mouse-move
// and scale the pixel ratio as well as skipping some post-processing effects.

RectAreaLightUniformsLib.init()
THREE.Vector2.prototype.equals = function (v, epsilon = 0.001) {
  return Math.abs(v.x - this.x) < epsilon && Math.abs(v.y - this.y) < epsilon
}

function useLerpedMouse() {
  const mouse = useThree((state) => state.mouse)
  const lerped = useRef(mouse.clone())
  const previous = new THREE.Vector2()
  useFrame((state) => {
    previous.copy(lerped.current)
    lerped.current.lerp(mouse, 0.1)
    // Regress system when the mouse is moved
    if (!previous.equals(lerped.current)) state.performance.regress()
  })
  return lerped
}

function Model(props) {
  const ref = useRef()
  const [texture] = useState(
    () =>
      new THREE.CanvasTexture(
        new FlakesTexture(),
        THREE.UVMapping,
        THREE.RepeatWrapping,
        THREE.RepeatWrapping,
      ),
  )
  const { nodes, materials } = useGLTF('/mock/models/wraith.glb')
  useGLTF.preload('/wraith.glb')
  const mouse = useLerpedMouse()
  useFrame((state) => {
    ref.current.rotation.y = (mouse.current.x * Math.PI) / 10
    ref.current.rotation.x = (mouse.current.y * Math.PI) / 200
  })
  return (
    <group ref={ref} dispose={null} {...props}>
      <group position={[0, -0.7, 0]} scale={1}>
        <mesh
          geometry={nodes.jumpkit_1.geometry}
          material={materials.wraith_jumpkit_cyberninja}
        />
        <mesh
          geometry={nodes.eye_base_1.geometry}
          material={materials.wraith_eye_base}
        />
        <mesh
          geometry={nodes.head_1.geometry}
          material={materials.wraith_head}
        />
        <mesh
          geometry={nodes.body_1.geometry}
          material={materials.wraith_body_cyberninja}
        />
        <mesh
          geometry={nodes.gauntlet_1.geometry}
          material={materials.wraith_gauntlet_cyberninja}
        />
        <mesh
          geometry={nodes.helm_1.geometry}
          material={materials.wraith_helm_cyberninja}
        />
      </group>
    </group>
  )
}

const Lights = () => {
  const lights = useRef()
  const mouse = useLerpedMouse()
  useFrame((state) => {
    lights.current.rotation.x = (mouse.current.x * Math.PI) / 2
    lights.current.rotation.y = Math.PI * 0.25 - (mouse.current.y * Math.PI) / 2
  })
  return (
    <>
      <directionalLight
        intensity={1}
        position={[2, 2, 0]}
        color='red'
        distance={5}
      />
      <spotLight
        intensity={2}
        position={[-5, 10, 2]}
        angle={0.2}
        penumbra={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <group ref={lights}>
        <rectAreaLight
          intensity={2}
          position={[4.5, 0, -3]}
          width={10}
          height={10}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
        <rectAreaLight
          intensity={2}
          position={[-10, 2, -10]}
          width={15}
          height={15}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
      </group>
    </>
  )
}

function Effects() {
  const ref = useRef()
  // useFrame((state) => {
  //   // Disable SSAO on regress
  //   ref.current.blendMode.setBlendFunction(
  //     state.performance.current < 1
  //       ? BlendFunction.SKIP
  //       : BlendFunction.MULTIPLY
  //   )
  // }, [])
  return (
    <EffectComposer multisampling={8}>
      {/* <SSAO
        ref={ref}
        intensity={15}
        radius={10}
        luminanceInfluence={0}
        bias={0.035}
      /> */}
      <Bloom
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={0.55}
        luminanceSmoothing={0.2}
      />
    </EffectComposer>
  )
}

export default function App() {
  return (
    <>
      <Canvas
        shadows
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{ alpha: false, antialias: false }}
        camera={{ position: [0, 0, 0.8], fov: 75, near: 0.5, far: 1 }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <color attach='background' args={['grey']} />
        <fog attach='fog' args={['#000', 0.8, 1]} />
        <Lights />
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} />
          <Text
            position={[0, 0, -0.2]}
            fontSize={0.6}
            color='white'
            // font='poppins'
            material-fog={false}
            letterSpacing={-0.1}
          >
            The IceJI
          </Text>
        </Suspense>
        <mesh scale={6} position={[0, 1, -0.2]}>
          <planeGeometry />
          <meshStandardMaterial
            // color='lightblue'
            color='grey'
            toneMapped={false}
            fog={false}
            envMapIntensity={0}
          />
        </mesh>
        <AdaptiveDpr />
        <Effects />
      </Canvas>
      <Loader
        dataInterpolation={(p) => console.log(`Loading: ${p}%`)}
        initialState={(active) => console.log(`Is loading: ${active}`)}
      />
    </>
  )
}
