import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing'
import { ConstantNoisePass } from './constantNoisePass'
import { FlowMapPass } from './flowMapPass'

const PostProcessing = () => (
  <EffectComposer>
    <Bloom luminanceThreshold={1} mipmapBlur />
    {/* <Bloom luminanceThreshold={1} intensity={10} mipmapBlur /> */}
    {/* <Bloom luminanceThreshold={1.5} intensity={5} mipmapBlur /> */}
    {/* <Noise opacity={0.25} /> */}
    <ConstantNoisePass />
    <FlowMapPass />
  </EffectComposer>
)

export default PostProcessing
