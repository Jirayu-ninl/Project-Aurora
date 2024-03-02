import { useRef, Suspense } from 'react'
import { MathUtils } from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import {
  PerspectiveCamera,
  Text3D,
  Center,
  Float,
  // MeshTransmissionMaterial,
  // useCubeTexture,
} from '@react-three/drei'

import { Environments } from './environments'
import { Loading } from '@app/components/templates/loading'

export default function App() {
  // const config = {
  //   backside: true,
  //   backsideThickness: 0.3,
  //   samples: 32,
  //   resolution: 1024,
  //   transmission: 1,
  //   clearcoat: 0,
  //   clearcoatRoughness: 0.38,
  //   thickness: 0.3,
  //   chromaticAberration: 0,
  //   anisotropy: 1,
  //   roughness: 0,
  //   distortion: 4,
  //   distortionScale: 1,
  //   temporalDistortion: 0.1,
  //   ior: 1.5,
  //   color: '#ffdf47',
  //   gColor: '#ffd57d',
  //   shadow: '#754f0d',
  // }

  // const texture = useCubeTexture(
  //   ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
  //   { path: '/three/blob/cube/' },
  // )

  const $ref = useRef<any>(null)

  useFrame(({ pointer }) => {
    if ($ref.current) {
      const ref = $ref.current
      ref.rotation.x = MathUtils.lerp(
        ref.rotation.x,
        pointer.y * Math.PI * -0.1,
        0.02,
      )
      ref.rotation.y = MathUtils.lerp(
        ref.rotation.y,
        pointer.x * Math.PI * 0.1 - 0.1,
        0.02,
      )
    }
  })

  const {
    size: { width: W, height: H },
  } = useThree()
  const camZ_mult = W / H < 1 ? (W / H) * 0.8 : 1

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 3 / camZ_mult]}
        fov={20}
      />
      <Suspense fallback={null}>
        <Center scale={[0.9, 1, 1]}>
          <Float
            speed={2}
            rotationIntensity={0.2}
            floatIntensity={1}
            floatingRange={[-0.05, 0.05]}
          >
            <Text3D
              ref={$ref}
              size={0.5}
              curveSegments={24}
              brevelSegments={1}
              bevelEnabled
              bevelSize={0.01}
              bevelThickness={0.03}
              height={0.1}
              letterSpacing={0.1}
              font={`/three/fonts/Inter-Black.json`}
            >
              404
              {/* <meshMatcapMaterial color='white' matcap={matcapTexture} /> */}
              {/* <MeshTransmissionMaterial {...config} background={texture} /> */}
              <meshStandardMaterial
                color='#FFC900'
                metalness={1}
                roughness={0.22}
              />
            </Text3D>
          </Float>
        </Center>
      </Suspense>
      <Environments />
    </>
  )
}
