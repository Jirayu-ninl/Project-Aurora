import { useRef, useMemo } from 'react'
import { Vector2, DoubleSide } from 'three'
import { ThreeEvent, useFrame, useThree, extend } from '@react-three/fiber'
import { Text, shaderMaterial } from '@react-three/drei'
import { TextPlane } from './TextPlane'
import { UI } from '@global/store'

import headerFrontVertShader from '../shaders/headerFront.v.glsl'
import headerFrontFragShader from '../shaders/headerFront.f.glsl'
import headerBackVertShader from '../shaders/headerBack.v.glsl'
import headerBackFragShader from '../shaders/headerBack.f.glsl'

export const Header = ({ _dark }: { _dark: boolean }) => {
  const _setCursor = UI((state) => state.setCursor)

  return (
    <mesh
      onPointerOver={() => {
        _setCursor('lens')
      }}
      onPointerOut={() => {
        _setCursor(false)
      }}
      onPointerMissed={() => {
        _setCursor(false)
      }}
      position={[0, 0, -1]}
    >
      <TextPlane
        text={'TheIceJi'}
        vertexShader={headerFrontVertShader}
        fragmentShader={headerFrontFragShader}
        _dark={_dark}
      />
      <TextPlane
        text={'我叫  林艺'}
        vertexShader={headerBackVertShader}
        fragmentShader={headerBackFragShader}
        _dark={_dark}
      />
    </mesh>
  )
}

// export const Header = ({ _dark }: { _dark: boolean }) => {
//   const _setCursor = UI((state) => state.setCursor)
//   const { aspect } = useThree(({ viewport }) => viewport)

//   const textShaderRef = useRef<any>(null)

//   const textShaderUniform = {
//     // u_texture: drawer.texture,
//     u_time: 0,
//     u_mouse: new Vector2(),
//     u_aspect: aspect,
//     u_enable: false,
//   }

//   //   const TextShader = useMemo(
//   //     () =>
//   //       shaderMaterial(
//   //         textShaderUniform,
//   //         headerFrontVertShader,
//   //         headerFrontFragShader,
//   //       ),
//   //     [],
//   //   )

//   const TextTitleShader = shaderMaterial(
//     textShaderUniform,
//     headerFrontVertShader,
//     headerFrontFragShader,
//   )

//   const target = new Vector2()
//   //   useFrame(
//   //     ({ clock }) =>
//   //       textShaderRef.current && (textShaderRef.current.uniforms.u_time += 0.05),
//   //     textShaderRef.current.uniforms.u_mouse.value.lerp(target, 0.1),
//   //   )

//   //   const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
//   //     target.copy(e.uv!)
//   //   }

//   //   const handlePointerEnter = (e: ThreeEvent<PointerEvent>) => {
//   //     textShaderRef.current &&
//   //       (textShaderRef.current.uniforms.u_mouse.value.copy(e.uv!),
//   //       (textShaderRef.current.uniforms.u_enable.value = true))
//   //   }

//   //   const handlePointerLeave = () => {
//   //     textShaderRef.current &&
//   //       (textShaderRef.current.uniforms.u_enable.value = false)
//   //   }

//   extend({ TextTitleShader })

//   return (
//     <mesh
//       onPointerOver={() => {
//         _setCursor('lens')
//       }}
//       onPointerOut={() => {
//         _setCursor(false)
//       }}
//       onPointerMissed={() => {
//         _setCursor(false)
//       }}
//     >
//       <Text
//         position={[0, 0, -1]}
//         font='/three/fonts/Inter-SemiBold.woff'
//         fontSize={1}
//         // color='white'
//         // onPointerMove={handlePointerMove}
//         // onPointerEnter={handlePointerEnter}
//         // onPointerLeave={handlePointerLeave}
//       >
//         TheIceJi
//         {/* <meshStandardMaterial
//             color={_dark ? [2, 2, 2] : [0.3, 0.3, 0.3]}
//             toneMapped={false}
//             side={DoubleSide}
//           /> */}
//         <textTitleShader ref={textShaderRef} />
//       </Text>
//     </mesh>
//   )
// }
