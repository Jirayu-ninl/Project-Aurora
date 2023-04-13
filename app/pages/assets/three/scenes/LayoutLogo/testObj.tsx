import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

import { fs, vs } from '@libs/three/glsl/custom/purplePearlish.glsl'

const Obj = () => {
  const TestMaterial = shaderMaterial(
    {
      rimWidth: 0.9,
      fadeDistance: 1.29,
      time: 0,
      Fresnel_Glow1657095673155_65_color: new THREE.Color(255, 255, 255),
      scale: 0.4,
      displacement: 0,
      speed: 3,
      Big_Wiggles1657095673161_68_color: new THREE.Color(255, 255, 255),
      shininess: 5,
      specular: new THREE.Color(255, 255, 255),
      wrapRGB: new THREE.Color(255, 255, 255),
    },
    vs,
    fs,
  )

  extend({ TestMaterial })

  return (
    <>
      <mesh position={[2, 0, 0]}>
        <boxGeometry />
        <testMaterial />
      </mesh>
    </>
  )
}

export default Obj
