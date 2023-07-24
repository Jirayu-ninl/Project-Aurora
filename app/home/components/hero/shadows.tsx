/* eslint-disable react/display-name */
import { memo } from 'react'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

const Shadows = memo(({ positionY }: { positionY: number }) => (
  <AccumulativeShadows
    frames={100}
    color='#1a1a1a'
    colorBlend={5}
    toneMapped={true}
    alphaTest={0.9}
    opacity={1}
    scale={30}
    position={[0, positionY - 0.3, 0]}
  >
    <RandomizedLight
      amount={4}
      radius={10}
      ambient={0.5}
      intensity={1}
      position={[0, 10, -10]}
      size={15}
      mapSize={1024}
      bias={0.0001}
    />
  </AccumulativeShadows>
))

export default Shadows
