import * as THREE from 'three'
import { useMemo, useState, useRef } from 'react'
import { createPortal, useFrame } from '@react-three/fiber'
import { useFBO } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { KernelSize } from 'postprocessing'
// import Color from 'views/theme/color'
import '../shaders/simulationMaterial'
import '../shaders/dofPointsMaterial'

export default function Particles({
  speed,
  fov,
  aperture,
  focus,
  curl,
  size = 512,
  ...props
}) {
  const sphere = useRef(null)
  const simRef = useRef(null)
  const renderRef = useRef(null)
  // Set up FBO
  const [scene] = useState(() => new THREE.Scene())
  const [camera] = useState(
    () => new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1),
  )
  const [positions] = useState(
    () =>
      new Float32Array([
        -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
      ]),
  )
  const [uvs] = useState(
    () => new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]),
  )
  const target = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBFormat,
    type: THREE.FloatType,
  })
  // Normalize points
  const particles = useMemo(() => {
    const length = size * size
    const particles = new Float32Array(length * 3)
    for (let i = 0; i < length; i++) {
      const i3 = i * 3
      particles[i3 + 0] = (i % size) / size
      particles[i3 + 1] = i / size / size
    }
    return particles
  }, [size])

  // Update FBO and pointcloud every frame
  useFrame((state) => {
    state.gl.setRenderTarget(target)
    state.gl.clear()
    state.gl.render(scene, camera)
    state.gl.setRenderTarget(null)
    renderRef.current.uniforms.positions.value = target.texture
    renderRef.current.uniforms.uTime.value = state.clock.elapsedTime
    renderRef.current.uniforms.uFocus.value = THREE.MathUtils.lerp(
      renderRef.current.uniforms.uFocus.value,
      focus,
      0.1,
    )
    renderRef.current.uniforms.uFov.value = THREE.MathUtils.lerp(
      renderRef.current.uniforms.uFov.value,
      fov,
      0.1,
    )
    renderRef.current.uniforms.uBlur.value = THREE.MathUtils.lerp(
      renderRef.current.uniforms.uBlur.value,
      (5.6 - aperture) * 9,
      0.1,
    )
    simRef.current.uniforms.uTime.value = state.clock.elapsedTime * speed
    simRef.current.uniforms.uCurlFreq.value = THREE.MathUtils.lerp(
      simRef.current.uniforms.uCurlFreq.value,
      curl,
      0.1,
    )
    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(
        sphere.current.position.x,
        state.mouse.x / 10,
        0.2,
      )
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 + state.mouse.y / 10,
        0.2,
      )
    }
  })

  return (
    <>
      {/* Simulation goes into a FBO/Off-buffer */}
      <ambientLight intensity={0.5} />
      {createPortal(
        <mesh>
          <simulationMaterial ref={simRef} />
          <bufferGeometry>
            <bufferAttribute
              attachObject={['attributes', 'position']}
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attachObject={['attributes', 'uv']}
              count={uvs.length / 2}
              array={uvs}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>,
        scene,
      )}
      {/* The result of which is forwarded into a pointcloud via data-texture */}
      <points {...props} ref={sphere}>
        <dofPointsMaterial ref={renderRef} />
        <bufferGeometry>
          <bufferAttribute
            attachObject={['attributes', 'position']}
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
      </points>
      <EffectComposer multisampling={8}>
        <Bloom
          kernelSize={3}
          luminanceThreshold={0}
          luminanceSmoothing={0.4}
          intensity={0.6}
        />
        <Bloom
          kernelSize={KernelSize.HUGE}
          luminanceThreshold={0}
          luminanceSmoothing={0}
          intensity={0.5}
        />
      </EffectComposer>
    </>
  )
}
