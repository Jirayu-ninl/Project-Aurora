import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import CSM from 'three-custom-shader-material/vanilla'
import { useExplode } from '@aurora/libs/webGL/hooks'
import type { tNodes } from './cube.destruction.d'
import { getInviewAnimationValue } from '@aurora/views/animations'
import { getCubeState } from './cube.state.date'

import fractalVertShader from './shaders/destruction.fractal.v.glsl'
import fractalFragShader from './shaders/destruction.fractal.f.glsl'

export const FractalModel = ({ nodes }: { nodes: tNodes }) => {
  const $destructionCube = useRef<THREE.Group | null>(null)
  const scroll = useScroll()
  const cubeState = getCubeState(scroll.pages)

  useFrame(() => {
    if ($destructionCube.current) {
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
          geometry={nodes.Cube_cell301.geometry}
          material={material}
          position={[-0.07, 0.076, -0.622]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell302.geometry}
          material={material}
          position={[-0.897, 0.329, -0.869]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell303.geometry}
          material={material}
          position={[-0.911, -0.133, -0.577]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell304.geometry}
          material={material}
          position={[-0.014, -0.322, -0.485]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell305.geometry}
          material={material}
          position={[0.012, -0.855, -0.529]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell306.geometry}
          material={material}
          position={[-0.546, -0.468, -0.432]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell307.geometry}
          material={material}
          position={[-0.189, -0.552, -0.058]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell201.geometry}
          material={material}
          position={[0.782, 0.016, -0.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell205.geometry}
          material={material}
          position={[0.821, 0.628, 0.513]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell206.geometry}
          material={material}
          position={[-0.561, -0.828, 0.813]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell207.geometry}
          material={material}
          position={[0.343, -0.222, 0.446]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell208.geometry}
          material={material}
          position={[0.79, 0.118, 0.541]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell203.geometry}
          material={material}
          position={[-0.461, -0.926, 0.409]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell202.geometry}
          material={material}
          position={[0.171, -0.601, 0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell204.geometry}
          material={material}
          position={[0.414, -0.222, 0.021]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell101.geometry}
          material={material}
          position={[0.14, -0.06, -0.207]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell102.geometry}
          material={material}
          position={[-0.441, -0.504, 0.241]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell103.geometry}
          material={material}
          position={[-0.696, 0.188, 0.345]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell104.geometry}
          material={material}
          position={[-0.169, 0.386, -0.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell105.geometry}
          material={material}
          position={[0.017, 0.155, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell106.geometry}
          material={material}
          position={[0.872, 0.684, -0.24]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell107.geometry}
          material={material}
          position={[0.434, 0.696, -0.502]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_cell108.geometry}
          material={material}
          position={[0.881, 0.948, -0.174]}
        />
      </group>
    </>
  )
}
