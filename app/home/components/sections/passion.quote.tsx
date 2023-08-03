import { useRef, useMemo } from 'react'
import { Color, /*MeshBasicMaterial,*/ MeshStandardMaterial } from 'three'
import { useFrame } from '@react-three/fiber'
import { Text, useScroll } from '@react-three/drei'
import { getInviewAnimationValue } from '@aurora/views/animations'
import { theme } from '@global/config/defineConfig'
import { Color as ColorUtils } from '@aurora/libs/webGL/utils'

import CSM from 'three-custom-shader-material'
import vertShader from './shaders/passionQuote.v.glsl'
import fragShader from './shaders/passionQuote.f.glsl'

function PassionSectionQuote({
  _dark,
  isMobile,
}: {
  _dark: boolean
  isMobile: boolean
}) {
  const rTextPassionateMat = useRef<any>(null)
  const scroll = useScroll()
  useFrame(() => {
    if (scroll.offset <= 2.5 / scroll.pages) {
      shader.uniforms.u_location.value = getInviewAnimationValue(
        [1.5 / scroll.pages, 2.5 / scroll.pages],
        scroll.offset,
      )
    } else {
      shader.uniforms.u_location.value = 1
    }
  })

  const shader = useMemo(
    () => ({
      uniforms: {
        u_time: {
          value: 0.0,
        },
        u_location: {
          value: 0.1,
        },
        u_baseColor: {
          value: _dark ? new Color('#ffffff') : new Color('#1a1a1a'),
        },
        u_dark: {
          value: _dark,
        },
      },
      vertexShader: vertShader,
      fragmentShader: fragShader,
    }),
    [_dark],
  )

  return (
    <>
      <Text
        position={isMobile ? [-0.8, -5.6, -1] : [-3, -5.6, -1]}
        font={'/three/fonts/Inter-Black.woff'}
        scale={isMobile ? 0.4 : 0.7}
      >
        &#60;
        <meshBasicMaterial
          color={_dark ? '#7a7a7a' : '#fafafa'}
          ref={rTextPassionateMat}
          transparent
          opacity={1}
        />
      </Text>
      <Text
        position={[0, -5.8, -0.3]}
        font={'/three/fonts/Inter-Black.woff'}
        scale={isMobile ? 0.1 : 0.46}
      >
        BORN TO BE CODE
        <CSM
          baseMaterial={MeshStandardMaterial}
          uniforms={shader.uniforms}
          vertexShader={shader.vertexShader}
          fragmentShader={shader.fragmentShader}
          transparent
        />
      </Text>
      <Text
        position={isMobile ? [-0.3, -5.95, -0.5] : [-1.07, -6.2, -0.5]}
        font={'/three/fonts/Inter-SemiBold.woff'}
        scale={isMobile ? 0.1 : 0.37}
      >
        BORN TO BE
        <CSM
          baseMaterial={MeshStandardMaterial}
          uniforms={shader.uniforms}
          vertexShader={shader.vertexShader}
          fragmentShader={shader.fragmentShader}
          transparent
        />
      </Text>
      <Text
        position={isMobile ? [0.32, -5.95, -0.5] : [1.14, -6.2, -0.5]}
        font={'/three/fonts/Inter-Black.woff'}
        scale={isMobile ? 0.1 : 0.37}
      >
        EXPERTISE
        <meshBasicMaterial
          color={
            _dark
              ? ColorUtils.HEXtoThree('#ffa900', 3, Color)
              : theme.color.quaternary[2]
          }
          ref={rTextPassionateMat}
          transparent
          opacity={1}
        />
      </Text>
      <Text
        position={isMobile ? [0.8, -6.1, -1] : [3, -6.3, -1]}
        font={'/three/fonts/Inter-Black.woff'}
        scale={isMobile ? 0.4 : 0.7}
      >
        &#47;&#62;
        <meshBasicMaterial
          color={_dark ? '#7a7a7a' : '#fbfbfb'}
          ref={rTextPassionateMat}
          transparent
          opacity={1}
        />
      </Text>
    </>
  )
}

export default PassionSectionQuote
