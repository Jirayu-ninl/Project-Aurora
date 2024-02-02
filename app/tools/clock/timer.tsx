'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Immersive } from './immersive'
import { TimerChar } from './timer.char'
import { getTime } from './utils'

const Timer = () => {
  const [date, setDateTo] = useState(new Date())
  const [glow, setGlow] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const update = new Date()

      if (update.getSeconds() !== date.getSeconds()) {
        setDateTo(update)
      }
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [date])

  const getChars = () => {
    return getTime(date)
      .split('')
      .map((char, index) => <TimerChar key={index} char={char} />)
  }

  return (
    <>
      <Immersive glow={glow} setGlow={setGlow} />
      <div className='relative scale-[0.2] rounded-lg bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500 sm:scale-[0.3] md:scale-[0.4] lg:scale-[0.6] xl:scale-[0.7] xxl:scale-[1]'>
        <div className='relative z-10 m-px flex items-center overflow-hidden rounded-lg bg-black px-6'>
          {getChars()}
        </div>
        {/* {glow && (
          <div className='absolute top-0 h-full w-full scale-x-110 scale-y-[1.2] bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500 opacity-50 blur-[45px]' />
        )} */}
        <div className='absolute top-0 h-full w-full scale-x-110 scale-y-[1.2] opacity-50 blur-[45px]'>
          <motion.div
            animate={{
              opacity: [1, 0.7, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'linear',
            }}
            className='h-full w-full bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500'
          />
        </div>
      </div>
    </>
  )
}

export { Timer }
