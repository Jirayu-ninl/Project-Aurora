/* eslint-disable */
import { GetStaticProps } from 'next'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion, animate } from 'framer-motion'

import Color from 'views/theme/color'
import { UI } from '@store'

import TheIceJIlogo from 'views/assets/logo/IceJIlogo'

export default function Index() {
  const _setAudio = UI((state) => state.setAudio)
  const _setCursor = UI((state) => state.setCursor)

  const router = useRouter()
  useEffect(() => {
    router.prefetch('/home')
  }, [])

  const [Loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 3000)

  const [Push, setPush] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      style={{ backgroundColor: '#000' }}
    >
      <motion.div
        className='z-60 flex h-screen w-full flex-col items-center justify-center overflow-hidden text-center'
        animate={{ backgroundColor: Color.background[3] }}
        initial={{ backgroundColor: '#000' }}
        transition={{ delay: 3, duration: 1, ease: [0.33, 1, 0.68, 1] }}
      >
        {Loading ? (
          <LoadScreen Loading={Loading} />
        ) : (
          <Link href='/home' passHref>
            <h2
              className='cursor-pointer text-3xl'
              onMouseEnter={() => {
                !Push ? _setCursor('logo') : _setCursor(false)
              }}
              onMouseLeave={() => {
                _setCursor(false)
              }}
              onClick={() => {
                _setAudio(true)
                setPush(true)
                _setCursor(false)
              }}
            >
              Let's go
            </h2>
          </Link>
        )}
      </motion.div>
    </motion.div>
  )
}

function LoadScreen({ Loading }) {
  const Darkmode: boolean = true

  function Counter({ from, to }: { from: number; to: number }) {
    const CounterText: any = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
      const Elem = CounterText?.current

      const controls = animate(from, to, {
        duration: 3,
        ease: [0.33, 1, 0.68, 1],
        onUpdate(value) {
          Elem.textContent = value.toFixed(0)
        },
      })

      return () => controls.stop()
    }, [from, to])

    return <h2 ref={CounterText} />
  }

  const MotionTransition = (delay: number, duration: number) => ({
    delay: delay,
    duration: duration,
    ease: [0.33, 1, 0.68, 1],
  })

  return (
    <>
      <div className='relative w-[165px]'>
        <motion.div
          className='absolute'
          animate={{ strokeDasharray: 100 }}
          initial={{ strokeDasharray: 50 }}
          transition={MotionTransition(0, 3)}
        >
          <TheIceJIlogo Darkmode={true} style={{ gap: 20 }} />
        </motion.div>
        <motion.div
          animate={{ fill: 'rgba(255, 255, 255, 1)' }}
          initial={{ fill: 'rgba(255, 255, 255, 0)' }}
          transition={MotionTransition(0, 3)}
        >
          <TheIceJIlogo Darkmode={Darkmode} style={{ strokeOpacity: 0.5 }} />
        </motion.div>
      </div>
      <div className='flex justify-center text-4xl'>
        {Loading ? <Counter from={0} to={100} /> : <h2>100</h2>}
        <h2>%</h2>
      </div>
      <div
        className='mt-5 mb-3 h-[10px] w-[224px] rounded-md'
        style={{ border: Darkmode ? 'solid 1px #fff' : 'solid 1px #000' }}
      >
        <motion.div
          className='m-0.5 h-[4px] rounded-md bg-primary-0'
          animate={{ width: 218 }}
          initial={{ width: 0 }}
          transition={MotionTransition(0, 3)}
        ></motion.div>
      </div>
      <h1 className='text-xl font-light opacity-80'>
        {Loading ? 'TheIceJi Official' : "Let's go"}
      </h1>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'TheIceJI | Home',
    },
  }
}
Index.disableNav = true
Index.disableFooter = true
