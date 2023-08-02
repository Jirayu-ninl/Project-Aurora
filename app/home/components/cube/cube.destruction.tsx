import { useGLTF } from '@react-three/drei'
import type { GLTFResult } from './cube.destruction.d'

import { FractalModel } from './cube.destruction.model.fractal'
import { GemModel } from './cube.destruction.model.gem'

const DestructionCube = ({ _dark }: { _dark?: boolean }) => {
  const { nodes /*, materials*/ } = useGLTF(
    '/three/model/desCube/model.glb',
  ) as GLTFResult

  return (
    <>
      <GemModel nodes={nodes} />
      <FractalModel nodes={nodes} />
    </>
  )
}

useGLTF.preload('/three/model/desCube/model.glb')
export default DestructionCube
