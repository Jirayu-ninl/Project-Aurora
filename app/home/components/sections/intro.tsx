import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'

function IntroSection() {
  const rTextTitle = useRef<any>(null)
  const scroll = useScroll()

  useFrame(() => {
    // console.log(scroll.offset)
    // console.log(scroll.delta)
    // console.log(scroll.damping)
    // console.log(scroll.range(2 / scroll.pages, 3 / scroll.pages))
    // console.log(delta)

    rTextTitle.current &&
      (rTextTitle.current.style.transform = `translate3d(${
        10 - (1 - scroll.range(0.03185, 0.10179)) * 100
      }px,0, 0)`)
  })

  return (
    <>
      <div className='absolute top-[140vh] left-[40vw]'>
        <h1 className=' text-6xl font-bold mb-8 uppercase' ref={rTextTitle}>
          <span className='text-8xl text-primary-0'>H</span>I, I AM
        </h1>
        <p className='text-3xl font-light opacity-90 leading-relaxed'>
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
      </div>
    </>
  )
}

export default IntroSection
