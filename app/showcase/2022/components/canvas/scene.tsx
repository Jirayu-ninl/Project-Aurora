import { useRef, Suspense } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import PostProcessing from './postprocessing'
import Objects from './objects'

export default function App({ isMobile }: { isMobile: boolean }) {
  const light = useRef<null | THREE.PointLight>(null)
  const { scene } = useThree()

  const sunMaterial = new THREE.MeshBasicMaterial({
    color: 0xffddaa,
    transparent: true,
    fog: false,
  })
  const sun2Material = new THREE.MeshBasicMaterial({
    color: 0xaacbff,
    transparent: true,
    fog: false,
  })

  const sunGeometry = new THREE.SphereGeometry(5, 48, 48)
  const Sun = new THREE.Mesh(sunGeometry, sunMaterial)
  Sun.position.set(-37, 8, -30)

  const sun2Geometry = new THREE.SphereGeometry(3, 24, 24)
  const Sun2 = new THREE.Mesh(sun2Geometry, sun2Material)
  Sun2.position.set(50, -8, -50)

  scene.add(Sun, Sun2)

  useFrame(({ pointer }) => {
    if (light.current) {
      light.current.position.x = pointer.x * 20
      light.current.position.y = pointer.y * 20
    }
  })

  return (
    <>
      <fog color='#161616' attach='fog' near={8} far={30} />
      <PerspectiveCamera makeDefault position={[0, 0, 3]} fov={75}>
        <ambientLight intensity={1} />
        <pointLight
          ref={light}
          position-z={-4}
          intensity={0.5}
          color={'#fff9d4'}
        />
        <directionalLight color={'#fff9d4'} />
        {/* <group>
          <pointLight position={[-2, 5, 10]} intensity={1} color={'#ffffff'} />
        </group> */}
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <Objects />
      </Suspense>
      <PostProcessing Sun={[Sun, Sun2]} />
    </>
  )
}
