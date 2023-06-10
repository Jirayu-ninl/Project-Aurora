import { useTexture, Reflector } from '@react-three/drei'

function WetGround() {
  const [floor, normal] = useTexture([
    '/three/floor/roughness_floor.jpeg',
    '/three/floor/normal_floor.jpeg',
  ])

  return (
    <Reflector
      resolution={1024}
      args={[25, 25]}
      mirror={1}
      mixBlur={50}
      mixStrength={1.8}
      position={[0, -1.5, 0]}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      blur={[300, 120]}
      minDepthThreshold={0.5}
      maxDepthThreshold={2}
      depthScale={2}
    >
      {(Material: any, props) => (
        <Material
          color='#f0f0f0'
          metalness={0}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[0.6, 0.6]}
          {...props}
        />
      )}
    </Reflector>
  )
}

export default WetGround
