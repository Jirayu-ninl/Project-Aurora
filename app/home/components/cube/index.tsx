import { useRef } from 'react'
import { type Group } from 'three'
import { Center, Float } from '@react-three/drei'

import CubeState from './cube.state'
import AbstractCube from './cube.abstractCaustics'
import TransmissionCube from './cube.transmission'
import DestructionCube from './cube.destruction'

const CubeCompose = ({ _dark }: { _dark?: boolean }) => {
  const TheCubeRef = useRef<Group | null>(null)

  return (
    <>
      <group ref={TheCubeRef} position={[0, 0, 0]}>
        <Float floatIntensity={1} speed={2}>
          <Center rotation={[0, Math.PI / 1.35, 0]} position={[0, 0, 0]}>
            <CubeState TheCubeRef={TheCubeRef} />
            <DestructionCube />
            {/* <TransmissionCube _dark={_dark} /> */}
            {/* <AbstractCube _dark={_dark} /> */}
          </Center>
        </Float>
      </group>
    </>
  )
}

export default CubeCompose
