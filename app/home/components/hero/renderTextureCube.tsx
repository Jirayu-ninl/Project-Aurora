// import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import {
  Center,
  Preload,
  RenderTexture,
  MeshTransmissionMaterial,
  RoundedBox,
} from '@react-three/drei'

const RenderTextureCube = ({
  config,
  children,
}: {
  config: any
  children: React.ReactNode
}) => {
  const main = useRef<any>(null)
  const contents = useRef<THREE.Group>(null)
  const events = useThree((state) => state.events)

  useFrame(
    () =>
      contents.current &&
      contents.current.matrix.copy(main.current.matrixWorld),
  )

  return (
    <Center ref={main} rotation={[0, Math.PI / 1.35, 0]} position={[0, 0, 0]}>
      <RoundedBox args={[1, 1, 1]}>
        <MeshTransmissionMaterial {...config} attach='material'>
          <RenderTexture
            attach='buffer'
            stencilBuffer={true}
            width={512}
            height={512}
            compute={events.compute}
          >
            <ambientLight intensity={0.4} />
            <group ref={contents} matrixAutoUpdate={false}>
              {children}
            </group>
            <Preload all />
          </RenderTexture>
        </MeshTransmissionMaterial>
      </RoundedBox>
    </Center>
  )
}

export default RenderTextureCube
