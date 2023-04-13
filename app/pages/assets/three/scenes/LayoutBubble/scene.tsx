import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { useCubeTexture, MeshDistortMaterial } from '@react-three/drei'

import useResource from '@libs/three/utils/useResource'
import Color from 'views/theme/color'
import Instances from './instances'

function Scene() {
  const bumpMap = useLoader(THREE.TextureLoader, '/three/blob/alphaMap.jpg')
  const envMap = useCubeTexture(
    ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
    { path: '/three/blob/cube/' },
  )

  const [matRef, material] = useResource()

  return (
    <>
      <MeshDistortMaterial
        ref={matRef}
        envMap={envMap}
        bumpMap={bumpMap}
        color={Color.secondary[1]}
        roughness={0.1}
        metalness={1}
        bumpScale={0.02}
        clearcoat={1}
        clearcoatRoughness={1}
        radius={3}
        distort={0.4}
      />
      {material && <Instances material={material} />}
    </>
  )
}

export default Scene
