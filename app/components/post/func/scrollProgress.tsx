import { motion } from 'framer-motion'
import { tCallbackReturnValue } from '@aurora/libs/hooks/animations/index'

const ScrollProgress = ({ motionValue }: tCallbackReturnValue) => {
  return (
    <div className='fixed bottom-0 left-0 z-10 flex'>
      <motion.div
        style={{ x: motionValue }}
        className='h-0.5 w-screen bg-quaternary-2 dark:bg-primary-0'
      ></motion.div>
    </div>
  )
}

export { ScrollProgress }
