import { Suspense } from 'react'
import { OrbitControls, CameraShake, Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'
import { Particles } from './Particles'

export default function App() {
  const props = useControls({
    focus: { value: 5.1, min: 3, max: 7, step: 0.01 },
    speed: { value: 0.1, min: 0.1, max: 100, step: 0.1 },
    aperture: { value: 1.8, min: 1, max: 5.6, step: 0.1 },
    fov: { value: 60, min: 0, max: 200 },
    curl: { value: 0.25, min: 0.01, max: 0.5, step: 0.01 },
  })
  return (
    <>
      <Canvas
        style={{ width: '100vw', height: '100vh' }}
        camera={{ fov: 25, position: [0, 0, 6] }}
        linear={true}
        antialias={true}
        alpha={true}
      >
        <Suspense fallback={null}>
          <OrbitControls
            makeDefault
            autoRotate
            autoRotateSpeed={0.5}
            zoomSpeed={0.1}
          />
          <CameraShake
            yawFrequency={1}
            maxYaw={0.05}
            pitchFrequency={1}
            maxPitch={0.05}
            rollFrequency={0.5}
            maxRoll={0.5}
            intensity={0.2}
          />
          <Particles {...props} />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}
