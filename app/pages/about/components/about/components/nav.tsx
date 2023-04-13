import { motion } from 'framer-motion'
import Arrow from './iconArrow'

const Nav = ({ Page, setPage, animConf }) => {
  const PageHandler = (method) => {
    if (Page < 3 && Page > 0) {
      if (method == 'increase') {
        setPage(Page + 1)
      } else if (method == 'decrease') {
        setPage(Page - 1)
      }
    } else if (Page === 3 && method == 'decrease') {
      setPage(Page - 1)
    } else if (Page === 0 && method == 'increase') {
      setPage(Page + 1)
    }
  }

  const { parent, children } = animConf.stagger_xRight
  const transitionL = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

  return (
    <motion.div
      variants={parent(0.3)}
      initial='hidden'
      animate='show'
      className='fixed bottom-16 flex w-screen flex-col justify-center md:bottom-0 md:left-4 md:h-screen md:w-auto xxl:left-8'
    >
      <div className='flex flex-row items-center justify-center md:flex-col'>
        <motion.div
          variants={children}
          onClick={() => PageHandler('decrease')}
          className='Anim AnimOpacity-40 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-white/20 backdrop-blur-md backdrop-filter md:h-12 md:w-12 xxl:h-16 xxl:w-16'
        >
          <Arrow left />
        </motion.div>
        <motion.div
          variants={children}
          onClick={() => PageHandler('increase')}
          className='Anim AnimOpacity-40 ml-6 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-white/20 backdrop-blur-md backdrop-filter md:ml-0 md:mt-3 md:h-12 md:w-12 xxl:h-16 xxl:w-16'
        >
          <Arrow />
        </motion.div>
      </div>
      <motion.div
        variants={children}
        transition={{ delay: 1 }}
        className='flex items-center justify-center pt-4 md:flex-col md:pt-0'
      >
        <div className='hidden h-16 bg-white md:relative md:mx-auto md:my-12 md:block md:rotate-0 xxl:my-16'>
          <motion.div
            initial={{ height: 16 }}
            exit={{ height: 16 }}
            animate={{ height: 16 * (Page + 1) }}
            transition={transitionL}
            className='absolute h-4 w-0.5 bg-white'
          ></motion.div>
          <div className='absolute h-16 w-0.5 bg-white/20'></div>
        </div>
        <p className='md:rotate-90 md:pr-4'>0{Page + 1}</p>
        <p className='opacity-40 md:rotate-90'>/ 04</p>
      </motion.div>
    </motion.div>
  )
}

export default Nav
