import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing'
import { ConstantNoisePass } from './constantNoisePass'
import { FlowMapPass } from './flowMapPass'

const PostProcessing = () => (
  <EffectComposer>
    <Bloom luminanceThreshold={1} mipmapBlur />
    {/* <Noise opacity={0.25} /> */}
    <ConstantNoisePass />
    <FlowMapPass />
  </EffectComposer>
)

export default PostProcessing
