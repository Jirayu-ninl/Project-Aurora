import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'

import { BtnlineEdge } from '@resources/common/components/button'

function IntroSection({ _dark }: { _dark: boolean }) {
  const rTextTitle = useRef<any>(null)
  const scroll = useScroll()

  useFrame(() => {
    rTextTitle.current &&
      (rTextTitle.current.style.transform = `translate3d(${
        10 - (1 - scroll.range(0.03185, 0.10179)) * 100
      }px,0, 0)`)
  })

  return (
    <>
      <div className='absolute left-[40vw] top-[140vh] flex flex-col'>
        <h1 className=' mb-10 text-6xl font-bold uppercase' ref={rTextTitle}>
          <span className='text-8xl text-primary-0'>H</span>I, I AM
        </h1>
        <p className='text-3xl font-light leading-relaxed opacity-90'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A Creative Developer with a
          passion for pushing the boundaries
          <br />
          of web technology. My expertise lies in WebGL, GLSL, and 3D dev,
          <br />
          and I thrive on creating immersive and visually stunning experiences.
          <br />
          With a strong background in front-end development and NextJS,
          <br /> I excel at crafting engaging web animations that captivate
          users.
        </p>
        <BtnlineEdge
          href='/about'
          text='LEARN MORE'
          classParent='ml-auto mt-10'
          _dark={_dark}
        />
      </div>
    </>
  )
}

export default IntroSection
