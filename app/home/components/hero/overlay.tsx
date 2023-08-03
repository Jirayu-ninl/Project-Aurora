import { useRef } from 'react'
import { MathUtils } from 'three'
import { useFrame } from '@react-three/fiber'
import { Html, useScroll } from '@react-three/drei'
import { css } from '@emotion/css'

export const Overlay = ({
  _dark,
  isMobile,
}: {
  _dark: boolean
  isMobile: boolean
}) => {
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
    width: 3px;
    height: 6px;
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
        transform: translateY(12px);
        opacity: 0;
      }
    }
  `

  return (
    <>
      <Html position={isMobile ? [0, -0.5, 0] : [0, -1.1, 0]} ref={ref}>
        <div className='flex w-64 -translate-x-1/2 items-center justify-center space-x-2'>
          <p>Scroll down</p>
          <div className='rounded-full border-2 border-black px-2 pb-4 pt-2 opacity-70 dark:border-white'>
            <div className={mAnimatedCSS}></div>
          </div>
        </div>
      </Html>
    </>
  )
}
