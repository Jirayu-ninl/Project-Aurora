import {
  EffectComposer,
  Bloom,
  HueSaturation,
} from '@react-three/postprocessing'
import { KernelSize, BlendFunction } from 'postprocessing'
import { Effect } from '@aurora/libs/webGL/fx'

const PostProcessing = () => {
  return (
    <>
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
        <Effect.ConstantNoise.Component />
        <Effect.FlowMap.Component />
        <HueSaturation blendFunction={BlendFunction.NORMAL} hue={0.07} />
      </EffectComposer>
    </>
  )
}

export default PostProcessing
