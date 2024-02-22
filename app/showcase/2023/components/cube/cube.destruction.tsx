import { useGLTF } from '@react-three/drei'
import type { GLTFResult } from './cube.destruction.f.d'

import { FractalModel } from './cube.destruction.model.fractal.F'
import { GemModel } from './cube.destruction.model.gem'

const DestructionCube = ({
  _dark,
  isMobile,
}: {
  _dark?: boolean
  isMobile: boolean
}) => {
  const { nodes /*, materials*/ } = useGLTF(
    '/three/model/desCube/model-f.glb',
  ) as unknown as GLTFResult

  return (
    <>
      <GemModel nodes={nodes} />
      <FractalModel nodes={nodes} isMobile={isMobile} />
    </>
  )
}

useGLTF.preload('/three/model/desCube/model.glb')
export default DestructionCube
