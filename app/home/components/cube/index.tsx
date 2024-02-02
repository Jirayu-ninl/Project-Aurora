import { useRef } from 'react'
import type * as THREE from 'three'
import { Center, Float } from '@react-three/drei'

import CubeState from './cube.state'
import AbstractCube from './cube.abstractCaustics'
import TransmissionCube from './cube.transmission'
import DestructionCube from './cube.destruction'

const CubeCompose = ({
  _dark,
  isMobile,
}: {
  _dark?: boolean
  isMobile: boolean
}) => {
  const $TheCubeRef = useRef<THREE.Group | null>(null)

  return (
    <>
      <group ref={$TheCubeRef} position={[0, 0, 0]}>
        <Float floatIntensity={1} speed={2}>
          <Center rotation={[0, Math.PI / 1.35, 0]} position={[0, 0, 0]}>
            <CubeState $TheCubeRef={$TheCubeRef} isMobile={isMobile} />
            <DestructionCube _dark={_dark} isMobile={isMobile} />
            {!isMobile && (
              <>
                <TransmissionCube _dark={_dark} />
                <AbstractCube _dark={_dark} />
              </>
            )}
          </Center>
        </Float>
      </group>
    </>
  )
}

export default CubeCompose
