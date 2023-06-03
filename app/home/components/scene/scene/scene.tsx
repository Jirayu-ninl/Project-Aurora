// import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {
  useCubeTexture,
  useTexture,
  MeshDistortMaterial,
  Stage,
  Grid,
  OrbitControls,
  Environment,
} from '@react-three/drei'

import { theme } from '@global/config/defineConfig'

function Scene({ _dark }: { _dark: boolean }) {
  const Color = theme.color

  const bumpMap = useTexture('/three/blob/alphaMap.jpg')
  const envMap = useCubeTexture(
    ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
    { path: '/three/blob/cube/' },
  )

  return (
    <>
      {/* <Stage
        intensity={0.5}
        environment='city'
        shadows={{ type: 'accumulative', bias: -0.001 }}
        adjustCamera={false}
      >
        <Kamdo rotation={[0, Math.PI, 0]} />
      </Stage> */}
      <Grid
        renderOrder={-1}
        position={[0, -1.85, 0]}
        infiniteGrid={true}
        cellSize={0.6}
        cellThickness={0.6}
        cellColor={_dark ? '#888888' : '#f5f5f5'}
        sectionSize={3.3}
        sectionThickness={1}
        sectionColor={_dark ? '#04C2A2' : '#4300FF'}
        // fadeDistance={100}
      />
      {/* <OrbitControls
        autoRotate
        autoRotateSpeed={0.05}
        enableZoom={false}
        makeDefault
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      /> */}
      {/* <Environment background preset='sunset' blur={0.8} /> */}
      <Environment preset='sunset' blur={0.8} />
    </>
  )
}

export default Scene
