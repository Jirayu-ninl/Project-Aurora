import { useRef } from 'react'
import { MathUtils } from 'three'
import { useFrame } from '@react-three/fiber'
import { Html, useScroll } from '@react-three/drei'
import { css } from '@emotion/css'

export const Overlay = ({ _dark }: { _dark: boolean }) => {
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
      <Html position={[0, -1.1, 0]} ref={ref}>
        <div className='w-64 flex justify-center items-center -translate-x-1/2 space-x-2'>
          <p>Scroll down</p>
          <div className='px-2 pt-2 pb-4 border-2 dark:border-white border-black rounded-full opacity-70'>
            <div className={mAnimatedCSS}></div>
          </div>
        </div>
      </Html>
    </>
  )
}
