import { useMemo, useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import {
  RenderPass,
  EffectComposer,
  ShaderPass,
  EffectPass,
  Effect,
} from 'postprocessing'

const FxComposer = (
  Pass: ShaderPass[] | undefined,
  Effect: Effect[] | undefined,
) => {
  const { gl, scene, camera, size } = useThree()
  const Composer = useMemo(() => {
    const Composer = new EffectComposer(gl)
    const renderScene = new RenderPass(scene, camera)
    Composer.addPass(renderScene)

    Effect &&
      Effect.map((E: Effect) => Composer.addPass(new EffectPass(camera, E)))

    Pass &&
      Pass.map((P: ShaderPass) => {
        Composer.addPass(P)
      })

    return Composer
  }, [camera, gl, scene, Pass, Effect])

  function EffectComponent() {
    useEffect(() => {
      Composer.setSize(size.width, size.height)
    }, [])

    useFrame(() => {
      Composer.render()
    }, 1)
    return null
  }

  return { EffectComponent }
}

export { FxComposer }
