import * as THREE from 'three'
import React, { Suspense, useRef, useState, useLayoutEffect } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from '@react-three/postprocessing'
import {
  // Html,
  Icosahedron,
  useCubeTexture,
  MeshDistortMaterial,
  PerspectiveCamera,
} from '@react-three/drei'

function MainSphere({ material, Hover }) {
  const [hovered, setHovered] = Hover
  const main = useRef(null)

  useFrame(({ clock, mouse }) => {
    main.current.rotation.z = clock.getElapsedTime() * 0.4
    main.current.rotation.y = THREE.MathUtils.lerp(
      main.current.rotation.y,
      mouse.x * Math.PI,
      0.02,
    )
    main.current.rotation.x = THREE.MathUtils.lerp(
      main.current.rotation.x,
      mouse.y * Math.PI,
      0.02,
    )
    main.current.position.x = THREE.MathUtils.lerp(
      main.current.position.x,
      hovered ? mouse.x / 2 : 0,
      0.2,
    )
    main.current.position.y = THREE.MathUtils.lerp(
      main.current.position.y,
      Math.sin(clock.elapsedTime / 1.5) / 6 + (hovered ? mouse.y / 2 : 0),
      0.2,
    )
  })
  return (
    <Icosahedron
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      args={[1, 4]}
      ref={main}
      material={material}
      position={[0, 0, 0]}
    />
  )
}

function Instances({ material, Hover }) {
  const [sphereRefs] = useState(() => [])
  const initialPositions = [
    [-4, 20, -12],
    [-10, 12, -4],
    [-11, -12, -23],
    [-16, -6, -10],
    [12, -2, -3],
    [13, 4, -12],
    [14, -2, -23],
    [8, 10, -20],
  ]
  useFrame(() => {
    sphereRefs.forEach((el) => {
      el.position.y += 0.02
      if (el.position.y > 19) el.position.y = -18
      el.rotation.x += 0.06
      el.rotation.y += 0.06
      el.rotation.z += 0.02
    })
  })
  return (
    <>
      <MainSphere material={material} Hover={Hover} />
      {initialPositions.map((pos, i) => (
        <Icosahedron
          args={[1, 4]}
          position={[pos[0], pos[1], pos[2]]}
          material={material}
          key={i}
          ref={(ref) => (sphereRefs[i] = ref)}
        />
      ))}
    </>
  )
}

function useResource(optionalRef) {
  const [_, forceUpdate] = useState(false)
  const localRef = useRef(undefined)
  const ref = optionalRef ? optionalRef : localRef
  useLayoutEffect(() => void forceUpdate((i) => !i), [ref.current])
  return [ref, ref.current]
}

function Scene({ Hover }) {
  const bumpMap = useLoader(THREE.TextureLoader, '/three/blob/bump.jpg')
  const envMap = useCubeTexture(
    ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
    { path: '/three/blob/cube/' },
  )
  // We use `useResource` to be able to delay rendering the spheres until the material is ready
  const [matRef, material] = useResource(false)

  return (
    <>
      <MeshDistortMaterial
        ref={matRef}
        envMap={envMap}
        bumpMap={bumpMap}
        color={'#010101'}
        roughness={0.1}
        metalness={1}
        bumpScale={0.05}
        clearcoat={1}
        clearcoatRoughness={1}
        radius={1.2}
        distort={0.4}
      />
      {material && <Instances material={material} Hover={Hover} />}
    </>
  )
}

export default function App() {
  const [hovered, setHovered] = useState(false)
  const Hover = [hovered, setHovered]
  const light = useRef(null)

  useFrame((state) => {
    light.current.position.x = state.mouse.x * 20
    light.current.position.y = state.mouse.y * 20
  })

  return (
    <>
      <fog color='#161616' attach='fog' near={8} far={30} />
      <PerspectiveCamera makeDefault position={[0, 0, 3]} fov={75}>
        <pointLight
          ref={light}
          position-z={-2}
          intensity={15}
          color={'rgb(16,38,43)'}
        />
      </PerspectiveCamera>
      <Suspense
        // fallback={<Html center>Loading.</Html>}
        fallback={null}
      >
        <Scene Hover={Hover} />
      </Suspense>
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          opacity={3}
        />
        <Noise opacity={0.025} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  )
}
