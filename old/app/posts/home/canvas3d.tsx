import { Suspense } from 'react'

import { Canvas, useThree } from '@react-three/fiber'
import { ScrollControls, Scroll, Loader } from '@react-three/drei'
import { Minimap } from './components/minimap'
import useStore from './store'
import Item from './components/item'

function Items({ w = 0.7, gap = 0.15 }) {
  const projects = useStore((state) => state.projects)
  const clicked = useStore((state) => state.clicked)
  const { width } = useThree((state) => state.viewport)
  const xW = w + gap
  return (
    <ScrollControls
      horizontal
      damping={6}
      pages={(width - xW + projects.length * xW) / width}
    >
      {clicked === null && <Minimap />}
      <Scroll>
        {
          projects.map((v, i) => <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} project={v} />) /* prettier-ignore */
        }
      </Scroll>
    </ScrollControls>
  )
}

export const App = () => {
  const setClicked = useStore((state) => state.setClicked)
  return (
    <>
      <Canvas
        style={{ width: '100vw', height: '90vh' }}
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        onPointerMissed={() => setClicked(null)}
      >
        <Suspense fallback={null}>
          <Items />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}
