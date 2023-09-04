import { useRef } from 'react'
import { MathUtils } from 'three'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { css } from '@emotion/css'

import Background from './background'
import HeroText from './heroText'
import Fade from './fade'

const R3F = ({ _dark, isMobile }: { _dark: boolean; isMobile: boolean }) => {
  return (
    <>
      <HeroText _dark={_dark} isMobile={isMobile} />
      <Background _dark={_dark} />
      <Fade _dark={_dark} />
    </>
  )
}

const HTML = ({ _dark, isMobile }: { _dark: boolean; isMobile: boolean }) => {
  const ref = useRef<any>(null)
  const Scroll = useScroll()
  useFrame(() => {
    if (ref.current) {
      ref.current.style.opacity =
        Scroll.offset === 0
          ? MathUtils.lerp(ref.current.style.opacity, 1, 0.8)
          : MathUtils.lerp(ref.current.style.opacity, 0, 0.2)
    }
  })

  const mAnimatedCSS = css`
    width: ${isMobile ? 2 : 3}px;
    height: ${isMobile ? 2 : 6}px;
    border-radius: 25%;
    background-color: ${_dark ? '#fff' : '#000'};
    animation-name: scroll;
    animation-duration: 2.2s;
    animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
    animation-iteration-count: infinite;
    @keyframes scroll {
      0% {
        opacity: 0;
      }
      10% {
        transform: translateY(0);
        opacity: 1;
      }
      100% {
        transform: translateY(${isMobile ? 4 : 12}px);
        opacity: 0;
      }
    }
  `

  return (
    <>
      <div className='absolute left-[50vw] top-[85vh] flex -translate-x-1/2 items-center justify-center space-x-2'>
        <p>Scroll down</p>
        <div className='rounded-full border border-black px-2 pb-4 pt-2 opacity-70 dark:border-white md:border-2'>
          <div className={mAnimatedCSS}></div>
        </div>
      </div>
    </>
  )
}

const Hero = { R3F, HTML }
export default Hero
