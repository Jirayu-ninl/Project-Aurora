import * as THREE from 'three'
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  GodRays,
} from '@react-three/postprocessing'
import { KernelSize } from 'postprocessing'

const PostProcessing = ({
  Sun,
}: {
  Sun: THREE.Mesh<
    THREE.SphereGeometry,
    THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
  >[]
}) => (
  <EffectComposer>
    <DepthOfField
      focusDistance={0.002}
      focalLength={0.02}
      bokehScale={1}
      height={800}
    />
    <Bloom
      intensity={5}
      luminanceThreshold={0.5}
      luminanceSmoothing={0.3}
      opacity={0.02}
      kernelSize={KernelSize.SMALL}
    />
    <Bloom
      intensity={20}
      luminanceThreshold={0.3}
      luminanceSmoothing={0.2}
      opacity={0.0002}
      height={50}
      kernelSize={KernelSize.LARGE}
    />
    <Bloom
      intensity={10}
      luminanceThreshold={0}
      luminanceSmoothing={0.1}
      height={300}
      opacity={0.02}
      kernelSize={KernelSize.LARGE}
    />
    <GodRays
      sun={Sun[0]}
      height={480}
      density={2}
      decay={0.9}
      weight={0.6}
      exposure={1}
      samples={60}
      clampMax={1}
    />
    <GodRays
      sun={Sun[1]}
      height={480}
      density={1}
      decay={0.9}
      weight={0.6}
      exposure={1}
      samples={60}
      clampMax={1}
    />
    <Noise opacity={0.025} />
  </EffectComposer>
)

export default PostProcessing
