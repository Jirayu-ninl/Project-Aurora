import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {
  MeshTransmissionMaterial,
  RoundedBox,
  useScroll,
} from '@react-three/drei'
import { getCubeState } from './cube.state.date'

const Cube = ({ _dark }: { _dark?: boolean }) => {
  const $TransmissionCube = useRef<THREE.Mesh | null>(null)

  const scroll = useScroll()
  const cubeState = getCubeState(scroll.pages)

  useFrame(() => {
    if ($TransmissionCube.current) {
      const TransmissionCube = $TransmissionCube.current

      TransmissionCube.visible =
        cubeState.destructScale.END <= scroll.offset ? false : true
    }
  })

  return (
    <>
      <RoundedBox args={[1, 1, 1]} ref={$TransmissionCube}>
        <MeshTransmissionMaterial
          backside={true}
          backsideThickness={0.3}
          samples={16}
          // resolution={512}
          transmission={_dark ? 1 : 1.05}
          clearcoat={1}
          clearcoatRoughness={0.42}
          thickness={0.3}
          chromaticAberration={0.15}
          anisotropy={0.5}
          roughness={0.2}
          // distortion= {0.5}
          // distortionScale= {3}
          // temporalDistortion= {0.08}
          distortionScale={0}
          temporalDistortion={0}
          ior={1.5}
          color={_dark ? [1, 1, 1] : [1.3, 1.3, 1.3]}
          // transmissionSampler
          attach='material'
        />
      </RoundedBox>
    </>
  )
}

export default Cube
