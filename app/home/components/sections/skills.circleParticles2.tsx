import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

export const CircleParticles = ({
  radius,
  numParticles,
  ...props
}: {
  radius: number
  numParticles: number
  position?: [number, number, number]
  scale?: number
}) => {
  const matRef = useRef<any>(null)

  const particles = useMemo(() => {
    const vertices = []
    for (let i = 0; i < numParticles; i++) {
      const angle = (i / numParticles) * Math.PI * 2
      const x = Math.cos(angle) * radius
      const z = 0
      const y = Math.sin(angle) * radius
      vertices.push(x, y, z)
    }
    return new Float32Array(vertices)
  }, [radius, numParticles])

  useFrame(({ clock }) => {
    matRef.current && (matRef.current.uniforms.uTime.value = clock.elapsedTime)
  })

  const texture = useTexture('/three/mats/point.png')

  return (
    <>
      <points {...props}>
        <bufferGeometry attach='geometry'>
          <bufferAttribute
            attach='attributes-position'
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
          {/* <bufferAttribute
            attach='attributes-size'
            count={numParticles}
            array={new Float32Array(numParticles).map((_, i) =>
              i % 2 === 0 ? 0.05 : 0.01,
            )}
            itemSize={1}
          /> */}
        </bufferGeometry>
        <pointsMaterial
          attach='material'
          color='white'
          map={texture}
          size={0.05}
          sizeAttenuation
          alphaTest={0.5}
        />
      </points>
    </>
  )
}
