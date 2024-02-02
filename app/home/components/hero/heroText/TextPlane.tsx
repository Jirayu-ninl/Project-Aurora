import * as THREE from 'three'
// import { Plane } from '@react-three/drei'
import { ThreeEvent, useFrame } from '@react-three/fiber'
import { DrawerText2d } from '@aurora/libs/webGL/utils'

type TextPlaneProps = {
  text: string
  vertexShader: string
  fragmentShader: string
  _dark: boolean
}

export const TextPlane = (props: TextPlaneProps) => {
  const { text, vertexShader, fragmentShader, _dark } = props

  const drawer = new DrawerText2d(text, 1024)
  drawer.draw(180, 140, _dark)

  const shader: THREE.Shader = {
    uniforms: {
      u_texture: { value: drawer.texture },
      u_mouse: { value: new THREE.Vector2() },
      u_aspect: { value: drawer.aspect },
      u_enable: { value: false },
    },
    vertexShader,
    fragmentShader,
  }

  const target = new THREE.Vector2()
  useFrame(() => {
    shader.uniforms.u_mouse.value.lerp(target, 0.1)
  })

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    target.copy(e.uv!)
  }

  const handlePointerEnter = (e: ThreeEvent<PointerEvent>) => {
    shader.uniforms.u_mouse.value.copy(e.uv!)
    shader.uniforms.u_enable.value = true
  }

  const handlePointerLeave = () => {
    shader.uniforms.u_enable.value = false
  }

  // return (
  //   <Plane
  //     args={[2.6, 2.6 / drawer.aspect]}
  //     //   scale={[1 / aspect, 1, 1]}
  //     onPointerMove={handlePointerMove}
  //     onPointerEnter={handlePointerEnter}
  //     onPointerLeave={handlePointerLeave}
  //     scale={2}
  //   >
  //     <shaderMaterial args={[shader]} transparent />
  //   </Plane>
  // )

  return (
    <mesh
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      scale={2}
    >
      <planeGeometry args={[2.6, 2.6 / drawer.aspect]} />
      <shaderMaterial args={[shader]} transparent />
    </mesh>
  )
}
