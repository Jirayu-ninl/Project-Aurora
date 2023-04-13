import React, { useRef, useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'

export default function Effects() {
  const composer = useRef()
  const { scene, gl, size, camera } = useThree()
  useEffect(
    () => void composer.current.setSize(size.width, size.height),
    [size]
  )
  useFrame(() => composer.current.render(), 1)
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray='passes' scene={scene} camera={camera} />
      <sSAOPass
        attachArray='passes'
        args={[scene, camera, 1024, 1024]}
        kernelRadius={0.8}
        maxDistance={0.4}
      />
      <unrealBloomPass attachArray='passes' args={[undefined, 1.6, 1, 0.5]} />
      <shaderPass
        attachArray='passes'
        args={[FXAAShader]}
        material-uniforms-resolution-value={[1 / size.width, 1 / size.height]}
      />
    </effectComposer>
  )
}
