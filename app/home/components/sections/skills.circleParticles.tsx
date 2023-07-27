import { useRef, useMemo } from 'react'
import {
  BufferGeometry,
  BufferAttribute,
  Float32BufferAttribute,
  PointsMaterial,
  // Color,
} from 'three'
import { Text } from '@react-three/drei'

import CustomShaderMaterial from 'three-custom-shader-material'
import { useFrame } from '@react-three/fiber'
import { patchShaders } from 'gl-noise/build/glNoise.m'
import sVertex from './shaders/circleParticles.v.glsl'
import sFragment from './shaders/circleParticles.f.glsl'

export const CircleParticles = ({
  radius,
  numParticles,
  data,
  position = [0, 0, 0],
}: {
  radius: number
  numParticles: number
  data: string[]
  position?: [number, number, number]
}) => {
  const pointRef = useRef<any>(null)
  const matRef = useRef<any>(null)

  const geometry = useMemo(() => {
    const vertices = []
    for (let i = 0; i < numParticles; i++) {
      const angle = (i / numParticles) * Math.PI * 2
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      const z = 0
      vertices.push(x, y, z)
    }
    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3))

    const initialPointSize = 0.05
    const sizes = new Float32Array(vertices.length / 3).fill(initialPointSize)
    for (let i = 0; i < sizes.length; i++) {
      sizes[i] += i % 2 === 0 ? 0.03 : -0.03
    }

    geometry.setAttribute('cSize', new BufferAttribute(sizes, 1))

    geometry.computeVertexNormals()

    return geometry
  }, [radius, numParticles])

  useFrame(({ clock }) => {
    matRef.current && (matRef.current.uniforms.uTime.value = clock.elapsedTime)
  })

  const sUniforms = {
    uTime: {
      value: 0,
    },
  }

  return (
    <mesh position={position}>
      <points geometry={geometry} ref={pointRef}>
        {/* <pointsMaterial attach='material' color='white' /> */}
        <CustomShaderMaterial
          ref={matRef}
          baseMaterial={PointsMaterial}
          vertexShader={patchShaders(sVertex)}
          fragmentShader={patchShaders(sFragment)}
          uniforms={sUniforms}
          transparent
        />
      </points>
      {data.map((s, i) => (
        <Text
          position={[
            Math.cos((i / numParticles) * Math.PI * 8) * (radius + 0.05),
            Math.sin((i / numParticles) * Math.PI * 8) * (radius + 0.05),
            0,
          ]}
          rotation={[0, 0, (i / numParticles) * 4 * Math.PI * 2]}
          scale={0.04 * radius}
          key={i}
          anchorX='left'
          anchorY='middle'
        >
          {s}
        </Text>
      ))}
    </mesh>
  )
}
