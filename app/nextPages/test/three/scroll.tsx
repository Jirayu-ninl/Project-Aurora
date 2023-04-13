import { css } from '@emotion/css'
import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Image,
  useFBO,
  PerspectiveCamera,
} from '@react-three/drei'

function Images() {
  const { width, height } = useThree((state) => state.viewport)
  const data = useScroll()
  const group = useRef()
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 3
    group.current.children[3].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[4].material.zoom =
      1 + data.range(1.25 / 3, 1 / 3) / 1
    group.current.children[5].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3
    group.current.children[5].material.grayscale =
      1 - data.range(1.6 / 3, 1 / 3)
    group.current.children[6].material.zoom =
      1 + (1 - data.range(2 / 3, 1 / 3)) / 3
  })
  return (
    <group ref={group}>
      <Image
        alt=''
        position={[-2, 0, 0]}
        scale={[4, height, 1]}
        url='/mock/image/img1.jpg'
      />
      <Image alt='' position={[2, 0, 1]} scale={3} url='/mock/image/img6.jpg' />
      <Image
        alt=''
        position={[-2.3, -height, 2]}
        scale={[1, 3, 1]}
        url='/mock/image/trip2.jpg'
      />
      <Image
        alt=''
        position={[-0.6, -height, 3]}
        scale={[1, 2, 1]}
        url='/mock/image/img8.jpg'
      />
      <Image
        alt=''
        position={[0.75, -height, 3.5]}
        scale={1.5}
        url='/mock/image/trip4.jpg'
      />
      <Image
        alt=''
        position={[0, -height * 1.5, 2.5]}
        scale={[1.5, 3, 1]}
        url='/mock/image/img3.jpg'
      />
      <Image
        alt=''
        position={[0, -height * 2 - height / 4, 0]}
        scale={[width, height / 2, 1]}
        url='/mock/image/img7.jpg'
      />
    </group>
  )
}

function Minimap() {
  const { width, height } = useThree((state) => state.viewport)
  const fbo = useFBO(512, 512, { encoding: THREE.sRGBEncoding })
  const camera = useRef()
  const [override] = useState(
    () => new THREE.MeshBasicMaterial({ color: '#777' }),
  )
  useFrame((state) => {
    state.gl.setRenderTarget(fbo)
    state.scene.overrideMaterial = override
    state.gl.render(state.scene, camera.current)
    state.scene.overrideMaterial = null
    state.gl.setRenderTarget(null)
  })
  return (
    <>
      <PerspectiveCamera position={[0, 0, 20]} fov={75} ref={camera} />
      <mesh position={[width / 6, height / 8, 3]}>
        <planeGeometry />
        <meshBasicMaterial transparent map={fbo.texture} />
      </mesh>
    </>
  )
}

function App() {
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ScrollControls
          damping={4}
          pages={3}
          // infinite
          // horizontal
          // distance={1}
        >
          <Minimap />
          <Scroll>
            <Images />
          </Scroll>
          <Scroll html>
            <h1 style={{ position: 'absolute', top: '60vh', left: '0.5em' }}>
              to
            </h1>
            <h1 style={{ position: 'absolute', top: '120vh', left: '60vw' }}>
              be
            </h1>
            <h1
              style={{
                position: 'absolute',
                top: '198.5vh',
                left: '0.5vw',
                fontSize: '40vw',
              }}
            >
              home
            </h1>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  )
}

export default function index() {
  const CSS = css`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overscroll-behavior: none;
    font-family: 'Inter var', sans-serif;
    cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxMCIgZmlsbD0iYmxhY2siLz48L3N2Zz4='),
      auto;
    & h1 {
      font-size: 20em;
      font-weight: 400;
      letter-spacing: -0.05em;
      line-height: 0.7em;
      margin: 0;
      padding: 0;
    }
  `
  return (
    <div className={CSS}>
      <App />
    </div>
  )
}
