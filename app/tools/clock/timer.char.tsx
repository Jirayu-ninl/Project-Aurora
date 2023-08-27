import { useRef } from 'react'
import { motion } from 'framer-motion'

const TimerChar = (p: { char: string }) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const colon = p.char === ':'

  if (colon) {
    return (
      <h1 className='relative h-[270px] w-[80px] text-center text-10xl'>:</h1>
    )
  }

  const number: number = parseInt(p.char)

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

export { TimerChar }
