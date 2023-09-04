import { Plane } from '@react-three/drei'
import fadeVertShader from './shaders/fade.v.glsl'
import fadeFragShader from './shaders/fade.f.glsl'

const Fade = ({ _dark }: { _dark: boolean }) => {
  const fadeShader = {
    uniforms: { u_dark: { value: _dark } },
    vertexShader: fadeVertShader,
    fragmentShader: fadeFragShader,
  }

  return (
    <>
      <Plane args={[14, 2.5]} scale={0.8} position={[0, -2.21, -1.2]}>
        <shaderMaterial args={[fadeShader]} transparent />
      </Plane>
    </>
  )
}

export default Fade
