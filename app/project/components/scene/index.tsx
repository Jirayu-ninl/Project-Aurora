import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader, OrthographicCamera } from '@react-three/drei'
import { Scene } from './scene'
import { UI } from '@global/store'

const App = ({ projects }: { projects: any[] }) => {
  const _dark = UI((state) => state.dark)
  return (
    <div className='absolute h-full w-full overflow-hidden'>
      <Canvas
        gl={{
          powerPreference: 'high-performance',
          alpha: true,
          antialias: true,
          stencil: false,
          depth: false,
        }}
        linear={true}
      >
        <Suspense fallback={null}>
          <OrthographicCamera makeDefault position={[0, 0, 0]} zoom={230} />
          <Scene _dark={_dark} projects={projects} />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  )
}

export default App
