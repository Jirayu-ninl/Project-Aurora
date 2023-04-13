import * as THREE from 'three'
import React, { useEffect, useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'


export default function Effect({ down }) {
  const composer = useRef()
  const { scene, gl, size, camera } = useThree()
  const aspect = useMemo(
    () => new THREE.Vector2(size.width, size.height),
    [size]
  )
  useEffect(
    () => void composer.current.setSize(size.width, size.height),
    [size]
  )
  useFrame(() => composer.current.render(), 1)
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray='passes' scene={scene} camera={camera} />
      <waterPass attachArray='passes' factor={2} />
      <unrealBloomPass attachArray='passes' args={[aspect, 1.5, 1, 0]} />
      <filmPass attachArray='passes' args={[0.5, 0.4, 1500, false]} />
    </effectComposer>
  )
}
