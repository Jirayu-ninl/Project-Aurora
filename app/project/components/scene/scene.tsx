import { ScrollControls, Scroll } from '@react-three/drei'
import { Environment, Lightformer } from '@react-three/drei'

function Scene({ _dark, projects }: { _dark: boolean; projects: any[] }) {
  return (
    <>
      <Environments />
      <ScrollControls damping={0.3} distance={1} pages={2}>
        <Scroll></Scroll>
      </ScrollControls>
    </>
  )
}

const Environments = () => (
  <>
    <Environment resolution={32}>
      <group rotation={[-Math.PI / 4, -0.3, 0]}>
        <Lightformer
          type='ring'
          intensity={0.5}
          position={[0, 0, 2]}
          scale={10}
        />
      </group>
    </Environment>
  </>
)

export { Scene }
