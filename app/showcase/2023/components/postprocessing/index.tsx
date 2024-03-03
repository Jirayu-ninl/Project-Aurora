import {
  BloomEffect,
  HueSaturationEffect,
  KernelSize,
  BlendFunction,
} from 'postprocessing'
import { Effect } from '@aurora/libs/webGL/fx'

const PostProcessing = () => {
  const { flowMapPass } = Effect.FlowMap.Pass()
  const { constantNoisePass } = Effect.ConstantNoise.Pass()
  const Bloom_1 = new BloomEffect({
    intensity: 2,
    mipmapBlur: true,
  })
  const Bloom_2 = new BloomEffect({
    // luminanceThreshold: 1,
    luminanceSmoothing: 0.17,
    intensity: 0.2,
    levels: 0.5,
    kernelSize: KernelSize.VERY_LARGE,
  })
  const HueSaturation = new HueSaturationEffect({
    blendFunction: BlendFunction.NORMAL,
    hue: 0.07,
  })
  const { EffectComponent } = Effect.FxComposer(
    [flowMapPass, constantNoisePass],
    [Bloom_1, Bloom_2, HueSaturation],
  )

  return (
    <>
      <EffectComponent />
    </>
  )
}

export default PostProcessing
