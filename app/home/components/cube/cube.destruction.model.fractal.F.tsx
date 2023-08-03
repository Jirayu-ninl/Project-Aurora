import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import CSM from 'three-custom-shader-material/vanilla'
import { useExplode } from '@aurora/libs/webGL/hooks'
import type { tNodes } from './cube.destruction.f.d'
import { getInviewAnimationValue } from '@aurora/views/animations'
import { getCubeState } from './cube.state.date'

import fractalVertShader from './shaders/destruction.fractal.v.glsl'
import fractalFragShader from './shaders/destruction.fractal.f.glsl'

export const FractalModel = ({
  nodes,
  isMobile = false,
}: {
  nodes: tNodes
  isMobile?: boolean
}) => {
  const $destructionCube = useRef<THREE.Group | null>(null)
  const scroll = useScroll()
  const cubeState = getCubeState(scroll.pages)
  useFrame(() => {
    if ($destructionCube.current && !isMobile) {
      const destructionCube = $destructionCube.current

      destructionCube.visible =
        cubeState.destructScale.START <= scroll.offset ? true : false

      if (
        cubeState.destructScale.START <= scroll.offset &&
        scroll.offset <= cubeState.destructScale.END
      ) {
        const targetScale =
          0.3 +
          getInviewAnimationValue(
            [cubeState.destructScale.START, cubeState.destructScale.END],
            scroll.offset,
          ) *
            0.3
        destructionCube.scale.set(targetScale, targetScale, targetScale)

        destructionCube.rotation.z = THREE.MathUtils.lerp(
          destructionCube.rotation.z,
          0,
          getInviewAnimationValue(
            [cubeState.destructScale.START, cubeState.destructScale.END],
            scroll.offset,
          ),
        )
      }

      if (cubeState.destructScale.END <= scroll.offset) {
        destructionCube.rotateZ(0.01)
      }
    }
  })

  useExplode($destructionCube, {
    distance: 16,
    enableRotation: false,
    invertX: true,
    invertZ: true,
    range: [cubeState.destruct.START, cubeState.destruct.END],
  })

  const fractalShader = useMemo(
    () => ({
      baseMaterial: THREE.MeshStandardMaterial,
      vertexShader: fractalVertShader,
      fragmentShader: fractalFragShader,
      silent: true,
      uniforms: {
        u_time: {
          value: 0,
        },
      },
    }),
    [],
  )

  const material = new CSM(fractalShader)

  return (
    <>
      <group dispose={null} scale={0.3} ref={$destructionCube}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell.geometry}
          material={material}
          position={[0.271, -0.282, 0.356]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell003.geometry}
          material={material}
          position={[-0.233, -0.438, -0.802]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell005_cell.geometry}
          material={material}
          position={[-0.12, -0.764, -0.42]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell005_cell002.geometry}
          material={material}
          position={[-0.72, -0.866, -0.559]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell005_cell003.geometry}
          material={material}
          position={[-0.596, -0.821, -0.142]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell005_cell004.geometry}
          material={material}
          position={[0.637, -0.847, 0.612]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell005_cell005.geometry}
          material={material}
          position={[0.639, -0.64, -0.069]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell003.geometry}
          material={material}
          position={[0.541, -0.191, 0.049]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell004.geometry}
          material={material}
          position={[0.355, 0.055, -0.413]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell005_cell001.geometry}
          material={material}
          position={[0.591, 0.164, 0.147]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell005_cell002.geometry}
          material={material}
          position={[0.591, 0.169, -0.097]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell005_cell003.geometry}
          material={material}
          position={[0.837, 0.571, 0.076]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell005_cell004.geometry}
          material={material}
          position={[0.395, 0.353, -0.048]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell005_cell005.geometry}
          material={material}
          position={[0.543, 0.128, -0.074]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell_cell.geometry}
          material={material}
          position={[0.063, 0.655, -0.051]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell_cell001.geometry}
          material={material}
          position={[0.209, 0.8, 0.67]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell_cell002.geometry}
          material={material}
          position={[0, 0.555, -0.554]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell_cell003.geometry}
          material={material}
          position={[0.238, 0.505, -0.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell_cell004.geometry}
          material={material}
          position={[0.062, 0.458, 0.339]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell_cell005.geometry}
          material={material}
          position={[0.409, 0.689, 0.07]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell003_cell.geometry}
          material={material}
          position={[0.757, -0.741, -0.489]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell003_cell001.geometry}
          material={material}
          position={[0.562, -0.243, -0.823]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell003_cell002.geometry}
          material={material}
          position={[0.876, -0.245, -0.789]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell003_cell003.geometry}
          material={material}
          position={[0.345, -0.883, -0.817]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell003_cell004.geometry}
          material={material}
          position={[0.864, -0.926, 0.09]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell003_cell005.geometry}
          material={material}
          position={[0.614, -0.644, -0.803]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell001_cell002.geometry}
          material={material}
          position={[-0.325, 0.589, -0.475]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell001_cell003.geometry}
          material={material}
          position={[-0.095, 0.385, 0.481]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell001_cell004.geometry}
          material={material}
          position={[-0.41, 0.02, -0.291]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell001_cell005.geometry}
          material={material}
          position={[-0.272, 0.285, -0.465]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell001_cell001_cell.geometry}
          material={material}
          position={[-0.997, 0.868, -0.336]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell001_cell001_cell001.geometry}
          material={material}
          position={[-0.468, 0.476, -0.061]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell001_cell001_cell002.geometry}
          material={material}
          position={[-0.817, 0.239, 0.149]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell001_cell001_cell003.geometry}
          material={material}
          position={[-0.871, 0.886, -0.486]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell001_cell001_cell004.geometry}
          material={material}
          position={[-0.884, 0.451, -0.683]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell001_cell001_cell005.geometry}
          material={material}
          position={[-0.66, 0.788, 0.479]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell001_cell_cell.geometry}
          material={material}
          position={[-0.736, 0.087, 0.73]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell001_cell_cell001.geometry}
          material={material}
          position={[-0.61, -0.024, 0.388]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell001_cell_cell002.geometry}
          material={material}
          position={[-0.387, -0.011, 0.216]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell001_cell_cell003.geometry}
          material={material}
          position={[-0.117, -0.001, 0.484]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell001_cell_cell004.geometry}
          material={material}
          position={[-0.314, 0.183, 0.477]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell001_cell_cell005.geometry}
          material={material}
          position={[-0.529, 0.612, 0.835]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell005_cell_cell.geometry}
          material={material}
          position={[0.849, 0.602, 0.667]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell005_cell_cell001.geometry}
          material={material}
          position={[0.48, 0.141, 0.449]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell005_cell_cell002.geometry}
          material={material}
          position={[0.485, 0.475, 0.297]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell005_cell_cell003.geometry}
          material={material}
          position={[0.133, 0.341, 0.375]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell005_cell_cell004.geometry}
          material={material}
          position={[0.024, 0.26, 0.287]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell005_cell_cell005.geometry}
          material={material}
          position={[0.444, 0.494, 0.756]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell002_cell.geometry}
          material={material}
          position={[0.38, -0.16, 0.23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell002_cell001.geometry}
          material={material}
          position={[0.871, -0.329, 0.761]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell002_cell002.geometry}
          material={material}
          position={[0.274, -0.133, 0.283]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell002_cell003.geometry}
          material={material}
          position={[0.232, 0.028, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell002_cell004.geometry}
          material={material}
          position={[0.553, -0.217, 0.476]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell002_cell005.geometry}
          material={material}
          position={[0.403, -0.21, 0.246]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell001_cell.geometry}
          material={material}
          position={[0.689, 0.422, -0.845]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell001_cell001.geometry}
          material={material}
          position={[0.339, 0.934, -0.755]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell001_cell002.geometry}
          material={material}
          position={[0.782, 0.664, -0.403]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell001_cell003.geometry}
          material={material}
          position={[0.907, 0.378, -0.825]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell001_cell004.geometry}
          material={material}
          position={[0.684, 0.832, -0.673]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell002_cell001_cell005.geometry}
          material={material}
          position={[0.404, 0.617, -0.788]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell005_cell001_cell.geometry}
          material={material}
          position={[-0.153, -0.674, 0.784]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell005_cell001_cell001.geometry}
          material={material}
          position={[-0.166, -0.639, 0.131]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell005_cell001_cell002.geometry}
          material={material}
          position={[0.093, -0.583, 0.794]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell005_cell001_cell003.geometry}
          material={material}
          position={[-0.088, -0.818, 0.632]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell005_cell001_cell004.geometry}
          material={material}
          position={[0.172, -0.557, 0.175]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell005_cell001_cell005.geometry}
          material={material}
          position={[-0.067, -0.487, 0.384]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell005_cell001_cell006.geometry}
          material={material}
          position={[0.087, -0.387, -0.205]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell004_cell.geometry}
          material={material}
          position={[-0.99, -0.995, -0.239]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell004_cell001.geometry}
          material={material}
          position={[-0.946, -0.39, 0.645]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell004_cell002.geometry}
          material={material}
          position={[-0.998, -0.999, -0.255]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell004_cell003.geometry}
          material={material}
          position={[-0.813, -0.786, 0.449]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell004_cell004.geometry}
          material={material}
          position={[-0.715, -0.598, 0.823]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell004_cell005.geometry}
          material={material}
          position={[-0.93, -0.966, -0.106]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell002_cell.geometry}
          material={material}
          position={[-0.053, -0.276, -0.561]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell002_cell001.geometry}
          material={material}
          position={[0.179, -0.259, -0.277]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell002_cell002.geometry}
          material={material}
          position={[-0.59, -0.724, -0.595]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell002_cell003.geometry}
          material={material}
          position={[0.237, -0.473, -0.479]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell002_cell004.geometry}
          material={material}
          position={[-0.304, -0.378, -0.406]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell002_cell005.geometry}
          material={material}
          position={[-0.711, -0.343, -0.606]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell001_cell.geometry}
          material={material}
          position={[-0.26, -0.229, 0.453]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell001_cell001.geometry}
          material={material}
          position={[-0.515, -0.354, 0.113]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell001_cell002.geometry}
          material={material}
          position={[-0.929, -0.338, -0.286]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell001_cell003.geometry}
          material={material}
          position={[-0.405, -0.18, -0.063]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell001_cell004.geometry}
          material={material}
          position={[-0.844, -0.618, -0.131]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell_cell001_cell005.geometry}
          material={material}
          position={[-0.736, -0.296, -0.097]}
        />
      </group>
    </>
  )
}
