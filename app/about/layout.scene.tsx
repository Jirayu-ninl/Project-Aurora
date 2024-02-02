import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader, OrthographicCamera } from '@react-three/drei'
import Background from './components/scene'
import { UI } from '@global/store'

const Scene = () => {
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
          <Background _dark={_dark} />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  )
}

export { Scene }
