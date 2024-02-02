import {
  EffectComposer,
  Bloom,
  HueSaturation,
} from '@react-three/postprocessing'
import { BlendFunction, KernelSize } from 'postprocessing'
import { Effect } from '@aurora/libs/webGL/fx'

const PostProcessing = () => (
  <EffectComposer>
    <Bloom luminanceThreshold={1} mipmapBlur />
    <Bloom
      luminanceThreshold={3}
      kernelSize={KernelSize.VERY_LARGE}
      mipmapBlur
      intensity={2}
      luminanceSmoothing={1}
      opacity={0.2}
    />
    <Effect.ConstantNoisePass />
    <Effect.FlowMapPass />
    <HueSaturation blendFunction={BlendFunction.NORMAL} hue={0.07} />
  </EffectComposer>
)

export default PostProcessing
