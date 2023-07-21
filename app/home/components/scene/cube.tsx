// import * as THREE from 'three'
import { useRef } from 'react'
import { DoubleSide, Color } from 'three'
import { useFrame, useThree, useLoader, extend } from '@react-three/fiber'
import {
  Center,
  Preload,
  MeshTransmissionMaterial,
  Text,
  RoundedBox,
} from '@react-three/drei'
import { Color as ColorUtils } from '@aurora/libs/webGL/utils'
import { theme } from '@global/config/defineConfig'

import AbstractCube from './cube.abstract'

const Cube = ({ _dark }: { _dark?: boolean }) => {
  const config = {
    backside: true,
    backsideThickness: 0.3,
    samples: 16,
    resolution: 512,
    transmission: _dark ? 1 : 1.28,
    clearcoat: 1,
    clearcoatRoughness: 0.42,
    thickness: 0.3,
    chromaticAberration: 0.15,
    anisotropy: 0.5,
    roughness: 0.2,
    // distortion: 0.5,
    // distortionScale: 3,
    // temporalDistortion: 0.08,
    ior: 1.5,
    color: _dark ? [1, 1, 1] : [1.4, 1.4, 1.4],
  }

  return (
    <>
      <Center rotation={[0, Math.PI / 1.35, 0]} position={[0, 0, 0]}>
        <RoundedBox args={[1, 1, 1]}>
          <MeshTransmissionMaterial {...config} attach='material' />
        </RoundedBox>
        <AbstractCube />
      </Center>
    </>
  )
}

export default Cube
