import { css } from '@emotion/css'
import * as THREE from 'three'
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Reflector, Text, useTexture } from '@react-three/drei'

// function Carla(props) {
//   const { scene } = useGLTF('/carla-draco.glb')
//   return <primitive object={scene} {...props} />
// }

function VideoText({ clicked, ...props }) {
  const [video] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/mock/video/drei.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
    }),
  )
  useEffect(() => void (clicked && video.play()), [video, clicked])
  return (
    <Text
      font='/font/Inter-Bold.woff'
      fontSize={3}
      letterSpacing={-0.06}
      {...props}
    >
      IceJI
      <meshBasicMaterial toneMapped={false}>
        <videoTexture
          attach='map'
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </Text>
  )
}

function Ground() {
  const [floor, normal] = useTexture([
    '/three/floor/roughness_floor.jpeg',
    '/three/floor/normal_floor.jpeg',
  ])
  return (
    <Reflector
      resolution={512}
      args={[10, 10]}
      mirror={1}
      mixBlur={50}
      mixStrength={1.8}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      blur={[400, 100]}
    >
      {(Material, props) => (
        <Material
          color='#a0a0a0'
          metalness={0.4}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[1, 1]}
          {...props}
        />
      )}
    </Reflector>
  )
}

function Intro({ start, set }) {
  const [vec] = useState(() => new THREE.Vector3())
  useEffect(() => setTimeout(() => set(true), 500), [set])
  return useFrame((state) => {
    if (start) {
      state.camera.position.lerp(
        vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14),
        0.05,
      )
      state.camera.lookAt(0, 0, 0)
    }
  })
}

function Overlay({ ready, clicked, setClicked }) {
  return (
    <>
      <div
        className={`fullscreen bg ${ready ? 'ready' : 'notready'} ${
          clicked && 'clicked'
        }`}
      >
        <div onClick={() => ready && setClicked(true)}>
          {!ready ? 'loading' : 'click to continue'}
        </div>
      </div>
    </>
  )
}

function App() {
  const [clicked, setClicked] = useState(false)
  const [ready, setReady] = useState(false)
  const store = { clicked, setClicked, ready, setReady }
  return (
    <>
      <Canvas
        concurrent
        gl={{ alpha: false }}
        pixelRatio={[1, 1.5]}
        camera={{ position: [0, 3, 100], fov: 15 }}
      >
        <color attach='background' args={['black']} />
        <fog attach='fog' args={['black', 15, 20]} />
        <Suspense fallback={null}>
          <group position={[0, -1, 0]}>
            {/* <Carla
              rotation={[0, Math.PI - 0.4, 0]}
              position={[-1.2, 0, 0.6]}
              scale={[0.26, 0.26, 0.26]}
            /> */}
            <VideoText {...store} position={[0, 1.3, -2]} />
            <Ground />
          </group>
          <ambientLight intensity={0.5} />
          {/* <spotLight position={[0, 10, 0]} intensity={0.3} /> */}
          <directionalLight position={[-20, 0, -10]} intensity={0.7} />
          <Intro start={ready && clicked} set={setReady} />
        </Suspense>
      </Canvas>
      <Overlay {...store} />
    </>
  )
}

export default function Index() {
  const CSS = css`
    width: 100vw;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: 'Inter var', sans-serif;
    color: white;
    background: #101010;
    user-select: none;

    & .fullscreen {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 1s;
    }

    & .bg {
      background: #101010;
    }

    & .fullscreen.notready {
      color: #606060;
    }

    & .menu {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      color: #808080;
      padding: 40px;
      pointer-events: none;
      justify-content: center;
      align-items: flex-end;
      flex-direction: row;
      font-size: 10px;
      line-height: 1.5em;
    }

    & .menu.left {
      justify-content: flex-start;
    }

    & .menu.right {
      justify-content: flex-end;
    }

    & .menu > div {
      word-wrap: none;
      word-break: none;
      white-space: pre;
      padding-left: 25px;
      padding-right: 25px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }

    & .menu > div b {
      font-weight: 600;
      color: #b0b0b0;
    }

    & .fullscreen.ready > div {
      cursor: pointer;
    }

    & .fullscreen.clicked {
      pointer-events: none;
      opacity: 0;
    }

    & .menu a {
      pointer-events: all;
      cursor: pointer;
      color: inherit;
      text-decoration: none;
    }

    & .menu a:hover {
      text-decoration: underline;
      color: inherit;
    }
  `
  return (
    <div className={CSS}>
      <App />
    </div>
  )
}
