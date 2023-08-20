import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, useScroll } from '@react-three/drei'
import { getInviewAnimationValue } from '@aurora/views/animations'
import { PassionData } from '@contents/pages/home'

const HTML = () => {
  return (
    <>
      <div className='absolute top-[310dvh] flex h-[70vh] w-screen flex-col items-center justify-between md:top-[350vh]'>
        {PassionData.map((row, index) => (
          <div
            className='flex w-full flex-col justify-between px-6 lg:w-2/3 xl:w-[960px] xl:flex-row xl:px-0 el:w-[1440px]'
            key={index}
          >
            {row.map((item, index2) => (
              <div
                className='Anim relative mb-6 w-full cursor-pointer overflow-hidden rounded-lg border border-black/20 bg-white/10 p-4 pb-6 backdrop-blur-lg hover:bg-primary-0 dark:border-white/40 dark:hover:bg-tertiary-2 md:p-10 md:pb-12 xl:m-8 xl:mb-0 xl:w-1/2 el:m-0 el:w-1/3'
                key={index2}
              >
                <h2 className='mb-6 text-xl font-bold md:text-4xl'>
                  {item.title[0]} <br /> {item.title[1]}
                </h2>
                <h6 className='absolute -right-4 -top-8 text-8xl font-black'>
                  0{item.index}
                </h6>
                <p className='text-sm'>{item.content}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

const R3F = ({ _dark, isMobile }: { _dark: boolean; isMobile: boolean }) => {
  const rTextPassionateMat = useRef<any>(null)
  const scroll = useScroll()
  useFrame(() => {
    rTextPassionateMat.current &&
      !isMobile &&
      (rTextPassionateMat.current.opacity = getInviewAnimationValue(
        [
          2.7 / scroll.pages,
          3.4 / scroll.pages,
          3.9 / scroll.pages,
          4.3 / scroll.pages,
        ],
        scroll.offset,
      ))
  })

  return (
    <>
      <Text
        position={isMobile ? [0, -7.1, -1] : [0, -9.4, -1]}
        font={'/three/fonts/Inter-SemiBold.woff'}
        scale={isMobile ? 0.2 : 1.2}
      >
        PASSIONATE
        <meshBasicMaterial
          color={_dark ? '#fff' : '#fafafa'}
          ref={rTextPassionateMat}
          transparent
          opacity={1}
        />
      </Text>
    </>
  )
}

const PassionSection = { HTML, R3F }
export default PassionSection
