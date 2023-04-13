import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

const TimerChar = (props) => {
  const ref = useRef(null)

  const colon = props.char === ':'

  if (colon) {
    return (
      <h1 className='relative h-[270px] w-[80px] text-center text-10xl'>:</h1>
    )
  }

  const number: number = parseInt(props.char)

  const getCharSlider = () => {
    const options = []

    for (let i = 0; i <= 9; i++) {
      options.push(
        <motion.span
          initial={{ opacity: 0, transform: 'scale(0)' }}
          animate={
            number === i
              ? { opacity: 1, transform: 'scale(1)' }
              : { opacity: 0, transform: 'scale(0)' }
          }
          transition={{ duration: 0.15 }}
          key={i}
          className='h-[160px] w-[180px] text-10xl leading-[150px]'
          style={{ fontFamily: 'Orbitron' }}
        >
          {i}
        </motion.span>,
      )
    }

    const height = ref.current ? ref.current.offsetHeight : 0

    return (
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: number * height * -1 }}
        exit={{ y: 500 }}
        className='l-0 t-0 absolute flex w-20 flex-col'
      >
        {options}
      </motion.div>
    )
  }

  return (
    <div ref={ref} className='relative h-[160px] w-48 text-center'>
      {getCharSlider()}
    </div>
  )
}

const Timer: React.FC = () => {
  const [date, setDateTo] = useState(new Date())

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

  const formatSegment = (segment) => {
    return segment < 10 ? `0${segment}` : segment
  }

  const getHours = (hours) => {
    return hours % 12 === 0 ? 12 : hours % 12
  }

  const getTime = () => {
    const hours = getHours(date.getHours()),
      minutes = date.getMinutes(),
      seconds = date.getSeconds()

    return `${formatSegment(hours)}:${formatSegment(minutes)}:${formatSegment(
      seconds,
    )}`
  }

  const getChars = () => {
    return getTime()
      .split('')
      .map((char, index) => <TimerChar key={index} char={char} />)
  }

  return (
    <div className='relative scale-[0.2] rounded-lg bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500 sm:scale-[0.3] md:scale-[0.4] lg:scale-[0.6] xl:scale-[0.7] xxl:scale-[1]'>
      <div className='relative z-10 m-px flex items-center overflow-hidden rounded-lg bg-black px-6'>
        {getChars()}
      </div>
      {/* <div className='absolute top-0 h-full w-full scale-y-[1.2] scale-x-110 bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500 opacity-50 blur-[45px]' /> */}
      <div className='absolute top-0 h-full w-full scale-y-[1.2] scale-x-110 opacity-50 blur-[45px]'>
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
  )
}

const App = () => {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Orbitron:300,400,500,700&display=swap'
        />
      </Head>
      <div className='flex h-screen w-screen items-center justify-center overflow-hidden bg-black'>
        <Timer />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      title: 'Productivity | Clock',
      description: 'a simple clock, nothing else',
      coverImg: '/page/productivity/clock.png',
    },
  }
}

App.disableNav = true
App.disableFooter = true

export default App
