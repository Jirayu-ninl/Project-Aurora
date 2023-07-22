import { Environment, Lightformer } from '@react-three/drei'

const Environments = () => (
  <>
    <Environment resolution={32}>
      <group rotation={[-Math.PI / 4, -0.3, 0]}>
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 5, -9]}
          scale={[10, 10, 1]}
        />
        <Lightformer
          intensity={1}
          rotation-y={Math.PI / 2}
          position={[-5, 1, -1]}
          scale={[10, 2, 1]}
        />
        <Lightformer
          intensity={1}
          rotation-y={Math.PI / 2}
          position={[-5, -1, -1]}
          scale={[10, 2, 1]}
        />
        <Lightformer
          intensity={1}
          rotation-y={-Math.PI / 2}
          position={[10, 1, 0]}
          scale={[20, 2, 1]}
        />
        <Lightformer
          type='ring'
          intensity={1}
          rotation-y={Math.PI / 2}
          position={[-0.1, -1, -5]}
          scale={10}
        />
      </group>
    </Environment>
  </>
)

export default Environments
