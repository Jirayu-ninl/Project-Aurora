import { Environment, Lightformer } from '@react-three/drei'

const Environments = ({ isMobile }: { isMobile: boolean }) => (
  <>
    <Environment resolution={32}>
      <group rotation={[-Math.PI / 4, -0.3, 0]}>
        <Lightformer
          intensity={isMobile ? 7 : 2}
          rotation-x={Math.PI / 2}
          position={[0, 5, -9]}
          scale={[10, 10, 1]}
        />
        <Lightformer
          intensity={isMobile ? 3 : 1}
          rotation-y={Math.PI / 2}
          position={[-5, 1, -1]}
          scale={[10, 2, 1]}
        />
        <Lightformer
          intensity={isMobile ? 3 : 1}
          rotation-y={Math.PI / 2}
          position={[-5, -1, -1]}
          scale={[10, 2, 1]}
        />
        <Lightformer
          intensity={isMobile ? 3 : 1}
          rotation-y={-Math.PI / 2}
          position={[10, 1, 0]}
          scale={[20, 2, 1]}
        />
        <Lightformer
          type='ring'
          intensity={isMobile ? 3 : 1}
          rotation-y={Math.PI / 2}
          position={[-0.1, -1, -5]}
          scale={10}
        />
        <Lightformer
          type='ring'
          intensity={isMobile ? 0.5 : 0.5}
          position={[0, 0, 2]}
          scale={10}
        />
      </group>
    </Environment>
  </>
)

export default Environments
